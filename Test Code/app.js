function buildGraph(sample) {
  const url = "/maxwinds";
  d3.json(url).then(function (data) {
    // console.log(data);
    const names = data.map(entry => entry.name_year);
    const maxwind = data.map(entry => entry.max_wind);
    // console.log(names);
    // console.log(maxwind);    

    const title = `Maximum winds`;
    const trace = {
      x: maxwind,
      y: names,
      type: 'bar',
      orientation: 'h',
      title: title,
      text: maxwind,
    };
    var data = [trace];
    var layout = {
      title: {
        text: title,
        font: {
          size: 12
        },
      },
      font: {
        size: 8,
      },
      xaxis: {
        title: "Maximum winds"
      },
      // yaxis: maxwind,
      width: 400,
      margin: {
        l: 100,
        r: 10,
        b: 100,
        t: 100,
        pad: 10
      }
    };
    Plotly.newPlot("plot", data, layout);
  })
};

buildGraph();

function geoJsonMap(sample) {
  const url = "/cost_by_state";
  // d3.json(url2).then(function(data){
  // console.log(data);
  // const myMap = L.map("geoJsonMap", {
  //   center: [29.75, -95.36],
  //   zoom: 4
  // });
  d3.json(url).then(function (data) {
    console.log(data);

    // Adding a tile layer (the background map image) to our map
    // We use the addTo method to add objects to our map
    // var mapboxAccessToken = API_KEY;

    // var map = L.map('geoJsonMap').setView([37.8, -96], 4);

    const map = L.map("geoJsonMap", {
      center: [29.75, -95.36],
      zoom: 13
    });

    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      maxZoom: 5,
      tileSize: 512,
      id: 'mapbox/streets-v11',
      zoomOffset: -1,
      accessToken: API_KEY
    }).addTo(map);
  })
};

//geoJsonMap();



function mapHurricane(sample) {



  const url = "/jsondata";
  d3.json(url).then(function (data) {
    // console.log(data);


    let hurricaneName = [];
    let hurricaneID;
    let hurricaneYear;
    let latitudes = [];
    let longitudes = [];
    let name;
    let names_years = ["Ables_1950"];
    let name_year;
    // let object = {name_year: coordinates}
    let hurricanes = []
    // let object = {name_year: "", lat: 0, long: 0}


    // let coordinates = [];
    data.forEach((entry, index) => {
      name_year = `${entry.name}_${entry.year}`;
      if (names_years.indexOf(name_year) > -1) {

        // latitudes.push(parseInt(entry.latitude));
        // longitudes.push(parseInt(entry.longitude));
    }
      else {
        new_name_year = `${entry.name}_${entry.year}`;
        names_years.push(new_name_year);
      }

      
      // if (entry.name in hurricaneName) {
        
      //   latitudes.push(parseInt(entry.latitude));
      //   longitudes.push(parseInt(entry.longitude));
      // } else {
      //   hurricaneName.push(entry.name);
      //   console.log(entry.name);
      // }



      // coordinates.push(parseInt(entry.latitude), parseInt(entry.longitude));
      // console.log(coordinates);
      
      // concat the lat and longitude
     
     

    })

    var coordinates = []
    for (var i = 0; i < latitudes.length; i++) {
      coordinates[i] = [latitudes[i], longitudes[i]];
    }
   

    // concat the lat and longitude
   

    // console.log(latitudes);
    // console.log(longitudes);
    // console.log(coordinates);
    // console.log(hurricaneName);
    console.log(names_years);



    // Create an initial map object
    // Set the longitude, latitude, and the starting zoom level
    const myMap = L.map("map").setView([25.07, -70.1], 4);

    // Add a tile layer (the background map image) to our map
    // Use the addTo method to add objects to our map
    L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
      attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
      tileSize: 512,
      maxZoom: 18,
      zoomOffset: -1,
      id: "mapbox/streets-v11",
      accessToken: API_KEY
    }).addTo(myMap);


    // const ableLine = [
    //   [17.02, -55.08],
    //   [17.12, -56.05],
    //   [18.03, -57.07],
    //   [19, -58.1],
    //   [20, -60],
    //   [20.12, -61.02],
    //   [21.05, -62.03],
    //   [22, -63.03],
    //   [22.12, -63.13],
    //   [23.02, -64.1],
    //   [23.07, -65.07],
    //   [23.15, -66],
    //   [24.07, -66.03],
    //   [24.13, -66.08],
    //   [25.03, -66.13],
    //   [25.08, -67.08],
    //   [25.12, -68.02],
    //   [25.12, -68.12],
    //   [25.08, -69.05],
    //   [25.07, -69.13],
    //   [25.07, -70.1],
    //   [25.07, -71.08],
    //   [25.08, -72.1],
    //   [25.15, -73.05],
    //   [26.12, -73.15],
    //   [27.05, -74.07],
    //   [27.15, -74.15],
    //   [28.07, -75.05],
    //   [29.02, -75.08],
    //   [29.15, -75.08],
    //   [30.12, -75.08],
    //   [31.12, -75.08],
    //   [32.13, -75.03],
    //   [34.07, -74.05],
    //   [36, -72.12],
    //   [37.1, -71],
    //   [39.05, -69.07],
    //   [41.03, -67.05],
    //   [43.05, -65],
    //   [44.1, -63.12],
    //   [45.08, -62.1],
    //   [47.15, -59.13],
    //   [50, -56.13],
    //   [52, -53.13],
    //   [53.1, -50.12],
    //   [54.12, -47.12],
    //   [55.05, -44.13],
    //   [55.05, -41.13],
    //   [54.08, -37.12],
    //   [53.08, -33.12],
    //   [52.08, -30.05]
    // ];


    // Create a polyline using the line coordinates and pass in some initial options
    L.polyline(coordinates, {
      color: "red"
    }).addTo(myMap);

  })
}

mapHurricane();