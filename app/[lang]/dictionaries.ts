// Text only. Prices, images, icons and contact details are shared in page.tsx so the languages can't drift.
// Arrays line up by index with the shared data there (amenity icons, rate prices, gallery images).

const th = {
  meta: {
    title: "Saeng Lay Pool Villa · หัวหิน (เว็บตัวอย่าง)",
    description: "Pool villa 3 ห้องนอน สระส่วนตัว เดินถึงหาด 3 นาที เว็บตัวอย่างสำหรับ portfolio ไม่ใช่ที่พักจริง",
  },
  switchTo: { label: "EN", aria: "Switch to English" },
  nav: { villa: "ที่พัก", amenities: "สิ่งอำนวยความสะดวก", rooms: "ห้องนอน", rates: "ราคา", faq: "คำถาม" },
  checkDates: "เช็ควันว่าง",
  hero: {
    alt: "Pool villa ชั้นเดียวกับสระว่ายน้ำส่วนตัว ยามแดดเย็น",
    title: ["บ้านริมทะเล", "ที่ทั้งหลังเป็นของคุณ"],
    body: "สระส่วนตัว ลาน BBQ และชายหาดที่เดินถึงในสามนาที สำหรับครอบครัวและเพื่อนสูงสุด 8 ท่าน",
    book: "จองผ่าน LINE",
    rates: "ดูราคา",
  },
  facts: [
    { label: "ห้องนอน", value: "3" },
    { label: "ห้องน้ำ", value: "3" },
    { label: "ผู้เข้าพัก", value: "8 ท่าน" },
    { label: "สระส่วนตัว", value: "10 ม." },
  ],
  villa: {
    eyebrow: "ที่พัก",
    title: "ตื่นมาเจอสระ เดินไม่กี่ก้าวถึงทะเล",
    body: "บ้านชั้นเดียวสไตล์ tropical modern ล้อมด้วยต้นมะพร้าวและลีลาวดี ห้องนั่งเล่นเปิดโล่งต่อกับสระ ทุกห้องนอนมีห้องน้ำในตัว พักกันทั้งครอบครัวได้โดยไม่ต้องใช้สระร่วมกับใคร",
    poolAlt: "ริมสระมีเก้าอี้อาบแดดสองตัว ล้อมด้วยต้นไม้เขตร้อน",
    distances: [
      { place: "ชายหาด", time: "เดิน 3 นาที" },
      { place: "ร้านสะดวกซื้อ", time: "500 เมตร" },
      { place: "ตลาดโต้รุ่ง", time: "ขับรถ 10 นาที" },
      { place: "กรุงเทพฯ", time: "ประมาณ 3 ชั่วโมง" },
    ],
  },
  amenities: {
    eyebrow: "สิ่งอำนวยความสะดวก",
    title: "มีครบ แค่หิ้วกระเป๋ามา",
    items: [
      { title: "สระว่ายน้ำส่วนตัว", text: "ยาว 10 เมตร ลึก 1.2 เมตร ระบบน้ำเกลือ" },
      { title: "ใกล้ชายหาด", text: "เดินถึงทะเลใน 3 นาที" },
      { title: "ลาน BBQ", text: "เตาถ่านพร้อมโต๊ะ 8 ที่นั่ง" },
      { title: "ครัวพร้อมใช้", text: "เตา ไมโครเวฟ ตู้เย็นใหญ่ จานชามครบ" },
      { title: "Wi-Fi 500 Mbps", text: "ใช้ได้ทั้งในบ้านและริมสระ" },
      { title: "ที่จอดรถ 3 คัน", text: "จอดในรั้วบ้าน" },
      { title: "Smart TV + Netflix", text: "ห้องนั่งเล่นและห้องนอนใหญ่" },
      { title: "เครื่องซักผ้า", text: "พร้อมราวตากผ้า" },
    ],
  },
  gallery: {
    eyebrow: "แกลเลอรี",
    title: "มุมโปรดของแขกที่มาพัก",
    shots: [
      { caption: "ห้องนั่งเล่น", alt: "ห้องนั่งเล่นเปิดโล่ง ประตูกระจกบานใหญ่ต่อกับสระ" },
      { caption: "ลาน BBQ ยามค่ำ", alt: "ศาลากลางแจ้งมีโต๊ะไม้แปดที่นั่งและไฟประดับยามค่ำ" },
      { caption: "ห้องนอนใหญ่", alt: "ห้องนอนใหญ่ เตียงคิงไซซ์ผ้าปูสีขาว หัวเตียงไม้สัก" },
      { caption: "ห้องน้ำกึ่ง outdoor", alt: "ห้องน้ำกึ่งกลางแจ้งมีอ่างหินและต้นไม้" },
    ],
  },
  rooms: {
    eyebrow: "ห้องนอน",
    title: "3 ห้องนอน ห้องน้ำในตัวทุกห้อง",
    items: [
      { name: "ห้องนอนใหญ่", bed: "เตียง King 6 ฟุต", features: ["อ่างแช่ตัว", "เปิดออกสระได้", "Smart TV"] },
      { name: "ห้องนอนที่ 2", bed: "เตียง Queen 5 ฟุต", features: ["ห้องน้ำในตัว", "ประตูออกสวน"] },
      { name: "ห้องนอนที่ 3", bed: "เตียงเดี่ยว 2 เตียง", features: ["ห้องน้ำในตัว", "เหมาะกับเด็ก"] },
    ],
    note: "เสริมที่นอนได้อีก 2 ชุด ไม่มีค่าใช้จ่าย",
  },
  rates: {
    eyebrow: "ราคา",
    title: "ราคาต่อคืน ทั้งหลัง",
    body: "ราคานี้สำหรับผู้เข้าพักไม่เกิน 8 ท่าน ท่านที่ 9–10 เพิ่มท่านละ 500 บาท",
    perNight: "/ คืน",
    items: [
      { name: "วันธรรมดา", days: "อาทิตย์–พฤหัสบดี" },
      { name: "สุดสัปดาห์", days: "ศุกร์–เสาร์" },
      { name: "วันหยุดยาว", days: "นักขัตฤกษ์ · ขั้นต่ำ 2 คืน" },
    ],
    includedTitle: "รวมในราคาแล้ว",
    included: ["แม่บ้านทำความสะอาดก่อนเข้าพัก", "ผ้าเช็ดตัวและของใช้ในห้องน้ำ", "ถ่านและอุปกรณ์ BBQ", "น้ำดื่มวันละ 12 ขวด"],
    depositTitle: "เงินประกัน",
    deposit: "3,000 บาท จ่ายวันเช็คอิน และได้คืนเต็มจำนวนตอนเช็คเอาท์ ถ้าไม่มีความเสียหาย",
  },
  faq: {
    eyebrow: "คำถามที่พบบ่อย",
    title: "ก่อนจอง",
    items: [
      { q: "เช็คอินและเช็คเอาท์กี่โมง?", a: "เช็คอิน 14:00 น. และเช็คเอาท์ 12:00 น. ถ้าไม่มีผู้เข้าพักต่อ ขอเช็คเอาท์ถึง 14:00 น. ได้ฟรี" },
      { q: "ต้องมัดจำเท่าไหร่?", a: "มัดจำ 50% ภายใน 24 ชั่วโมงหลังยืนยันวัน แล้วจ่ายส่วนที่เหลือวันเช็คอิน" },
      { q: "ยกเลิกได้มั้ย?", a: "ยกเลิกก่อนเข้าพัก 14 วันขึ้นไป คืนมัดจำเต็มจำนวน ถ้าน้อยกว่านั้น เลื่อนวันได้ 1 ครั้ง" },
      { q: "พาสัตว์เลี้ยงมาได้มั้ย?", a: "ได้ ไม่เกิน 2 ตัว แต่ต้องแจ้งล่วงหน้าและไม่พาลงสระ" },
      { q: "เปิดเพลงได้ถึงกี่โมง?", a: "เปิดได้ถึง 22:00 น. เพื่อไม่รบกวนเพื่อนบ้าน" },
      { q: "มีอาหารเช้ามั้ย?", a: "ไม่มี แต่มีครัวพร้อมใช้ และมีร้านอาหารเช้าที่เดินไป 5 นาที" },
    ],
  },
  contact: {
    title: "ว่างวันไหน ทักมาถามได้เลย",
    body: "ส่งวันที่และจำนวนผู้เข้าพักมาทาง LINE ตอบภายใน 15 นาที (08:00–22:00 น.)",
    phone: "โทร",
  },
};

