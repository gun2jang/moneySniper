// import ApexCharts from 'apexcharts'
let ticker = "BTC"
let dataList = []

fetch('/graph/getData/:' + ticker)
    .then(function(res) {
    return res.json();
})
    .then(function(res) {
    // data를 응답 받은 후의 로직
    console.log(res);
    res.graphInfo.forEach(e => {
        dataList.push({
            x: e.time, 
            y: [e.open, e.high, e.low, e.close]
        });
    });
    let options = {
        chart: {
          type: 'candlestick'
        },
        series: [{
            data: dataList,
        }],
        candlestick: {
            colors: {
            upward: '#3C90EB',
            downward: '#DF7D46'
            }
        },
        title: {
            text: "OHLCGraph - BTC",
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
              fontSize:  '20px',
              fontWeight:  'bold',
              fontFamily:  "titillium web",
              color:  '#263238'
            },
        }
      }
      
      let chart = new ApexCharts(document.querySelector("#ohlcvmGraph"), options);
      
      chart.render();
});



