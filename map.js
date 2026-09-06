// ===========================
// STATION DATA
// ===========================
const stationsData = [
  // Dhanbad district
  { id: 1, name: 'Jharia Station',      district: 'Dhanbad', status: 'safe',    x: 392, y: 195,
    ph: '7.2', tds: '310 ppm', turbidity: '1.2 NTU', temp: '24.8 °C',
    location: 'Jharia, Dhanbad', households: '~ 300 households', updated: '02 Sep 2026, 10:22 AM' },
  { id: 2, name: 'Govindpur Station',   district: 'Dhanbad', status: 'caution', x: 408, y: 210,
    ph: '7.6', tds: '430 ppm', turbidity: '4.8 NTU', temp: '25.3 °C',
    location: 'Govindpur, Dhanbad', households: '~ 240 households', updated: '02 Sep 2026, 09:50 AM' },
  { id: 3, name: 'Baghmara Station',    district: 'Dhanbad', status: 'blocked', x: 420, y: 222,
    ph: '5.8', tds: '1500 ppm', turbidity: '7.1 NTU', temp: '26.1 °C',
    location: 'Baghmara, Dhanbad', households: '~ 190 households', updated: '02 Sep 2026, 08:30 AM' },
  { id: 4, name: 'Katras Station',      district: 'Dhanbad', status: 'safe',    x: 375, y: 182,
    ph: '7.1', tds: '290 ppm', turbidity: '1.5 NTU', temp: '24.5 °C',
    location: 'Katras, Dhanbad', households: '~ 280 households', updated: '02 Sep 2026, 10:05 AM' },
  { id: 5, name: 'Nirsa Station',       district: 'Dhanbad', status: 'safe',    x: 445, y: 200,
    ph: '7.3', tds: '320 ppm', turbidity: '1.8 NTU', temp: '25.0 °C',
    location: 'Nirsa, Dhanbad', households: '~ 210 households', updated: '02 Sep 2026, 09:45 AM' },
  { id: 6, name: 'Sindri Station',      district: 'Dhanbad', status: 'caution', x: 400, y: 230,
    ph: '5.9', tds: '460 ppm', turbidity: '4.1 NTU', temp: '25.7 °C',
    location: 'Sindri, Dhanbad', households: '~ 320 households', updated: '02 Sep 2026, 07:18 AM' },
  { id: 7, name: 'Topchanchi Station',  district: 'Dhanbad', status: 'safe',    x: 360, y: 200,
    ph: '7.0', tds: '280 ppm', turbidity: '1.0 NTU', temp: '24.2 °C',
    location: 'Topchanchi, Dhanbad', households: '~ 160 households', updated: '02 Sep 2026, 10:12 AM' },
  { id: 8, name: 'Baliapur Station',    district: 'Dhanbad', status: 'safe',    x: 385, y: 242,
    ph: '7.4', tds: '300 ppm', turbidity: '1.3 NTU', temp: '24.9 °C',
    location: 'Baliapur, Dhanbad', households: '~ 275 households', updated: '02 Sep 2026, 06:20 AM' },
  { id: 9, name: 'Kusunda Station',     district: 'Dhanbad', status: 'blocked', x: 430, y: 245,
    ph: '8.9', tds: '820 ppm', turbidity: '8.2 NTU', temp: '27.0 °C',
    location: 'Kusunda, Dhanbad', households: '~ 140 households', updated: '02 Sep 2026, 06:55 AM' },
  { id: 10, name: 'Lodna Station',      district: 'Dhanbad', status: 'caution', x: 415, y: 255,
    ph: '6.2', tds: '490 ppm', turbidity: '3.9 NTU', temp: '25.5 °C',
    location: 'Lodna, Dhanbad', households: '~ 185 households', updated: '02 Sep 2026, 06:42 AM' },
  // Ranchi district
  { id: 11, name: 'Ranchi Central',     district: 'Ranchi',  status: 'safe',    x: 248, y: 228,
    ph: '7.2', tds: '315 ppm', turbidity: '1.4 NTU', temp: '24.6 °C',
    location: 'Ranchi, Ranchi', households: '~ 500 households', updated: '02 Sep 2026, 10:00 AM' },
  { id: 12, name: 'Kanke Station',      district: 'Ranchi',  status: 'safe',    x: 258, y: 208,
    ph: '7.1', tds: '295 ppm', turbidity: '1.6 NTU', temp: '24.3 °C',
    location: 'Kanke, Ranchi', households: '~ 350 households', updated: '02 Sep 2026, 09:30 AM' },
  // Hazaribagh
  { id: 13, name: 'Hazaribagh Stn',     district: 'Hazaribagh', status: 'safe', x: 325, y: 148,
    ph: '7.3', tds: '280 ppm', turbidity: '1.1 NTU', temp: '23.8 °C',
    location: 'Hazaribagh', households: '~ 420 households', updated: '02 Sep 2026, 09:58 AM' },
  { id: 14, name: 'Barhi Station',      district: 'Hazaribagh', status: 'safe', x: 305, y: 132,
    ph: '7.0', tds: '270 ppm', turbidity: '1.2 NTU', temp: '23.5 °C',
    location: 'Barhi, Hazaribagh', households: '~ 260 households', updated: '02 Sep 2026, 09:40 AM' },
  // Bokaro
  { id: 15, name: 'Bokaro Steel Stn',   district: 'Bokaro',  status: 'caution', x: 370, y: 222,
    ph: '6.4', tds: '440 ppm', turbidity: '4.5 NTU', temp: '25.9 °C',
    location: 'Bokaro', households: '~ 390 households', updated: '02 Sep 2026, 08:50 AM' },
  // Giridih
  { id: 16, name: 'Giridih Station',    district: 'Giridih', status: 'safe',    x: 355, y: 152,
    ph: '7.4', tds: '305 ppm', turbidity: '1.3 NTU', temp: '24.1 °C',
    location: 'Giridih', households: '~ 310 households', updated: '02 Sep 2026, 10:08 AM' },
  // Dumka
  { id: 17, name: 'Dumka Station',      district: 'Dumka',   status: 'safe',    x: 448, y: 172,
    ph: '7.1', tds: '285 ppm', turbidity: '1.0 NTU', temp: '24.0 °C',
    location: 'Dumka', households: '~ 345 households', updated: '02 Sep 2026, 09:55 AM' },
  // Palamu
  { id: 18, name: 'Medininagar Stn',    district: 'Palamu',  status: 'safe',    x: 185, y: 152,
    ph: '7.2', tds: '295 ppm', turbidity: '1.5 NTU', temp: '24.7 °C',
    location: 'Medininagar, Palamu', households: '~ 280 households', updated: '02 Sep 2026, 09:35 AM' },
  // Latehar
  { id: 19, name: 'Latehar Station',    district: 'Latehar', status: 'safe',    x: 210, y: 190,
    ph: '7.0', tds: '275 ppm', turbidity: '1.1 NTU', temp: '24.0 °C',
    location: 'Latehar', households: '~ 200 households', updated: '02 Sep 2026, 09:20 AM' },
  // Gumla
  { id: 20, name: 'Gumla Station',      district: 'Gumla',   status: 'blocked', x: 200, y: 298,
    ph: '9.1', tds: '680 ppm', turbidity: '6.8 NTU', temp: '26.5 °C',
    location: 'Gumla', households: '~ 230 households', updated: '02 Sep 2026, 07:05 AM' },
  // Simdega
  { id: 21, name: 'Simdega Station',    district: 'Simdega', status: 'safe',    x: 196, y: 348,
    ph: '7.1', tds: '288 ppm', turbidity: '1.4 NTU', temp: '24.5 °C',
    location: 'Simdega', households: '~ 195 households', updated: '02 Sep 2026, 09:48 AM' },
  // Khunti
  { id: 22, name: 'Khunti Station',     district: 'Khunti',  status: 'safe',    x: 253, y: 285,
    ph: '7.3', tds: '305 ppm', turbidity: '1.6 NTU', temp: '24.8 °C',
    location: 'Khunti', households: '~ 215 households', updated: '02 Sep 2026, 09:52 AM' },
  // East Singhbhum
  { id: 23, name: 'Jamshedpur Stn',     district: 'East Singhbhum', status: 'caution', x: 398, y: 312,
    ph: '6.5', tds: '415 ppm', turbidity: '3.8 NTU', temp: '25.4 °C',
    location: 'Jamshedpur, East Singhbhum', households: '~ 480 households', updated: '02 Sep 2026, 08:45 AM' },
  // West Singhbhum
  { id: 24, name: 'Chaibasa Station',   district: 'West Singhbhum', status: 'safe', x: 278, y: 338,
    ph: '7.2', tds: '295 ppm', turbidity: '1.3 NTU', temp: '24.6 °C',
    location: 'Chaibasa, West Singhbhum', households: '~ 305 households', updated: '02 Sep 2026, 10:02 AM' },
  // Chatra
  { id: 25, name: 'Chatra Station',     district: 'Chatra',  status: 'safe',    x: 258, y: 110,
    ph: '7.0', tds: '275 ppm', turbidity: '1.2 NTU', temp: '23.9 °C',
    location: 'Chatra', households: '~ 245 households', updated: '02 Sep 2026, 09:42 AM' },
  // Lohardaga
  { id: 26, name: 'Lohardaga Station',  district: 'Lohardaga', status: 'safe',  x: 213, y: 253,
    ph: '7.1', tds: '285 ppm', turbidity: '1.3 NTU', temp: '24.3 °C',
    location: 'Lohardaga', households: '~ 220 households', updated: '02 Sep 2026, 09:38 AM' },
];

