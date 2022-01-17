// import ApexCharts from 'apexcharts'
let options = {
    chart: {
      type: 'candlestick'
    },
    series: [{
        data: [{
            x: "2022-01-09",
            y: [51651000,52661000,50770000,51470000]
        },
        {
            x: "2022-01-10",
            y: [51437000,52637000,48866000,50013000]
        },
        {
            x: "2022-01-11",
            y: [50013000,51585000,49744000,50702000]
        },
        {
            x: "2022-01-12",
            y: [50734000,53890000,50580000,53450000]
        },
        {
            x: "2022-01-13",
            y: [53480000,53716000,52765000,52982000]
        },]
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