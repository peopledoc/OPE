============
Contributing
============

Installation
------------

Nothing to install ! This project uses onyl vanilla js
and simple html so just open `index.html` in your favorite
browser. 
Unless it's Internet Explorer, you can install Chrome, Firefox or Edge for compatibility 

Adding a new indicator
----------------------

Create a new JavaScript file in `/js/indicators`.

```html
gender_distribution.js
```

Import that file in `dashboard.html`

```html
<script type="text/javascript" src="js/indicators/gender_distribution.js"></script>
```

Further in  `dashboard.html`, edit or create a new card:

```html
<div class="cell">
    <a href="data-details.html">
        <div class="mdc-card">
            <h2>Distribution selon le genre</h2>
            <div class="dataviz">
                 <canvas id="gender_distribution" ></canvas>
            </div>
        </div>
    </a>
</div>
```

Chose a unique canvas id, fill in the title in the `h2`. 
(The link to the detail page will be personalized in the future but that part is not set up yet)

In `ope.js`, add a line to call the function that will draw your new indicator chart:

```JavaScript
display_gender_chart(lines, 'gender_distribution');
```
The second argument is the canvas id you chose earlier.
The name of the function should be unique amongst all indicators functions.

In the JavaScript file you created earlier, create the actual function.

```JavaScript
function display_gender_chart(lines, elementId) {

    // First exploit the data in lines parameter to build 
    // data for your indicator
    let data = [0,0]
    for (let i = 0; i < lines.length; i++) {
        data[lines[i][1] == 'F' ? 1 : 0]++;
    }
    
    // Then use a chart.js object to draw a chart, see https://www.chartjs.org/docs/latest/charts/
    // But actually avoid using pie or doughnut charts, it's not the most readable
    // better exemples soon!
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
```
 
When you change a file, reload the page in your browser (`F5`),
and check for JS errors your browser console if something is wrong.

Have fun! 





