import React from 'react';
import Stepper from '../../Stepper/Stepper';
import TableSelect from './TableSelect/TableSelect';

import './tablePagination.css';

/* eslint-disable react/prop-types */
/* props are controlled by the parent component of react-table */

const TablePagination = props => (
  <div styleName="tablePagination">
    <div styleName="resultsCounter">
      {`${props.data.length === 0 ? 'No' : props.data.length} result${props.data.length === 1 ? '' : 's'} found`}
    </div>

    <div styleName="separator" />

    <div styleName="pageSizeSelectOptions">
      <div styleName="pageSizeSelect">
        <TableSelect
          placeholder={`${props.pageSize}`}
          options={props.pageSizeOptions.map(e => ({ label: `${e}`, value: `${e}` }))}
          onChange={e => props.onPageSizeChange(parseInt(e.value, 10))}
          value={`${props.pageSize}`}
        />
      </div>
      <div styleName="spacer small" />
        per page
    </div>

    <div styleName="separator" />

    <div styleName="pageNavigation">
      <Stepper direction="left" disabled={!props.canPrevious} onClick={() => props.onPageChange(props.page - 1)} type="minimal" />
      <div styleName="spacer small" />
      <div styleName="pageTracker">
        {props.pages > 0 ? `${props.page + 1} of ${props.pages}` : '1 of 1'}
      </div>
      <div styleName="spacer small" />
      <Stepper direction="right" disabled={!props.canNext} onClick={() => props.onPageChange(props.page + 1)} type="minimal" />
    </div>
  </div>
);

export default TablePagination;
