"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "./Button";

type FormData = {
  name: string;
  countryCode: string;
  phone: string;
  email: string;
  marketing: string;
  website: string;
  responsible: string;
  turnover: number;
  goal: string;
  contactAnytime: string;
};

const TOTAL_STEPS = 8;

const marketingOptions = [
  "mám agentúru",
  "mám tím špecialistov (manažér sociálnych sietí, SEO špecialista, developer)",
  "spravujeme si ho sami",
];

const responsibleOptions = [
  "Áno",
  "Je nás viac, ktorí zodpovedáme za chod firmy",
  "Nie",
];

const yesNoOptions = ["Áno", "Nie"];

const euCountries = [
  { code: "+421", country: "SK", flag: "🇸🇰", name: "Slovensko" },
  { code: "+420", country: "CZ", flag: "🇨🇿", name: "Česko" },
  { code: "+43", country: "AT", flag: "🇦🇹", name: "Rakúsko" },
  { code: "+32", country: "BE", flag: "🇧🇪", name: "Belgicko" },
  { code: "+359", country: "BG", flag: "🇧🇬", name: "Bulharsko" },
  { code: "+385", country: "HR", flag: "🇭🇷", name: "Chorvátsko" },
  { code: "+357", country: "CY", flag: "🇨🇾", name: "Cyprus" },
  { code: "+45", country: "DK", flag: "🇩🇰", name: "Dánsko" },
  { code: "+372", country: "EE", flag: "🇪🇪", name: "Estónsko" },
  { code: "+358", country: "FI", flag: "🇫🇮", name: "Fínsko" },
  { code: "+33", country: "FR", flag: "🇫🇷", name: "Francúzsko" },
  { code: "+49", country: "DE", flag: "🇩🇪", name: "Nemecko" },
  { code: "+30", country: "GR", flag: "🇬🇷", name: "Grécko" },
  { code: "+36", country: "HU", flag: "🇭🇺", name: "Maďarsko" },
  { code: "+353", country: "IE", flag: "🇮🇪", name: "Írsko" },
  { code: "+39", country: "IT", flag: "🇮🇹", name: "Taliansko" },
  { code: "+371", country: "LV", flag: "🇱🇻", name: "Lotyšsko" },
  { code: "+370", country: "LT", flag: "🇱🇹", name: "Litva" },
  { code: "+352", country: "LU", flag: "🇱🇺", name: "Luxembursko" },
  { code: "+356", country: "MT", flag: "🇲🇹", name: "Malta" },
  { code: "+31", country: "NL", flag: "🇳🇱", name: "Holandsko" },
  { code: "+48", country: "PL", flag: "🇵🇱", name: "Poľsko" },
  { code: "+351", country: "PT", flag: "🇵🇹", name: "Portugalsko" },
  { code: "+40", country: "RO", flag: "🇷🇴", name: "Rumunsko" },
  { code: "+386", country: "SI", flag: "🇸🇮", name: "Slovinsko" },
  { code: "+34", country: "ES", flag: "🇪🇸", name: "Španielsko" },
  { code: "+46", country: "SE", flag: "🇸🇪", name: "Švédsko" },
];

const initialData: FormData = {
  name: "",
  countryCode: "+421",
  phone: "",
  email: "",
  marketing: "",
  website: "",
  responsible: "",
  turnover: 25000,
  goal: "",
  contactAnytime: "",
};

const inputClassName =
  "h-[45px] w-full rounded-[20px] bg-white px-[20px] font-sans text-[15px] text-[#0c1728] placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-purple-from";

