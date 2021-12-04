am4core.ready(function () {

  // Themes begin
  am4core.useTheme(am4themes_animated);
  // Themes end

  // Create chart instance
  var chart = am4core.create("chartdiv4", am4charts.XYChart);

  // Add data
  chart.data = [
      {
          "age": "Put up posters that demean women in the workplace",
          "vulnerable group": 22
      },
      {
          "age": "Look pornographically without consent",
          "vulnerable group": 58
      },
      {
          "age": "Talk about sex-related topics without consent in office",
          "vulnerable group": 92
      },
     {
          "age": "Tease about sex at a party",
          "vulnerable group": 73
      },

      {
        "age": "Continue private invitations after being rejected",
        "vulnerable group": 29
    },
    
  {
    "age": "Act obscenely to others without consent",
    "vulnerable group": 14
},
{
  "age": "Touch a person's body without consent",
  "vulnerable group": 61
},

{
  "age": "Reveive sexual and unpleasant messages through social media",
  "vulnerable group": 33
},
{
  "age": "Imply that others will be retaliated against\nif they don’t cooperate in sexual matters",
  "vulnerable group": 7
},
{
  "age": "Force sex",
  "vulnerable group": 3
},
{
  "age": "Force people to take photos with exposed bodies",
  "vulnerable group": 1
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
  title.text = "Types of sexual harassment women suffer";
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
