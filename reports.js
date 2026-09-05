// Initialize Lucide icons
lucide.createIcons();

// ===========================
// DONUT CHART
// ===========================
function drawDonut() {
  const canvas = document.getElementById('statusDonut');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const cx = canvas.width / 2;
  const cy = canvas.height / 2;
  const radius = 50;
  const innerRadius = 32;

  // Data: safe=18, caution=5, blocked=3, total=26
  const total = 26;
  const slices = [
    { value: 18, color: '#16a34a' }, // Safe – green
    { value: 5,  color: '#d97706' }, // Caution – yellow
    { value: 3,  color: '#dc2626' }, // Blocked – red
  ];

  let startAngle = -Math.PI / 2; // Start at top

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  slices.forEach(slice => {
    const sliceAngle = (slice.value / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, startAngle + sliceAngle);
    ctx.closePath();
    ctx.fillStyle = slice.color;
    ctx.fill();
    startAngle += sliceAngle;
  });

  // Cut inner circle (donut hole)
  ctx.beginPath();
  ctx.arc(cx, cy, innerRadius, 0, 2 * Math.PI);
  ctx.fillStyle = '#ffffff';
  ctx.fill();

  // Thin gap lines between slices
  startAngle = -Math.PI / 2;
  slices.forEach(slice => {
    const sliceAngle = (slice.value / total) * 2 * Math.PI;
    ctx.beginPath();
    ctx.moveTo(cx + innerRadius * Math.cos(startAngle), cy + innerRadius * Math.sin(startAngle));
    ctx.lineTo(cx + radius * Math.cos(startAngle), cy + radius * Math.sin(startAngle));
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();
    startAngle += sliceAngle;
  });
}

document.addEventListener('DOMContentLoaded', () => {
  drawDonut();

  // ===========================
  // DATE RANGE MODAL
  // ===========================
  const dateRangeBtn = document.getElementById('date-range-btn');
  const dateModal = document.getElementById('date-modal');
  const modalClose = document.getElementById('modal-close');
  const modalCancel = document.getElementById('modal-cancel');
  const modalApply = document.getElementById('modal-apply');

  function openModal() {
    dateModal.classList.add('open');
  }

  function closeModal() {
    dateModal.classList.remove('open');
  }

  dateRangeBtn.addEventListener('click', openModal);
  modalClose.addEventListener('click', closeModal);
  modalCancel.addEventListener('click', closeModal);

  dateModal.addEventListener('click', (e) => {
    if (e.target === dateModal) closeModal();
  });

  modalApply.addEventListener('click', () => {
    const startDate = document.getElementById('start-date').value;
    const endDate = document.getElementById('end-date').value;

    if (startDate && endDate) {
      const fmt = (d) => {
        const dt = new Date(d);
        return dt.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
      };
      dateRangeBtn.querySelector('span').textContent = `${fmt(startDate)} — ${fmt(endDate)}`;
    }
    closeModal();
    showToast('Date range updated!');
  });

  // ===========================
  // GENERATE REPORT BUTTON
  // ===========================
  const generateBtn = document.getElementById('generate-btn');
  generateBtn.addEventListener('click', () => {
    generateBtn.textContent = '';
    generateBtn.innerHTML = '<span style="display:inline-block;width:14px;height:14px;border:2px solid #fff;border-top-color:transparent;border-radius:50%;animation:spin 0.6s linear infinite;margin-right:6px;"></span> Generating...';
    generateBtn.disabled = true;

    setTimeout(() => {
      generateBtn.innerHTML = '';
      // Re-add icon
      const icon = document.createElement('i');
      icon.setAttribute('data-lucide', 'file-text');
      generateBtn.appendChild(icon);
      generateBtn.appendChild(document.createTextNode(' Generate Report'));
      generateBtn.disabled = false;
      lucide.createIcons();
      showToast('Report generated successfully!');
    }, 1800);
  });

  // ===========================
  // DOWNLOAD BUTTONS
  // ===========================
  document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Downloading report...');
    });
  });

  // ===========================
  // SEARCH BAR (visual)
  // ===========================
  const searchInput = document.querySelector('.search-bar input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      // Visual feedback — highlight border
      const bar = searchInput.closest('.search-bar');
      if (e.target.value.length > 0) {
        bar.style.borderColor = '#0f52ba';
      } else {
        bar.style.borderColor = '';
      }
    });
  }

  // ===========================
  // USER DROPDOWN (visual)
  // ===========================
  const userBtn = document.getElementById('user-btn');
  userBtn.addEventListener('click', () => {
    showToast('User profile options coming soon.');
  });

  // ===========================
  // NOTIFICATION BUTTON
  // ===========================
  const notifBtn = document.getElementById('notif-btn');
  notifBtn.addEventListener('click', () => {
    showToast('You have 3 unread notifications.');
  });
});

// ===========================
// QUICK REPORT ACTIONS
// ===========================
function triggerQuickReport(type) {
  const labels = {
    quality: 'Water Quality Report',
    performance: 'Station Performance Report',
    alerts: 'Alert Summary Report',
    district: 'District-wise Report',
  };
  showToast(`Generating: ${labels[type] || 'Report'}...`);
}

// ===========================
// TOAST HELPER
// ===========================
let toastTimer = null;

function showToast(message) {
  const toast = document.getElementById('toast');
  const msg = document.getElementById('toast-msg');
  msg.textContent = message;
  toast.classList.add('show');
  lucide.createIcons();

  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

// CSS Animation for spinner
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);
