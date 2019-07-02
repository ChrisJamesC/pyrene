import React from 'react';
import '../../../css/componentPage.css';
import {
  Table, createSimpleFilter, createDataFilter,
} from 'pyrene/dist/pyrene.dev';

import CodeBox from '../../common/PageElements/HowTo/CodeBox/CodeBox';
import Paragraph from '../../common/PageElements/Paragraph/Paragraph';
import DescriptionBox from '../../common/PageElements/DescriptionBox/DescriptionBox';
import DisplayBox from '../../common/PageElements/HowTo/DisplayBox/DisplayBox';

/* eslint-disable react/no-multi-comp */

const data = [
  {
    name: 'My Name', date: '11.6.19', city: 'Zurich', country: 'CH', hidden: 'Open',
  },
  {
    name: 'Your Name', date: '-', city: 'Zurich', country: 'CH', hidden: 'Open',
  },
  {
    name: 'Complicated Name', date: 'Monday', city: 'Zurich', country: 'CH', hidden: 'Open',
  },
  {
    name: 'Named', date: '-', city: 'Brno', country: 'CZ', hidden: 'Close',
  },
  {
    name: 'Da Name', date: '-', city: 'Taumatawhakaanhu', country: 'NZ', hidden: 'Open',
  },
];


const columns = [
  { headerName: 'Name', accessor: 'name', id: 'ispName' },
  { headerName: 'Date', accessor: 'date', id: 'date' },
  { headerName: 'City', accessor: 'city', id: 'city' },
  { headerName: 'Country', accessor: 'country', id: 'country' },
];


class SimpleFilteredTable extends React.Component {

     filters = [{
       type: 'multiSelect',
       label: 'City',
       accessor: 'city',
       id: 'city',
       options: [{ value: 'Zurich', label: 'Zurich' }, { value: 'Brno', label: 'Brno' }, { value: 'Taumatawhakaanhu', label: 'Taumatawhakaanhu' }],
     }, {
       type: 'singleSelect',
       label: 'Date',
       accessor: 'date',
       id: 'date',
       options: [{ value: '-', label: 'Ongoing' }, { value: '11.6.19', label: '11.6.19' }],
     }, {
       type: 'text',
       label: 'Name',
       accessor: 'name',
       id: 'name',
     }, {
       type: 'text',
       label: 'Reverse',
       id: 'name_reverse',
       customFilter: (filteredInput, d) => d.name.split('').reverse().join('').includes(filteredInput),
     }, {
       type: 'text',
       label: 'Secret',
       accessor: 'hidden',
       id: 'hidden',
     }];

    state = {
      filterValues: {},
    };

    render() {
      const { filterFunc, filterProps } = createSimpleFilter(this.filters);

      return (
        <Table
          columns={columns}
          data={filterFunc(this.state.filterValues, data)}
          keyField="id"
          filters={filterProps}
          onFilterChange={filterValues => this.setState({ filterValues })}
        />
      );
    }

}


class DataFilteredTable extends React.Component {

     filters = [{
       type: 'singleSelect',
       label: 'City',
       accessor: 'city',
       id: 'city',
       optionsAccessors: { value: d => d.city, label: d => d.city.toUpperCase() },
     }, {
       type: 'text',
       label: 'Name',
       accessor: 'name',
       id: 'name',
     }];

     state = {
       filterValues: {},
     };

     render() {
       const { dataFilterFunc, filterProps } = createDataFilter(this.filters, data);

       return (
         <Table
           columns={columns}
           data={dataFilterFunc(this.state.filterValues)}
           keyField="id"
           filters={filterProps}
           onFilterChange={filterValues => this.setState({ filterValues })}
         />
       );
     }

}

const SimpleFilterCode = `
class SimpleFilteredTable extends React.Component {

     filters = [{
       type: 'multiSelect',
       label: 'City',
       accessor: 'city',
       id: 'city',
       options: [{ value: 'Zurich', label: 'Zurich' }, { value: 'Brno', label: 'Brno' }, { value: 'Taumatawhakaanhu', label: 'Taumatawhakaanhu' }],
     }, {
       type: 'singleSelect',
       label: 'Date',
       accessor: 'date',
       id: 'date',
       options: [{ value: '-', label: 'Ongoing' }, { value: '11.6.19', label: '11.6.19' }],
     }, {
       type: 'text',
       label: 'Name',
       accessor: 'name',
       id: 'name',
     }, {
       type: 'text',
       label: 'Reverse',
       id: 'name_reverse',
       customFilter: (filteredInput, d) => d.name.split('').reverse().join('').includes(filteredInput),
     }, {
       type: 'text',
       label: 'Secret',
       accessor: 'hidden',
       id: 'hidden',
     }];

    state = {
      filterValues: {},
    };

    render() {
      const { filterFunc, filterProps } = createSimpleFilter(this.filters);

      return (
        <Table
          columns={columns}
          data={filterFunc(this.state.filterValues, data)}
          keyField="id"
          filters={filterProps}
          onFilterChange={filterValues => this.setState({ filterValues })}
        />
      );
    }

}`;

const DataFilterCode = `class DataFilteredTable extends React.Component {

     filters = [{
       type: 'singleSelect',
       label: 'City',
       accessor: 'city',
       id: 'city',
       optionsAccessors: { value: d => d.city, label: d => d.city.toUpperCase() },
     }, {
       type: 'text',
       label: 'Name',
       accessor: 'name',
       id: 'name',
     }];

     state = {
       filterValues: {},
     };

     render() {
       const { dataFilterFunc, filterProps } = createDataFilter(this.filters, data);

       return (
         <Table
           columns={columns}
           data={dataFilterFunc(this.state.filterValues)}
           keyField="id"
           filters={filterProps}
           onFilterChange={filterValues => this.setState({ filterValues })}
         />
       );
     }

}`;


const FilterUsage = () => (
  <div styleName="page">
    <div className="header">
      <div styleName="title">Filter</div>
      <div styleName="description">
        <p>
In order to display filtered data, a filter needs to be connected, with e.g., a Table, there are multiple ways to achieve that, depending on your use case.
        </p>
      </div>
      <div className="topicContent">
        <Paragraph title="Simple Filter">
          <DescriptionBox>
            <p>
            Based on filter definitions, the filter input fields and a filter function is provided:
            </p>
          </DescriptionBox>
          <CodeBox>
            {SimpleFilterCode}
          </CodeBox>
          <DescriptionBox>
            Here we go, try it out!
          </DescriptionBox>
          <DisplayBox>
            <SimpleFilteredTable />
          </DisplayBox>
        </Paragraph>
        <Paragraph title="Data Filter">
          <DescriptionBox>
            <p>
            Based on filter definitions and data, filter options and matching data is returned:
            </p>
          </DescriptionBox>
          <CodeBox>
            {DataFilterCode}
          </CodeBox>
          <DescriptionBox>
            Here we go, try it out!
          </DescriptionBox>
          <DisplayBox>
            <DataFilteredTable />
          </DisplayBox>
        </Paragraph>
      </div>
    </div>
  </div>
);

export default FilterUsage;
