// Prepare demo data
// Data is joined to map using value of 'hc-key' property by default.
// See API docs for 'joinBy' for more info on linking data and map.
var data = [
  ['pe-ic', 59.7],
  ['pe-cs', 33.6],
  ['pe-uc', 46.2],
  ['pe-md', 52.5],
  ['pe-sm', 35.5],
  ['pe-am', 26.1],
  ['pe-lo', 31.8],
  ['pe-ay', 32.8],
  ['pe-hv', 26.3],
  ['pe-ju', 41.4],
  ['pe-lr', 71.0],
  ['pe-lb', 53.4],
  ['pe-tu', 61.0],
  ['pe-ca', 70.7],
  ['pe-ap', 19.2],
  ['pe-ar', 57.3],
  ['pe-cl', 37.0],
  ['pe-mq', 57.3],
  ['pe-ta', 62.1],
  ['pe-an', 48.0],
  ['pe-cj', 25.6],
  ['pe-hc', 33.6],
  ['pe-ll', 56.5],
  ['pe-pa', 36.4],
  ['pe-pi', 47.1]
];

// Create the chart
Highcharts.mapChart('container', {
  chart: {
    map: 'countries/pe/pe-all'
  },

  title: {
    text: 'Cobertura de internet por departamento'
  },

  mapNavigation: {
    enabled: true,
    buttonOptions: {
      verticalAlign: 'bottom'
    }
  },

  legend: {
    title: {
      text: 'Porcentaje de personas que acceden a internet -2018'
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
    width: 200,
  },
  colorAxis: {
    dataClasses: [{
        from:0,
        to: 19.2,
        name: 'Apurímac (19.2%)'
      },
      {
        from: 19.2,
        to: 25.6,
        name: 'Cajamarca (25.6%)'
      },
      {
        from: 25.6,
        to: 26.1,
        name: 'Amazonas (26.1)'
      },
      {
        from: 26.1,
        to: 26.3,
        name: 'Huancavelica (26.3%)'
      },
      {
        from: 26.3,
        to: 31.8,
        name: 'Loreto (31.8%)'
      },
      {
        from: 31.8,
        to: 32.8,
        name: 'Ayacucho (32.8%)'
      },
      {
        from: 32.8,
        to: 33.6,
        name: 'Cusco (33.6%)'
      },
      {
        from: 33.6,
        to: 33.6,
        name: 'Huanuco (33.6%)'
      },
      {
        from: 33.6,
        to: 35.5,
        name: 'San Martin (35.5%)'
      },
      {
        from: 35.5,
        to: 36.4,
        name: 'Pasco (36.4%)'
      },
      {
        from: 33.6,
        to: 37.0,
        name: 'Puno (37.0%)'
      },
      {
        from: 37.0,
        to: 41.4,
        name: 'Junin (41.4%)'
      },
      {
        from: 41.4,
        to: 46.2,
        name: 'Ucayali (46.2%)'
      },
      {
        from: 46.2,
        to: 47.1,
        name: 'Piura (47.1%)'
      },
      {
        from: 47.1,
        to: 48.0,
        name: 'Ancash (48.0%)'
      },
      {
        from: 48.0,
        to: 52.5,
        name: 'Madre de Dios (52.5%)'
      },
      {
        from: 52.5,
        to: 53.4,
        name: 'Lambayeque (53.4%)'
      },
      {
        from: 53.4,
        to: 56.5,
        name: 'La Libertad (56.5%)'
      },
      {
        from: 56.5,
        to: 57.3,
        name: 'Arequipa (57.3%)'
      },
      {
        from: 57.3,
        to: 57.3,
        name: 'Moquegua (57.3%)'
      },
      {
        from: 57.3,
        to: 59.7,
        name: 'Ica (59.7%)'
      },
      {
        from: 59.7,
        to: 61.0,
        name: 'Tumbes (61.0%)'
      },
      {
        from: 61.0,
        to: 62.1,
        name: 'Tacna (62.1%)'
      },
      {
        from: 62.1,
        to: 70.7,
        name: 'Callao (70.7%)'
      },
      {
        from: 70.7,
        to: 71.0,
        name: 'Lima (71.0%)'
      }
    ]
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