export type Dict = typeof th;

const en: Dict = {
  meta: {
    title: "Saeng Lay Pool Villa · Hua Hin (demo)",
    description:
      "3-bedroom pool villa with a private pool, a 3-minute walk from the beach. A demo site for a portfolio, not a real property.",
  },
  switchTo: { label: "ไทย", aria: "เปลี่ยนเป็นภาษาไทย" },
  nav: { villa: "The villa", amenities: "Amenities", rooms: "Bedrooms", rates: "Rates", faq: "FAQ" },
  checkDates: "Check dates",
  hero: {
    alt: "Single-storey pool villa with a private pool at sunset",
    title: ["A beachside home", "that's all yours"],
    body: "A private pool, a BBQ terrace and a beach three minutes' walk away, for families and friends of up to 8.",
    book: "Book on LINE",
    rates: "See rates",
  },
  facts: [
    { label: "Bedrooms", value: "3" },
    { label: "Bathrooms", value: "3" },
    { label: "Guests", value: "Up to 8" },
    { label: "Private pool", value: "10 m" },
  ],
  villa: {
    eyebrow: "The villa",
    title: "Wake up to the pool, walk to the sea",
    body: "A single-storey tropical modern home among coconut palms and frangipani. The open-plan living room opens straight onto the pool and every bedroom has its own bathroom, so the whole family stays together with a pool you share with no one.",
    poolAlt: "Two sun loungers by the pool, surrounded by tropical plants",
    distances: [
      { place: "Beach", time: "3-minute walk" },
      { place: "Convenience store", time: "500 m" },
      { place: "Night market", time: "10-minute drive" },
      { place: "Bangkok", time: "About 3 hours" },
    ],
  },
  amenities: {
    eyebrow: "Amenities",
    title: "Everything's here, just bring your bags",
    items: [
      { title: "Private pool", text: "10 m long, 1.2 m deep, saltwater system" },
      { title: "Near the beach", text: "A 3-minute walk to the sea" },
      { title: "BBQ terrace", text: "Charcoal grill and a table for 8" },
      { title: "Full kitchen", text: "Hob, microwave, large fridge and all the tableware" },
      { title: "Wi-Fi 500 Mbps", text: "Indoors and by the pool" },
      { title: "Parking for 3 cars", text: "Inside the gated grounds" },
      { title: "Smart TV + Netflix", text: "Living room and master bedroom" },
      { title: "Washing machine", text: "With a drying rack" },
    ],
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Our guests' favourite corners",
    shots: [
      { caption: "Living room", alt: "Open-plan living room with large glass doors onto the pool" },
      { caption: "BBQ terrace at night", alt: "Outdoor pavilion with an eight-seat teak table under string lights" },
      { caption: "Master bedroom", alt: "Master bedroom with a king bed, white linen and a teak headboard" },
      { caption: "Semi-outdoor bathroom", alt: "Semi-outdoor bathroom with a stone tub and tropical plants" },
    ],
  },
  rooms: {
    eyebrow: "Bedrooms",
    title: "3 bedrooms, each with its own bathroom",
    items: [
      { name: "Master bedroom", bed: "King bed (6 ft)", features: ["Soaking tub", "Opens onto the pool", "Smart TV"] },
      { name: "Bedroom 2", bed: "Queen bed (5 ft)", features: ["En-suite bathroom", "Door to the garden"] },
      { name: "Bedroom 3", bed: "Two single beds", features: ["En-suite bathroom", "Great for kids"] },
    ],
    note: "Two extra mattresses available at no charge",
  },
  rates: {
    eyebrow: "Rates",
    title: "Per night, for the whole villa",
    body: "Rates cover up to 8 guests. Guests 9 and 10 are ฿500 each.",
    perNight: "/ night",
    items: [
      { name: "Weekday", days: "Sunday–Thursday" },
      { name: "Weekend", days: "Friday–Saturday" },
      { name: "Long weekend", days: "Public holidays · 2-night minimum" },
    ],
    includedTitle: "Included",
    included: [
      "Housekeeping before you arrive",
      "Towels and bathroom amenities",
      "Charcoal and BBQ tools",
      "12 bottles of drinking water a day",
    ],
    depositTitle: "Security deposit",
    deposit: "฿3,000, paid at check-in and refunded in full at check-out if nothing is damaged.",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before you book",
    items: [
      { q: "What are the check-in and check-out times?", a: "Check-in is at 2 pm and check-out at noon. If no one arrives after you, you can stay until 2 pm for free." },
      { q: "How much is the deposit?", a: "50% within 24 hours of confirming your dates. The rest is paid at check-in." },
      { q: "Can I cancel?", a: "Cancel 14 days or more before arrival for a full refund of the deposit. Closer than that, you can move your dates once." },
      { q: "Can I bring pets?", a: "Yes, up to 2, if you tell us in advance and keep them out of the pool." },
      { q: "How late can we play music?", a: "Until 10 pm, out of respect for the neighbours." },
      { q: "Is breakfast included?", a: "No, but the kitchen is fully equipped and there's a breakfast café a 5-minute walk away." },
    ],
  },
  contact: {
    title: "Free on your dates? Just ask.",
    body: "Send your dates and number of guests on LINE. We reply within 15 minutes (8 am–10 pm).",
    phone: "Phone",
  },
};

export const dictionaries = { th, en };
export type Locale = keyof typeof dictionaries;
export const locales = Object.keys(dictionaries) as Locale[];
export const hasLocale = (lang: string): lang is Locale => Object.hasOwn(dictionaries, lang);
