# 🚀 KUB-Nexus: The Future of Autonomous Eco-Trading

[![Bitkub Chain](https://img.shields.io/badge/Network-Bitkub%20Chain-green)](https://www.bitkubchain.com)
[![Next.js 16](https://img.shields.io/badge/Frontend-Next.js%2016-black)](https://nextjs.org)
[![ESP32](https://img.shields.io/badge/Hardware-ESP32-blue)](https://www.espressif.com)

**KUB-Nexus** คือแพลตฟอร์มอัจฉริยะแบบ Full-stack ที่ผสานโลกการเงินดิจิทัล (Bitkub API) เข้ากับเทคโนโลยี IoT (ESP32) และระบบบล็อกเชน (KUB Chain) เพื่อสร้าง "ความมั่งคั่งที่ยั่งยืน" (Sustainable Wealth) อย่างแท้จริง

---

## 🌟 คุณสมบัติเด่น (Main Features)

โครงการ KUB-Nexus ถูกออกแบบมาให้ครบถ้วนตั้งแต่วงจรฮาร์ดแวร์ไปจนถึงหน้าเว็บระดับพรีเมียม:

### 1. 🌐 ส่วนของ Web Application (Next.js 16+)
- **Premium Glassmorphism UI:** ดีไซน์หน้าเว็บที่หรูหรา ทันสมัย และพริ้วไหวด้วย Micro-animations
- **Real-time Market Data:** เชื่อมต่อ Bitkub Public API ดึงราคา BTC/THB แบบปัจจุบันสดๆ มาแสดงผลที่หน้าจอ
- **Bitkub Private API Integration:** ระบบส่งคำสั่งซื้อ (Market Order) อัตโนมัติที่ปลอดภัยด้วย HMAC-SHA256
- **Smart Settings Dashboard:** หน้าการตั้งค่าสำหรับผู้ให้ทั่วไป สามารถกรอก API Key/Secret ได้เองโดยไม่ต้องเขียนโค้ด
- **Multi-Factor Security:** ระบบจัดเก็บ Key ในไฟล์ `.env.local` สำหรับ Dev และเซสชันที่ปลอดภัยสำหรับ User

### 🤖 2. ส่วนของ Embedded Systems (ESP32 IoT)
- **Captive Portal WiFi Setup:** ระบบปล่อยสัญญาณ WiFi (KUB-Nexus-Setup) เพื่อให้ผู้ใช้ทั่วไปตั้งค่า WiFi บ้านและ API Key ผ่านมือถือได้ทันที
- **FailsafeManager (4-State Machine):** ระบบความปลอดภัยเชิงอุตสาหกรรม (BOOT, READY, ACTIVE, EMERGENCY) ป้องกันการทำงานผิดพลาด
- **Secure Config Management:** บันทึกข้อมูลตั้งค่าและ API Keys ลงใน NVS (Non-volatile Storage) ภายในชิปโดยตรง
- **RNPacket Binary Protocol:** โปรโตคอลการสื่อสารความเร็วสูง (20 bytes) พร้อมระบบตรวจสอบความถูกต้องด้วย CRC-16-CCITT
- **Visual Feedback AURA:** แสดงสถานะการผลิตพลังงานและสภาวะตลาดผ่านไฟ RGB (LEDCManager)

### ⛓️ 3. ส่วนของ Blockchain (KUB Chain)
- **KUB Nexus IoT Project:** ตัวโครงการถูกจดทะเบียนอย่างเป็นทางการใน Bitkub Developer Center
- **Oracle Integration Ready:** พร้อมสำหรับการส่งข้อมูลเซนเซอร์ (เช่น พลังงานแสงอาทิตย์) ขึ้นไปบันทึกเป็นหลักฐานที่แก้ไขไม่ได้บน Chain ผ่าน KUB Oracle
- **Eco-Sustainability Proof:** ทุกธุรกรรมที่เกิดขึ้นจะถูกบันทึก Hash เพื่อการตรวจสอบย้อนกลับ (Auditability)

---

## 🏛️ โครงสร้างโครงการ (Project Structure)

- **`/web`**: Next.js 16+ (App Router) - UI ระดับ High-end และระบบจัดการ API
- **`/firmware`**: PlatformIO (ESP32) - ระบบประสาทสัมผัสและหน่วยควบคุมความปลอดภัย
- **`/docs`**: คลังความรู้, งานวิจัย, คู่มือการใช้งาน และบันทึก Q&A

---

## 🛠️ แผนการพัฒนาปัจจุบัน (Development Phase)
- [x] Phase 1: สร้างโครงสร้างโครงการและหน้าเว็บพรีเมียม
- [x] Phase 2: พัฒนา WiFi Manager และ ConfigManager สำหรับ IoT
- [x] Phase 3: เชื่อมต่อ Bitkub API v3 (Public/Private) และจดทะเบียนโปรเจกต์ใน KUB Chain Developer Portal
- [ ] Phase 4: พัฒนา Smart Contract และระบบส่งข้อมูลเซนเซอร์ผ่าน KUB Oracle
- [ ] Phase 5: ปรับจูนระบบ Autonomous Eco-DCA ให้ทำงานอย่างสมบูรณ์แบบ

---

## ☕ สนับสนุนโครงการ (Support the Vision)
หากโครงงาน KUB-Nexus, โค้ด Open Source และคู่มือการประกอบฮาร์ดแวร์นี้เป็นประโยชน์กับคุณ สามารถเลี้ยงกาแฟทีมนักพัฒนาเพื่อสนับสนุนการสร้างสรรค์นวัตกรรมใหม่ๆ ต่อไปได้ครับ:

**PromptPay (พร้อมเพย์):** `0655419166` 
*(ทุกการสนับสนุนคือพลังในการพัฒนาระบบนิเวศน์ที่ยั่งยืนต่อไป ขอบคุณครับ 🌱)*

---

## 📜 วิสัยทัศน์และการพัฒนา
เรามุ่งมั่นสร้างระบบ Autonomous ที่ทำงานได้ด้วยตัวเอง ปลอดภัย และลดผลกระทบต่อสิ่งแวดล้อม ศึกษาค่านิยมการพัฒนาของเราได้ใน [Developer Identity](docs/user_profile/developer_identity.md)

> *"Wealth is not just having money; it's about making the world better while you earn."*

---
© 2026 GridsMicro. All rights reserved.
