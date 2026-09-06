// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
  // Chart.js Configuration for Water Quality Trends
  const ctx = document.getElementById('qualityChart').getContext('2d');
  
  const labels = ['27 Aug', '28 Aug', '29 Aug', '30 Aug', '31 Aug', '1 Sep', '2 Sep'];
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'TDS (x100 ppm)',
        data: [10, 9.5, 11, 9, 9, 12, 15],
        borderColor: '#0f52ba',
        backgroundColor: '#0f52ba',
        tension: 0.4,
        pointRadius: 4,
        borderWidth: 2
      },
      {
        label: 'Turbidity (NTU)',
        data: [5, 5.5, 6.5, 4, 6.5, 5.5, 5.2],
        borderColor: '#8b5cf6',
        backgroundColor: '#8b5cf6',
        tension: 0.4,
        pointRadius: 4,
        borderWidth: 2
      },
      {
        label: 'pH',
        data: [3.5, 4, 4.5, 3.5, 2, 2.5, 3],
        borderColor: '#0ea5e9',
        backgroundColor: '#0ea5e9',
        tension: 0.4,
        pointRadius: 4,
        borderWidth: 2
      }
    ]
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false // We are using a custom HTML legend below the chart
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 15,
          ticks: {
            stepSize: 5,
            color: '#64748b',
            font: {
              size: 11
            }
          },
          grid: {
            color: '#e2e8f0',
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: '#64748b',
            font: {
              size: 11
            }
          },
          grid: {
            display: false,
            drawBorder: false
          }
        }
      },
      interaction: {
        mode: 'nearest',
        axis: 'x',
        intersect: false
      }
    }
  };
  
  new Chart(ctx, config);
});
