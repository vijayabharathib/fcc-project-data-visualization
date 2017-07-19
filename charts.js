document.addEventListener("DOMContentLoaded",function(e){
  d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json',drawBarChart);
});

function drawBarChart(data){
  var flatData=data.data.map(function(point){
    return {"date":point[0],"gdp":point[1]};
  });
  var svg = dimple.newSvg(".container", 1200, 600);
  var myChart = new dimple.chart(svg, flatData);
  myChart.addTimeAxis("x", "date","%Y-%m-%d","%m-%Y");
  myChart.addMeasureAxis("y", "gdp");
  myChart.addSeries(null, dimple.plot.bar);
  myChart.draw();
}
