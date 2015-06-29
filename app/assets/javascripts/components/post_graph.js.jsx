var PostGraph = React.createClass({
  propTypes: {
    stats:  React.PropTypes.object,
    total:  React.PropTypes.number,
    height: React.PropTypes.height,
    width:  React.PropTypes.width
  },
  yScale: function() {
    return d3
             .scale
             .linear()
             .domain([0, this.props.total])
             .range([0, this.props.height]);
  },
  xScale: function() {
    return d3
             .scale
             .ordinal()
             .domain(d3.range(Object.keys(this.props.stats).length))
             .rangeRoundBands([0, this.props.width], 0.05);
  },
  render: function() {
    var stats  = this.props.stats,
        total  = this.props.total,
        height = this.props.height,
        width  = this.props.width,
        xScale = this.xScale(),
        yScale = this.yScale(),
        rects;

    rects = Object.keys(stats).map(function(key, index) {
      return (
        <g>
          <rect width={ xScale.rangeBand() }
                height={ yScale(stats[key]) }
                x={ xScale(index) }
                y={ height - yScale(stats[key]) } />
          <text x={ xScale(index) + 10 } y={ height - 10 }>
            { key + ':' + stats[key] }
          </text>
        </g>
      )
    });

    return (
      <div className='bar-chart'>
        <svg width={this.props.width} height={this.props.height}>
          {rects}
        </svg>
      </div>
    );
  }
});
