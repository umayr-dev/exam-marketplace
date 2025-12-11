# Mini Marketplace

Mini Marketplace - bu kichik SPA-ilova bo'lib, foydalanuvchilar mahsulotlarni ko'rish, savatga qo'shish va o'chirish imkoniyatiga ega.

## Ism

Frontend Intern (Frontend ishlab chiquvchi stajyor) test topshirig'i

## Vazifa qancha vaqt oldi

Vazifa bir kunda bajarildi.

## Qiyin bo'lgan joylar

- Vanilla JS va React o'rtasida integratsiya qilish - mahsulotlar ro'yxati vanilla JS bilan render qilinadi, lekin savat React komponenti sifatida ishlaydi. Bu ikki texnologiyani bir-biri bilan bog'lash uchun custom eventlar va global handler funksiyalaridan foydalanish kerak bo'ldi.
- localStorage bilan ishlash - savat ma'lumotlarini saqlash va yuklash uchun useEffect hooklarini to'g'ri sozlash kerak edi.
- Responsive dizayn - desktop versiyada ikki ustun, mobil qurilmalarda bloklar ketma-ket joylashishi uchun CSS Grid va media querylardan foydalanish kerak edi.

## Texnologiyalar

- React (Vite)
- Vanilla JavaScript (mahsulotlar ro'yxati uchun)
- CSS (Flexbox, Grid)
- normalize.css

## O'rnatish va ishga tushirish

```bash
# Dependencies o'rnatish
npm install

# Development server ishga tushirish
npm run dev

# Production build yaratish
npm build
```

## Funksionallik

### Mahsulotlar ro'yxati (Vanilla JS)

- Fakestoreapi.com API'dan mahsulotlarni yuklash
- Mahsulot kartochkalarini ko'rsatish (rasm, nom, narx)
- "Add to cart" tugmasi

### Savat (React)

- Mahsulotlarni savatga qo'shish
- Savatdan mahsulotlarni o'chirish
- Mahsulotlar sonini o'zgartirish
- Umumiy summa va mahsulotlar sonini ko'rsatish
- localStorage'da saqlash

## Interfeys skrinshotlari

### Desktop versiya

Desktop versiyada ikki ustun ko'rinishida: chapda mahsulotlar, o'ngda savat.

### Mobil versiya

Mobil qurilmalarda bloklar ketma-ket pastma-past joylashadi.

## Demo havolasi

Loyiha GitHub'da ochiq repository ko'rinishida joylangan.

## GitHub Repository

https://github.com/username/mini-marketplace
