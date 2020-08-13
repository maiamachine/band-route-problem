import * as d3 from "d3";

export default function(data) {

  let svgContainer = document.getElementById("svgContainer");
  let svgWidth = svgContainer.clientWidth;
  let svgHeight = window.innerHeight;

  const y = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, svgHeight])
  const x = d3.scaleLinear()
    .domain([0, 1000])
    .range([0, svgWidth]);

  const scaledData = data.map(item => [x(item[0]), y(item[1])]);
  const svg = d3.select("svg");
  const circles = svg.selectAll("circle").data(scaledData);
  const path = svg.selectAll("path");

  svg.attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`);

  circles.exit().remove();
  circles.enter()
    .append("circle")
      .attr("cx", d => d[0])
      .attr("cy", d => d[1])
      .attr("r", 5)
      .attr("transform", "translate(20)");

  path.remove();
  svg.append('path')
    .attr('d', d3.line()(scaledData))
    .style('fill', 'none')
    .attr("transform", "translate(20)");
}
