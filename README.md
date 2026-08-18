# Health Levels — Quick Check

A simple, easy-to-understand web app that shows healthy health parameter ranges based on your age, gender, weight, and height.

When your doctor gives you lab results, this tool helps you understand what your healthy ranges should be—without the medical jargon.

---

## 🚀 Quick Start

### Option 1: Python (Recommended)
```bash
cd /Users/ravindrasingh/Documents/GitHub/HealthCalculator
python3 -m http.server 8000
```
Then open: **http://localhost:8000**

Press `Ctrl+C` to stop the server.

**Port already in use?**
```bash
# Find what's using port 8000
lsof -i :8000

# Kill the process (replace XXXX with PID)
kill XXXX
```

### Option 2: Node.js (if installed)
```bash
cd /Users/ravindrasingh/Documents/GitHub/HealthCalculator
npx http-server -p 8000
```
Then open: **http://localhost:8000**

### Option 3: VSCode Live Server (Best for Development)
1. Install the **Live Server** extension in VSCode
   - Open Extensions (Cmd+Shift+X)
   - Search for "Live Server"
   - Install by Ritwick Dey

2. Right-click on `index.html` → **"Open with Live Server"**

3. Browser opens automatically (usually http://127.0.0.1:5500)

4. Changes to files update instantly ✨

### Option 4: Direct Browser (Limited)
- Simply open `index.html` in your browser
- ⚠️ CSS and JavaScript may not load due to browser security restrictions
- Use Options 1-3 instead for best experience

---

## 📋 Features

✅ **Simple Inputs**
- Age, Gender
- Weight: Choose **kg** or **lbs** independently
- Height: Choose **cm** or **inches** independently
- Mix and match units however you prefer!

✅ **Quick Summary**
- BMI calculation
- BMI Category (Normal, Overweight, Obese, etc.)
- 10-year Heart Risk estimate

✅ **Simple Health Parameter Reference**
- 25+ common health parameters organized by category:
  - Cardiovascular (BP, Heart Rate, Heart Risk)
  - Cholesterol & Lipids (Total, LDL, HDL, Triglycerides)
  - Blood Sugar & Metabolism
  - Thyroid
  - Liver & Kidney Function
  - Blood Counts (RBC, Hemoglobin, WBC, Platelets)
  - Iron & Minerals (Iron, Ferritin, Calcium, Magnesium)
  - Electrolytes (Potassium, Sodium)
  - Vitamins (B12, Folate, Vitamin D)
  - Urine Health
- **Each parameter shows only the healthy range** — simple and easy to understand

✅ **Easy to Understand**
- Click any category to expand/collapse
- Shows typical healthy ranges
- Includes helpful notes for each parameter
- No medical jargon

✅ **Dark Mode Support**
- Automatically adapts to your system theme

---

## 📖 How to Use

1. **Enter Your Information**
   - Age, Gender, Weight, Height
   - Choose metric (kg, cm) or imperial (lbs, in) units

2. **Click "Show Health Levels"**
   - Summary card appears with BMI, Age, Heart Risk
   - Health parameters table loads

3. **Explore Parameters**
   - Click category headers to expand/collapse
   - Each parameter shows:
     - **Range**: Typical healthy values
     - **Notes**: Context about what it means

4. **Share with Your Doctor**
   - Use when reviewing lab reports
   - Ask your doctor which parameters apply to you

---

## ⚠️ Disclaimer

**This is NOT medical advice.**

- These are **generalized** health parameter ranges based on age, gender, weight, and height
- Individual ranges vary significantly based on:
  - Medical history
  - Current medications
  - Genetic factors
  - Underlying conditions
  - Lifestyle factors

**Always consult your doctor, specialist, or healthcare provider** before interpreting lab results or making health decisions.

Use this tool as a **reference** when discussing results with your healthcare provider—not as a diagnostic or treatment guide.

---

## 📁 Files

- `index.html` — Main HTML structure
- `styles.css` — Styling and responsive design
- `script.js` — Health calculations and interactivity
- `README.md` — This file

---

## 🛠 No Installation Required

This is a **static web app** with no backend server, database, or dependencies.
- Pure HTML, CSS, and JavaScript
- Works offline
- No personal data collected
- Can be saved and shared as-is

---

## 💡 Tips

- **Save a copy**: Download all files and open locally anytime
- **Share the link**: If running on a server, share the URL with others
- **Print-friendly**: Use your browser's print feature to save as PDF
- **Bookmark it**: Keep in your browser favorites for quick reference

---

## 📝 License

Open source. Feel free to use, modify, and share.

---

**Questions?** Review the code in the IDE or consult your healthcare provider about specific health parameters.
