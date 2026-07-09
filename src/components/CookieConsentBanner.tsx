"use client";

import { useEffect, useState } from "react";
import {
  getConsent,
  OPEN_SETTINGS_EVENT,
  saveConsent,
} from "@/lib/consent";
import Button from "./Button";

const PIXEL_ID = "2495619044288822";

function initPixelIfNeeded(marketing: boolean) {
  if (!marketing || typeof window.fbq !== "function") return;
  window.fbq("init", PIXEL_ID);
  window.fbq("track", "PageView");
}

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    // Consent lives in localStorage, unavailable during SSR — this initial
    // sync has to happen post-mount to avoid a hydration mismatch.
    const existing = getConsent();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (!existing) setVisible(true);
    setMarketing(existing?.marketing ?? false);

    const handleOpenSettings = () => {
      setMarketing(getConsent()?.marketing ?? false);
      setExpanded(true);
      setVisible(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
    return () =>
      window.removeEventListener(OPEN_SETTINGS_EVENT, handleOpenSettings);
  }, []);

  if (!visible) return null;

  const acceptAll = () => {
    saveConsent(true);
    initPixelIfNeeded(true);
    setVisible(false);
  };

  const rejectAll = () => {
    saveConsent(false);
    setVisible(false);
  };

  const saveCustom = () => {
    saveConsent(marketing);
    initPixelIfNeeded(marketing);
    setVisible(false);
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 px-[16px] pb-[16px] sm:px-[24px] sm:pb-[24px]">
      <div className="mx-auto w-full max-w-[720px] rounded-[24px] bg-gradient-to-b from-[#EBF3FA] to-[#F7FAFC] p-[24px] text-[#0A1128] shadow-[0px_8px_40px_0px_rgba(0,0,0,0.35)] sm:rounded-[32px] sm:p-[32px]">
        <h2 className="font-heading text-[16px] font-black uppercase text-[#0A1128] sm:text-[18px]">
          Používame cookies
        </h2>
        <p className="mt-[8px] font-sans text-[14px] leading-[1.5] text-[#2D3748]">
          Cookies používame na zabezpečenie fungovania webu a na
          vyhodnocovanie výkonnosti marketingových kampaní. Svoj výber môžete
          kedykoľvek zmeniť v pätičke stránky.
        </p>

        {expanded && (
          <div className="mt-[20px] flex flex-col gap-[14px] border-t border-[#0A1128]/10 pt-[20px]">
            <div className="flex items-center justify-between gap-[16px]">
              <div>
                <p className="font-sans text-[14px] font-bold text-[#0A1128]">
                  Nevyhnutné cookies
                </p>
                <p className="font-sans text-[13px] text-[#4A5568]">
                  Potrebné pre základné fungovanie webu, vždy zapnuté.
                </p>
              </div>
              <span
                aria-hidden
                className="relative h-[26px] w-[46px] shrink-0 rounded-full bg-[#0A1128]/30"
              >
                <span className="absolute right-[3px] top-1/2 size-[20px] -translate-y-1/2 rounded-full bg-white" />
              </span>
            </div>

            <div className="flex items-center justify-between gap-[16px]">
              <div>
                <p className="font-sans text-[14px] font-bold text-[#0A1128]">
                  Marketingové cookies
                </p>
                <p className="font-sans text-[13px] text-[#4A5568]">
                  Umožňujú merať výkonnosť reklám (Meta Pixel).
                </p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={marketing}
                aria-label="Marketingové cookies"
                onClick={() => setMarketing((v) => !v)}
                className={`relative h-[26px] w-[46px] shrink-0 cursor-pointer rounded-full transition-colors ${
                  marketing
                    ? "bg-gradient-to-r from-purple-from to-purple-to"
                    : "bg-[#0A1128]/20"
                }`}
              >
                <span
                  className={`absolute top-1/2 size-[20px] -translate-y-1/2 rounded-full bg-white transition-[left] ${
                    marketing ? "left-[23px]" : "left-[3px]"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        <div className="mt-[24px] flex flex-col gap-[12px] sm:flex-row sm:items-center sm:justify-end">
          {expanded ? (
            <Button onClick={saveCustom} size="sm" className="w-full sm:w-auto">
              Uložiť nastavenia
            </Button>
          ) : (
            <>
              <button
                type="button"
                onClick={rejectAll}
                className="flex h-[45px] w-full shrink-0 items-center justify-center rounded-[66px] border border-[#0A1128]/30 px-[24px] font-heading text-[14px] font-bold uppercase text-[#0A1128]/70 transition-colors hover:border-[#0A1128]/60 hover:text-[#0A1128] sm:w-auto"
              >
                Odmietnuť
              </button>
              <button
                type="button"
                onClick={() => setExpanded(true)}
                className="flex h-[45px] w-full shrink-0 items-center justify-center rounded-[66px] border border-[#0A1128]/30 px-[24px] font-heading text-[14px] font-bold uppercase text-[#0A1128]/70 transition-colors hover:border-[#0A1128]/60 hover:text-[#0A1128] sm:w-auto"
              >
                Nastaviť personalizované
              </button>
              <Button onClick={acceptAll} size="sm" className="w-full sm:w-auto">
                Prijať
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
