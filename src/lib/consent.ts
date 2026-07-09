export interface ConsentState {
  necessary: true;
  marketing: boolean;
}

const STORAGE_KEY = "fabelli-cookie-consent";
export const OPEN_SETTINGS_EVENT = "fabelli:open-cookie-settings";
export const CONSENT_CHANGE_EVENT = "fabelli:cookie-consent-change";

export function getConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

export function saveConsent(marketing: boolean) {
  const state: ConsentState = { necessary: true, marketing };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: state }));
}

export function hasMarketingConsent(): boolean {
  return getConsent()?.marketing === true;
}

/** Otvorí (znova) cookie banner, napr. z tlačidla v pätičke. */
export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}
