document.addEventListener("DOMContentLoaded",function(e){
  d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json',drawBarChart);
});

function drawBarChart(data){
  var flatData=data.data.map(function(point){
    return {"date":point[0],"gdp":point[1]};
  });
  var svg = dimple.newSvg(".container", 1200, 600);
  var myChart = new dimple.chart(svg, flatData);
  var xAxis=myChart.addTimeAxis("x", "date","%Y-%m-%d","%m-%Y");
  xAxis.timePeriod=d3.timeYear;
  xAxis.timeInterval=5;
  xAxis.title="";
  xAxis.tickFormat="%Y";
  var yAxis=myChart.addMeasureAxis("y", "gdp");
  yAxis.title="Gross Domestic Product, USA";
  myChart.addSeries(null, dimple.plot.bar);
  myChart.draw();
}
