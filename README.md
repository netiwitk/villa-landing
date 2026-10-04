# Saeng Lay Pool Villa (เว็บตัวอย่าง)

Landing page ของ pool villa ในหัวหิน ทำเป็น portfolio **ที่พักนี้ไม่มีอยู่จริง** และรูปภาพสร้างด้วย AI

- Next.js 16 (App Router) + Tailwind CSS 4 + TypeScript
- static export (`output: "export"`): build แล้วได้โฟลเดอร์ `out/` เป็นไฟล์ static วางบน host แบบ static ที่ไหนก็ได้
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

เนื้อหาทั้งหมดอยู่ใน array ด้านบนของ [app/page.tsx](app/page.tsx) (ราคา ห้อง FAQ ระยะทาง) ส่วน LINE ID และเบอร์โทรอยู่ใน `LINE_ID` / `PHONE`
