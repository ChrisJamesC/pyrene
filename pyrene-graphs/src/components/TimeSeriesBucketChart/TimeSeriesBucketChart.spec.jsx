import React from 'react';
import moment from 'moment-timezone';
import { Banner, Loader } from 'pyrene';
import TimeSeriesBucketChart from './TimeSeriesBucketChart';
import timeSeriesData from '../../examples/timeSeriesData';
import colorSchemes from '../../styles/colorSchemes';

const fulLBucketsSeries = timeSeriesData.genDownloadedVolumes(moment.tz('2019-10-01 00:00', 'Europe/Zurich').valueOf(), moment.tz('2019-10-03 12:00', 'Europe/Zurich').valueOf(), 24);
const singleBucketSeries = timeSeriesData.genDownloadedVolumes(moment.tz('2019-10-02 00:00', 'Europe/Zurich').valueOf(), moment.tz('2019-10-02 02:00', 'Europe/Zurich').valueOf(), 1);
const zeroBucketSeries = { label: 'Volume', data: [] };

const props = {
  dataFormat: {
    tooltip: (d) => d,
    yAxis: (d) => d,
  },
  data: fulLBucketsSeries,
  description: 'Downloaded volume',
  from: moment.tz('2019-10-01 00:00', 'Europe/Zurich').valueOf(),
  title: 'Volume',
  timezone: 'Europe/Zurich',
  to: moment.tz('2019-10-03 12:00', 'Europe/Zurich').valueOf(),
  timeFormat: (d) => `${d}`,
};

const propsSingleBar = {
  dataFormat: {
    tooltip: (d) => d,
    yAxis: (d) => d,
  },
  data: singleBucketSeries,
  description: 'Downloaded volume',
  from: moment.tz('2019-10-01 00:00', 'Europe/Zurich').valueOf(),
  title: 'Volume',
  timezone: 'Europe/Zurich',
  to: moment.tz('2019-10-03 12:00', 'Europe/Zurich').valueOf(),
  timeFormat: (d) => d,
};

const propsZeroBar = {
  dataFormat: {
    tooltip: (d) => d,
    yAxis: (d) => d,
  },
  data: zeroBucketSeries,
  description: 'Downloaded volume',
  from: moment.tz('2019-10-01 00:00', 'Europe/Zurich').valueOf(),
  loading: false,
  timezone: 'Europe/Zurich',
  title: 'Volume',
  to: moment.tz('2019-10-03 12:00', 'Europe/Zurich').valueOf(),
  timeFormat: (d) => `${d}`,
};

const propsZeroBarLoading = {
  dataFormat: {
    tooltip: (d) => d,
    yAxis: (d) => d,
  },
  data: zeroBucketSeries,
  description: 'Downloaded volume',
  from: moment.tz('2019-10-01 00:00', 'Europe/Zurich').valueOf(),
  loading: true,
  timezone: 'Europe/Zurich',
  title: 'Volume',
  to: moment.tz('2019-10-03 12:00', 'Europe/Zurich').valueOf(),
  timeFormat: (d) => `${d}`,
};

const propsZeroBarError = {
  dataFormat: {
    tooltip: (d) => d,
    yAxis: (d) => d,
  },
  data: zeroBucketSeries,
  description: 'Downloaded volume',
  error: 'No data is found',
  from: moment.tz('2019-10-01 00:00', 'Europe/Zurich').valueOf(),
  loading: false,
  timezone: 'Europe/Zurich',
  title: 'Volume',
  to: moment.tz('2019-10-03 12:00', 'Europe/Zurich').valueOf(),
  timeFormat: (d) => `${d}`,
};