// Color map
const STATUS_COLORS = { safe: '#16a34a', caution: '#d97706', blocked: '#dc2626' };
const STATUS_LABELS  = { safe: 'Operational', caution: 'Caution', blocked: 'Blocked' };
const STATUS_BADGE_CLASS = { safe: 'safe-badge', caution: 'caution-badge', blocked: 'blocked-badge' };

let selectedId = 1;
let currentScale = 1;
let filteredIds = stationsData.map(s => s.id);

// ===========================
// RENDER SVG MARKERS
// ===========================
function renderMarkers() {
  const g = document.getElementById('station-markers');
  if (!g) return;
  g.innerHTML = '';

  stationsData.forEach(station => {
    const visible = filteredIds.includes(station.id);
    const isSelected = station.id === selectedId;

    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', station.x);
    circle.setAttribute('cy', station.y);
    circle.setAttribute('r', isSelected ? 9 : 7);
    circle.setAttribute('fill', STATUS_COLORS[station.status]);
    circle.setAttribute('stroke', isSelected ? '#0f52ba' : 'white');
    circle.setAttribute('stroke-width', isSelected ? 2.5 : 1.5);
    circle.setAttribute('class', 'marker-circle' + (isSelected ? ' selected-marker' : ''));
    circle.style.cursor = 'pointer';
    circle.style.display = visible ? '' : 'none';
    circle.style.opacity = visible ? '1' : '0';
    circle.title = station.name;

    circle.addEventListener('click', () => selectStation(station.id));

    // Tooltip text
    const title = document.createElementNS('http://www.w3.org/2000/svg', 'title');
    title.textContent = station.name + ' – ' + STATUS_LABELS[station.status];
    circle.appendChild(title);

    g.appendChild(circle);
  });
}

