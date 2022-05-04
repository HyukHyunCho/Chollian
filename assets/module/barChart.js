var barChart = (function(id, type, title, unit, categories, data) {
    
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
            //max: 100,
            //min: 0,
            title: {
                text: title + unit,
                style: {
                    color: '#000'
                }
            }
        },
        // tooltip: {
        //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        //         '<td style="padding:0"><b>{point.y:.1f} ' + unit + ' </b></td></tr>',
        //     footerFormat: '</table>',
        //     shared: true,
        //     useHTML: true
        // },
        // plotOptions: {
        //     column: {
        //         pointPadding: 0.2,
        //         borderWidth: 0
        //     }
        // },
        // legend: {
        //     enabled: true,
        //     layout: 'horizontal',
        //     align: 'left',
        //     verticalAlign: 'bottom',
        //     color: '#6DDCC9',
        //     itemStyle: {
        //         fontSize: '1em',
        //         fontStyle: 'normal',
        //         fontWeight: 'bold',
        //         color: '#000',
        //     },
        //     symbolWidth: 40,
        // },
        series: [{
            name: title + unit,
            data: data,
            color: '#66AAFF',
        }]
    });
})