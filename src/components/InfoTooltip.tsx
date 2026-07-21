"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { InfoIcon } from "./icons";

const PANEL_WIDTH = 280;
const GAP = 10;
const EDGE_MARGIN = 12;

// Vysvetlivka k hodnote v tabuľke: na PC sa otvára hoverom, na mobile
// klikom/tapnutím na -i- ikonu; zatvára sa opustením kurzora, scrollom
// alebo kliknutím mimo. Panel je "fixed" a jeho pozícia sa dopočítava
// z rozmerov viewportu, aby nikdy nepretiekol mimo obrazovku (dôležité
// na mobile, kde je stĺpec s ikonou tesne pri ľavom okraji).
export default function InfoTooltip({
  text,
  placement = "right",
  className = "",
}: {
  text: string;
  placement?: "right" | "bottom";
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const show = () => {
    setReady(false);
    setOpen(true);
  };
  const hide = () => {
    setOpen(false);
    setReady(false);
  };

  useLayoutEffect(() => {
    if (!open) return;
    const button = buttonRef.current;
    const panel = panelRef.current;
    if (!button || !panel) return;

    const updatePosition = () => {
      const buttonRect = button.getBoundingClientRect();
      const panelRect = panel.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let left: number;
      let top: number;

      if (placement === "right") {
        left = buttonRect.right + GAP;
        top = buttonRect.top + buttonRect.height / 2 - panelRect.height / 2;
        if (left + panelRect.width + EDGE_MARGIN > viewportWidth) {
          left = buttonRect.left - panelRect.width - GAP;
        }
      } else {
        left = buttonRect.left + buttonRect.width / 2 - panelRect.width / 2;
        top = buttonRect.bottom + GAP;
        if (top + panelRect.height + EDGE_MARGIN > viewportHeight) {
          top = buttonRect.top - panelRect.height - GAP;
        }
      }

      left = Math.min(Math.max(left, EDGE_MARGIN), viewportWidth - panelRect.width - EDGE_MARGIN);
      top = Math.min(Math.max(top, EDGE_MARGIN), viewportHeight - panelRect.height - EDGE_MARGIN);

      setCoords({ top, left });
      setReady(true);
    };

    updatePosition();

    // Pinch-zoom on mobile fires scroll/resize repeatedly as the visual
    // viewport pans and settles. Closing the panel on those events (as we
    // used to) made it disappear/flicker right as the user zoomed in to read
    // it, so instead we just recompute its position — it keeps tracking the
    // -i- icon through the gesture and only closes on an actual outside tap.
    let frame: number | null = null;
    const scheduleUpdate = () => {
      if (frame !== null) return;
      frame = requestAnimationFrame(() => {
        frame = null;
        updatePosition();
      });
    };

    // "Click outside to close" uses the `click` event rather than
    // `pointerdown`. A pinch gesture puts a second finger down somewhere
    // outside the button/panel too, and since pointerdown fires per touch
    // contact, that second finger used to be read as an outside tap and
    // closed the panel the instant a zoom gesture started. Pinching (a drag,
    // not a tap) never synthesizes a `click`, so this only reacts to real
    // taps/clicks.
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;
      if (buttonRef.current?.contains(target) || panelRef.current?.contains(target)) return;
      hide();
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("scroll", scheduleUpdate, true);
    window.addEventListener("resize", scheduleUpdate);
    window.visualViewport?.addEventListener("resize", scheduleUpdate);
    window.visualViewport?.addEventListener("scroll", scheduleUpdate);
    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("scroll", scheduleUpdate, true);
      window.removeEventListener("resize", scheduleUpdate);
      window.visualViewport?.removeEventListener("resize", scheduleUpdate);
      window.visualViewport?.removeEventListener("scroll", scheduleUpdate);
    };
  }, [open, placement]);

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        onMouseEnter={show}
        onMouseLeave={hide}
        onClick={(event) => {
          event.stopPropagation();
          show();
        }}
        aria-label="Viac informácií"
        aria-expanded={open}
        className={`inline-flex size-[16px] shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:text-white ${className}`}
      >
        <InfoIcon className="size-[16px]" />
      </button>
      {open && (
        <div
          ref={panelRef}
          role="tooltip"
          style={{
            top: coords.top,
            left: coords.left,
            width: `min(${PANEL_WIDTH}px, calc(100vw - ${EDGE_MARGIN * 2}px))`,
          }}
          className={`fixed z-50 rounded-[12px] bg-white px-[18px] py-[14px] text-left font-sans text-[15px] font-normal normal-case leading-[1.5] text-[#26313d] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-opacity duration-150 ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          {text}
        </div>
      )}
    </>
  );
}
