import Image, { type StaticImageData } from "next/image";
import type { ReactNode } from "react";
import bathroom from "@/images/bathroom.jpg";
import bedroom from "@/images/bedroom.jpg";
import dining from "@/images/dining.jpg";
import hero from "@/images/hero.jpg";
import living from "@/images/living.jpg";
import night from "@/images/night.jpg";
import pool from "@/images/pool.jpg";

// เว็บตัวอย่าง: ใส่ LINE ID / เบอร์จริงของลูกค้าตรงนี้
const LINE_ID = "@your-line-id";
const PHONE = "0X-XXXX-XXXX";

const nav = [
  ["#villa", "ที่พัก"],
  ["#amenities", "สิ่งอำนวยความสะดวก"],
  ["#rooms", "ห้องนอน"],
  ["#rates", "ราคา"],
  ["#faq", "คำถาม"],
];

const facts = [
  ["ห้องนอน", "3"],
  ["ห้องน้ำ", "3"],
  ["ผู้เข้าพัก", "8 ท่าน"],
  ["สระส่วนตัว", "10 ม."],
];

const distances = [
  ["ชายหาด", "เดิน 3 นาที"],
  ["ร้านสะดวกซื้อ", "500 เมตร"],
  ["ตลาดโต้รุ่ง", "ขับรถ 10 นาที"],
  ["กรุงเทพฯ", "ประมาณ 3 ชั่วโมง"],
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

const amenities: [keyof typeof icons, string, string][] = [
  ["waves", "สระว่ายน้ำส่วนตัว", "ยาว 10 เมตร ลึก 1.2 เมตร ระบบน้ำเกลือ"],
  ["sun", "ใกล้ชายหาด", "เดินถึงทะเลใน 3 นาที"],
  ["flame", "ลาน BBQ", "เตาถ่านพร้อมโต๊ะ 8 ที่นั่ง"],
  ["utensils", "ครัวพร้อมใช้", "เตา ไมโครเวฟ ตู้เย็นใหญ่ จานชามครบ"],
  ["wifi", "Wi-Fi 500 Mbps", "ใช้ได้ทั้งในบ้านและริมสระ"],
  ["parking", "ที่จอดรถ 3 คัน", "จอดในรั้วบ้าน"],
  ["tv", "Smart TV + Netflix", "ห้องนั่งเล่นและห้องนอนใหญ่"],
  ["washer", "เครื่องซักผ้า", "พร้อมราวตากผ้า"],
];

const rooms = [
  ["ห้องนอนใหญ่", "เตียง King 6 ฟุต", ["อ่างแช่ตัว", "เปิดออกสระได้", "Smart TV"]],
  ["ห้องนอนที่ 2", "เตียง Queen 5 ฟุต", ["ห้องน้ำในตัว", "ประตูออกสวน"]],
  ["ห้องนอนที่ 3", "เตียงเดี่ยว 2 เตียง", ["ห้องน้ำในตัว", "เหมาะกับเด็ก"]],
] as const;

const rates = [
  ["วันธรรมดา", "อาทิตย์–พฤหัสบดี", "7,900"],
  ["สุดสัปดาห์", "ศุกร์–เสาร์", "9,900"],
  ["วันหยุดยาว", "นักขัตฤกษ์ · ขั้นต่ำ 2 คืน", "12,900"],
];

const included = [
  "แม่บ้านทำความสะอาดก่อนเข้าพัก",
  "ผ้าเช็ดตัวและของใช้ในห้องน้ำ",
  "ถ่านและอุปกรณ์ BBQ",
  "น้ำดื่มวันละ 12 ขวด",
];

const faqs = [
  ["เช็คอินและเช็คเอาท์กี่โมง?", "เช็คอิน 14:00 น. และเช็คเอาท์ 12:00 น. ถ้าไม่มีผู้เข้าพักต่อ ขอเช็คเอาท์ถึง 14:00 น. ได้ฟรี"],
  ["ต้องมัดจำเท่าไหร่?", "มัดจำ 50% ภายใน 24 ชั่วโมงหลังยืนยันวัน แล้วจ่ายส่วนที่เหลือวันเช็คอิน"],
  ["ยกเลิกได้มั้ย?", "ยกเลิกก่อนเข้าพัก 14 วันขึ้นไป คืนมัดจำเต็มจำนวน ถ้าน้อยกว่านั้น เลื่อนวันได้ 1 ครั้ง"],
  ["พาสัตว์เลี้ยงมาได้มั้ย?", "ได้ ไม่เกิน 2 ตัว แต่ต้องแจ้งล่วงหน้าและไม่พาลงสระ"],
  ["เปิดเพลงได้ถึงกี่โมง?", "เปิดได้ถึง 22:00 น. เพื่อไม่รบกวนเพื่อนบ้าน"],
  ["มีอาหารเช้ามั้ย?", "ไม่มี แต่มีครัวพร้อมใช้ และมีร้านอาหารเช้าที่เดินไป 5 นาที"],
];

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

export default function Home() {
  return (
    <>
      <header className="relative isolate flex min-h-svh flex-col text-white">
        <Image
          src={hero}
          alt="Pool villa ชั้นเดียวกับสระว่ายน้ำส่วนตัว ยามแดดเย็น"
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
            {nav.map(([href, label]) => (
              <li key={href}>
                <a href={href} className="hover:text-white">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            className="rounded-full bg-white/15 px-4 py-2 text-sm ring-1 ring-white/40 backdrop-blur hover:bg-white/25"
          >
            เช็ควันว่าง
          </a>
        </nav>

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-5 pb-10 text-shadow-lg sm:px-8 sm:pb-16">
          <p className="text-sm tracking-[0.25em] text-white/90 uppercase">Private Pool Villa · Hua Hin</p>
          <h1 className="mt-4 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl sm:leading-tight">
            บ้านริมทะเล
            <br />
            ที่ทั้งหลังเป็นของคุณ
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">
            สระส่วนตัว ลาน BBQ และชายหาดที่เดินถึงในสามนาที สำหรับครอบครัวและเพื่อนสูงสุด 8 ท่าน
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="rounded-full bg-sand-50 px-6 py-3 font-medium text-sea-900 text-shadow-none hover:bg-white">
              จองผ่าน LINE
            </a>
            <a href="#rates" className="rounded-full px-6 py-3 ring-1 ring-white/50 hover:bg-white/10">
              ดูราคา
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/20 ring-1 ring-white/20 backdrop-blur-md sm:grid-cols-4">
            {facts.map(([label, value]) => (
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
            <Heading eyebrow="ที่พัก" title="ตื่นมาเจอสระ เดินไม่กี่ก้าวถึงทะเล">
              บ้านชั้นเดียวสไตล์ tropical modern ล้อมด้วยต้นมะพร้าวและลีลาวดี ห้องนั่งเล่นเปิดโล่งต่อกับสระ
              ทุกห้องนอนมีห้องน้ำในตัว พักกันทั้งครอบครัวได้โดยไม่ต้องใช้สระร่วมกับใคร
            </Heading>
            <dl className="mt-10 divide-y divide-sand-200 border-y border-sand-200">
              {distances.map(([place, time]) => (
                <div key={place} className="flex justify-between py-3">
                  <dt className="text-muted">{place}</dt>
                  <dd className="font-medium">{time}</dd>
                </div>
              ))}
            </dl>
          </div>
          <Image
            src={pool}
            alt="ริมสระมีเก้าอี้อาบแดดสองตัว ล้อมด้วยต้นไม้เขตร้อน"
            placeholder="blur"
            sizes="(min-width: 768px) 50vw, 100vw"
            className="aspect-4/5 w-full rounded-3xl object-cover"
          />
        </section>

        <section id="amenities" className="bg-sand-100">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <Heading eyebrow="สิ่งอำนวยความสะดวก" title="มีครบ แค่หิ้วกระเป๋ามา" />
            <ul className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
              {amenities.map(([icon, title, text]) => (
                <li key={title} className="rounded-2xl bg-sand-50 p-5 ring-1 ring-sand-200 sm:p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-full bg-sea-800 text-sand-50">
                    <Icon name={icon} />
                  </span>
                  <h3 className="mt-4 font-medium">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="gallery" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <Heading eyebrow="แกลเลอรี" title="มุมโปรดของแขกที่มาพัก" />
          <div className="mt-12 grid auto-rows-44 grid-cols-2 gap-3 sm:auto-rows-64 md:grid-cols-3 md:gap-4">
            <Shot src={living} alt="ห้องนั่งเล่นเปิดโล่ง ประตูกระจกบานใหญ่ต่อกับสระ" caption="ห้องนั่งเล่น" className="col-span-2" />
            <Shot src={dining} alt="ศาลากลางแจ้งมีโต๊ะไม้แปดที่นั่งและไฟประดับยามค่ำ" caption="ลาน BBQ ยามค่ำ" className="row-span-2" />
            <Shot src={bedroom} alt="ห้องนอนใหญ่ เตียงคิงไซซ์ผ้าปูสีขาว หัวเตียงไม้สัก" caption="ห้องนอนใหญ่" />
            <Shot src={bathroom} alt="ห้องน้ำกึ่งกลางแจ้งมีอ่างหินและต้นไม้" caption="ห้องน้ำกึ่ง outdoor" />
          </div>
        </section>

        <section id="rooms" className="bg-sea-900 text-sand-50">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
            <p className="flex items-center gap-3 text-sm font-medium text-clay-400">
              <span className="h-px w-8 bg-clay-400" aria-hidden="true" />
              ห้องนอน
            </p>
            <h2 className="mt-3 font-serif text-3xl leading-snug text-balance sm:text-4xl">3 ห้องนอน ห้องน้ำในตัวทุกห้อง</h2>
            <ol className="mt-12 grid gap-4 md:grid-cols-3">
              {rooms.map(([name, bed, features], i) => (
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
            <p className="mt-6 text-sm text-sand-200/80">เสริมที่นอนได้อีก 2 ชุด ไม่มีค่าใช้จ่าย</p>
          </div>
        </section>

        <section id="rates" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
          <Heading eyebrow="ราคา" title="ราคาต่อคืน ทั้งหลัง">
            ราคานี้สำหรับผู้เข้าพักไม่เกิน 8 ท่าน ท่านที่ 9–10 เพิ่มท่านละ 500 บาท
          </Heading>
          <ul className="mt-12 grid gap-4 md:grid-cols-3">
            {rates.map(([name, days, price]) => (
              <li key={name} className="rounded-2xl p-6 ring-1 ring-sand-200">
                <h3 className="font-medium">{name}</h3>
                <p className="text-sm text-muted">{days}</p>
                <p className="mt-6 font-serif text-4xl text-sea-800">
                  ฿{price}
                  <span className="ml-1 font-sans text-sm text-muted">/ คืน</span>
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-8 grid gap-6 rounded-2xl bg-sand-100 p-6 sm:grid-cols-2 sm:p-8">
            <div>
              <h3 className="font-medium">รวมในราคาแล้ว</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {included.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-sea-700" aria-hidden="true">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-medium">เงินประกัน</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                3,000 บาท จ่ายวันเช็คอิน และได้คืนเต็มจำนวนตอนเช็คเอาท์ ถ้าไม่มีความเสียหาย
              </p>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-sand-100">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1fr_2fr] md:py-28">
            <Heading eyebrow="คำถามที่พบบ่อย" title="ก่อนจอง" />
            <div className="divide-y divide-sand-200 border-y border-sand-200">
              {faqs.map(([q, a]) => (
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
            <h2 className="font-serif text-3xl sm:text-5xl">ว่างวันไหน ทักมาถามได้เลย</h2>
            <p className="mx-auto mt-4 max-w-lg text-white/85">
              ส่งวันที่และจำนวนผู้เข้าพักมาทาง LINE ตอบภายใน 15 นาที (08:00–22:00 น.)
            </p>
            <dl className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-2">
              <div className="rounded-2xl bg-white/10 px-6 py-5 ring-1 ring-white/20 backdrop-blur">
                <dt className="text-sm text-white/75">LINE</dt>
                <dd className="mt-1 text-xl font-medium">{LINE_ID}</dd>
              </div>
              <div className="rounded-2xl bg-white/10 px-6 py-5 ring-1 ring-white/20 backdrop-blur">
                <dt className="text-sm text-white/75">โทร</dt>
                <dd className="mt-1 text-xl font-medium">{PHONE}</dd>
              </div>
            </dl>
          </div>
        </section>
      </main>

      <footer className="bg-sea-900 text-sand-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm sm:flex-row sm:justify-between sm:px-8">
          <p className="font-serif text-base text-sand-50">Saeng Lay Pool Villa</p>
          <p>เว็บตัวอย่างสำหรับ portfolio ไม่ใช่ที่พักจริง · รูปภาพสร้างด้วย AI</p>
        </div>
      </footer>
    </>
  );
}
