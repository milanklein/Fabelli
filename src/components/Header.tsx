import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Header() {
  return (
    <header className="flex w-full items-center justify-between">
      <Link href="/" className="relative h-[48px] w-[213px] sm:h-[72.48px] sm:w-[320px]">
        <Image
          src="/images/logo.gif"
          alt="Fabelli"
          fill
          unoptimized
          className="object-contain object-left"
          priority
        />
      </Link>
      <div className="flex items-center gap-[30px]">
        <Link
          href="#vysledky"
          className="hidden whitespace-nowrap font-sans text-[20px] text-white sm:inline"
        >
          Výsledky klientov
        </Link>
        <Button href="#kontakt" size="sm">
          Chcem stratégiu
        </Button>
      </div>
    </header>
  );
}
