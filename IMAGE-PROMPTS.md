# Prompt สำหรับ gen รูปใน ChatGPT

มีทั้งหมด 7 รูป เมื่อได้แต่ละรูปแล้ว ให้วางทับไฟล์ใน `images/` **โดยใช้ชื่อเดิม (.jpg)**

## วิธีทำ

1. **gen ทุกรูปในแชทเดียวกัน** โดยเรียงตามลำดับข้างล่าง แต่ละ prompt จะบอกให้ ChatGPT ทำบ้านหลังเดิมกับรูปก่อนหน้า ถ้าแยกแชท บ้านจะออกมาหน้าตาไม่เหมือนกัน
2. แต่ละรูปมี prompt ทั้งภาษาอังกฤษและภาษาไทย ChatGPT เข้าใจทั้งสองภาษา ให้ copy ไปแค่ก้อนเดียวทั้งก้อน แนะนำภาษาอังกฤษเพราะคำศัพท์ถ่ายภาพเจาะจงกว่า ส่วนภาษาไทยมีไว้อ่านให้เข้าใจหรือแก้รายละเอียดเอง
3. ถ้ารูปไหนยังไม่สวย ให้พิมพ์บอกต่อในแชทเดิมเป็นภาษาไทยได้เลย เช่น "ขอน้ำในสระสีฟ้าใสกว่านี้" หรือ "บ้านหลังเดิม แต่ขอแสงเย็นอุ่นกว่านี้"
4. ดาวน์โหลดรูป แล้วแปลงเป็น `.jpg` ไปวางทับไฟล์เดิมด้วยคำสั่งนี้ ใช้ได้ทั้งไฟล์ .png และ .webp ส่วนเปลี่ยนชื่อปลายทางให้ตรงกับรูปนั้น

   ```bash
   cd ~/Documents/dev/App-Test/villa-landing
   sips -s format jpeg -s formatOptions 80 ~/Downloads/ชื่อไฟล์ที่โหลดมา.png --out images/hero.jpg
   ```

   ต้องแปลงเพราะ PNG จาก ChatGPT มีขนาดหลาย MB ถ้าแปลงเป็น JPEG จะเหลือไม่กี่ร้อย KB และเว็บโหลดเร็วขึ้นมาก

5. รัน `npm run dev` แล้วเปิด http://localhost:3000 เพื่อดูผล

ขนาดรูปไม่จำเป็นต้องเป๊ะ เว็บจะ crop ให้พอดีเอง แต่ควรได้แนวตั้งหรือแนวนอนตามที่บอกไว้

---

## 1. `hero.jpg` (แนวนอน)

```
Professional architectural photograph of a modern tropical private pool villa in Hua Hin, Thailand. Single-storey house with white rendered walls, warm teak wood louvers and teak ceiling, a dark grey low-pitched roof with deep overhangs, and floor-to-ceiling glass sliding doors. In front: a 10-metre rectangular swimming pool with light grey stone tiles and a timber deck, coconut palms and white frangipani trees, a small green lawn.
View from the far end of the pool looking back at the house, golden hour sunset light, warm glow inside the house, calm reflection in the water. Wide-angle 24mm, realistic, high detail, no people, no text, no watermark. Landscape orientation 3:2.
```

ภาษาไทย:

