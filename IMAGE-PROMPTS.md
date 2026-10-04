# Prompt สำหรับ gen รูปใน ChatGPT

มีทั้งหมด 7 รูป เมื่อได้แต่ละรูปแล้ว ให้บันทึกทับไฟล์ใน `images/` **โดยใช้ชื่อเดิม**

## วิธีทำ

1. **gen ทุกรูปในแชทเดียวกัน** โดยเรียงตามลำดับข้างล่าง แต่ละ prompt จะบอกให้ ChatGPT ทำบ้านหลังเดิมกับรูปก่อนหน้า ถ้าแยกแชท บ้านจะออกมาหน้าตาไม่เหมือนกัน
2. copy prompt ไปทั้งก้อน (ภาษาอังกฤษ เพราะ model รูปทำงานได้ดีกว่า)
3. ถ้ารูปไหนยังไม่สวย ให้พิมพ์บอกต่อในแชทเดิม เช่น "make the pool water more turquoise" หรือ "same villa, but warmer sunset light"
4. ดาวน์โหลดแล้ว rename ให้ตรงชื่อไฟล์ เช่น `hero.png`
5. ถ้าไฟล์ที่ได้เป็น `.webp` ให้แปลงเป็น png ด้วยคำสั่งนี้

   ```bash
   sips -s format png ~/Downloads/ชื่อไฟล์.webp --out images/hero.png
   ```

6. รัน `npm run dev` แล้วเปิด http://localhost:3000 เพื่อดูผล

ขนาดรูปไม่จำเป็นต้องเป๊ะ เว็บจะ crop ให้พอดีเอง แต่ควรได้แนวตั้งหรือแนวนอนตามที่บอกไว้

---

## 1. `hero.png` (แนวนอน)

```
Professional architectural photograph of a modern tropical private pool villa in Hua Hin, Thailand. Single-storey house with white rendered walls, warm teak wood louvers and teak ceiling, a dark grey low-pitched roof with deep overhangs, and floor-to-ceiling glass sliding doors. In front: a 10-metre rectangular swimming pool with light grey stone tiles and a timber deck, coconut palms and white frangipani trees, a small green lawn.
View from the far end of the pool looking back at the house, golden hour sunset light, warm glow inside the house, calm reflection in the water. Wide-angle 24mm, realistic, high detail, no people, no text, no watermark. Landscape orientation 3:2.
```

## 2. `pool.png` (แนวตั้ง)

```
Same villa as the previous image (white walls, teak louvers, grey stone pool tiles, timber deck). Close view of the pool deck: two white sun loungers with folded beige towels, a small side table with two glasses of iced drink, palm leaf shadows on the deck, clear turquoise water. Bright afternoon sunlight. Realistic architectural photography, no people, no text, no watermark. Portrait orientation 2:3.
```

## 3. `living.png` (แนวนอน)

```
Interior of the same villa: an open-plan living room with a large beige linen sofa, teak coffee table, rattan pendant lamps, teak wood ceiling, polished light concrete floor. The glass sliding doors are fully open to the pool and palm garden outside. Soft natural daylight, calm and airy. Realistic interior photography, wide-angle, no people, no text, no watermark. Landscape orientation 3:2.
```

## 4. `bedroom.png` (แนวนอน)

```
Master bedroom of the same villa: a king-size bed with crisp white linen and a teak headboard, two rattan bedside lamps, a woven jute rug, a large window looking out to the tropical garden and a glimpse of the pool. Soft morning light. Realistic interior photography, no people, no text, no watermark. Landscape orientation 3:2.
```

## 5. `dining.png` (แนวตั้ง)

```
Outdoor dining sala of the same villa at dusk: a teak table for eight people under a small open pavilion with a teak roof, warm string lights overhead, a charcoal BBQ grill on the side, the lit pool and palm trees in the background, deep blue evening sky. Realistic photography, no people, no text, no watermark. Portrait orientation 2:3.
```

## 6. `bathroom.png` (แนวตั้ง)

```
Semi-outdoor bathroom of the same villa: a freestanding white stone bathtub, a rain shower on a natural stone wall, lush tropical plants and ferns, teak slatted screen for privacy, open to the sky above. Soft daylight. Realistic interior photography, no people, no text, no watermark. Portrait orientation 2:3.
```

## 7. `night.png` (แนวนอน)

```
Same villa as the first image, same camera angle, at blue hour after sunset: the pool glows turquoise from underwater lights, warm light from inside the house through the glass doors, palm trees silhouetted against a deep blue sky. Realistic architectural photography, no people, no text, no watermark. Landscape orientation 3:2.
```

---

`night.png` ใช้เป็นพื้นหลังส่วนติดต่อ ซึ่งมีชั้นสีเข้มทับอยู่ ถ้ารูปออกมาสว่างเกินไปก็ยังอ่านตัวหนังสือได้
