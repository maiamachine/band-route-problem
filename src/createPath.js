import * as d3 from "d3";

export default function(data) {

  d3.select('svg')
    .append('path')
    .attr('d', d3.line()(data))
    .style('fill', 'none');
}
