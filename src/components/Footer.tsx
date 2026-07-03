import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Domov", href: "/" },
  { label: "O nás", href: "#o-nas" },
  { label: "Proces spolupráce", href: "#proces" },
  { label: "Výsledky klientov", href: "#vysledky" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "GDPR", href: "#gdpr" },
];

export default function Footer() {
  return (
    <footer className="mt-[80px] w-full bg-navy-panel/10 px-[24px] py-[48px] sm:mt-[100px] sm:px-[106px] sm:py-[64px]">
      <div className="mx-auto flex w-full max-w-[1234px] flex-col gap-[48px]">
        <div className="flex flex-col gap-[40px] sm:flex-row sm:justify-between">
          <div className="relative h-[48px] w-[160px] shrink-0">
            <Image
              src="/images/logo.gif"
              alt="Fabelli"
              fill
              unoptimized
              className="object-contain object-left"
            />
          </div>

          <div className="flex flex-col gap-[8px]">
            <h3 className="font-sans text-[15px] font-semibold text-white">
              Kontakt
            </h3>
            <p className="font-sans text-[14px] leading-[1.6] text-white/60">
              info@fabelli.sk
            </p>
          </div>

          <div className="flex flex-col gap-[8px]">
            <h3 className="font-sans text-[15px] font-semibold text-white">
              Dôležité odkazy
            </h3>
            <ul className="flex flex-col gap-[6px]">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-sans text-[14px] text-white/60 hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-[24px]">
          <p className="text-center font-sans text-[13px] text-white/40">
            © 2026 Fabelli. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
}
