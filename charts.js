
var data_visualization=(function(){
  var units = "Units: Billions of Dollars. Seasonal Adjustment: Seasonally Adjusted Annual Rate";
  var notes="Notes: A Guide to the National Income and Product Accounts of the United States (NIPA) - (http://www.bea.gov/national/pdf/nipaguid.pdf)";
  var usGDP_url="https://raw.githubusercontent.com/FreeCodeCamp/ProjectReferenceData/master/GDP-data.json";
  var chart_title="US Gross Domestic Product";
  function presentUSGDP(){
    d3.json(usGDP_url, privateDrawBarChart);
  }

  function privateDrawBarChart(data){
    var flatData=privateExtractData(data.data);
    var svg = dimple.newSvg(".container", 1200, 600);
    var myChart = new dimple.chart(svg, flatData);
    var xAxis=myChart.addTimeAxis("x", "date","%Y-%m-%d","%m-%Y");
    xAxis.timePeriod=d3.timeYear;
    xAxis.timeInterval=5;
    xAxis.title="";
    xAxis.tickFormat="%Y";
    var yAxis=myChart.addMeasureAxis("y", "gdp");
    yAxis.title="Gross Domestic Product, USA";
    var s=myChart.addSeries(null, dimple.plot.bar);
    s.getTooltipText=privateToolTip;
    myChart.draw();
    svg.selectAll("rect").style("opacity","1");
    svg.selectAll("rect").attr("stroke-width", 0);
    privateAddText(svg,notes,595,"12px");
    privateAddText(svg, units, 575, "12px");
    privateAddText(svg,chart_title, 50, "30px");
  }
  function privateExtractData(data){
    //json data is key value pairs without label
    //return chart ready data with labels
    return data.map(function(point) {
      return { date: point[0], gdp: point[1] };
    });
  }
  function privateToolTip(e){
          var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
          var fullMonth = months[e.x.getMonth()];
          var timeLine = e.x.getFullYear() + " - " + fullMonth;
          return [timeLine, "GDP $" + e.y];
  }
  function privateAddText(svg,text,y,font_size){
    var midPoint=document.querySelector(".container").clientWidth/2;
    svg
      .append("text")
      .attr("x", midPoint)
      .attr("y", y)
      .attr("text-anchor", "middle")
      .style("font-size", font_size)
      .text(text);
  }
  return {
    drawGDP: presentUSGDP
  };
})();

data_visualization.drawGDP();

