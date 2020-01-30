// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
  /* FREPAP
  ['pe-ic', 7.26],
  ['pe-cs', 7.45],
  ['pe-uc', 23.70],
  ['pe-md', 9.88],
  ['pe-sm', 0],
  ['pe-am', 0],
  ['pe-lo', 10.79],
  ['pe-ay', 7.60],
  ['pe-hv', 6.01],
  ['pe-ju', 10.49],
  ['pe-ca', 8.07],
  ['pe-lr', 11.29],
  ['pe-li', 9.66],
  ['pe-lb', 5.04],
  ['pe-tu', 7.09],
  ['pe-ap', 10.95],
  ['pe-ar', 7.83],
  ['pe-mq', 0],
  ['pe-ta', 12.69],
  ['pe-an', 5.66],
  ['pe-cj', 0],
  ['pe-hc', 9.61],
  ['pe-ll', 8.11],
  ['pe-pa', 7.97],
  ['pe-pi', 0],
  ['pe-pu', 0]*/
  ['pe-ic', 5.44],
  ['pe-cs', 11.79],
  ['pe-uc', 6.25],
  ['pe-md', 15.38],
  ['pe-sm', 6.95],
  ['pe-am', 10.42],
  ['pe-lo', 0],
  ['pe-ay', 24.23],
  ['pe-hv', 15.68],
  ['pe-ju', 9.63],
  ['pe-ca', 0],
  ['pe-lr', 5.65],
  ['pe-li', 0],
  ['pe-lb', 0],
  ['pe-tu', 0],
  ['pe-ap', 12.54],
  ['pe-ar', 18.22],
  ['pe-mq', 9.90],
  ['pe-ta', 17.22],
  ['pe-an', 7.96],
  ['pe-cj', 5.07],
  ['pe-hc', 6.40],
  ['pe-ll', 0],
  ['pe-pa', 7.34],
  ['pe-pi', 0],
  ['pe-pu', 18.57]
];

// Create the chart
Highcharts.mapChart('container', {
  chart: {
    map: 'countries/pe/pe-all'
  },

  title: {
    text: 'Departamentos donde ganó UPP'
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom'
    }
  },
  colorAxis: {
    dataClasses: [{
      from: 0,
      to: 5,
      color: '#fff7ec'
  },{
      from:5,
      to:10,
      color:'#fed98e'
  },{
      from:10,
      to:20,
      color:'#fe9929'
  },{
      from:20,
      color:'#cc4c02'       
  }]
  },
  legend: {
    enabled: true,
    labelFormatter: function () {
      var p = this.name + '%'
        return p
    }
  },
  series: [{
    data: data,
    name: 'Porcentaje: ',
    states: {
      hover: {
        color: '#f67280'
      }
    },
    dataLabels: {
      enabled: true,
      fontSize:"9px",
      format: '{point.name}'
    }
  }]
});
