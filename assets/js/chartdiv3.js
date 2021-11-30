am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv3");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: true,
      panY: true,
      wheelX: "panX",
      wheelY: "zoomX"
    }));
    
    
    // Add cursor
    // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "none"
    }));
    cursor.lineY.set("visible", true);
    
    
    // The data
    var data = [{
      "year": "2006",
      "overall ranking": 63,
      "econ": 53,
      "edu": 77,
      "health":114,
      "political":52
    }, {
        "year": "2007",
        "overall ranking": 73,
        "econ": 60,
        "edu": 91,
        "health":124,
        "political":59
    }, {
      "year": "2008",
      "overall ranking": 57,
      "econ": 43,
      "edu": 87,
      "health":126,
      "political":54
    }, {
        "year": "2009",
        "overall ranking": 60,
        "econ": 38,
        "edu": 87,
        "health":130,
        "political":60
    }, {
        "year": "2010",
        "overall ranking": 61,
        "econ": 46,
        "edu": 88,
        "health":133,
        "political":56
    }, {
        "year": "2011",
        "overall ranking": 61,
        "econ": 50,
        "edu": 85,
        "health":133,
        "political":57
    }, {
      "year": "2012",
      "overall ranking": 69,
      "econ": 58,
      "edu": 85,
      "health":132,
      "political":58
    }, {
        "year": "2013",
        "overall ranking": 69,
        "econ": 62,
        "edu": 81,
        "health":133,
        "political":59
    }, {
        "year": "2014",
        "overall ranking": 87,
        "econ": 76,
        "edu": 89,
        "health":140,
        "political":72
    }, {
        "year": "2015",
        "overall ranking": 91,
        "econ": 81,
        "edu": 83,
        "health":145,
        "political":73
    }, {
        "year": "2016",
        "overall ranking": 99,
        "econ": 81,
        "edu": 99,
        "health":144,
        "political":74
    }, {
        "year": "2017",
        "overall ranking": 100,
        "econ": 86,
        "edu": 102,
        "health":144,
        "political":77
    }, {
        "year": "2018",
        "overall ranking": 103,
        "econ": 86,
        "edu": 111,
        "health":149,
        "political":78
    }, {
        "year": "2019",
        "overall ranking": 106,
        "econ": 91,
        "edu": 100,
        "health":153,
        "political":95
    }, {
        "year": "2020",
        "overall ranking": 107,
        "econ": 69,
        "edu": 103,
        "health":156,
        "political":118
    }];
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      startLocation: 0.1,
      endLocation: 0.9,
      renderer: am5xy.AxisRendererX.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    xAxis.data.setAll(data);
    
    var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        min:0,
        max:800,
        interval: 20,
      renderer: am5xy.AxisRendererY.new(root, {})
    }));
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    
    function createSeries(name, field) {
      var series = chart.series.push(am5xy.LineSeries.new(root, {
        name: name,
        xAxis: xAxis,
        yAxis: yAxis,
        stacked:true,
        valueYField: field,
        categoryXField: "year",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[bold]{name}[/]\n{categoryX}: {valueY}",
        })
      }));
    
      //series.fills.template.setAll({
     //   fillOpacity: 0.5,
      //  visible: true
     // });
    
      series.data.setAll(data);
      //series.appear(1000);
    }
        
    chart.set("background", am5.Rectangle.new(root, {
        stroke: am5.color(0xFFFFFF),
        strokeOpacity: 1,
        strokeWeight:10,
        fill: am5.color(0xFFFFFF),
        fillOpacity: 0.8
      }));

    chart.topAxesContainer.children.push(am5.Label.new(root, {
        text: "China's ranking change in the world equal rights list,2006-2021",
        fontSize: 20,
        fontWeight: "400",
        x: am5.p50,
        centerX: am5.p50
      }));
      
    createSeries("Overall Ranking", "overall ranking");
    createSeries("Economics", "econ");
    createSeries("Education", "edu");
    createSeries("Health", "health");
    createSeries("Political", "political");
    
    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    
    // Create axis ranges
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/axis-ranges/
    //var rangeDataItem = xAxis.makeDataItem({
        //category: "2001",
        //endCategory: "2003"
    //  });
      
     // var range = xAxis.createAxisRange(rangeDataItem);
      
     // rangeDataItem.get("grid").setAll({
    //    stroke: am5.color(0x00ff33),
    //    strokeOpacity: 0.5,
    //    strokeDasharray: [3]
    //  });
      
    //  rangeDataItem.get("axisFill").setAll({
    //    fill: am5.color(0x00ff33),
    //    fillOpacity: 0.1
    //  });
      
     // rangeDataItem.get("label").setAll({
       // inside: true,
        //text: "Fines for speeding increased",
        //rotation: 90,
        //centerX: am5.p100,
       // centerY: am5.p100,
       // location: 0,
      //  paddingBottom: 10,
      //  paddingRight: 15
     // });
      
      
     // var rangeDataItem2 = xAxis.makeDataItem({
     //   category: "2007"
     // });
      
     // var range2 = xAxis.createAxisRange(rangeDataItem2);
      
    // rangeDataItem2.get("grid").setAll({
     //   stroke: am5.color(0x00ff33),
    //    strokeOpacity: 1,
     //   strokeDasharray: [3]
    //  });
      
      //rangeDataItem2.get("label").setAll({
      //  inside: true,
     //   text: "Motorcycle fee introduced",
     //   rotation: 90,
    //    centerX: am5.p100,
    //    centerY: am5.p100,
    //    location: 0,
     //   paddingBottom: 10,
     //   paddingRight: 15
     // });
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    });