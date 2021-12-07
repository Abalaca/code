am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
  
    // Create chart instance
    var chart = am4core.create("chartdiv5", am4charts.XYChart);
  
    // Add data
    chart.data = [
        {
            "age": "Women being represented in government and politics",
            "vulnerable group": 550
        },
        {
            "age": "Women having senior positions in business",
            "vulnerable group": 350
        },
        {
            "age": "Women having equal access to education",
            "vulnerable group": 330
        },
       {
            "age": "Women having reached CEO/board positions",
            "vulnerable group": 310
        },
  
        {
          "age": "Women having jobs in science and technology",
          "vulnerable group": 220
      },
      
    {
      "age": "Women's representation in the media",
      "vulnerable group": 200
  },
  {
    "age": "Looking after children and the home",
    "vulnerable group": 160
  },
  
  {
    "age": "Women's participation in sport",
    "vulnerable group": 90
  },
  {
    "age": "There is no need to achieve equality",
    "vulnerable group": 20
  }
    ];
  
    // Create axes
  
    var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "age";
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.renderer.minGridDistance = 30;
  
    // categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
    //     if (target.dataItem && target.dataItem.index & 2 == 2) {
    //         return dy + 25;
    //     }
    //     return dy;
    // });
  
    var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
  
    // Create series
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = "vulnerable group";
    series.dataFields.categoryY = "age";
    series.columns.template.tooltipText = "{categoryY}: [bold]{valueX}[/]";
    series.columns.template.fillOpacity = .8;
  
    var columnTemplate = series.columns.template;
    columnTemplate.strokeWidth = 2;
    columnTemplate.strokeOpacity = 1;
    var title = chart.titles.create();
    title.text = "Important areas for future gender equality progress in China 2019";
    title.fontSize = 20;
    title.marginTop = 20;
    title.marginBottom = 20;
  
    series.columns.template.adapter.add("fill", function (fill, target) {
        return chart.colors.getIndex(target.dataItem.index);
    });
    // alert(chart.colors.getIndex(0));
    // alert(chart.colors.getIndex(1));
  });
  
  
  
  
  // end am4core.ready()
  