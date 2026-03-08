# 🤖 KUB-Nexus Discord Bot

Bot สำหรับ Community Support ของ **KUB-Nexus** รองรับการตอบคำถาม FAQ อัตโนมัติ, รับ Bug Report และ Feature Request ผ่าน Discord Modal ครับ

---

## 🚀 วิธีตั้งค่าและรัน

### ขั้นตอนที่ 1: สร้าง Discord Application + Bot

> **ใช้เวลาประมาณ 5 นาทีครับ**

1. ไปที่ [Discord Developer Portal](https://discord.com/developers/applications)
2. คลิก **"New Application"** → ตั้งชื่อ `KUB-Nexus Bot`
3. ไปที่เมนู **"Bot"** → คลิก **"Add Bot"**
4. เปิด **Privileged Gateway Intents:**
   - ✅ `MESSAGE CONTENT INTENT`
   - ✅ `SERVER MEMBERS INTENT`
5. คลิก **"Reset Token"** → คัดลอก Token ที่ได้ไว้
6. ไปที่เมนู **"OAuth2 → URL Generator"**
   - เลือก Scope: `bot`, `applications.commands`
   - เลือก Permissions: `Send Messages`, `Embed Links`, `Read Message History`
7. คัดลอก URL ที่สร้างขึ้นมาแล้วเอาไปเปิดในเบราว์เซอร์เพื่อเชิญบอทเข้า Server ของคุณ

---

### ขั้นตอนที่ 2: ตั้งค่าไฟล์ .env

แก้ไขไฟล์ `.env` ในโฟลเดอร์นี้:

```env
DISCORD_TOKEN=ใส่_Token_ที่ได้จาก_Developer_Portal_ตรงนี้
GUILD_ID=1480252596722729103
CHANNEL_QA=1480258562180776098
CHANNEL_BUG_REPORT=ใส่_ID_Channel_Bug_Report
CHANNEL_FEATURE_REQUEST=ใส่_ID_Channel_Feature_Request
```

> **วิธีหา Channel ID:** คลิกขวาที่ Channel ใน Discord → Copy Channel ID  
> (ต้องเปิด Developer Mode ที่ Settings → Advanced ก่อนครับ)

---

### ขั้นตอนที่ 3: ติดตั้ง Dependencies และรัน

```bash
cd discord-bot
npm install
npm start
```

ถ้าเห็น log ว่า `🤖 KUB-Nexus Bot พร้อมทำงานแล้วครับ!` แสดงว่าสำเร็จแล้ว! ✅

---

## 📋 คำสั่งทั้งหมด (Commands)

| คำสั่ง | ผลลัพธ์ |
| :--- | :--- |
| `!help` | แสดงเมนูช่วยเหลือพร้อม Embed สวยงาม |
| `!hardware` | รายการอะไหล่ + ลิงก์สั่งซื้อ Lazada |
| `!status` | สถานะระบบ KUB-Nexus |
| `!report` | เปิดฟอร์ม Bug Report (Modal) |
| `!request` | เปิดฟอร์ม Feature Request (Modal) |
| พิมพ์ประโยคภาษาไทย | ตอบคำถาม FAQ อัตโนมัติ (ใน QA Channel เท่านั้น) |

---

## ☁️ Deployment (ให้บอทรันตลอด 24/7)

แนะนำให้ใช้บริการฟรี เช่น:
- **Railway.app** (ง่ายที่สุด แนะนำ)
- **Fly.io**
- หรือรันบน VPS Linux ด้วย `pm2 start npm -- start`
