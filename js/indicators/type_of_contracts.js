function display_type_of_contract(lines, elementId) {
    let contracts_h = {}
    let contracts_f = {}
    for (let i = 0; i < lines.length; i++) {
        let contract = String(lines[i][8]);

        if (!(contract in contracts_f))
        {
            contracts_f[contract] = 0;
            contracts_h[contract] = 0;
        }
        if (lines[i][1] == 'F')
        {
            contracts_f[contract] += 1;
        }
        else
        {
            contracts_h[contract] += 1;
        }
    }

    let dataset = [
    { 
        label : 'Femmes',
        data : Object.values(contracts_f),
        backgroundColor: '#0D533D'
    },
    {
        label : 'Hommes',
        data : Object.values(contracts_h),
        backgroundColor: '#58BBA6'
    }
    ]

    let contracts_label = Object.keys(contracts_f);

    const ctx = document.getElementById(elementId).getContext('2d');
    new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: contracts_label,
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

