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
    wheelY: "zoomXY"

  }));

  chart.topAxesContainer.children.push(am5.Label.new(root, {
    text: "Gender gap among countries in the world,2020",
    fontSize: 20,
    fontWeight: "400",
    x: am5.p50,
    centerX: am5.p50
  }));
  
  
  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  
  
  var xAxis = chart.xAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererX.new(root, {}),
    tooltip: am5.Tooltip.new(root, {})
  }));
  
  xAxis.children.moveValue(am5.Label.new(root, {
    text: "Political Empowerment Score",
    x: am5.p50,
    centerX: am5.p50
  }), xAxis.children.length - 1);
  
  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {
      inversed: false
    }),
    tooltip: am5.Tooltip.new(root, {})
  }));


  yAxis.children.moveValue(am5.Label.new(root, {
    rotation: -90,
    text: "Health and Survival Score",
    y: am5.p50,
    centerX: am5.p50
  }), 0);
  
  
  // Create series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    calculateAggregates: true,
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "y",
    valueXField: "x",
    valueField: "value",
    seriesTooltipTarget:"bullet",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "[bold]{title}[/]\nHealth Score: {valueY.formatNumber('#.0')}\nPolitical Score: {valueX.formatNumber('#,###.')}\nOverall Rank: {value.formatNumber('#,###.')}"
    })
  }));
  
  series.strokes.template.set("visible", false);
  
  
  // Add bullet
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Bullets
  var circleTemplate = am5.Template.new({});
  circleTemplate.adapters.add("fill", function(fill, target) {
    var dataItem = target.dataItem;
    if (dataItem) {
      return am5.Color.fromString(dataItem.dataContext.color);
    }
    return fill
  });
  series.bullets.push(function() {
    var bulletCircle = am5.Circle.new(root, {
      radius: 5,
      fill: series.get("fill"),
      fillOpacity: 0.8
    }, circleTemplate);
    return am5.Bullet.new(root, {
      sprite: bulletCircle
    });
  });
  
  
  // Add heat rule
  // https://www.amcharts.com/docs/v5/concepts/settings/heat-rules/
  series.set("heatRules", [{
    target: circleTemplate,
    min: 3,
    max: 60,
    dataField: "value",
    key: "radius"
  }]);
  
  // Set data
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/#Setting_data
  series.data.setAll([
    {
      "title": "Albania",
      "id": "AL",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.376,
      "y": 0.958,
      "value": 20
    },
    {
      "title": "Algeria",
      "id": "DZ",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.145,
      "y": 0.962,
      "value": 132
    },
    {
      "title": "Angola",
      "id": "AO",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.262,
      "y": 0.980,
      "value": 118
    },
    {
      "title": "Argentina",
      "id": "AR",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.387 ,
      "y": 0.980,
      "value": 30
    },
    {
      "title": "Armenia",
      "id": "AM",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.118,
      "y": 0.948,
      "value": 98
    },
    {
      "title": "Australia",
      "id": "AU",
      "color": "#8aabb0",
      "continent": "australia",
      "x": 0.231,
      "y": 0.971,
      "value": 44
    },
    {
      "title": "Austria",
      "id": "AT",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.344,
      "y": 0.974,
      "value":34
    },
    {
      "title": "Azerbaijan",
      "id": "AZ",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.063,
      "y": 0.941,
      "value": 94
    },
    {
      "title": "Bahrain",
      "id": "BH",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.066,
      "y": 0.958,
      "value": 133
    },
    {
      "title": "Bangladesh",
      "id": "BD",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.545,
      "y": 0.969,
      "value": 50
    },
    {
      "title": "Belarus",
      "id": "BY",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.172,
      "y": 0.977,
      "value": 29
    },
    {
      "title": "Belgium",
      "id": "BE",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.313,
      "y": 0.973,
      "value": 27
    },
    {
      "title": "Benin",
      "id": "BJ",
      "color": "#de4c4f",
      "continent": "africa",
      "x":0.079,
      "y": 0.972,
      "value": 119
    },
    {
      "title": "Bhutan",
      "id": "BT",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.082,
      "y": 0.960,
      "value": 131
    },
    {
      "title": "Bolivia",
      "id": "BO",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.357,
      "y": 0.979,
      "value": 42
    },
    {
      "title": "Bosnia and Herzegovina",
      "id": "BA",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.290,
      "y": 0.976,
      "value": 69
    },
    {
      "title": "Botswana",
      "id": "BW",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.079,
      "y": 0.980,
      "value": 73
    },
    {
      "title": "Brazil",
      "id": "BR",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.133,
      "y": 0.980,
      "value": 92
    },
    {
      "title": "Brunei",
      "id": "BN",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.031,
      "y": 0.969,
      "value": 95
    },
    {
      "title": "Bulgaria",
      "id": "BG",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.225,
      "y": 0.979,
      "value": 49
    },
    {
      "title": "Burkina Faso",
      "id": "BF",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.089,
      "y": 0.963,
      "value": 129
    },
    {
      "title": "Burundi",
      "id": "BI",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.269,
      "y": 0.978,
      "value": 32
    },
    {
      "title": "Cambodia",
      "id": "KH",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.103,
      "y": 0.975,
      "value": 89
    },
    {
      "title": "Cameroon",
      "id": "CM",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.196,
      "y": 0.973,
      "value": 96
    },
    {
      "title": "Canada",
      "id": "CA",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.365,
      "y": 0.971,
      "value": 19
    },
    {
      "title": "Cape Verde",
      "id": "CV",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.163,
      "y": 0.974,
      "value": 52
    },
   
    {
      "title": "Chad",
      "id": "TD",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.141,
      "y": 0.971,
      "value": 147
    },
    {
      "title": "Chile",
      "id": "CL",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.307,
      "y": 0.977,
      "value": 57
    },
    {
      "title": "China",
      "id": "CN",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.926,
      "y": 0.154,
      "value": 106
    },
    {
      "title": "Colombia",
      "id": "CO",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.318,
      "y": 0.980,
      "value": 22
    },
    
   
    {
      "title": "Costa Rica",
      "id": "CR",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.545,
      "y": 0.977,
      "value": 13
    },
    {
      "title": "Cote d'Ivoire",
      "id": "CI",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.082,
      "y": 0.970,
      "value": 142
    },
    {
      "title": "Croatia",
      "id": "HR",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.232,
      "y": 0.979,
      "value": 60
    },
    {
      "title": "Cuba",
      "id": "CU",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.392,
      "y": 0.975,
      "value": 31
    },
    {
      "title": "Cyprus",
      "id": "CY",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.122,
      "y": 0.967,
      "value": 91
    },
    {
      "title": "Denmark",
      "id": "DK",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.421,
      "y": 0.971,
      "value": 14
    },
  
    {
      "title": "Dominican Rep.",
      "id": "DO",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.980,
      "y": 0.163,
      "value": 86
    },
    {
      "title": "Ecuador",
      "id": "EC",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.260,
      "y": 0.978,
      "value": 48
    },
    {
      "title": "Egypt",
      "id": "EG",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.133,
      "y": 0.974,
      "value": 134
    },
    {
      "title": "El Salvador",
      "id": "SV",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.262,
      "y": 0.980,
      "value": 80
    },
  
    {
      "title": "Estonia",
      "id": "EE",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.294,
      "y": 0.974,
      "value": 26
    },
    {
      "title": "Ethiopia",
      "id": "ET",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.427,
      "y": 0.976,
      "value": 82
    },
    {
      "title": "Fiji",
      "id": "FJ",
      "color": "#8aabb0",
      "continent": "australia",
      "x": 0.150,
      "y":0.979,
      "value": 103
    },
    {
      "title": "Finland",
      "id": "FI",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.563,
      "y": 0.977,
      "value": 3
    },
    {
      "title": "France",
      "id": "FR",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.459,
      "y": 0.974,
      "value": 15
    },
    
    {
      "title": "Gambia",
      "id": "GM",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.067,
      "y": 0.970,
      "value": 136
    },
    {
      "title": "Georgia",
      "id": "GE",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.154,
      "y": 0.976,
      "value": 74
    },
    {
      "title": "Germany",
      "id": "DE",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.477,
      "y": 0.973,
      "value": 10
    },
    {
      "title": "Ghana",
      "id": "GH",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.129,
      "y": 0.968,
      "value": 107
    },
    {
      "title": "Greece",
      "id": "GR",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.164,
      "y": 0.971,
      "value":84
    },
    {
      "title": "Guatemala",
      "id": "GT",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.092,
      "y": 0.980,
      "value": 113
    },
    {
      "title": "Guinea",
      "id": "GN",
      "color": "#de4c4f",
      "continent": "africa",
      "x":0.125,
      "y": 0.962,
      "value": 125
    },

    {
      "title": "Honduras",
      "id": "HN",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.199,
      "y": 0.977,
      "value": 58
    },
   
    {
      "title": "Hungary",
      "id": "HU",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.065,
      "y": 0.980,
      "value":105
    },
    {
      "title": "Iceland",
      "id": "IS",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.701,
      "y": 0.968,
      "value": 1
    },
    {
      "title": "India",
      "id": "IN",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.411,
      "y": 0.944,
      "value":112
    },
    {
      "title": "Indonesia",
      "id": "ID",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.172,
      "y": 0.974,
      "value":85
    },
    {
      "title": "Iran",
      "id": "IR",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.037,
      "y": 0.966,
      "value": 148
    },
    {
      "title": "Iraq",
      "id": "IQ",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.105,
      "y": 0.975,
      "value": 152
    },
    {
      "title": "Ireland",
      "id": "IE",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.493,
      "y": 0.970,
      "value": 7
    },
    {
      "title": "Israel",
      "id": "IL",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.214,
      "y": 0.971,
      "value":64
    },
    {
      "title": "Italy",
      "id": "IT",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.267,
      "y": 0.969,
      "value": 76
    },
    {
      "title": "Jamaica",
      "id": "JM",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.197,
      "y": 0.976,
      "value":41
    },
    {
      "title": "Japan",
      "id": "JP",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.049,
      "y": 0.979,
      "value": 121
    },
    {
      "title": "Jordan",
      "id": "JO",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.121,
      "y": 0.971,
      "value": 138
    },
    {
      "title": "Kazakhstan",
      "id": "KZ",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.130,
      "y": 0.975,
      "value":72
    },
    {
      "title": "Kenya",
      "id": "KE",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.169,
      "y": 0.980,
      "value": 109
    },

    {
      "title": "Korea, Rep.",
      "id": "KR",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.179,
      "y": 0.980,
      "value": 108
    },
    {
      "title": "Kuwait",
      "id": "KW",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.053,
      "y": 0.961,
      "value": 122
    },

    {
      "title": "Laos",
      "id": "LA",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.150,
      "y":0.971,
      "value": 43
    },
    {
      "title": "Latvia",
      "id": "LV",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.355,
      "y": 0.975,
      "value": 11
    },
    {
      "title": "Lebanon",
      "id": "LB",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.024,
      "y":0.967,
      "value":145
    },
    {
      "title": "Lesotho",
      "id": "LS",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.137,
      "y": 0.980,
      "value": 88
    },
    {
      "title": "Liberia",
      "id": "LR",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.218,
      "y": 0.968,
      "value": 97
    },
    
    {
      "title": "Lithuania",
      "id": "LT",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.207,
      "y": 0.979,
      "value": 33
    },
   
    {
      "title": "Madagascar",
      "id": "MG",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.151,
      "y": 0.974,
      "value": 63
    },
    {
      "title": "Malawi",
      "id": "MW",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.162,
      "y": 0.980,
      "value": 116
    },
    {
      "title": "Malaysia",
      "id": "MY",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.108,
      "y": 0.974,
      "value": 104
    },
    {
      "title": "Mali",
      "id": "ML",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.171,
      "y": 0.965,
      "value":139
    },
    {
      "title": "Mauritania",
      "id": "MR",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.194,
      "y": 0.970,
      "value": 141
    },
    {
      "title": "Mauritius",
      "id": "MU",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.094,
      "y": 0.980,
      "value": 115
    },
    {
      "title": "Mexico",
      "id": "MX",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.468,
      "y": 0.979,
      "value": 25
    },
    {
      "title": "Moldova",
      "id": "MD",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.264,
      "y": 0.980,
      "value": 23
    },
    {
      "title": "Mongolia",
      "id": "MN",
      "color": "#eea638",
      "continent": "asia",
      "x":0.102,
      "y": 0.980,
      "value": 79
    },
    {
      "title": "Montenegro",
      "id": "ME",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.161,
      "y": 0.971,
      "value": 71
    },
    {
      "title": "Morocco",
      "id": "MA",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.095,
      "y": 0.963,
      "value":143
    },
    {
      "title": "Mozambique",
      "id": "MZ",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.362,
      "y": 0.980,
      "value": 56
    },
    {
      "title": "Myanmar",
      "id": "MM",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.080,
      "y": 0.977,
      "value": 114
    },
    {
      "title": "Namibia",
      "id": "NA",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.369,
      "y": 0.980,
      "value": 12
    },
    {
      "title": "Nepal",
      "id": "NP",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.227,
      "y": 0.966,
      "value": 101
    },
    {
      "title": "Netherlands",
      "id": "NL",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.276,
      "y":0.968,
      "value": 38
    },
    {
      "title": "New Zealand",
      "id": "NZ",
      "color": "#8aabb0",
      "continent": "australia",
      "x": 0.474,
      "y": 0.970,
      "value": 6
    },
    {
      "title": "Nicaragua",
      "id": "NI",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.565,
      "y": 0.980,
      "value":5
    },
   
    {
      "title": "Nigeria",
      "id": "NG",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.032,
      "y": 0.964,
      "value": 128
    },
    {
      "title": "Norway",
      "id": "NO",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.598,
      "y": 0.972,
      "value": 2
    },
    {
      "title": "Oman",
      "id": "OM",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.021,
      "y": 0.979,
      "value": 144
    },
    {
      "title": "Pakistan",
      "id": "PK",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.159,
      "y": 0.946,
      "value": 151
    },
    {
      "title": "Panama",
      "id": "PA",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.222,
      "y": 0.980,
      "value": 46
    },
    
    {
      "title": "Paraguay",
      "id": "PY",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.122,
      "y": 0.972,
      "value": 100
    },
    {
      "title": "Peru",
      "id": "PE",
      "color": "#86a965",
      "continent": "south_america",
      "x":0.247,
      "y": 0.977,
      "value": 66
    },
    {
      "title": "Philippines",
      "id": "PH",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.353,
      "y": 0.979,
      "value": 16
    },
    {
      "title": "Poland",
      "id": "PL",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.256,
      "y": 0.980,
      "value": 40
    },
    
    {
      "title": "Romania",
      "id": "RO",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.190,
      "y": 0.980,
      "value": 55
    },
    {
      "title": "Russia",
      "id": "RU",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.095,
      "y": 0.980,
      "value": 181
    },
    {
      "title": "Rwanda",
      "id": "RW",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.563,
      "y": 0.973,
      "value": 9
    },
    {
      "title": "Saudi Arabia",
      "id": "SA",
      "color": "#eea638",
      "continent": "asia",
      "x":0.077,
      "y": 0.963,
      "value": 146
    },
    {
      "title": "Senegal",
      "id": "SN",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.320,
      "y": 0.976,
      "value": 99
    },
    {
      "title": "Serbia",
      "id": "RS",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.276,
      "y": 0.971,
      "value": 39
    },
    {
      "title": "Sierra Leone",
      "id": "SL",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.100,
      "y": 0.967,
      "value": 111
    },
    {
      "title": "Singapore",
      "id": "SG",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.159,
      "y": 0.965,
      "value": 54
    },
    {
      "title": "Slovak Republic",
      "id": "SK",
      "color": "#d8854f",
      "continent": "europe",
      "x":0.231,
      "y": 0.980,
      "value":63
    },
    {
      "title": "Slovenia",
      "id": "SI",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.196,
      "y": 0.980,
      "value": 36
    },
   
    {
      "title": "South Africa",
      "id": "ZA",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.497,
      "y": 0.980,
      "value": 17
    },
    
    {
      "title": "Spain",
      "id": "ES",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.527,
      "y":0.972,
      "value": 8
    },
    {
      "title": "Sri Lanka",
      "id": "LK",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.193,
      "y": 0.980,
      "value": 102
    },
    
    {
      "title": "Suriname",
      "id": "SR",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.232,
      "y": 0.967,
      "value": 77
    },
    
    {
      "title": "Sweden",
      "id": "SE",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.525,
      "y": 0.969,
      "value":4
    },
    {
      "title": "Switzerland",
      "id": "CH",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.407,
      "y": 0.970,
      "value": 18
    },
    {
      "title": "Syria",
      "id": "SY",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.085,
      "y": 0.980,
      "value": 150
    },
    
    {
      "title": "Tajikistan",
      "id": "TJ",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.088,
      "y": 0.976,
      "value": 137
    },
    {
      "title": "Tanzania",
      "id": "TZ",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.254,
      "y":0.978,
      "value": 68
    },
    {
      "title": "Thailand",
      "id": "TH",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.086,
      "y": 0.978,
      "value": 75
    },
    {
      "title": "Timor-Leste",
      "id": "TL",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.249,
      "y": 0.977,
      "value":117
    },
    {
      "title": "Togo",
      "id": "TG",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.111,
      "y": 0.965,
      "value": 140
    },
    {
      "title": "Trinidad and Tobago",
      "id": "TT",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.329,
      "y": 0.980,
      "value": 24
    },
    {
      "title": "Tunisia",
      "id": "TN",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.201,
      "y": 0.971,
      "value": 124
    },
    {
      "title": "Turkey",
      "id": "TR",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.124,
      "y": 0.976,
      "value": 130
    },
   
    {
      "title": "Uganda",
      "id": "UG",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.309,
      "y": 0.980,
      "value": 65
    },
    {
      "title": "Ukraine",
      "id": "UA",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.171,
      "y": 0.978,
      "value": 59
    },
    {
      "title": "United Arab Emirates",
      "id": "AE",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.191,
      "y": 0.972,
      "value": 120
    },
    {
      "title": "United Kingdom",
      "id": "GB",
      "color": "#d8854f",
      "continent": "europe",
      "x": 0.396,
      "y": 0.970,
      "value": 21
    },
    {
      "title": "United States",
      "id": "US",
      "color": "#a7a737",
      "continent": "north_america",
      "x": 0.164,
      "y": 0.976,
      "value": 53
    },
    {
      "title": "Uruguay",
      "id": "UY",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.274,
      "y": 0.980,
      "value": 37
    },
  
    {
      "title": "Venezuela",
      "id": "VE",
      "color": "#86a965",
      "continent": "south_america",
      "x": 0.191,
      "y": 0.980,
      "value": 67
    },
   
    {
      "title": "Vietnam",
      "id": "VN",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.123,
      "y": 0.942,
      "value": 87
    },
    {
      "title": "Yemen, Rep.",
      "id": "YE",
      "color": "#eea638",
      "continent": "asia",
      "x": 0.018,
      "y": 0.966,
      "value": 153
    },
    {
      "title": "Zambia",
      "id": "ZM",
      "color": "#de4c4f",
      "continent": "africa",
      "x":0.174,
      "y": 0.980,
      "value": 45
    },
    {
      "title": "Zimbabwe",
      "id": "ZW",
      "color": "#de4c4f",
      "continent": "africa",
      "x": 0.238,
      "y": 0.980,
      "value": 47
    }
  ]);
  
  
  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  chart.set("cursor", am5xy.XYCursor.new(root, {
    xAxis: xAxis,
    yAxis: yAxis,
    snapToSeries: [series]
  }));
  
  
  // Add scrollbars
  // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
  chart.set("scrollbarX", am5.Scrollbar.new(root, {
    orientation: "horizontal"
  }));
  
  chart.set("scrollbarY", am5.Scrollbar.new(root, {
    orientation: "vertical"
  }));
  
  
  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  series.appear(1000);
  chart.appear(1000, 100);
  
  }); // end am5.ready()
