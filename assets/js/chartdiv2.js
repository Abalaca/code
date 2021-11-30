am5.ready(function() {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("chartdiv2");
    
    
    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
    
    // Create chart
    // https://www.amcharts.com/docs/v5/charts/xy-chart/
    var chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panY",
      wheelY: "zoomY",
      layout: root.verticalLayout
    }));
    
    // Add scrollbar
    // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
    chart.set("scrollbarY", am5.Scrollbar.new(root, {
      orientation: "vertical"
    }));

    chart.set("background", am5.Rectangle.new(root, {
      stroke: am5.color(0xFFFFFF),
      strokeOpacity: 0.5,
      fill: am5.color(0xFFFFFF),
      fillOpacity: 0.2
    }));

  chart.topAxesContainer.children.push(am5.Label.new(root, {
      text: "Changes in education level of urban and rural women, 2000-2010",
      fontSize: 20,
      fontWeight: "400",
      x: am5.p50,
      centerX: am5.p50
    }));
    
    
    var data = [{
      "year": "2000 urban women",
      "primary schoo and below": 20.8,
      "junior high scool": 34.7,
      "high scool": 32.0,
      "collegue and above": 12.0,
    }, {
      "year": "2010 urban women",
      "primary schoo and below": 13.8,
      "junior high scool": 31.5,
      "high scool": 28.9,
      "collegue and above": 25.8,
    },{"year": "2000 rural women",
    "primary schoo and below": 58.8,
    "junior high scool": 32.8,
    "high scool": 7.9,
    "collegue and above": 0.8,
  }, {
    "year": "2010 rural women",
    "primary schoo and below": 51.5,
    "junior high scool": 36.4,
    "high scool": 9.9,
    "collegue and above": 2.1,
  }]
    
    
    // Create axes
    // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
    var yAxis = chart.yAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "year",
      renderer: am5xy.AxisRendererY.new(root, {}),
      tooltip: am5.Tooltip.new(root, {})
    }));
    
    yAxis.data.setAll(data);
    
    var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
      min: 0,
      max:100,
      renderer: am5xy.AxisRendererX.new(root, {})
    }));
    
    
    // Add legend
    // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
    var legend = chart.children.push(am5.Legend.new(root, {
      centerX: am5.p50,
      x: am5.p50
    }));
    
    
    // Add series
    // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
    function makeSeries(name, fieldName) {
      var series = chart.series.push(am5xy.ColumnSeries.new(root, {
        name: name,
        stacked: true,
        xAxis: xAxis,
        yAxis: yAxis,
        baseAxis: yAxis,
        valueXField: fieldName,
        categoryYField: "year"
      }));
    
      series.columns.template.setAll({
        tooltipText: "{name}, {categoryY}: {valueX}",
        tooltipY: am5.percent(90)
      });
      series.data.setAll(data);
    
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      series.appear();
    
      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Label.new(root, {
            text: "{valueX}",
            fill: root.interfaceColors.get("alternativeText"),
            centerY: am5.p50,
            centerX: am5.p50,
            populateText: true
          })
        });
      });
    
      legend.data.push(series);
    }
    
    makeSeries("primary schoo and below", "primary schoo and below");
    makeSeries("junior high scool", "junior high scool");
    makeSeries("high scool", "high scool");
    makeSeries("collegue and above", "collegue and above");
    
    
    // Make stuff animate on load
    // https://www.amcharts.com/docs/v5/concepts/animations/
    chart.appear(1000, 100);
    
    }); // end am5.ready()