Highcharts.chart('container', {
chart: {
  type: 'column'
},
title: {
  text: 'PFAS Levels in Ocala'
},
subtitle: {
  text: 'Source: City of Ocala'
},
xAxis: {
  categories: [
    '2019',
    '2020',
    '2021',
    '2022'
  ],
  crosshair: true
},
yAxis: {
  min: 0,
  title: {
    text: 'PFAS Compound Results (ng/l)'
  }
},
tooltip: {
  headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
  pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    '<td style="padding:0"><b>{point.y:.1f} ppt</b></td></tr>',
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
series: [{
  name: 'PFHxS',
  data: [29, 39, 30,49]

}, {
  name: 'PFOS',
  data: [34, 37, 32, 45]

}, {
  name: 'PFOA',
  data: [4.5, 4.3, 5.1, 6.3]

}, {
  name: 'PFHxA',
  data: [11, 10, 13, null]

}]
});
