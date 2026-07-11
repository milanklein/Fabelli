import { hasMarketingConsent } from "./consent";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

const WEBHOOK_URL = process.env.NEXT_PUBLIC_TRACKING_WEBHOOK_URL;

export function getCookie(name: string): string {
  const match = document.cookie.match(`(^|;)\\s*${name}\\s*=\\s*([^;]+)`);
  return match ? match.pop()! : "";
}

/** Kombinuje predvoľbu a telefónne číslo do jedného reťazca iba s číslicami. */
export function getCleanPhone(countryCode: string, phone: string): string {
  return `${countryCode}${phone}`.replace(/\D/g, "");
}

function sendTrackingWebhook(payload: Record<string, unknown>) {
  if (!WEBHOOK_URL) {
    console.warn(
      "NEXT_PUBLIC_TRACKING_WEBHOOK_URL nie je nastavená, tracking webhook sa neodoslal.",
      payload,
    );
    return;
  }
  fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch((err) => console.error("Tracking webhook zlyhal:", err));
}

/**
 * Odošle jednu udalosť do Meta Pixelu aj na tracking webhook súčasne, so
 * zdieľaným eventId (deduplikácia na strane Meta) a fbp/fbc z cookies.
 */
export function trackEvent(
  eventName: "ViewContent" | "Contact" | "Lead",
  pixelParams: Record<string, unknown>,
  webhookExtra: Record<string, unknown> = {},
) {
  if (!hasMarketingConsent()) return;

  const eventId = crypto.randomUUID();

  window.fbq?.("track", eventName, pixelParams, { eventID: eventId });

  sendTrackingWebhook({
    event_name: eventName,
    event_id: eventId,
    event_source_url: window.location.href,
    fbp: getCookie("_fbp"),
    fbc: getCookie("_fbc"),
    user_agent: navigator.userAgent,
    ...webhookExtra,
  });
}
