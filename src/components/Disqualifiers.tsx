import GlowCircle from "./GlowCircle";
import Reveal from "./Reveal";
const reasons = [
  "vlastníte rýchloobrátkový e-shop s 1000 produktami",
  "len začínate a nemáte rozpočet na väčšiu kampaň",
  "ľuďom reálne nepomáhate a predávate klamstvá",
];


export default function Disqualifiers() {
  return (
    <section className="overflow-hidden relative mt-[64px] w-full px-[24px] md:mt-[100px] md:px-[106px]">
     
      <div className="mx-auto flex w-full max-w-[814px] flex-col items-start gap-[24px] md:gap-[12px]">
        <Reveal delay={0} duration={500}>
          <p className="font-heading text-[18px] font-black uppercase leading-[1.4] text-white md:text-[22px]">
            Nepúšťam sa do spoluprác, ktoré nemajú zmysel.
            <br />
            Preto vám rovno ušetrím čas aj energiu, ak:
          </p>
        </Reveal>
        <ul className="flex flex-col ">
          {reasons.map((reason, i) => (
            <li key={reason}>
              <Reveal
                delay={150 + i * 90}
                duration={450}
                y={12}
                className="flex items-center gap-[10px] font-sans text-[16px] leading-[1.4] text-white/80 md:text-[20px]"
              >
                <span className="size-[5px] shrink-0 rounded-full bg-white/50" />
                {reason}
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
