# 🚀 دليل رفع مشروع React/Vite على GitHub Pages

## 📁 المشروع الحالي

المشروع `sahabi-musab-ibn-umayr` هو تطبيق **React + TypeScript + Vite + Tailwind CSS**.

الموقع: `c:\Users\pc\Downloads\القلب السليم قران الكريم\الاتنين 26-1\sahabi-musab-ibn-umayr\`

---

## ⚙️ الخطوات (طريقتين)

### 🎯 الطريقة الأولى: استخدام GitHub Actions (الأفضل!)

#### 1️⃣ تثبيت الـ Dependencies

```powershell
# افتح PowerShell في مجلد المشروع
cd "c:\Users\pc\Downloads\القلب السليم قران الكريم\الاتنين 26-1\sahabi-musab-ibn-umayr"

# ثبت الحزم
npm install
```

#### 2️⃣ تعديل `vite.config.ts` لـ GitHub Pages

افتح ملف `vite.config.ts` وأضف السطر ده:

```typescript
export default defineConfig({
  base: '/sahabi-musab-ibn-umayr/',  // ← أضف السطر ده (اسم الـ repo)
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile()
  ]
})
```

#### 3️⃣ إنشاء GitHub Repository

1. روح https://github.com وسجل دخول
2. اضغط **"New"** لإنشاء Repository جديد
3. املأ:
   - **Repository name:** `sahabi-musab-ibn-umayr`
   - **Description:** مشروع سيرة الصحابي مصعب بن عمير
   - ✅ **Public**
   - ✅ **Add README**
4. اضغط **Create repository**

#### 4️⃣ رفع المشروع على GitHub

```powershell
# في نفس مجلد المشروع
git init
git add .
git commit -m "مشروع سيرة مصعب بن عمير"

# استبدل USERNAME باسم حسابك على GitHub
git remote add origin https://github.com/USERNAME/sahabi-musab-ibn-umayr.git

git branch -M main
git push -u origin main
```

#### 5️⃣ إعداد GitHub Actions للـ Build التلقائي

أنشئ ملف `.github/workflows/deploy.yml`:

```powershell
# أنشئ المجلدات
New-Item -ItemType Directory -Path ".github\workflows" -Force

# أنشئ ملف deploy.yml
@"
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: \${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
"@ | Out-File -FilePath ".github\workflows\deploy.yml" -Encoding UTF8

# ارفع الملف الجديد
git add .github/workflows/deploy.yml
git commit -m "إضافة GitHub Actions للـ deployment"
git push
```

#### 6️⃣ تفعيل GitHub Pages

1. روح لصفحة الـ Repository
2. **Settings** → **Pages**
3. تحت **Source**:
   - اختار **GitHub Actions**
4. اضغط **Save**

#### 7️⃣ انتظر الـ Build

- روح لتاب **Actions** في الـ Repository
- هتلاقي workflow شغال
- استنى لحد ما يخلص (1-2 دقيقة)

#### 8️⃣ افتح الموقع! 🎉

الرابط النهائي:
```
https://USERNAME.github.io/sahabi-musab-ibn-umayr/
```

---

### 🎯 الطريقة الثانية: Build ورفع يدوي (أسرع لكن يدوي)

#### 1️⃣ بناء المشروع محلياً

```powershell
cd "c:\Users\pc\Downloads\القلب السليم قران الكريم\الاتنين 26-1\sahabi-musab-ibn-umayr"

# ثبت الحزم
npm install

# ابنِ المشروع
npm run build
```

هيتم إنشاء مجلد `dist` فيه الملفات الجاهزة.

#### 2️⃣ إنشاء Repository على GitHub

(نفس خطوة 3 من الطريقة الأولى)

#### 3️⃣ رفع ملفات `dist` فقط

```powershell
# ادخل لمجلد dist
cd dist

# إنشاء git repo جديد
git init
git add .
git commit -m "Deploy مصعب بن عمير"

# الرفع (استبدل USERNAME)
git remote add origin https://github.com/USERNAME/sahabi-musab-ibn-umayr.git
git branch -M main
git push -u origin main -f
```

#### 4️⃣ تفعيل Pages

1. **Settings** → **Pages**
2. **Source:** Deploy from a branch
3. **Branch:** main → / (root)
4. **Save**

#### 5️⃣ افتح الموقع

انتظر دقيقة وافتح:
```
https://USERNAME.github.io/sahabi-musab-ibn-umayr/
```

---

## 🌐 بدائل مجانية أخرى

### Vercel (الأسهل والأسرع!)

1. روح https://vercel.com
2. سجل بحساب GitHub
3. اضغط **"New Project"**
4. اختار الـ Repository: `sahabi-musab-ibn-umayr`
5. **Deploy!**
6. هيديك رابط فوراً! ⚡

### Netlify

1. https://netlify.com
2. سجل دخول
3. **Add new site** → **Import an existing project**
4. اختار GitHub → `sahabi-musab-ibn-umayr`
5. Build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
6. **Deploy!**

---

## 📊 مقارنة الطرق

| الطريقة | السهولة | السرعة | التحديث التلقائي |
|---------|---------|---------|------------------|
| **GitHub Actions** | ⭐⭐⭐ | ⭐⭐ | ✅ تلقائي |
| **Build يدوي** | ⭐⭐ | ⭐⭐⭐ | ❌ يدوي |
| **Vercel** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ✅ تلقائي |
| **Netlify** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ✅ تلقائي |

**توصيتي: استخدم Vercel! 🚀**

---

## ❓ أسئلة شائعة

### Q: الموقع فاضي أو مش شغال؟
**A:** 
- تأكد من تعديل `base` في `vite.config.ts`
- تأكد من الـ build نجح
- افتح Developer Tools (F12) وشوف الأخطاء

### Q: عايز أعدل في المشروع؟
**A:**
```powershell
# عدل الكود
# بعدين:
npm run build
git add .
git commit -m "تحديث المشروع"
git push
```

### Q: إزاي أشوف المشروع محلياً قبل الرفع؟
**A:**
```powershell
npm run dev
```
افتح: http://localhost:5173

---

## 📞 محتاج مساعدة؟

لو عندك أي مشكلة في أي خطوة، قولي وهساعدك! 😊
