/* eslint-disable */
function display_gender_chart(lines, elementId) {
    let data = [0,0]
    for (let i = 0; i < lines.length; i++) {
        data[lines[i][1] == 'F' ? 1 : 0]++;
    }

    const ctx = document.getElementById(elementId).getContext('2d');
    new Chart(ctx, {
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
    });
}

