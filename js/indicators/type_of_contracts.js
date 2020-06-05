function display_type_of_contract(lines, elementId) {
    let contracts = {}
    for (let i = 0; i < lines.length; i++) {
        let contract = String(lines[i][8]);
        if (contract in contracts)
        {
            contracts[contract] += 1;
        }
        else
        {
            contracts[contract] = 0;
        }
    }

    let contracts_label = Object.keys(contracts);
    let contracts_value = Object.values(contracts);

    const ctx = document.getElementById(elementId).getContext('2d');
    new Chart(ctx, {
        type: 'horizontalBar',
        data: {
            labels: contracts_label,
            datasets: [{
                data: contracts_value,
                backgroundColor: ['#58BBA6', '#0D533D', '#11533D']
            }]
        }
    });
}

