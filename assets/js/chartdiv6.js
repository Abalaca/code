am4core.ready(function () {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    am4core.useTheme(am4themes_kelly);
    // Themes end

    // Create chart instance
    var chart = am4core.create("chartdiv6", am4charts.XYChart);

    // Add data
    chart.data = [
        {
            "Category": 2006,
            "Overall Rank": 63,
            "Economic Participation": 53,
            "Educational Attainment": 77,
            "Health and Survival": 144,
            "Political Empowerment": 52
        },
        {
            "Category": 2007,
            "Overall Rank": 73,
            "Economic Participation": 60,
            "Educational Attainment": 91,
            "Health and Survival": 124,
            "Political Empowerment": 59
        },
        {
            "Category": 2008,
            "Overall Rank": 57,
            "Economic Participation": 43,
            "Educational Attainment": 87,
            "Health and Survival": 126,
            "Political Empowerment": 54
        },
        {
            "Category": 2009,
            "Overall Rank": 60,
            "Economic Participation": 38,
            "Educational Attainment": 87,
            "Health and Survival": 130,
            "Political Empowerment": 60
        },
        {
            "Category": 2010,
            "Overall Rank": 61,
            "Economic Participation": 46,
            "Educational Attainment":88,
            "Health and Survival": 133,
            "Political Empowerment": 56
        },
        {
            "Category": 2011,
            "Overall Rank": 61,
            "Economic Participation":50,
            "Educational Attainment": 85,
            "Health and Survival": 133,
            "Political Empowerment": 57
        },
        {
            "Category": 2012,
            "Overall Rank":69,
            "Economic Participation": 58,
            "Educational Attainment": 85,
            "Health and Survival": 132,
            "Political Empowerment": 58
        },
        {
            "Category": 2013,
            "Overall Rank":69,
            "Economic Participation": 62,
            "Educational Attainment": 81,
            "Health and Survival": 133,
            "Political Empowerment":59
        },
        {
            "Category": 2014,
            "Overall Rank": 87,
            "Economic Participation":76,
            "Educational Attainment": 89,
            "Health and Survival": 140,
            "Political Empowerment": 72
        },
        {
            "Category": 2015,
            "Overall Rank": 91,
            "Economic Participation": 81,
            "Educational Attainment": 83,
            "Health and Survival":145,
            "Political Empowerment": 73
        },
        {
            "Category": 2016,
            "Overall Rank": 99,
            "Economic Participation": 81,
            "Educational Attainment": 99,
            "Health and Survival": 144,
            "Political Empowerment": 74
        },
        {
            "Category": 2017,
            "Overall Rank": 100,
            "Economic Participation": 86,
            "Educational Attainment": 102,
            "Health and Survival": 144,
            "Political Empowerment": 77
        },
        {
            "Category": 2018,
            "Overall Rank": 103,
            "Economic Participation": 86,
            "Educational Attainment": 102,
            "Health and Survival": 144,
            "Political Empowerment":77
        },
        {
            "Category": 2019,
            "Overall Rank": 106,
            "Economic Participation": 91,
            "Educational Attainment": 100,
            "Health and Survival": 153,
            "Political Empowerment": 95
        },
        {
            "Category": 2020,
            "Overall Rank": 107,
            "Economic Participation": 69,
            "Educational Attainment": 103,
            "Health and Survival": 156,
            "Political Empowerment": 118
        }
    ];

    chart.data.forEach(function (o) {

        o.Category = "" + o.Category;
        o["Project Development"] = o["Project Development"] || undefined;

    });
    chart.legend = new am4charts.Legend();
    // Set input format for the dates
    chart.dateFormatter.inputDateFormat = "yyyy";

    // Create axes
    var dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    ["Overall Rank",
        "Economic Participation",
        "Educational Attainment",
        "Health and Survival",
        "Political Empowerment"].forEach(function (elem) {

            // Create series
            var series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = elem;
            series.dataFields.dateX = "Category";
            series.tooltipText = elem + ": {valueY}"
            series.strokeWidth = 2;
            series.minBulletDistance = 15;

            series.legendSettings.valueText = elem;

            // Drop-shaped tooltips
            series.tooltip.background.cornerRadius = 20;
            series.tooltip.background.strokeOpacity = 0;
            series.tooltip.pointerOrientation = "vertical";
            series.tooltip.label.minWidth = 40;
            series.tooltip.label.minHeight = 40;
            series.tooltip.label.textAlign = "middle";
            series.tooltip.label.textValign = "middle";

            // Make bullets grow on hover
            var bullet = series.bullets.push(new am4charts.CircleBullet());
            bullet.circle.strokeWidth = 2;
            bullet.circle.radius = 4;
            bullet.circle.fill = am4core.color("#fff");

            var bullethover = bullet.states.create("hover");
            bullethover.properties.scale = 1.3;

            // Make a panning cursor
            chart.cursor = new am4charts.XYCursor();
            chart.cursor.behavior = "panXY";
            chart.cursor.xAxis = dateAxis;
            chart.cursor.snapToSeries = series;
        });

    // Create vertical scrollbar and place it before the value axis
    chart.scrollbarY = new am4core.Scrollbar();
    chart.scrollbarY.parent = chart.leftAxesContainer;
    chart.scrollbarY.toBack();

    // Create a horizontal scrollbar with previe and place it underneath the date axis
    chart.scrollbarX = new am4core.Scrollbar();
    chart.scrollbarX.parent = chart.bottomAxesContainer;

    chart.events.on("ready", function () {
        dateAxis.zoom({ start: 0, end: 1 });
    });
    
}); // end am4core.ready()