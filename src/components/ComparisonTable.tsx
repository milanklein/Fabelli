import { Fragment } from "react";
import { BoxIcon, CallIcon, PeopleIcon, TaskIcon, WalletIcon } from "./icons";

const rows = [
  {
    icon: BoxIcon,
    label: "Model",
    agencies: "masové naberanie klientov",
    hybrid: "komplexné strategické partnerstvá",
    specialists: "špecializácia na úzky segment",
  },
  {
    icon: TaskIcon,
    label: "Rozsah služieb",
    agencies: "všetko čo zarába",
    hybrid: "služby slúžia stratégií",
    specialists: "1 špecializovaná služba",
  },
  {
    icon: CallIcon,
    label: "Komunikácia",
    agencies: "v pracovných hodinách",
    hybrid: "po 17:00 aj víkendy",
    specialists: "v pracovných hodinách",
  },
  {
    icon: PeopleIcon,
    label: "Počet klientov",
    agencies: "stovky",
    hybrid: "maximálne 5",
    specialists: "desiatky",
  },
  {
    icon: WalletIcon,
    label: "Cenová štruktúra",
    agencies: "všetko vopred",
    hybrid: "zahŕňa výkonnostnú zložku",
    specialists: "platíte za službu",
  },
];

export default function ComparisonTable() {
  return (
    <section className="mt-[80px] w-full px-[24px] sm:mt-[158px] sm:px-[106px]">
      <div className="mx-auto w-full max-w-[1006px] overflow-x-auto">
        <div className="grid min-w-[720px] grid-cols-[1.1fr_1fr_1.4fr_1fr] items-stretch gap-x-[8px]">
          <div />
          <div className="rounded-t-[16px] bg-navy-panel/30 px-[16px] py-[16px] text-center font-heading text-[18px] font-bold text-white">
            Agentúry
          </div>
          <div className="rounded-t-[16px] bg-gradient-to-r from-purple-from/30 to-purple-to/30 px-[16px] py-[16px] text-center font-heading text-[20px] font-bold text-white">
            Môj hybridný model
          </div>
          <div className="rounded-t-[16px] bg-navy-panel/30 px-[16px] py-[16px] text-center font-heading text-[18px] font-bold text-white">
            Špecialisti
          </div>

          {rows.map((row) => (
            <Fragment key={row.label}>
              <div className="flex items-center gap-[12px] border-t border-white/10 px-[8px] py-[20px]">
                <row.icon className="size-[24px] shrink-0 text-accent-blue" />
                <span className="font-sans text-[15px] font-semibold text-white">
                  {row.label}
                </span>
              </div>
              <div className="flex items-center justify-center border-t border-white/10 bg-navy-panel/15 px-[12px] py-[20px] text-center font-sans text-[14px] text-white/70">
                {row.agencies}
              </div>
              <div className="flex items-center justify-center border-t border-purple-from/20 bg-gradient-to-r from-purple-from/10 to-purple-to/10 px-[12px] py-[20px] text-center font-sans text-[15px] font-semibold text-white">
                {row.hybrid}
              </div>
              <div className="flex items-center justify-center border-t border-white/10 bg-navy-panel/15 px-[12px] py-[20px] text-center font-sans text-[14px] text-white/70">
                {row.specialists}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
