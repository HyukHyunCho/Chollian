var lineChart = (function(id, type, title, unit, categories, data) {

    Highcharts.chart(id, {
        chart: {
            type: type
        },
        title: {
            text: title + unit,
            align: 'center',
            style: {
                color: '#000'
            }
        },
        credits: {
            enabled: false
        },
        xAxis: {
            categories: categories,
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: title + unit,
                style: {
                    color: '#000'
                }
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:f} ' + unit + ' </b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0
            }
        },
        legend: {
            enabled: true,
            layout: 'horizontal',
            align: 'left',
            verticalAlign: 'bottom',
            color: '#6DDCC9',
            itemStyle: {
                fontSize: '1em',
                fontStyle: 'normal',
                fontWeight: 'bold',
                color: '#000',
            },
            symbolWidth: 40,
        },
        series : [{
            name: title,
            type: 'area',
            data: data,
            lineWidth: 2,
            color: '#66AAFF',
            fillColor: {
                linearGradient: {
                    x1:0, y1:0, x2:0, y2:1
                },
                stops: [
                    [0, 'rgba(102,170,255,0.5)'],
                    [1, 'rgba(0,84,255,0.1)']
                ]
            },
        }]
    });
})