```
ภาพถ่ายสถาปัตยกรรมระดับมืออาชีพของ pool villa ส่วนตัวสไตล์ tropical modern ในหัวหิน ประเทศไทย เป็นบ้านชั้นเดียว ผนังฉาบปูนสีขาว มีระแนงไม้สักโทนอุ่นและฝ้าเพดานไม้สัก หลังคาสีเทาเข้มทรงลาดต่ำ ชายคายื่นยาว ประตูกระจกบานเลื่อนสูงจากพื้นจรดเพดาน หน้าบ้านมีสระว่ายน้ำสี่เหลี่ยมผืนผ้ายาว 10 เมตร ปูกระเบื้องหินสีเทาอ่อน มีพื้นไม้รอบสระ ต้นมะพร้าว ต้นลีลาวดีดอกขาว และสนามหญ้าเล็กๆ
มุมกล้องอยู่สุดปลายสระ หันกลับมาทางตัวบ้าน แสงเย็นช่วง golden hour มีไฟอุ่นๆ เปิดอยู่ในบ้าน ผิวน้ำนิ่งสะท้อนเงาบ้าน เลนส์มุมกว้าง 24 มม. สมจริง รายละเอียดคมชัด ไม่มีคน ไม่มีตัวหนังสือ ไม่มีลายน้ำ ภาพแนวนอนสัดส่วน 3:2
```

## 2. `pool.jpg` (แนวตั้ง)

```
Same villa as the previous image (white walls, teak louvers, grey stone pool tiles, timber deck). Close view of the pool deck: two white sun loungers with folded beige towels, a small side table with two glasses of iced drink, palm leaf shadows on the deck, clear turquoise water. Bright afternoon sunlight. Realistic architectural photography, no people, no text, no watermark. Portrait orientation 2:3.
```

ภาษาไทย:

```
บ้านหลังเดียวกับรูปก่อนหน้า (ผนังขาว ระแนงไม้สัก กระเบื้องสระหินสีเทา พื้นไม้รอบสระ) ถ่ายใกล้ๆ บริเวณริมสระ มีเตียงอาบแดดสีขาว 2 ตัว วางผ้าเช็ดตัวสีเบจพับไว้ โต๊ะข้างเล็กๆ มีเครื่องดื่มเย็น 2 แก้ว เงาใบมะพร้าวทอดลงบนพื้นไม้ น้ำในสระสีฟ้าใส แดดบ่ายสว่าง ภาพถ่ายสถาปัตยกรรมแบบสมจริง ไม่มีคน ไม่มีตัวหนังสือ ไม่มีลายน้ำ ภาพแนวตั้งสัดส่วน 2:3
```

## 3. `living.jpg` (แนวนอน)

```
Interior of the same villa: an open-plan living room with a large beige linen sofa, teak coffee table, rattan pendant lamps, teak wood ceiling, polished light concrete floor. The glass sliding doors are fully open to the pool and palm garden outside. Soft natural daylight, calm and airy. Realistic interior photography, wide-angle, no people, no text, no watermark. Landscape orientation 3:2.
```

ภาษาไทย:

```
ภายในบ้านหลังเดิม ห้องนั่งเล่นแบบเปิดโล่ง มีโซฟาผ้าลินินสีเบจตัวใหญ่ โต๊ะกลางไม้สัก โคมไฟหวายแขวนเพดาน ฝ้าเพดานไม้สัก พื้นปูนขัดมันสีอ่อน ประตูกระจกบานเลื่อนเปิดกว้างออกไปเห็นสระและสวนมะพร้าวด้านนอก แสงธรรมชาตินุ่มๆ บรรยากาศสงบและโปร่ง ภาพถ่ายภายในแบบสมจริง มุมกว้าง ไม่มีคน ไม่มีตัวหนังสือ ไม่มีลายน้ำ ภาพแนวนอนสัดส่วน 3:2
```

## 4. `bedroom.jpg` (แนวนอน)

```
Master bedroom of the same villa: a king-size bed with crisp white linen and a teak headboard, two rattan bedside lamps, a woven jute rug, a large window looking out to the tropical garden and a glimpse of the pool. Soft morning light. Realistic interior photography, no people, no text, no watermark. Landscape orientation 3:2.
```

ภาษาไทย:

