var chartProgress = document.getElementById("chartProgress");
if (chartProgress) {
  var myChartCircle = new Chart(chartProgress, {
    type: 'doughnut',
    data: {
      labels: ["Dinero Ahorrado", 'Dinero Restante'],
      datasets: [{
        label: "Viaje a islas Canarias",
        backgroundColor: ["#54D1ED"],
        data: [20, 100]
      }]
    },
    plugins: [{
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 80).toFixed(2);
        ctx.font = "bold " + fontSize + "em sans-serif";
        ctx.fillStyle = "#54D1ED";
        ctx.textBaseline = "middle";
    
        var text = "20%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
  }],
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 70
    }

  });

  
}


var chartProgress = document.getElementById("chartProgress2");
if (chartProgress) {
  var myChartCircle = new Chart(chartProgress, {
    type: 'doughnut',
    data: {
      labels: ["Dinero Ahorrado", 'Dinero Restante'],
      datasets: [{
        label: "MacBook Pro",
        backgroundColor: ["#54D1ED"],
        data: [1, 100]
      }]
    },
    plugins: [{
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 80).toFixed(2);
        ctx.font = "bold " + fontSize + "em sans-serif";
        ctx.fillStyle = "#54D1ED";
        ctx.textBaseline = "middle";
    
        var text = "0%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
  }],
    options: {
      legend: {
        display: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 70
    }

  });

  
}