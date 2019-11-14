import React from 'react';
import PropTypes from 'prop-types';
import {
  Bars,
  BarStack,
  CategoricalAxis,
  NumericalAxis,
  Responsive,
  withTooltip,
  localPoint,
} from 'tuktuktwo';
import Tooltip from '../Tooltip/Tooltip';
import colorConstants from '../../styles/colorConstants';
import colorSchemes from '../../styles/colorSchemes';

/**
 * Get tooltip position and data when mouse is moving over the graph.
 * @param {object}event - The mouseMove event
 * @param {array}data - The data series with timestamp and value
 * @param {function}xScale - The scale function that linearly maps x-coordinate to timestamp in epoch milliseconds
 * @param {function}showTooltip - The function that passes tooltip position and data to the tooltip component
 */
const onMouseMove = (event, data, showTooltip, direction, parent, labels) => {
  const { x, y } = localPoint(event.target.ownerSVGElement, event);
  const bandwidth = direction === 'vertical' ? parent.width / labels.length : parent.height / labels.length;
  const index = Math.floor(direction === 'vertical' ? x / bandwidth : y / bandwidth);
  
  showTooltip({
    tooltipLeft: x,
    tooltipTop: y,
    tooltipData: data[index],
  });
};

/**
 * The pure SVG chart part of the bar chart.
 */
const BarChartSVG = (props) => {
  const {
    hideTooltip,
    showTooltip,
    tooltipData,
    tooltipLeft,
    tooltipOpen,
    tooltipTop,
  } = props;

  return (
    <Responsive>
      {(parent) => {
        const barWeight = 10;
        const labels = props.data.map((row) => row.label);
        const maxValue = Math.max(...props.data.map((d) => d.values.reduce((a, b) => a + b, 0)));
        const values = props.data.map((row) => row.values[0]);
        const tooltipDataSeries = tooltipData.values.map((value, index) => ({
          dataColor: props.colorScheme.categorical[index],
          dataLabel: props.legend[index],
          dataValue: value,
        }));
        const tooltipDataSeriesLabel = tooltipData.label;
        const sharedAxisProps = {
          height: parent.height,
          width: parent.width,
          showTickLabels: !props.loading,
          strokeColor: colorConstants.strokeColor,
          tickLabelColor: colorConstants.tickLabelColor,
        };
        return (
          <>
            <svg width="100%" height={parent.height} shapeRendering="crispEdges">
              {props.direction === 'horizontal' ? (
                <CategoricalAxis
                  height={sharedAxisProps.height}
                  width={sharedAxisProps.width}
                  showTickLabels={sharedAxisProps.showTickLabels}
                  strokeColor={sharedAxisProps.strokeColor}
                  tickLabelColor={sharedAxisProps.tickLabelColor}
                  tickLabels={labels}
                  orientation="left"
                />
              ) : (
                <NumericalAxis
                  height={sharedAxisProps.height}
                  width={sharedAxisProps.width}
                  showTickLabels={sharedAxisProps.showTickLabels}
                  strokeColor={sharedAxisProps.strokeColor}
                  tickLabelColor={sharedAxisProps.tickLabelColor}
                  maxValue={maxValue}
                  orientation="left"
                  showGrid={!props.loading}
                  tickFormat={props.tickFormatNumerical}
                />
              )}
              {props.direction === 'horizontal' ? (
                <NumericalAxis
                  height={sharedAxisProps.height}
                  width={sharedAxisProps.width}
                  showTickLabels={sharedAxisProps.showTickLabels}
                  strokeColor={sharedAxisProps.strokeColor}
                  tickLabelColor={sharedAxisProps.tickLabelColor}
                  maxValue={maxValue}
                  orientation="bottom"
                  showGrid={!props.loading}
                  tickFormat={props.tickFormatNumerical}
                />
              ) : (
                <CategoricalAxis
                  height={sharedAxisProps.height}
                  width={sharedAxisProps.width}
                  showTickLabels={sharedAxisProps.showTickLabels}
                  strokeColor={sharedAxisProps.strokeColor}
                  tickLabelColor={sharedAxisProps.tickLabelColor}
                  tickLabels={labels}
                  orientation="bottom"
                />
              )}
              <g
                className="hoverArea"
                onMouseMove={(e) => onMouseMove(e, props.data, showTooltip, props.direction, parent, labels)}
                onMouseOut={hideTooltip}
              >
                {!props.loading && (props.legend.length > 1 ? (
                  <BarStack
                    barWeight={barWeight}
                    colors={props.colorScheme.categorical}
                    height={parent.height}
                    keys={props.legend}
                    maxCumulatedValue={maxValue}
                    data={props.data}
                    direction={props.direction}
                    width={parent.width}
                  />
                ) : (
                  <Bars
                    barWeight={barWeight}
                    color={props.colorScheme.categorical[0]}
                    height={parent.height}
                    maxValue={maxValue}
                    values={values}
                    direction={props.direction}
                    width={parent.width}
                    categorical
                  />
                ))}
              </g>
            </svg>
            {
              tooltipOpen && (
                <Tooltip
                  dataSeries={tooltipDataSeries}
                  dataSeriesLabel={tooltipDataSeriesLabel}
                  left={tooltipLeft} top={tooltipTop}
                />
              )
            }
          </>
        );
      }}
    </Responsive>
  );
};

BarChartSVG.displayName = 'Bar Chart SVG';

BarChartSVG.defaultProps = {
  colorScheme: colorSchemes.colorSchemeDefault,
  direction: 'vertical',
  loading: false,
  tickFormatNumerical: (d) => d,
  tooltipData: {
    label: '',
    values: [],
  },
};

BarChartSVG.propTypes = {
  /**
   * Sets the colors of the bar chart. Type: { categorical: [ string ] (required) }
   */
  colorScheme: PropTypes.shape({
    categorical: PropTypes.arrayOf(PropTypes.string).isRequired,
  }),
  /**
   * Sets the chart data. Type: [ { label: string (required), values: [number] (required) } ]
   */
  data: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  })).isRequired,
  /**
   * Sets the bar direction.
   */
  direction: PropTypes.oneOf(['horizontal', 'vertical']),
  /**
    * Sets the legend. Type: [ string ]
    */
  legend: PropTypes.arrayOf(PropTypes.string).isRequired,
  /**
    * If set, a loader is shown instead of axis tick labels, grid and bars.
    */
  loading: PropTypes.bool,
  /**
   * Set function to format the tick labels of the NumericalAxis.
   */
  tickFormatNumerical: PropTypes.func,
  /**
   * The tooltip data prop provided by the withTooltip enhancer.
   */
  tooltipData: PropTypes.shape({
    label: PropTypes.string.isRequired,
    values: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
};

export default withTooltip(BarChartSVG);
