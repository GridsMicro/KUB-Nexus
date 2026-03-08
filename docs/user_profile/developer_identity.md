# 👤 ค่านิยมและมาตรฐานการพัฒนา (Developer Manifest)

เอกสารนี้รวบรวมตัวตน (Identity) มาตรฐานการเขียนโค้ด และวิสัยทัศน์ที่คุณยึดถือ เพื่อให้ทุกการพัฒนามีทิศทางเดียวกันและทรงพลังที่สุด

---

## 🚀 วิสัยทัศน์ (Vision)
"มุ่งเน้นการสร้าง Robot, IoT, AI และระบบ Autonomous/Autopilot ที่เป็นมิตรต่อสิ่งแวดล้อม เพื่อขับเคลื่อนโลกใหม่ที่ยั่งยืนผ่านเทคโนโลยีบล็อกเชนและบล็อกเกอร์ฟอร์ม"

---

## 🛠️ มาตรฐานทางวิศวกรรม (Technical Standards)

### 🌐 Web (Next.js 16+)
- **Architecture:** App Router (No `src/` folder)
- **Styling:** Tailwind CSS 4 (Vanilla CSS logic)
- **Deployment:** GitHub & Vercel Ready
- **Experience:** Rich Aesthetics, Dynamic Animations, Glassmorphism
- **Copywriting:** จิตวิทยาโน้มน้าวใจ (Persuasion) ในทุกเนื้อหา

### 🤖 Embedded & Robotics (ESP32/STM32)
- **Platform:** PlatformIO (VS Code)
- **Protocol:** **RNPacket** (20 bytes binary) + **CRC-16-CCITT**
- **Safety:** **FailsafeManager** (4-state machine)
- **Hardware Abstraction:** 
    - **LEDCManager** (PWM/RGB)
    - **ConfigManager (NVS)** (Settings - No Hardcoding)
- **Logic:** Clean Code & DRY (Don't Repeat Yourself)

---

## 📐 กฎเหล็กในการทำงาน (Critical Rules)
1. **Security First:** แจ้งเตือนความเสี่ยงด้านความปลอดภัยด้วย **ตัวหนา** ก่อนเสมอ
2. **Environment Centric:** ทุกนวัตกรรมต้องตอบโจทย์การรักษาสิ่งแวดล้อม
3. **No Placeholders:** ห้ามใช้ข้อมูลหลอก ต้องสร้าง Assets จริงเสมอ (เช่น ใช้ AI Generate รูปภาพ)
4. **Thai Language:** สื่อสารด้วยภาษาไทยที่สุภาพแต่เป็นกันเองและโน้มน้าวใจ

---

## 📂 โครงสร้างโปรเจกต์ (Project Structure Guide)
- `/docs`: เอกสารประกอบโครงการ (MkDocs workflow)
- `/firmware`: ซอร์สโค้ดสำหรับไมโครคอนโทรลเลอร์ (PlatformIO)
- `/web`: แอปพลิเคชัน Next.js (Root-level structure)
- `/tests`: Unit Testing (Unity สำหรับ Firmware / Jest สำหรับ Web)