// ===========================
// RENDER STATION LIST
// ===========================
function renderStationList() {
  const list = document.getElementById('station-list');
  if (!list) return;
  list.innerHTML = '';

  const visible = stationsData.filter(s => filteredIds.includes(s.id));

  if (visible.length === 0) {
    list.innerHTML = '<div style="padding:16px;text-align:center;font-size:12px;color:#64748b;">No stations found.</div>';
    return;
  }

  visible.forEach(station => {
    const row = document.createElement('div');
    row.className = 'station-row' + (station.id === selectedId ? ' active' : '');
    row.setAttribute('data-id', station.id);

    row.innerHTML = `
      <span class="row-dot" style="background:${STATUS_COLORS[station.status]}"></span>
      <div class="row-info">
        <div class="row-name">${station.name}</div>
        <div class="row-district">${station.district}</div>
      </div>
      <span class="row-status ${station.status}">${STATUS_LABELS[station.status]}</span>
      <svg class="row-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    `;

    row.addEventListener('click', () => selectStation(station.id));
    list.appendChild(row);
  });
}

// ===========================
// SELECT STATION
// ===========================
function selectStation(id) {
  selectedId = id;
  const station = stationsData.find(s => s.id === id);
  if (!station) return;

  // Update station card
  document.getElementById('station-name').textContent = station.name;
  document.getElementById('station-location').textContent = station.location;
  document.getElementById('station-households').textContent = station.households;
  document.getElementById('param-ph').textContent = station.ph;
  document.getElementById('param-tds').textContent = station.tds;
  document.getElementById('param-turbidity').textContent = station.turbidity;
  document.getElementById('param-temp').textContent = station.temp;
  document.getElementById('station-updated').textContent = 'Last Updated: ' + station.updated;

  // Update badge
  const badge = document.getElementById('station-status-badge');
  badge.className = 'status-badge ' + STATUS_BADGE_CLASS[station.status];
  const dotColor = STATUS_COLORS[station.status];
  badge.innerHTML = `<span class="status-dot-sm" style="background:${dotColor}"></span> ${STATUS_LABELS[station.status]}`;

  // Re-render
  renderMarkers();
  renderStationList();
}

