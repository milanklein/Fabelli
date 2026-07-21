"use client";

import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { InfoIcon } from "./icons";

// Vysvetlivka k hodnote v tabuľke: klik na -i- ikonu otvorí shadcn/Base UI
// Dialog s celým textom — modálne okno je vždy vycentrované a má vlastnú
// (dobre otestovanú) logiku pre zatváranie, fokus a mobilné správanie, takže
// nie je potrebné ručne dopočítavať pozíciu ako pri predchádzajúcom "fixed"
// tooltipe.
export default function InfoTooltip({
  text,
  title,
  className = "",
}: {
  text: string;
  title: string;
  className?: string;
}) {
  return (
    <Dialog>
      <DialogTrigger
        aria-label="Viac informácií"
        className={`inline-flex size-[16px] shrink-0 items-center justify-center rounded-full text-white/50 transition-colors hover:text-white ${className}`}
      >
        <InfoIcon className="size-[16px]" />
      </DialogTrigger>
      <DialogContent className="max-w-[420px] gap-3 rounded-[20px] bg-white p-6 text-left shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-0">
        <DialogTitle className="font-heading text-[16px] font-bold normal-case text-[#26313d]">
          {title}
        </DialogTitle>
        <p className="pr-6 font-sans text-[16px] font-normal normal-case leading-[1.6] text-[#26313d]">
          {text}
        </p>
      </DialogContent>
    </Dialog>
  );
}
