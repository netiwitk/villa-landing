# Saeng Lay Pool Villa (เว็บตัวอย่าง)

Landing page ของ pool villa ในหัวหิน ทำเป็น portfolio **ที่พักนี้ไม่มีอยู่จริง** และรูปภาพสร้างด้วย AI

**เว็บจริง:** https://netiwitk.github.io/villa-landing/ ([English](https://netiwitk.github.io/villa-landing/en/) · [ไทย](https://netiwitk.github.io/villa-landing/th/))

- Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript
- static export (`output: "export"`): build แล้วได้โฟลเดอร์ `out/` เป็นไฟล์ static วางบน host แบบ static ที่ไหนก็ได้
- 2 ภาษา (ไทย/อังกฤษ) เป็นหน้า static แยกกันที่ `/th/` และ `/en/` หน้าแรก `/` ดูภาษาของเครื่องผู้เข้าชม ถ้าเป็นไทยจะพาไปหน้าไทย ภาษาอื่นไปหน้าอังกฤษ และมีปุ่มสลับภาษาที่มุมบน
- ไม่มี client component (`"use client"`): FAQ เปิดปิดด้วย `<details>` ของ HTML ไม่ต้องเขียน JS เอง
- ฟอนต์ IBM Plex Sans Thai + Noto Serif Thai ผ่าน `next/font`
- รูป import แบบ static: ถ้าขาดไฟล์ไหน build จะ fail และได้ blur placeholder มาฟรี

## รัน

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # ได้ out/
```

## เปลี่ยนรูป

ดู [IMAGE-PROMPTS.md](IMAGE-PROMPTS.md) แล้วแปลงเป็น `.jpg` แล้ววางทับใน `images/` โดยใช้ชื่อเดิม

## เปลี่ยนข้อมูล

- ข้อความทั้งสองภาษาอยู่ใน [app/[lang]/dictionaries.ts](app/[lang]/dictionaries.ts)
- ราคา, LINE ID (`LINE_ID`) และเบอร์โทร (`PHONE`) อยู่ด้านบนของ [app/[lang]/page.tsx](app/[lang]/page.tsx) ใช้ร่วมกันทั้งสองภาษา
