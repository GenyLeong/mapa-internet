// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
  {
    'code':'pe-ic',
    'internet':59.7,
    'menores_30':27.78,
    'color':'#ffffbf'
  },{

    'code':  'pe-cs',
    'internet': 33.6,
    'menores_30':31.26,
    'color':'#ffffbf'
  },{
    'code':  'pe-uc',
    'internet':46.2,
    'menores_30':32.07,
    'color':'#a6d96a'
  },{
    'code':  'pe-md',
    'internet':  52.5,
    'menores_30':29.8,
    'color':'#ffffbf'
},{
  'code':  'pe-sm',
  'internet':35.5,
    'menores_30':30.56,
    'color':'#ffffbf'
},{
  'code':  'pe-am',
  'internet': 26.1,
    'menores_30': 31.77,
    'color':'#a6d96a'
},{
  'code':  'pe-lo',
  'internet':31.8,
    'menores_30':32.27,
    'color':'#a6d96a'
},{
  'code':  'pe-ay',
  'internet': 32.8,
    'menores_30':31.67,
    'color':'#ffffbf'
},{
  'code':  'pe-hv',
  'internet':26.3,
    'menores_30':32.08,
    'color':'#a6d96a'
  },
{
  'code':'pe-ju',
  'internet':41.4,
  'menores_30':30.03,
  'color':'#ffffbf'
},
{
  'code':'pe-lr',
  'internet':53.3,
  'menores_30':26.95,
  'color':'#f46d43'
},{
  'code':'pe-lb',
  'internet':53.4,
  'menores_30':28.57,
  'color':'#ffffbf'
},{
  'code':'pe-tu',
  'internet':61.0,
  'menores_30':27.56,
  'color':'#ffffbf'
},{
  'code':'pe-li',
  'internet':71.0,
  'menores_30': 26.62,
  'color':'#f46d43'
},{
  'code':'pe-ca',
  'internet':70.7,
  'menores_30':27.04,
  'color':'#f46d43'
},{
  'code':'pe-ap',
  'internet':19.2,
  'menores_30':30.55,
  'color':'#ffffbf'
},{
  'code':'pe-ar',
  'internet':57.3,
  'menores_30':26.74,
  'color':'#f46d43'
},
{
  'code':'pe-pu',
  'internet':37.0,
  'menores_30':29.54,
  'color':'#ffffbf'
},{
  'code':'pe-mq',
  'internet':57.3,
  'menores_30':24.52,
  'color':'#f46d43'
},{
  'code':'pe-ta',
  'internet':62.1,
  'menores_30':27.36,
  'color':'#ffffbf'
},{
  'code':'pe-an',
  'internet':48.0,
  'menores_30':27.86,
  'color':'#ffffbf'
},{
  'code':'pe-cj',
  'internet':25.6,
  'menores_30':29.91,
  'color':'#ffffbf'
},{
  'code':'pe-hc',
  'internet':33.6,
  'menores_30':32.12,
  'color':'#a6d96a'
},{
  'code':'pe-ll',
  'internet':56.5,
  'menores_30':29.1,
  'color':'#ffffbf'
},{
  'code':'pe-pa',
  'internet':36.4,
  'menores_30':30.15,
  'color':'#ffffbf'
},{
  'code':'pe-pi',
  'internet':47.1,
  'menores_30':29.16,
  'color': '#ffffbf'
}
];

// Create the chart
Highcharts.mapChart('container', {
  chart: {
    map: 'countries/pe/pe-all'
  },
  title: {
    text: 'Cobertura de internet VS % de población joven por departamento'
  },
  subtitle: {
          text: '<p>Total de electores:  <b>6 791 977</b></p>',
          useHTML:true,
          style: {
              color: '#000',
              fontSize:'12px'
          }
      },
  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom'
    }
  },
  legend: {
    title: {
      text: '% de electores jóvenes en el Perú'
    },
    align: 'left',
    verticalAlign: 'bottom',
    floating: true,
    layout: 'vertical',
    valueDecimals: 0,
    backgroundColor: 'transparent',
    symbolRadius: 0,
    symbolHeight: 12,
    x:-10,
    width: 250,
  },
  mapNavigation: {
     enabled: true
   },
  colorAxis: {
    dataClasses: [{
                    from: 0,
                    to: 27.04,
                    color: '#f46d43',
                    name: 'Menor % menores de 30 años'
                }, {
                    from: 27.04,
                    to: 32.84,
                    color: '#a6d96a',
                    name: 'Mayor % menores de 30 años'
                }]
    },
    tooltip: {
            useHTML: true,
            style: {
                  padding: 0
              }},
  series: [{
    data: data,
    joinBy: ['hc-key', 'code'],
    states: {
      hover: {
        color: '#fdae61'
      }
    },
    tooltip: {
          shared: true,
          useHTML: true,
          pointFormat:  '<span><b>{point.name}</b></span><br>Cobertura de internet: {point.internet}% <br> Población menor de 30 años: {point.menores_30}%'
    },
    dataLabels: {
      enabled: true,
          inside: false,
          overflow: 'none',
          useHTML: true,
          color: '#000',
          borderRadius: 5,
          y: -5,
          x:5,
          style: {
          	fontFamily: 'Helvetica, sans-serif',
          	fontSize: '9px',
            fontWeight: 'normal',
            textShadow: 'none',
            zIndex: 0
          },
      formatter: function () {
      console.log(this.point)
               if (this.point.color == "#f46d43"){
                 return '<h5 class="little-title">'+this.point.name+'</h5><span class="internet">' + this.point.internet + '% </span><span class="menores"> '+this.point.menores_30 + '%</span>'
               }
               if (this.point.color == "#a6d96a"){
                 return '<h5 class="little-title">'+this.point.name+'</h5><span class="internet">' + this.point.internet + '% </span><span class="mayores"> '+this.point.menores_30 + '%</span>'
               }
               else{
                 return '<p class="none-bg">' +this.point.name +'</p>'
               }
           }
    }
  }]
});
