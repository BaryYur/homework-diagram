var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: 'colors',
            data: [12, 29, 10, 15, 12, 8],
            borderColor:[   
                'rgba(45, 27, 224, 0.6)',
                'rgba(45, 176, 224, 0.6)',
                'rgba(45, 27, 224, 0.6)',
                'rgba(45, 176, 224, 0.6)',
                'rgba(45, 27, 224, 0.6)',
                'rgba(45, 176, 224, 0.6)'
            ],
            pointBorderColor:'rgba(147, 27, 224, 0.9)',
            backgroundColor:'rgba(255, 158, 224, 0.5)',
            borderWidth: 3,
            // borderDash:[50],
            hoverBackgroundColor:[
                'red',
                'blue',
                'yellow',
                'green',
                'purple',
                'orange'
            ],
            showLine:true,
            barPercentage: 0.8,
            minBarLength: 2,
        }],
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }],
        }
    }
});
