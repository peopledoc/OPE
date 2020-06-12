function display_type_of_categories(lines, elementId) {
    let categories_h = {}
    let categories_f = {}
    for (let i = 0; i < lines.length; i++) {
        let category = String(lines[i][4]);

        if (!(category in categories_f))
        {
            if (category == '')
                category = 'non définie';
            categories_f[category] = 0;
            categories_h[category] = 0;
        }
        if (lines[i][1] == 'F')
        {
            categories_f[category] += 1;
        }
        else
        {
            categories_h[category] += 1;
        }
    }

    let dataset = [
    { 
        label : 'Femmes',
        data : Object.values(categories_f),
        backgroundColor: '#0D533D'
    },
    {
        label : 'Hommes',
        data : Object.values(categories_h),
        backgroundColor: '#58BBA6'
    }
    ]

    let categories_label = Object.keys(categories_f);

    const ctx = document.getElementById(elementId).getContext('2d');
    new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: categories_label,
            datasets: dataset
        },
        options: {
            scales: {
                yAxes: [{
                    stacked: true
                }]
            }
        }
    });
}

