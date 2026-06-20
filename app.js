/* ============================================================
   app.js — الكود اللي بيشغّل صفحة البحث
   ============================================================
   البيانات نفسها (AGENTS) موجودة في ملف data.js
   هنا بس فيه 3 خطوات بسيطة:
   1) لما حد يدوس على الزرار، ناخد الـ ID اللي كتبه
   2) ندور عليه جوه AGENTS
   3) لو لقيناه نعرض بياناته، لو مش موجود نعرض رسالة خطأ
   ============================================================ */

// لما الصفحة تفتح، نكتب تحت عدد المندوبين وتاريخ آخر تحديث
window.onload = function () {
  const lastAgent = AGENTS[AGENTS.length - 1];
  const footerText = 'Data ' + lastAgent.date + ' · ' + ' BY Eng : Abdelmonem';
  document.getElementById('footerText').innerText = footerText;
};

// الدالة دي بتشتغل لما المستخدم يدوس زرار "عرض بياناتي"
function lookup() {
  // الخطوة 1: ناخد القيمة اللي المستخدم كتبها في صندوق البحث
  const inputBox = document.getElementById('agentId');
  const enteredId = inputBox.value.trim(); // trim() بتشيل المسافات الزيادة

  // لو الصندوق فاضي، منعملش حاجة
  if (enteredId === '') {
    return;
  }

  // الخطوة 2: ندور على المندوب اللي رقمه يطابق اللي اتكتب
  let foundAgent = null; // هنا هنحط المندوب لو لقيناه

  for (let i = 0; i < AGENTS.length; i++) {
    if (AGENTS[i].id === enteredId) {
      foundAgent = AGENTS[i];
      break; // لقيناه، مفيش داعي نكمل البحث
    }
  }

  // الخطوة 3: لو ملقيناهوش، نعرض رسالة خطأ ونوقف
  if (foundAgent === null) {
    showError();
    return;
  }

  // لو لقيناه، نعرض بياناته على الشاشة
  showAgentData(foundAgent);
}

// الدالة دي بتعرض بيانات المندوب على الشاشة
function showAgentData(agent) {
  // نخفي رسالة الخطأ لو كانت ظاهرة
  hideError();

  // نملأ كل صندوق بالبيانات بتاعته
  document.getElementById('agentName').innerText = agent.name;
  document.getElementById('agentIdDisplay').innerText = 'ID: ' + agent.id;
  document.getElementById('resArea').innerText = agent.area;
  document.getElementById('resIqama').innerText = agent.iqama;
  document.getElementById('resDate').innerText = agent.date;

  // الفئة (A, B, C...) عندها لون مختلف لكل حرف
  const badge = document.getElementById('resBadge');
  badge.innerText = agent.grade;
  badge.className = 'badge badge-' + agent.grade; // مثال: badge-A أو badge-B

  // أخيراً نظهر كارت النتيجة (كان مخفي قبل كده)
  const resultCard = document.getElementById('resultCard');
  resultCard.classList.add('show');
}

// تظهر رسالة "الرقم غير موجود"
function showError() {
  hideResultCard();
  document.getElementById('errorMsg').classList.add('show');
}

// تخفي رسالة الخطأ
function hideError() {
  document.getElementById('errorMsg').classList.remove('show');
}

// تخفي كارت النتيجة
function hideResultCard() {
  document.getElementById('resultCard').classList.remove('show');
}

// لما المستخدم يبدأ يكتب رقم جديد، نخفي النتيجة القديمة والخطأ
function clearResult() {
  hideResultCard();
  hideError();
}

// لما المستخدم يدوس Enter بدل ما يدوس على الزرار
function handleEnterKey(event) {
  if (event.key === 'Enter') {
    lookup();
  }
}
