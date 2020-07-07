var successColor =  getComputedStyle(document.documentElement)
.getPropertyValue('--color-success');

base_image = new Image();
base_image.src = 'https://macorreag.github.io/MovilFront/images/Robot.png';

new Chart(document.getElementById("doughnut-chart"), {
    type: 'doughnut',
    data: {
      datasets: [
        {
            label: ["FIC-A","FIC-B","FIC-C"],
			backgroundColor: ["rgba(88,80,107,0.8)", "rgba(88,80,107,0.75)","rgba(88,80,107,0.65)","rgba(88,80,107,0.55)","rgba(88,80,107,0.45)","rgba(88,80,107,0.35)","rgba(88,80,107,0.25)","rgba(88,80,107,0.18)","rgba(88,80,107,0.15)","rgba(88,80,107,0.09)"],
			hoverBackgroundColor: successColor,
			borderWidth: 2,
			data: [12.5,12.5,12.5,11,12,10,8,7,6,8.5],
			hoverBorderColor: successColor,
            hoverBorderWidth: 8
        }
      ]
    },
    plugins: [{
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = (height / 200).toFixed(2);
          ctx.font = 1.7 + "em Open Sans";
          ctx.fillStyle = "#817699";
          ctx.textBaseline = "middle";
      
          var text = "RoboAdvisor",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
			  textY = height / 2 + 15;
		var text2 = "10 Fondos",
              textX2 = Math.round((width - ctx.measureText(text).width) / 2) + 10 ,
			  textY2 = height/2 + 45 ;
			  
      
		  ctx.fillText(text, textX, textY);
		  ctx.fillText(text2, textX2, textY2);
		  ctx.drawImage(base_image, 110, 100, 90 ,90);
          ctx.save();
        }
    }],
    options: {
        legend: {
            display: false,
          },
          responsive: true,
          maintainAspectRatio: false,
		  cutoutPercentage: 75
    }
});