"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { CloseIcon, ExpandIcon, InfoIcon } from "./icons";

const PANEL_WIDTH = 280;
const GAP = 10;
const EDGE_MARGIN = 12;

// Vysvetlivka k hodnote v tabuľke: na PC sa otvára hoverom, na mobile
// klikom/tapnutím na -i- ikonu; zatvára sa opustením kurzora, scrollom
// alebo kliknutím mimo. Panel je "fixed" a jeho pozícia sa dopočítava
// z rozmerov viewportu, aby nikdy nepretiekol mimo obrazovku (dôležité
// na mobile, kde je stĺpec s ikonou tesne pri ľavom okraji). Na čitanie
// pri väčšom priblížení slúži tlačidlo na roztiahnutie na celú obrazovku
// (namiesto spoliehania sa na natívny pinch-zoom, ktorý s "fixed" prvkami
// na mobile nespolupracuje spoľahlivo).
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
  const [expanded, setExpanded] = useState(false);
  const [ready, setReady] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const expandedPanelRef = useRef<HTMLDivElement>(null);

  const show = () => {
    setReady(false);
    setOpen(true);
  };
  const hide = () => {
    setOpen(false);
    setReady(false);
    setExpanded(false);
  };

  useLayoutEffect(() => {
    if (!open || expanded) return;
    const button = buttonRef.current;
    const panel = panelRef.current;
    if (!button || !panel) return;

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
  }, [open, expanded, placement]);

  useLayoutEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      const target = event.target as Node;
      if (
        buttonRef.current?.contains(target) ||
        panelRef.current?.contains(target) ||
        expandedPanelRef.current?.contains(target)
      )
        return;
      hide();
    };
    document.addEventListener("pointerdown", handlePointerDown);
    if (!expanded) {
      document.addEventListener("scroll", hide, true);
      window.addEventListener("resize", hide);
    }
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("scroll", hide, true);
      window.removeEventListener("resize", hide);
    };
  }, [open, expanded]);

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
      {open && expanded && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={hide}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 p-4"
        >
          <div
            ref={expandedPanelRef}
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-[560px] max-h-[80vh] overflow-y-auto rounded-[20px] bg-white px-[24px] py-[28px] text-left font-sans text-[20px] font-normal normal-case leading-[1.6] text-[#26313d] shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
          >
            <button
              type="button"
              onClick={hide}
              aria-label="Zavrieť"
              className="absolute right-[12px] top-[12px] inline-flex size-[36px] items-center justify-center rounded-full text-[#26313d]/60 transition-colors hover:bg-black/5 hover:text-[#26313d]"
            >
              <CloseIcon className="size-[22px]" />
            </button>
            <p className="pr-[36px]">{text}</p>
          </div>
        </div>
      )}
      {open && !expanded && (
        <div
          ref={panelRef}
          role="tooltip"
          style={{
            top: coords.top,
            left: coords.left,
            width: `min(${PANEL_WIDTH}px, calc(100vw - ${EDGE_MARGIN * 2}px))`,
          }}
          className={`fixed z-50 rounded-[12px] bg-white px-[18px] py-[14px] text-left font-sans text-[15px] font-normal normal-case leading-[1.5] text-[#26313d] shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-opacity duration-150 relative ${
            ready ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation();
              setExpanded(true);
            }}
            aria-label="Zväčšiť"
            className="absolute right-[8px] top-[8px] inline-flex size-[22px] items-center justify-center rounded-full text-[#26313d]/50 transition-colors hover:bg-black/5 hover:text-[#26313d]"
          >
            <ExpandIcon className="size-[14px]" />
          </button>
          <p className="pr-[24px]">{text}</p>
        </div>
      )}
    </>
  );
}