// ===========================
// FILTERS
// ===========================
function applyFilters() {
  const searchText = document.getElementById('station-search').value.toLowerCase();
  const districtFilter = document.getElementById('district-filter').value;
  const statusFilter = document.getElementById('status-filter').value;

  filteredIds = stationsData
    .filter(s => {
      const matchSearch = s.name.toLowerCase().includes(searchText) ||
                          s.district.toLowerCase().includes(searchText) ||
                          s.location.toLowerCase().includes(searchText);
      const matchDistrict = !districtFilter || s.district === districtFilter;
      const matchStatus = !statusFilter || s.status === statusFilter;
      return matchSearch && matchDistrict && matchStatus;
    })
    .map(s => s.id);

  // Count badge
  document.querySelector('.count-badge').textContent = filteredIds.length;

  renderMarkers();
  renderStationList();
}

// ===========================
// ZOOM CONTROLS
// ===========================
function initZoom() {
  const wrapper = document.getElementById('map-svg-wrapper');
  const zoomIn = document.getElementById('zoom-in');
  const zoomOut = document.getElementById('zoom-out');

  zoomIn.addEventListener('click', () => {
    currentScale = Math.min(currentScale + 0.2, 2.5);
    wrapper.style.transform = `scale(${currentScale})`;
  });

  zoomOut.addEventListener('click', () => {
    currentScale = Math.max(currentScale - 0.2, 0.6);
    wrapper.style.transform = `scale(${currentScale})`;
  });
}

// ===========================
// GLOBAL SEARCH (header)
// ===========================
function initGlobalSearch() {
  const input = document.getElementById('global-search');
  const stationSearch = document.getElementById('station-search');
  if (input && stationSearch) {
    input.addEventListener('input', (e) => {
      stationSearch.value = e.target.value;
      applyFilters();
    });
  }
}

// ===========================
// TOAST
// ===========================
let toastTimer = null;
function showToast(msg) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

// ===========================
// INIT
// ===========================
document.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();

  renderMarkers();
  renderStationList();
  initZoom();
  initGlobalSearch();

  // Station search
  document.getElementById('station-search').addEventListener('input', applyFilters);
  document.getElementById('district-filter').addEventListener('change', applyFilters);
  document.getElementById('status-filter').addEventListener('change', applyFilters);

  // Notification
  document.getElementById('notif-btn').addEventListener('click', () => {
    showToast('You have 3 unread notifications.');
    lucide.createIcons();
  });

  // User
  document.getElementById('user-btn').addEventListener('click', () => {
    showToast('User profile options coming soon.');
    lucide.createIcons();
  });
});
