// Initialize Lucide icons
lucide.createIcons();

// ===========================
// TOAST HELPER
// ===========================
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  lucide.createIcons();
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2800);
}

// ===========================
// TABS
// ===========================
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const tab = btn.getAttribute('data-tab');
    // Placeholder feedback for non-profile tabs
    if (tab !== 'profile') {
      showToast(`${btn.textContent.trim()} settings coming soon.`);
    }
  });
});

// ===========================
// SAVE PROFILE
// ===========================
document.getElementById('save-profile-btn').addEventListener('click', () => {
  const name = document.getElementById('inp-name').value;
  if (!name.trim()) { showToast('Name cannot be empty.'); return; }
  showToast('Profile saved successfully!');
});

// ===========================
// CHANGE PHOTO
// ===========================
document.getElementById('change-photo-btn').addEventListener('click', () => {
  document.getElementById('photo-input').click();
});
document.getElementById('photo-input').addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (!file) return;
  if (file.size > 2 * 1024 * 1024) {
    showToast('File too large. Max 2MB allowed.'); return;
  }
  showToast('Profile photo updated!');
});

// ===========================
// PASSWORD VISIBILITY TOGGLES
// ===========================
document.querySelectorAll('.eye-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const input = document.getElementById(targetId);
    if (!input) return;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    const icon = btn.querySelector('i');
    icon.setAttribute('data-lucide', isPassword ? 'eye-off' : 'eye');
    lucide.createIcons();
  });
});

// ===========================
// UPDATE PASSWORD
// ===========================
document.getElementById('update-pwd-btn').addEventListener('click', () => {
  const cur = document.getElementById('inp-cur-pw').value;
  const nw  = document.getElementById('inp-new-pw').value;
  const cnf = document.getElementById('inp-conf-pw').value;

  if (!cur) { showToast('Please enter your current password.'); return; }
  if (nw.length < 8) { showToast('New password must be at least 8 characters.'); return; }
  if (nw !== cnf) { showToast('Passwords do not match.'); return; }

  // Clear fields
  document.getElementById('inp-cur-pw').value = '';
  document.getElementById('inp-new-pw').value = '';
  document.getElementById('inp-conf-pw').value = '';

  showToast('Password updated successfully!');
});

// ===========================
// EDIT ORGANIZATION
// ===========================
let orgEditing = false;
document.getElementById('edit-org-btn').addEventListener('click', () => {
  orgEditing = !orgEditing;
  const btn = document.getElementById('edit-org-btn');
  if (orgEditing) {
    btn.innerHTML = '<i data-lucide="check"></i> Save';
    lucide.createIcons();
    showToast('Organization details are now editable.');
  } else {
    btn.innerHTML = '<i data-lucide="pencil"></i> Edit';
    lucide.createIcons();
    showToast('Organization details saved.');
  }
});

// ===========================
// PREFERENCE TOGGLES — already functional via CSS
// No additional JS needed; provide feedback on change
// ===========================
document.querySelectorAll('.toggle-switch input').forEach(toggle => {
  toggle.addEventListener('change', () => {
    const label = toggle.closest('.toggle-item').querySelector('.toggle-label').textContent;
    const state = toggle.checked ? 'enabled' : 'disabled';
    showToast(`${label} ${state}.`);
  });
});

// ===========================
// QUICK ACTIONS
// ===========================
document.getElementById('qa-export').addEventListener('click', () => {
  showToast('Preparing your data export... You will receive an email shortly.');
});

document.getElementById('qa-delete').addEventListener('click', () => {
  showConfirmModal();
});

document.getElementById('qa-logout').addEventListener('click', () => {
  showToast('Logging you out...');
  setTimeout(() => { window.location.href = 'index.html'; }, 1500);
});

// ===========================
// DANGER ZONE — Delete Account Button
// ===========================
document.getElementById('delete-account-btn').addEventListener('click', () => {
  showConfirmModal();
});

// ===========================
// CONFIRM MODAL
// ===========================
function showConfirmModal() {
  document.getElementById('confirm-modal').classList.add('open');
}

document.getElementById('confirm-cancel').addEventListener('click', () => {
  document.getElementById('confirm-modal').classList.remove('open');
});

document.getElementById('confirm-delete').addEventListener('click', () => {
  document.getElementById('confirm-modal').classList.remove('open');
  showToast('Account deletion requested. You will receive a confirmation email.');
});

document.getElementById('confirm-modal').addEventListener('click', (e) => {
  if (e.target === document.getElementById('confirm-modal')) {
    document.getElementById('confirm-modal').classList.remove('open');
  }
});

// ===========================
// USER DROPDOWN
// ===========================
document.getElementById('user-btn').addEventListener('click', () => {
  showToast('User settings panel coming soon.');
});

// ===========================
// SEARCH BAR (visual highlight)
// ===========================
const searchInput = document.querySelector('.search-bar input');
if (searchInput) {
  searchInput.addEventListener('focus', () => {
    searchInput.closest('.search-bar').style.borderColor = '#0f52ba';
  });
  searchInput.addEventListener('blur', () => {
    searchInput.closest('.search-bar').style.borderColor = '';
  });
}
