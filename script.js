const healthData = {
  "Cardiovascular": {
    "Blood Pressure": { range: "< 120/80 mmHg" },
    "Resting Heart Rate": { range: "60–100 bpm" },
    "Heart Risk (10-Year)": { range: "< 5%" }
  },
  "Cholesterol & Lipids": {
    "Cholesterol (Total)": { range: "< 200 mg/dL" },
    "LDL Cholesterol": { range: "< 100 mg/dL" },
    "HDL Cholesterol": { range: "> 60 mg/dL" },
    "Triglycerides": { range: "< 150 mg/dL" }
  },
  "Blood Sugar & Metabolism": {
    "Blood Sugar (Fasting)": { range: "< 100 mg/dL" },
    "BMI": { range: "18.5–24.9" }
  },
  "Thyroid": {
    "TSH": { range: "0.4–4.0 mIU/L" }
  },
  "Liver & Kidney": {
    "ALT (Liver)": { range: "7–56 U/L (M) / 7–45 U/L (F)" },
    "Creatinine": { range: "0.6–1.2 mg/dL (M) / 0.5–1.1 mg/dL (F)" },
    "GFR": { range: "> 60 mL/min/1.73m²" }
  },
  "Blood Counts": {
    "Red Blood Cells (RBC)": { range: "4.5–5.5M/µL (M) / 4.0–5.0M/µL (F)" },
    "Hemoglobin": { range: "13.5–17.5 g/dL (M) / 12.0–15.5 g/dL (F)" },
    "White Blood Cells (WBC)": { range: "4.5–11.0 K/µL" },
    "Platelets": { range: "150–400 K/µL" }
  },
  "Iron & Minerals": {
    "Serum Iron": { range: "60–170 µg/dL (M) / 50–170 µg/dL (F)" },
    "Ferritin": { range: "30–300 ng/mL (M) / 20–200 ng/mL (F)" },
    "Calcium": { range: "8.5–10.2 mg/dL" },
    "Magnesium": { range: "1.7–2.2 mg/dL" }
  },
  "Electrolytes": {
    "Potassium": { range: "3.5–5.0 mEq/L" },
    "Sodium": { range: "135–145 mEq/L" }
  },
  "Vitamins": {
    "Vitamin B12": { range: "> 400 pg/mL" },
    "Folate": { range: "> 2.7 ng/mL" },
    "Vitamin D": { range: "30–100 ng/mL" }
  },
  "Urine": {
    "Urine pH": { range: "6.0–7.0" },
    "Protein": { range: "None or trace" },
    "Glucose": { range: "None or trace" }
  }
};

const categoryDescriptions = {
  "Cardiovascular": "Heart health and blood pressure. These parameters measure how well your heart is working and whether blood pressure is in a healthy range.",
  "Cholesterol & Lipids": "Blood fats that affect heart health. LDL (bad) should be low, HDL (good) should be high. Total cholesterol and triglycerides should also be controlled.",
  "Blood Sugar & Metabolism": "How your body processes sugar. Fasting blood sugar shows if you're at risk for diabetes. BMI indicates if weight is healthy for your height.",
  "Thyroid": "Thyroid hormone production. TSH controls metabolism. High TSH may mean the thyroid isn't working enough; low TSH may mean it's overactive.",
  "Liver & Kidney": "Organ function and waste filtering. These tests check if your liver and kidneys are processing toxins and maintaining healthy levels properly.",
  "Blood Counts": "Red and white blood cells, and platelets. These show if you have anemia, infections, or clotting issues. Critical for immune function and oxygen delivery.",
  "Iron & Minerals": "Essential minerals for bones, muscles, and nerves. Low iron causes fatigue. Calcium and magnesium are vital for bone health and muscle function.",
  "Electrolytes": "Salts that regulate fluid balance, nerve signals, and heart rhythm. Potassium and sodium are critical—imbalances can be serious.",
  "Vitamins": "Essential nutrients for energy, immunity, and bone health. B12 deficiency causes fatigue. Vitamin D is crucial but many people are deficient.",
  "Urine": "Checks for kidney problems, diabetes, or urinary tract issues. Should have no protein or glucose—their presence indicates a problem."
};

function convertToKg(weight, unit) {
  return unit === "lbs" ? weight / 2.20462 : weight;
}

function convertToCm(height, unit) {
  return unit === "in" ? height * 2.54 : height;
}

function calculateBMI(weight, height) {
  const heightM = height / 100;
  return (weight / (heightM * heightM)).toFixed(1);
}

function getBMICategory(bmi) {
  bmi = parseFloat(bmi);
  if (bmi < 18.5) return { category: "Underweight", color: "warning" };
  if (bmi < 25) return { category: "Normal Weight", color: "good" };
  if (bmi < 30) return { category: "Overweight", color: "warning" };
  if (bmi < 35) return { category: "Obese Class I", color: "risk" };
  if (bmi < 40) return { category: "Obese Class II", color: "risk" };
  return { category: "Obese Class III", color: "risk" };
}

