"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { CONSENT_CHANGE_EVENT, hasMarketingConsent } from "@/lib/consent";

const CLARITY_PROJECT_ID = "xkraat9n5s";

let initialized = false;

function initClarityIfNeeded() {
  if (initialized || !hasMarketingConsent()) return;
  initialized = true;
  Clarity.init(CLARITY_PROJECT_ID);
  Clarity.consent(true);
}

export default function ClarityInit() {
  useEffect(() => {
    initClarityIfNeeded();
    window.addEventListener(CONSENT_CHANGE_EVENT, initClarityIfNeeded);
    return () =>
      window.removeEventListener(CONSENT_CHANGE_EVENT, initClarityIfNeeded);
  }, []);

  return null;
}
