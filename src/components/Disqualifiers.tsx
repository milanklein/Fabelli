const reasons = [
  "vlastníte rýchloobrátkový e-shop s 1000 produktami",
  "len začínate a nemáte rozpočet na väčšiu kampaň",
  "ľuďom reálne nepomáhate a predávate klamstvá",
];

export default function Disqualifiers() {
  return (
    <section className="mt-[64px] w-full px-[24px] sm:mt-[100px] sm:px-[106px]">
      <div className="mx-auto flex w-full max-w-[814px] flex-col items-start gap-[24px] sm:gap-[32px]">
        <p className="font-sans text-[18px] font-semibold leading-[1.4] text-white sm:text-[22px]">
          Nepúšťam sa do spoluprác, ktoré nemajú zmysel. Preto vám rovno
          ušetrím čas aj energiu, ak:
        </p>
        <ul className="flex flex-col gap-[12px]">
          {reasons.map((reason) => (
            <li
              key={reason}
              className="flex items-start gap-[12px] font-sans text-[16px] leading-[1.4] text-white/70 sm:text-[18px]"
            >
              <span className="mt-[9px] size-[6px] shrink-0 rounded-full bg-accent-blue" />
              {reason}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
