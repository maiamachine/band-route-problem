import * as d3 from "d3";

export default function(data) {

  const svg = d3.select("svg");

  svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", d => d[0])
      .attr("cy", d => d[1])
      .attr("r", 5)
}
