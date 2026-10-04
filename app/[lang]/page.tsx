import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import bathroom from "@/images/bathroom.jpg";
import bedroom from "@/images/bedroom.jpg";
import dining from "@/images/dining.jpg";
import hero from "@/images/hero.jpg";
import living from "@/images/living.jpg";
import night from "@/images/night.jpg";
import pool from "@/images/pool.jpg";
import { dictionaries, hasLocale } from "./dictionaries";

// เว็บตัวอย่าง: ใส่ LINE ID / เบอร์จริงของลูกค้าตรงนี้
const LINE_ID = "@your-line-id";
const PHONE = "0X-XXXX-XXXX";

const sections = ["villa", "amenities", "rooms", "rates", "faq"] as const;

// Same order as the dictionary arrays
const prices = ["7,900", "9,900", "12,900"];
const shots = [
  { src: living, className: "col-span-2" },
  { src: dining, className: "row-span-2" },
  { src: bedroom, className: "" },
  { src: bathroom, className: "" },
];

const icons = {
  waves: (
    <path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2s2.5 2 5 2 2.5-2 5-2c1.3 0 1.9.5 2.5 1" />
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4" />
    </>
  ),
  flame: (
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.5-2-1-3-1.1-2.1-.2-4.1 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.2.4-2.3 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  ),
  utensils: <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3zm0 0v7" />,
  wifi: <path d="M12 20h.01M2 8.8a15 15 0 0 1 20 0M5 12.9a10 10 0 0 1 14 0M8.5 16.4a5 5 0 0 1 7 0" />,
  parking: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 17V7h4a3 3 0 0 1 0 6H9" />
    </>
  ),
  tv: (
    <>
      <rect x="2" y="7" width="20" height="15" rx="2" />
      <path d="m17 2-5 5-5-5" />
    </>
  ),
  washer: (
    <>
      <rect x="3" y="2" width="18" height="20" rx="2" />
      <circle cx="12" cy="13" r="5" />
      <path d="M7 6h.01M10 6h.01" />
    </>
  ),
};

const amenityIcons: (keyof typeof icons)[] = ["waves", "sun", "flame", "utensils", "wifi", "parking", "tv", "washer"];

