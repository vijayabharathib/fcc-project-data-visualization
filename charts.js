document.addEventListener("DOMContentLoaded",function(e){
  d3.json('https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json',drawBarChart);
});

function drawBarChart(data){
  var svg = dimple.newSvg(".container", 590, 400);
  var myChart = new dimple.chart(svg, data);
  myChart.draw();
}