function getHeartRisk(age, gender, weight, height) {
  let risk = 0;

  if (age > 40) risk += (age - 40) * 0.5;
  if (gender === "male") risk += 3;

  const bmi = calculateBMI(weight, height);
  if (bmi > 30) risk += (bmi - 30) * 0.8;
  if (bmi < 18.5) risk += 2;

  if (risk < 5) return { percent: "< 5%", category: "Low", color: "good" };
  if (risk < 7.5) return { percent: "5–7.5%", category: "Moderate", color: "warning" };
  if (risk < 20) return { percent: "7.5–20%", category: "Intermediate", color: "warning" };
  return { percent: "> 20%", category: "High", color: "risk" };
}


function populateCategories() {
  const container = document.getElementById("paramsContainer");
  container.innerHTML = "";

  Object.entries(healthData).forEach(([category, params]) => {
    const categoryDiv = document.createElement("div");
    categoryDiv.className = "param-category open";

    const headerDiv = document.createElement("div");
    headerDiv.className = "category-header";
    headerDiv.innerHTML = `
      <span>${category}</span>
      <span class="toggle-icon">▼</span>
    `;

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "category-items";

    Object.entries(params).forEach(([paramName, data]) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "param-item";
      itemDiv.innerHTML = `
        <div class="param-name">${paramName}</div>
        <div class="param-range">${data.range}</div>
      `;
      itemsDiv.appendChild(itemDiv);
    });

    const toggleIcon = headerDiv.querySelector(".toggle-icon");

    toggleIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      categoryDiv.classList.toggle("open");
    });

    headerDiv.addEventListener("click", (e) => {
      if (e.target !== toggleIcon) {
        openCategoryModal(category);
      }
    });

    categoryDiv.appendChild(headerDiv);
    categoryDiv.appendChild(itemsDiv);
    container.appendChild(categoryDiv);
  });
}

function updateSummary() {
  const age = parseInt(document.getElementById("age").value) || 0;
  const gender = document.getElementById("gender").value;
  let weight = parseFloat(document.getElementById("weight").value) || 0;
  let height = parseFloat(document.getElementById("height").value) || 0;

  const weightUnit = document.getElementById("weightUnit").value;
  const heightUnit = document.getElementById("heightUnit").value;

  weight = convertToKg(weight, weightUnit);
  height = convertToCm(height, heightUnit);

  if (!weight || !height || !age) {
    document.getElementById("bmiVal").textContent = "—";
    document.getElementById("bmiCat").textContent = "—";
    document.getElementById("ageVal").textContent = "—";
    document.getElementById("heartRisk").textContent = "—";
    return;
  }

  const bmi = calculateBMI(weight, height);
  const bmiData = getBMICategory(bmi);
  const risk = getHeartRisk(age, gender, weight, height);

  document.getElementById("bmiVal").textContent = bmi;
  document.getElementById("bmiCat").textContent = bmiData.category;
  document.getElementById("ageVal").textContent = `${age} years`;
  document.getElementById("heartRisk").textContent = `${risk.percent} (${risk.category})`;

  populateCategories();
}

document.getElementById("calcBtn").addEventListener("click", updateSummary);
document.getElementById("resetBtn").addEventListener("click", () => {
  document.getElementById("inputForm").reset();
  document.getElementById("age").value = 30;
  document.getElementById("weight").value = 70;
  document.getElementById("height").value = 170;
  document.getElementById("weightUnit").value = "kg";
  document.getElementById("heightUnit").value = "cm";
  document.getElementById("bmiVal").textContent = "—";
  document.getElementById("bmiCat").textContent = "—";
  document.getElementById("ageVal").textContent = "—";
  document.getElementById("heartRisk").textContent = "—";
  document.getElementById("paramsContainer").innerHTML = "";
});

document.getElementById("age").addEventListener("change", updateSummary);
document.getElementById("gender").addEventListener("change", updateSummary);
document.getElementById("weight").addEventListener("change", updateSummary);
document.getElementById("height").addEventListener("change", updateSummary);
document.getElementById("weightUnit").addEventListener("change", updateSummary);
document.getElementById("heightUnit").addEventListener("change", updateSummary);

function openCategoryModal(category) {
  const modal = document.getElementById("categoryModal");
  const title = document.getElementById("modalTitle");
  const description = document.getElementById("modalDescription");

  title.textContent = category;
  description.textContent = categoryDescriptions[category] || "Information about this health parameter category.";

  modal.classList.add("show");
}

function closeModal() {
  const modal = document.getElementById("categoryModal");
  modal.classList.remove("show");
}

document.querySelector(".close").addEventListener("click", closeModal);
document.getElementById("categoryModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("categoryModal")) {
    closeModal();
  }
});

populateCategories();
