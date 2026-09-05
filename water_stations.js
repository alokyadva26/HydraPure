// Initialize Lucide icons
lucide.createIcons();

document.addEventListener('DOMContentLoaded', () => {
  // Chart.js Configuration for Parameter Trends (TDS)
  const ctx = document.getElementById('parameterChart').getContext('2d');
  
  const labels = ['27 Aug', '28 Aug', '29 Aug', '30 Aug', '31 Aug', '1 Sep', '2 Sep'];
  
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'TDS',
        data: [260, 210, 300, 260, 310, 350, 310, 290],
        borderColor: '#0f52ba',
        backgroundColor: '#0f52ba',
        tension: 0.3,
        pointRadius: 3,
        borderWidth: 2
      }
    ]
  };
  
  // Custom plugin to draw the horizontal Limit Line
  const horizontalDottedLine = {
    id: 'horizontalDottedLine',
    beforeDraw(chart, args, options) {
      const { ctx, chartArea: { top, right, bottom, left, width, height }, scales: { x, y } } = chart;
      ctx.save();
      
      const yValue = 500; // Limit (500 ppm)
      const yPixel = y.getPixelForValue(yValue);
      
      ctx.beginPath();
      ctx.setLineDash([5, 5]);
      ctx.moveTo(left, yPixel);
      ctx.lineTo(right, yPixel);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#94a3b8'; // Slate-400
      ctx.stroke();
      ctx.restore();
      
      // Draw text label
      ctx.fillStyle = '#64748b'; // Muted text
      ctx.font = '10px Inter';
      ctx.fillText('Limit (500 ppm)', right - 75, yPixel - 8);
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
          top: 15,
          right: 15,
          left: 0,
          bottom: 0
        }
      },
      plugins: {
        legend: {
          display: false // No legend required for this specific single line chart based on ref
        },
        tooltip: {
          mode: 'index',
          intersect: false,
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 800,
          ticks: {
            stepSize: 200,
            color: '#64748b',
            font: {
              size: 10
            },
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
            font: {
              size: 10
            },
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
    plugins: [horizontalDottedLine]
  };
  
  new Chart(ctx, config);
});
