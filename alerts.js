// Initialize Lucide icons
lucide.createIcons();

// Mock data for alerts
const alertsData = {
  1: {
    title: 'High TDS detected (1500 ppm)',
    location: 'Baghmara \u2013 Station 04',
    time: '02 Sep 2026, 10:15 AM',
    level: 'Critical',
    desc: 'TDS levsdfeffgrgrggggdrgel is 1500 ppm, which is above the acceptable limit (< 500 ppm). Water supply has been automatically blocked to prevent distribution of unsafe water.',
    parameter: 'TDS',
    value: '1500 ppm',
    range: '< 500 ppm',
    status: 'Supply blocked',
    action: 'Automatic valve closed',
    notified: 'Block Officer, Jal Prabandhan Dept.'
  },
  2: {
    title: 'Turbidity above limit (6.2 NTU)',
    location: 'Katras \u2013 Station 02',
    time: '02 Sep 2026, 09:42 AM',
    level: 'Warning',
    desc: 'Turbidity level is 6.2 NTU, slightly above the acceptable limit (< 5 NTU). System is currently under caution mode.',
    parameter: 'Turbidity',
    value: '6.2 NTU',
    range: '< 5 NTU',
    status: 'Caution',
    action: 'Filter backwash initiated',
    notified: 'Maintenance Team'
  },
  3: {
    title: 'System back online',
    location: 'Govindpur \u2013 Station 03',
    time: '02 Sep 2026, 08:30 AM',
    level: 'Info',
    desc: 'The station has successfully rebooted and all parameters are reading normal. Supply has been restored to the village.',
    parameter: 'System Status',
    value: 'Online',
    range: 'N/A',
    status: 'Operational',
    action: 'Supply restored',
    notified: 'None'
  },
  4: {
    title: 'Low pH detected (5.9)',
    location: 'Sindri \u2013 Station 05',
    time: '02 Sep 2026, 07:18 AM',
    level: 'Warning',
    desc: 'pH level dropped to 5.9. Acidic water detected. System is monitoring for automatic neutralization.',
    parameter: 'pH',
    value: '5.9',
    range: '6.5 \u2013 8.5',
    status: 'Monitoring',
    action: 'Dosing pump activated',
    notified: 'Maintenance Team'
  },
  5: {
    title: 'Residual chlorine low (0.1 mg/L)',
    location: 'Lodna \u2013 Station 06',
    time: '02 Sep 2026, 06:55 AM',
    level: 'Critical',
    desc: 'Chlorine levels dropped below safe disinfection threshold. High risk of microbial contamination.',
    parameter: 'Residual Chlorine',
    value: '0.1 mg/L',
    range: '0.2 \u2013 1.0 mg/L',
    status: 'Supply blocked',
    action: 'Chlorine dosing check required',
    notified: 'Maintenance Team, Block Officer'
  },
  6: {
    title: 'Scheduled maintenance completed',
    location: 'Baliapur \u2013 Station 08',
    time: '02 Sep 2026, 06:20 AM',
    level: 'Info',
    desc: 'Monthly routine maintenance on UV filters has been completed successfully.',
    parameter: 'Maintenance',
    value: 'Completed',
    range: 'N/A',
    status: 'Operational',
    action: 'Filters cleaned',
    notified: 'None'
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const alertItems = document.querySelectorAll('.alert-item');
  const detailsBadge = document.getElementById('details-badge');
  const detailsIcon = document.getElementById('details-icon');
  const detailsTitle = document.getElementById('details-title');
  const detailsLocation = document.getElementById('details-location');
  const detailsTimestamp = document.getElementById('details-timestamp');
  const detailsDesc = document.getElementById('details-desc');
  const paramType = document.getElementById('param-type');
  const paramVal = document.getElementById('param-val');
  const paramRange = document.getElementById('param-range');
  const paramStatusDot = document.getElementById('param-status-dot');
  const paramStatus = document.getElementById('param-status');
  const paramAction = document.getElementById('param-action');
  const paramNotified = document.getElementById('param-notified');

  function updateDetails(id) {
    const data = alertsData[id];
    if (!data) return;

    // Update text
    detailsTitle.textContent = data.title;
    detailsLocation.textContent = data.location;
    detailsTimestamp.textContent = data.time;
    detailsDesc.textContent = data.desc;
    paramType.textContent = data.parameter;
    paramVal.textContent = data.value;
    paramRange.textContent = data.range;
    paramStatus.textContent = data.status;
    paramAction.textContent = data.action;
    paramNotified.textContent = data.notified;

    // Update colors based on level
    let colorClass = 'red';
    let bgColorClass = 'var(--color-blocked-bg)';
    if (data.level === 'Warning') {
      colorClass = 'yellow';
      bgColorClass = 'var(--color-caution-bg)';
    } else if (data.level === 'Info') {
      colorClass = 'blue';
      bgColorClass = 'var(--color-info-bg)';
    }

    // Badge
    detailsBadge.className = `badge ${colorClass}`;
    detailsBadge.innerHTML = `<span class="dot"></span> ${data.level}`;
    
    // Huge icon
    detailsIcon.className = `dot ${colorClass} huge`;
    
    // Description bg
    detailsDesc.style.backgroundColor = bgColorClass;
    
    // Status dot
    paramStatusDot.className = `dot ${colorClass}`;
  }

  alertItems.forEach(item => {
    item.addEventListener('click', () => {
      // Remove active class from all
      alertItems.forEach(el => el.classList.remove('active'));
      // Add active to clicked
      item.classList.add('active');
      // Update right panel
      updateDetails(item.getAttribute('data-alert-id'));
    });
  });
});
