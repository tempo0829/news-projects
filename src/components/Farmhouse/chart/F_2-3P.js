export default function chartData() {

    return {
        chart: {
            plotBackgroundColor: '',
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            marginTop:20,
            marginBottom: 40,
            backgroundColor: '#273947'
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        title: {
            text: ''
        },
        
        tooltip: {
            enabled:false,
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                pointPadding: 0.1,
                borderWidth: 0,
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    color: '#ababab',
                             style:{
                                 fontSize: '12px',
                                 textOutline: '0px'
                        }
                }
            }
        },
        series: [{
            name: '交易農舍種類',
            colorByPoint: true,
            data: [{
                name: '2006 年之前',
                y: 22.5,
                color:'#ababab'
            }, {
                name: '2006 年之後',
                y: 77.5,
                color:'#ff7b8f',
                sliced: true,
                selected: true
            }]
        }]

    }; //return
}