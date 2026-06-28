/* ============================================================
   app.js — الكود اللي بيشغّل صفحة البحث
   ============================================================ */

window.onload = function () {
  const lastAgent = AGENTS[AGENTS.length - 1];
  const footerText = 'Data ' + lastAgent.date + ' · ' + ' BY Eng : Abdelmonem';
  document.getElementById('footerText').innerText = footerText;
};

function lookup() {
  const inputBox = document.getElementById('agentId');
  const enteredId = inputBox.value.trim();

  if (enteredId === '') return;

  let foundAgent = null;
  for (let i = 0; i < AGENTS.length; i++) {
    if (AGENTS[i].id === enteredId) {
      foundAgent = AGENTS[i];
      break;
    }
  }

  if (foundAgent === null) {
    showError();
    return;
  }

  showAgentData(foundAgent);
}

function showAgentData(agent) {
  hideError();

  // البيانات الأساسية
  document.getElementById('agentName').innerText = agent.name;
  document.getElementById('agentIdDisplay').innerText = 'ID: ' + agent.id;
  document.getElementById('resArea').innerText = agent.area;
  document.getElementById('resIqama').innerText = agent.iqama;
  document.getElementById('resDate').innerText = agent.date;

  // التصنيف
  const badge = document.getElementById('resBadge');
  badge.innerText = agent.grade;
  badge.className = 'badge badge-' + agent.grade;

  // إحصائيات التحقق
  document.getElementById('resTotalVerification').innerText = agent.total_verification_requests;
  document.getElementById('resSuccessfulVerification').innerText = agent.successful_verification_requests;
  document.getElementById('resVerificationRate').innerText = agent.verification_success_rate;

  // إحصائيات الطلبات
  document.getElementById('resGrossOrders').innerText = agent.gross_orders;
  document.getElementById('resCompletedOrders').innerText = agent.completed_orders;
  document.getElementById('resCompletedInTime').innerText = agent.completed_orders_in_time;
  document.getElementById('resFailedOrders').innerText = agent.failed_orders_by_rider;

  // مؤشرات الأداء
  document.getElementById('resOnTimeScore').innerText = agent.on_time_delivery_score;
  document.getElementById('resFailRateScore').innerText = agent.fail_rate_score;
  document.getElementById('resFinalScore').innerText = agent.final_delivery_quality_score;

  document.getElementById('resultCard').classList.add('show');
}

function showError() {
  hideResultCard();
  document.getElementById('errorMsg').classList.add('show');
}

function hideError() {
  document.getElementById('errorMsg').classList.remove('show');
}

function hideResultCard() {
  document.getElementById('resultCard').classList.remove('show');
}

function clearResult() {
  hideResultCard();
  hideError();
}

function handleEnterKey(event) {
  if (event.key === 'Enter') {
    lookup();
  }
}
