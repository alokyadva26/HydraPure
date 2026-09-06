// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
  // Chart.js Configuration for Water Quality Trends (pH)
  const ctx = document.getElementById('qualityChart').getContext('2d');
  
  const labels = ['27 Aug', '28 Aug', '29 Aug', '30 Aug', '31 Aug', '1 Sep', '2 Sep'];
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'pH Level',
        data: [6.8, 7.1, 7.3, 6.9, 7.4, 7.6, 7.2],
        borderColor: '#0f52ba',
        backgroundColor: '#0f52ba',
        tension: 0.3,
        pointRadius: 3,
        borderWidth: 2
      }
    ]
  };
  
  // Custom plugin to draw the "Acceptable Range (6.5 - 8.5)" background band
  const acceptableRangeBand = {
    id: 'acceptableRangeBand',
    beforeDraw(chart, args, options) {
      const { ctx, chartArea: { top, right, bottom, left, width, height }, scales: { x, y } } = chart;
      ctx.save();
      
      const yTop = y.getPixelForValue(8.5);
      const yBottom = y.getPixelForValue(6.5);
      
      // Draw green band
      ctx.fillStyle = 'rgba(22, 163, 74, 0.1)'; // Light safe green
      ctx.fillRect(left, yTop, width, yBottom - yTop);
      
      ctx.restore();
    }
  };

  // Custom plugin to add the legend at the bottom manually since it's a specific UI
  const customLegend = {
    id: 'customLegend',
    afterDraw(chart, args, options) {
      const { ctx, chartArea: { bottom, left, width } } = chart;
      ctx.save();
      
      ctx.fillStyle = '#64748b'; // Muted text
      ctx.font = '10px Inter';
      ctx.textAlign = 'center';
      
      // Draw legend box
      const boxWidth = 12;
      const boxHeight = 8;
      const text = 'Acceptable Range (6.5 - 8.5)';
      const textWidth = ctx.measureText(text).width;
      
      const startX = left + width / 2 - (boxWidth + 6 + textWidth) / 2;
      const startY = bottom + 25;
      
      ctx.fillStyle = 'rgba(22, 163, 74, 0.2)';
      ctx.fillRect(startX, startY - 8, boxWidth, boxHeight);
      
      ctx.fillStyle = '#64748b';
      ctx.fillText(text, startX + boxWidth + 6 + textWidth / 2, startY);
      
      ctx.restore();
    }
  };
  
  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          top: 10,
          right: 15,
          left: 0,
          bottom: 35
        }
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        }
      },
      scales: {
        y: {
          min: 4,
          max: 10,
          ticks: {
            stepSize: 2,
            color: '#64748b',
            font: { size: 9 },
            padding: 4
          },
          grid: {
            color: '#e2e8f0',
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: '#64748b',
            font: { size: 9 },
            maxRotation: 0,
            autoSkip: false
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
    },
    plugins: [acceptableRangeBand, customLegend]
  };
  
  new Chart(ctx, config);
});