describe('<TimeSeriesBucketChart />', () => {
  it('renders without crashing', () => {
    shallow(<TimeSeriesBucketChart {...props} />);
  });

  it('renders its content correctly', () => {
    const rendered = mount(<TimeSeriesBucketChart {...props} />);
    const renderedSingleBar = mount(<TimeSeriesBucketChart {...propsSingleBar} />);

    // Header
    expect(rendered.contains(props.title)).toBe(true);
    expect(rendered.contains(props.description)).toBe(true);

    // Numerical Y-Axis
    const yAxis = rendered.find('.vx-axis-left');
    expect(yAxis.children().find('.vx-axis-line').length).toBeGreaterThan(0);
    expect(yAxis.children().find('.vx-axis-tick').length).toBeGreaterThan(0);

    // Time X-Axis
    const xAxis = rendered.find('.vx-axis-bottom');
    expect(xAxis.children().find('.vx-axis-line').length).toBeGreaterThan(0);
    expect(xAxis.children().find('.vx-axis-tick').length).toBeGreaterThan(0);

    // Bars
    expect(rendered.find('.vx-bar')).toHaveLength(props.data.data.length);
    expect(renderedSingleBar.find('.vx-bar')).toHaveLength(propsSingleBar.data.data.length);
    expect(rendered.find('.vx-bar').at(0).props().fill).toBe(colorSchemes.colorSchemeDefault.categorical[0]);

    // Tooltip
    const hoverArea = rendered.find('.hoverArea');
    hoverArea.simulate('mousemove');
    expect(rendered.find('.vx-tooltip-portal')).toHaveLength(1);
    hoverArea.simulate('mouseout');
    expect(rendered.find('.vx-tooltip-portal')).toHaveLength(0);
  });

  it('has no hover area or tooltip when there is no bar', () => {
    const rendered = mount(<TimeSeriesBucketChart {...propsZeroBar} />);
    const hoverArea = rendered.find('.hoverArea');
    expect(hoverArea).toHaveLength(0);
  });

  it('zooms correctly', () => {
    const zoom = {
      lowerBound: moment.tz('2018-10-01 00:00', 'Europe/Zurich').valueOf(),
      minZoomRange: moment.duration({ minutes: 30 }).valueOf(),
      onZoom: jest.fn(),
      upperBound: moment.tz('2020-10-01 00:00', 'Europe/Zurich').valueOf(),
    };

    // Zoom buttons
    const rendered = mount(<TimeSeriesBucketChart {...props} zoom={zoom} />);
    const zoomInBtn = rendered.find('.pyreneIcon-zoomIn');
    const zoomOutBtn = rendered.find('.pyreneIcon-zoomOut');
    zoomInBtn.simulate('click');
    zoomOutBtn.simulate('click');
    expect(zoom.onZoom).toHaveBeenCalledTimes(2);

    // Zoomable component
    const dragArea = rendered.find('.dragArea');
    expect(dragArea).toHaveLength(1);
    dragArea.simulate('mousemove').simulate('mouseup');
    expect(zoom.onZoom).toHaveBeenCalledTimes(3);
  });

  it('renders loading state correctly', () => {
    const rendered = mount(<TimeSeriesBucketChart {...propsZeroBarLoading} />);

    expect(rendered.contains(propsZeroBarLoading.title)).toBe(true);
    expect(rendered.contains(propsZeroBarLoading.description)).toBe(true);
    expect(rendered.find('.vx-bar')).toHaveLength(0);
    expect(rendered.find('.vx-axis-line').length).toBeGreaterThan(0);
    expect(rendered.find('.vx-axis-tick')).toHaveLength(0);
    expect(rendered.find(Loader).exists()).toBe(true);
  });

  it('renders error message correctly', () => {
    const rendered = mount(<TimeSeriesBucketChart {...propsZeroBarError} />);

    expect(rendered.contains(propsZeroBarError.title)).toBe(true);
    expect(rendered.contains(propsZeroBarError.description)).toBe(true);
    expect(rendered.find('.vx-bar')).toHaveLength(0);
    expect(rendered.find('.vx-axis-line').length).toBeGreaterThan(0);
    expect(rendered.find('.vx-axis-tick')).toHaveLength(0);
    expect(rendered.find(Banner).exists()).toBe(true);
  });
});