export default function QualificationForm() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [data, setData] = useState<FormData>(initialData);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const update = (patch: Partial<FormData>) =>
    setData((prev) => ({ ...prev, ...patch }));

  const validateStep = () => {
    if (step === 1) return data.name.trim().length > 0;
    if (step === 2)
      return data.phone.trim().length > 0 && /\S+@\S+\.\S+/.test(data.email);
    if (step === 3) return data.marketing !== "";
    if (step === 4) return data.website.trim().length > 0;
    if (step === 5) return data.responsible !== "";
    if (step === 7) return data.goal.trim().length > 0;
    if (step === 8) return data.contactAnytime !== "";
    return true;
  };

  const handleNext = async () => {
    if (!validateStep()) {
      setError("Toto pole je povinné.");
      return;
    }
    setError("");
    if (step === TOTAL_STEPS) {
      setIsSubmitting(true);
      try {
        const res = await fetch("/api/submit-formular", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) {
          console.error("Nepodarilo sa odoslať formulár do Google Sheets");
        }
      } catch (err) {
        console.error("Nepodarilo sa odoslať formulár:", err);
      }
      router.push("/kvalifikacny-formular/dakujeme");
      return;
    }
    setStep((s) => s + 1);
  };

  const handleBack = () => {
    setError("");
    setStep((s) => Math.max(1, s - 1));
  };

  const isFormStep = step >= 1 && step <= TOTAL_STEPS;

  return (
    <div className="relative mx-auto w-full max-w-[1105px] overflow-hidden rounded-[30px] bg-gradient-to-br from-navy-panel/40 to-navy-panel/10 px-[24px] py-[48px] sm:rounded-[51px] sm:px-[80px] sm:py-[64px]">
    <Image
                        src="/images/logo-black-icon.svg"
                        alt=""
                        width={248}
                        height={163}
                        aria-hidden
                        className="pointer-events-none absolute -left-4 -top-4  h-auto w-[380px] max-w-none sm:block"
                      />

      <div
        key={step}
        className="animate-step-fade relative flex flex-col items-center gap-[32px]"
      >
        {isFormStep && <StepIndicator current={step} total={TOTAL_STEPS} />}

        {step === 0 && <IntroStep onStart={() => setStep(1)} />}
        {step === 1 && (
          <TextStep
            label="Aké je vaše meno?"
            value={data.name}
            placeholder="*meno a priezvisko"
            onChange={(v) => update({ name: v })}
          />
        )}
        {step === 2 && <ContactStep data={data} onChange={update} />}
        {step === 3 && (
          <RadioStep
            label="Ako si momentálne spravujete marketing?"
            options={marketingOptions}
            value={data.marketing}
            onChange={(v) => update({ marketing: v })}
          />
        )}
        {step === 4 && (
          <TextStep
            label="Odkaz na vašu webstránku alebo sociálne siete."
            hint="(Aby som mal kontext, o koho ide)"
            value={data.website}
            placeholder="www.example.sk"
            onChange={(v) => update({ website: v })}
          />
        )}
        {step === 5 && (
          <RadioStep
            label="Ste zodpovedný za chod firmy?"
            options={responsibleOptions}
            value={data.responsible}
            onChange={(v) => update({ responsible: v })}
          />
        )}
        {step === 6 && (
          <TurnoverStep
            value={data.turnover}
            onChange={(v) => update({ turnover: v })}
          />
        )}
        {step === 7 && (
          <TextAreaStep
            label="Popíšte váš cieľ na najbližších 9 mesiacov. Prečo si myslíte, že ste ho doteraz nedosiahli?"
            value={data.goal}
            placeholder="*vaša správa"
            onChange={(v) => update({ goal: v })}
          />
        )}
        {step === 8 && (
          <RadioStep
            label="Môžem vás kontaktovať aj mimo bežnej pracovnej doby a počas víkendov?"
            options={yesNoOptions}
            value={data.contactAnytime}
            onChange={(v) => update({ contactAnytime: v })}
          />
        )}

        {error && isFormStep && (
          <p className="font-sans text-[14px] text-red-300">{error}</p>
        )}

        {isFormStep && (
          <div className="flex items-center gap-[18px]">
            {step > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="flex h-[50px] w-[119px] shrink-0 items-center justify-center rounded-[66px] border border-white/38 font-heading text-[15px] font-bold uppercase text-white/60 transition-colors hover:border-white/60 hover:text-white"
              >
                Späť
              </button>
            )}
            <Button onClick={handleNext} size="lg" disabled={isSubmitting}>
              {step === TOTAL_STEPS
                ? isSubmitting
                  ? "Odosielam..."
                  : "Odoslať"
                : "Ďalej"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

function StepIndicator({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  return (
    <div className="flex flex-wrap items-center justify-center">
      {Array.from({ length: total }, (_, i) => i + 1).map((n, i) => (
        <div key={n} className="flex items-center">
          <div
            className={`flex size-[28px] shrink-0 items-center justify-center rounded-full font-heading text-[14px] font-black sm:size-[31px] sm:text-[16px] ${
              n === current
                ? "bg-[#ecf5fb] text-[#1b2b3d]"
                : n < current
                  ? "border border-white/60 bg-white/10 text-white"
                  : "border border-white/20 text-white/40"
            }`}
          >
            {n}
          </div>
          {i < total - 1 && <div className="h-px w-[10px] bg-white/20" />}
        </div>
      ))}
    </div>
  );
}

function IntroStep({ onStart }: { onStart: () => void }) {
  return (
    <div className="flex w-full max-w-[663px] flex-col items-start gap-[20px]">
      <h1 className="w-full bg-gradient-to-r from-heading-from to-heading-to bg-clip-text font-heading text-[26px] font-black uppercase leading-normal text-transparent sm:text-[38px]">
        Klientov na spolupráce
        <br />
        si vyberám dôkladne.
      </h1>
      <p className="w-full font-sans text-[16px] text-white sm:text-[20px]">
        Vyplňte kvalifikačný formulár na strategickú konzultáciu. Šetrí to
        váš aj môj čas. Filtrujem tým spolupráce, ktoré by nemali zmysel.
      </p>
      <Button onClick={onStart} size="lg">
        Vyplniť kvalifikačný formulár
      </Button>
    </div>
  );
}

function TextStep({
  label,
  hint,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  hint?: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full max-w-[500px] flex-col items-start gap-[10px]">
      <p className="w-full font-sans text-[16px] text-white sm:text-[17px]">
        {label}
        {hint && <span className="ml-[6px] text-white/30">{hint}</span>}
      </p>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={inputClassName}
      />
    </div>
  );
}

function TextAreaStep({
  label,
  value,
  placeholder,
  onChange,
}: {
  label: string;
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full max-w-[500px] flex-col items-start gap-[10px]">
      <p className="w-full text-center font-sans text-[16px] text-white sm:text-[17px]">
        {label}
      </p>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={5}
        className="w-full resize-none rounded-[20px] bg-white px-[20px] py-[10px] font-sans text-[15px] text-[#0c1728] placeholder:text-black/50 focus:outline-none focus:ring-2 focus:ring-purple-from"
      />
    </div>
  );
}

function ContactStep({
  data,
  onChange,
}: {
  data: FormData;
  onChange: (patch: Partial<FormData>) => void;
}) {
  return (
    <div className="flex w-full max-w-[500px] flex-col items-start gap-[10px]">
      <p className="w-full font-sans text-[16px] text-white sm:text-[17px]">
        Ako vás dokážem kontaktovať?
      </p>
      <div className="flex w-full gap-[10px]">
        <div className="relative h-[45px] w-[110px] shrink-0">
          <select
            value={data.countryCode}
            onChange={(e) => onChange({ countryCode: e.target.value })}
            aria-label="Predvoľba krajiny"
            className="h-full w-full appearance-none rounded-[20px] bg-white py-0 pl-[14px] pr-[26px] font-sans text-[15px] text-[#0c1728] focus:outline-none focus:ring-2 focus:ring-purple-from"
          >
            {euCountries.map((c) => (
              <option key={c.country} value={c.code}>
                {c.flag} {c.code}
              </option>
            ))}
          </select>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            fill="none"
            className="pointer-events-none absolute right-[10px] top-1/2 size-[14px] -translate-y-1/2 text-black/40"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => onChange({ phone: e.target.value })}
          placeholder="*123 456 7890"
          className={inputClassName}
        />
      </div>
      <input
        type="email"
        value={data.email}
        onChange={(e) => onChange({ email: e.target.value })}
        placeholder="*E-mail"
        className={inputClassName}
      />
    </div>
  );
}

function RadioStep({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div className="flex w-full max-w-[500px] flex-col items-start gap-[20px]">
      <p className="w-full border-b border-white/15 pb-[16px] font-sans text-[16px] text-white sm:text-[17px]">
        {label}
      </p>
      <div className="flex w-full flex-col gap-[16px]">
        {options.map((option) => (
          <label
            key={option}
            className="flex w-full cursor-pointer items-center gap-[10px]"
          >
            <input
              type="radio"
              name={label}
              value={option}
              checked={value === option}
              onChange={() => onChange(option)}
              className="sr-only"
            />
            <span
              className={`flex size-[24px] shrink-0 items-center justify-center rounded-full border transition-colors ${
                value === option
                  ? "border-transparent bg-gradient-to-r from-purple-from to-purple-to"
                  : "border-white/40"
              }`}
            >
              {value === option && (
                <svg viewBox="0 0 24 24" fill="none" className="size-[14px]">
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="white"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </span>
            <span className="font-sans text-[15px] text-white">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

const TURNOVER_MIN = 5000;
const TURNOVER_MAX = 50000;

function TurnoverStep({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div className="flex w-full max-w-[586px] flex-col items-center gap-[24px]">
      <p className="w-full text-center font-sans text-[16px] text-white sm:text-[17px]">
        Aký je váš priemerný mesačný obrat za posledných 12 mesiacov?
      </p>
      <div className="flex w-full flex-col items-center gap-[10px]">
        <input
          type="range"
          min={TURNOVER_MIN}
          max={TURNOVER_MAX}
          step={1000}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full accent-purple-to"
        />
        <div className="flex w-full justify-between font-sans text-[14px] font-bold text-white sm:text-[16px]">
          <span>5 000 €</span>
          <span>25 000 €</span>
          <span>50 000 €</span>
        </div>
      </div>
      <div className="flex items-center gap-[16px] rounded-[45px] bg-gradient-to-r from-heading-from to-heading-to px-[28px] py-[14px]">
        <span className="font-sans text-[18px] font-semibold text-[#1b2b3e]">
          {value.toLocaleString("sk-SK")}
        </span>
        <span className="font-sans text-[16px] font-bold text-[#1b2b3e]">
          € / mesiac
        </span>
      </div>
    </div>
  );
}
