document.addEventListener('DOMContentLoaded', (event) => {
  storage = window.localStorage
  lines = storage.getItem('lines')
  lines = JSON.parse(lines)
  display_gender_chart(lines)
})


function display_gender_chart(lines) {
    var data = [0,0]
    for (var i = 0; i < lines.length; i++) {
        data[lines[i][1] == 'F' ? 1 : 0]++;
    }

    var ctx = document.getElementById('gender_distribution').getContext('2d');
    var myDoughnutChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                'data': data,
                'backgroundColor': ['#58BBA6', '#0D533D']
            }],

            labels: [
                'Hommes',
                'Femmes',
            ]
        },
        // options: options
    });
}