function Icon({ name }: { name: keyof typeof icons }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

function Heading({ eyebrow, title, children }: { eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <div className="max-w-2xl">
      <p className="flex items-center gap-3 text-sm font-medium text-clay-700">
        <span className="h-px w-8 bg-clay-500" aria-hidden="true" />
        {eyebrow}
      </p>
      <h2 className="mt-3 font-serif text-3xl leading-snug text-balance sm:text-4xl">{title}</h2>
      {children && <p className="mt-4 leading-relaxed text-muted">{children}</p>}
    </div>
  );
}

function Shot({ src, alt, caption, className = "" }: { src: StaticImageData; alt: string; caption: string; className?: string }) {
  return (
    <figure className={`group relative overflow-hidden rounded-2xl bg-sand-200 ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        placeholder="blur"
        sizes="(min-width: 768px) 33vw, 50vw"
        className="object-cover transition duration-700 group-hover:scale-105 motion-reduce:transition-none"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/60 to-transparent p-4 pt-12 text-sm text-white">
        {caption}
      </figcaption>
    </figure>
  );
}

export default async function Home({ params }: PageProps<"/[lang]">) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const t = dictionaries[lang];
  const other = lang === "th" ? "en" : "th";

  return (
    <>
      <header className="relative isolate flex min-h-svh flex-col text-white">
        <Image
          src={hero}
          alt={t.hero.alt}
          fill
          placeholder="blur"
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-linear-to-b from-black/50 via-black/35 to-black/80" />
        <div className="absolute inset-0 -z-10 hidden bg-linear-to-r from-black/60 via-black/20 to-transparent md:block" />

        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5 sm:px-8">
          <a href="#" className="font-serif text-xl tracking-wide">
            Saeng Lay
          </a>
          <ul className="hidden gap-8 text-sm text-white/85 lg:flex">
            {sections.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-white">
                  {t.nav[id]}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Link
              href={`/${other}/`}
              hrefLang={other}
              lang={other}
              aria-label={t.switchTo.aria}
              className="rounded-full px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
            >
              {t.switchTo.label}
            </Link>
            <a
              href="#contact"
              className="rounded-full bg-white/15 px-4 py-2 text-sm ring-1 ring-white/40 backdrop-blur hover:bg-white/25"
            >
              {t.checkDates}
            </a>
          </div>
        </nav>

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pb-10 text-shadow-lg sm:px-8 sm:pb-16">
          <p className="text-sm tracking-[0.25em] text-white/90 uppercase">Private Pool Villa · Hua Hin</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl sm:leading-tight">
            {t.hero.title[0]}
            <br />
            {t.hero.title[1]}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{t.hero.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-sand-50 px-6 py-3 font-medium text-sea-900 text-shadow-none hover:bg-white">
              {t.hero.book}
            </a>
            <a href="#rates" className="rounded-full px-6 py-3 ring-1 ring-white/50 hover:bg-white/10">
              {t.hero.rates}
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/20 ring-1 ring-white/20 backdrop-blur-md sm:grid-cols-4">
            {t.facts.map(({ label, value }) => (
              <div key={label} className="bg-black/25 px-5 py-4">
                <dt className="text-xs text-white/75">{label}</dt>
                <dd className="mt-1 font-serif text-2xl">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <main>
        <section id="villa" className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 md:grid-cols-2 md:items-center md:py-28">
          <div>
            <Heading eyebrow={t.villa.eyebrow} title={t.villa.title}>
              {t.villa.body}
            </Heading>
            <dl className="mt-10 divide-y divide-sand-200 border-y border-sand-200">
              {t.villa.distances.map(({ place, time }) => (
                <div key={place} className="flex justify-between py-3">
                  <dt className="text-muted">{place}</dt>
                  <dd className="font-medium">{time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Image
            src={pool}
            alt={t.villa.poolAlt}
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-4/5 w-full rounded-3xl object-cover"
          />
        </section>

        <section id="amenities" className="bg-sand-100">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <Heading eyebrow={t.amenities.eyebrow} title={t.amenities.title} />
            <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {t.amenities.items.map(({ title, text }, i) => (
                <li key={title} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-sand-200 sm:p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-sea-800 text-sand-50">
                    <Icon name={amenityIcons[i]} />
                  </span>
                  <h3 className="mt-4 font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <Heading eyebrow={t.gallery.eyebrow} title={t.gallery.title} />
          <div className="mt-12 grid auto-rows-44 grid-cols-2 gap-3 sm:auto-rows-64 md:grid-cols-3 md:gap-4">
            {t.gallery.shots.map(({ caption, alt }, i) => (
              <Shot key={caption} src={shots[i].src} alt={alt} caption={caption} className={shots[i].className} />
            ))}
          </div>
        </section>

        <section id="rooms" className="bg-sea-900 text-sand-50">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <p className="flex items-center gap-3 text-sm font-medium text-clay-400">
              <span className="h-px w-8 bg-clay-400" aria-hidden="true" />
              {t.rooms.eyebrow}
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-snug text-balance sm:text-4xl">{t.rooms.title}</h2>
            <ol className="mt-12 grid gap-4 md:grid-cols-3">
              {t.rooms.items.map(({ name, bed, features }, i) => (
                <li key={name} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <span className="font-serif text-4xl text-clay-400">0{i + 1}</span>
                  <h3 className="mt-4 text-lg font-medium">{name}</h3>
                  <p className="text-sand-200">{bed}</p>
                  <ul className="mt-4 space-y-1 text-sm text-sand-200/80">
                    {features.map((f) => (
                      <li key={f}>· {f}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
            <p className="mt-6 text-sm text-sand-200/80">{t.rooms.note}</p>
          </div>
        </section>

        <section id="rates" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <Heading eyebrow={t.rates.eyebrow} title={t.rates.title}>
            {t.rates.body}
          </Heading>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {t.rates.items.map(({ name, days }, i) => (
              <li key={name} className="rounded-2xl p-6 ring-1 ring-sand-200">
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-muted">{days}</p>
                <p className="mt-6 font-serif text-4xl text-sea-800">
                  ฿{prices[i]}
                  <span className="ml-1 font-sans text-sm text-muted">{t.rates.perNight}</span>
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-6 rounded-2xl bg-sand-100 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <h3 className="font-medium">{t.rates.includedTitle}</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {t.rates.included.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sea-700" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium">{t.rates.depositTitle}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{t.rates.deposit}</p>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-sand-100">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr] md:py-28">
            <Heading eyebrow={t.faq.eyebrow} title={t.faq.title} />
            <div className="divide-y divide-sand-200 border-y border-sand-200">
              {t.faq.items.map(({ q, a }) => (
                <details key={q} className="group py-5">
                  <summary className="flex cursor-pointer items-center justify-between gap-4 font-medium">
                    {q}
                    <span className="text-xl text-clay-700 transition group-open:rotate-45" aria-hidden="true">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-muted">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative isolate overflow-hidden text-white">
          <Image src={night} alt="" fill placeholder="blur" sizes="100vw" className="-z-10 object-cover" />
          <div className="absolute inset-0 -z-10 bg-sea-900/70" />
          <div className="mx-auto max-w-6xl px-5 py-24 text-center sm:px-8 md:py-32">
            <h2 className="font-serif text-3xl text-balance sm:text-5xl">{t.contact.title}</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/85">{t.contact.body}</p>
            <dl className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 px-6 py-5 ring-1 ring-white/20 backdrop-blur">
                <dt className="text-sm text-white/75">LINE</dt>
                <dd className="mt-1 text-xl font-medium">{LINE_ID}</dd>
              </div>
              <div className="rounded-2xl bg-white/10 px-6 py-5 ring-1 ring-white/20 backdrop-blur">
                <dt className="text-sm text-white/75">{t.contact.phone}</dt>
                <dd className="mt-1 text-xl font-medium">{PHONE}</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-sea-900 text-sand-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:justify-between sm:px-8">
          <p className="font-serif text-base text-sand-50">Saeng Lay Pool Villa</p>
        </div>
      </footer>
    </>
  );
}