```
ห้องนอนใหญ่ของบ้านหลังเดิม เตียงคิงไซซ์ปูผ้าสีขาวเรียบตึง หัวเตียงไม้สัก โคมไฟหวายข้างเตียง 2 ดวง พรมปอสาน หน้าต่างบานใหญ่มองออกไปเห็นสวนเขตร้อนและเห็นสระว่ายน้ำนิดหน่อย แสงเช้านุ่มๆ ภาพถ่ายภายในแบบสมจริง ไม่มีคน ไม่มีตัวหนังสือ ไม่มีลายน้ำ ภาพแนวนอนสัดส่วน 3:2
```

## 5. `dining.jpg` (แนวตั้ง)

```
Outdoor dining sala of the same villa at dusk: a teak table for eight people under a small open pavilion with a teak roof, warm string lights overhead, a charcoal BBQ grill on the side, the lit pool and palm trees in the background, deep blue evening sky. Realistic photography, no people, no text, no watermark. Portrait orientation 2:3.
```

ภาษาไทย:

```
ศาลาทานอาหารกลางแจ้งของบ้านหลังเดิมตอนพลบค่ำ มีโต๊ะไม้สักสำหรับ 8 คน ตั้งอยู่ใต้ศาลาเปิดโล่งหลังคาไม้สัก มีไฟประดับเส้นสีอุ่นห้อยอยู่ด้านบน เตาย่าง BBQ ถ่านอยู่ด้านข้าง ฉากหลังเป็นสระที่เปิดไฟแล้วกับต้นมะพร้าว ท้องฟ้าสีน้ำเงินเข้มยามเย็น ภาพถ่ายแบบสมจริง ไม่มีคน ไม่มีตัวหนังสือ ไม่มีลายน้ำ ภาพแนวตั้งสัดส่วน 2:3
```

## 6. `bathroom.jpg` (แนวตั้ง)

```
Semi-outdoor bathroom of the same villa: a freestanding white stone bathtub, a rain shower on a natural stone wall, lush tropical plants and ferns, teak slatted screen for privacy, open to the sky above. Soft daylight. Realistic interior photography, no people, no text, no watermark. Portrait orientation 2:3.
```

ภาษาไทย:

```
ห้องน้ำกึ่งกลางแจ้งของบ้านหลังเดิม มีอ่างอาบน้ำหินสีขาวแบบตั้งอิสระ ฝักบัว rain shower ติดผนังหินธรรมชาติ ต้นไม้เขตร้อนและเฟิร์นเขียวชอุ่ม มีฉากระแนงไม้สักบังสายตา ด้านบนเปิดโล่งเห็นท้องฟ้า แสงกลางวันนุ่มๆ ภาพถ่ายภายในแบบสมจริง ไม่มีคน ไม่มีตัวหนังสือ ไม่มีลายน้ำ ภาพแนวตั้งสัดส่วน 2:3
```

## 7. `night.jpg` (แนวนอน)

```
Same villa as the first image, same camera angle, at blue hour after sunset: the pool glows turquoise from underwater lights, warm light from inside the house through the glass doors, palm trees silhouetted against a deep blue sky. Realistic architectural photography, no people, no text, no watermark. Landscape orientation 3:2.
```

ภาษาไทย:

```
บ้านหลังเดียวกับรูปแรก มุมกล้องเดิม แต่เป็นช่วง blue hour หลังพระอาทิตย์ตก สระเรืองแสงสีฟ้าอมเขียวจากไฟใต้น้ำ มีแสงไฟอุ่นๆ จากในบ้านลอดออกมาทางประตูกระจก ต้นมะพร้าวเป็นเงาดำตัดกับท้องฟ้าสีน้ำเงินเข้ม ภาพถ่ายสถาปัตยกรรมแบบสมจริง ไม่มีคน ไม่มีตัวหนังสือ ไม่มีลายน้ำ ภาพแนวนอนสัดส่วน 3:2
```

---

`night.jpg` ใช้เป็นพื้นหลังส่วนติดต่อ ซึ่งมีชั้นสีเข้มทับอยู่ ถ้ารูปออกมาสว่างเกินไปก็ยังอ่านตัวหนังสือได้
