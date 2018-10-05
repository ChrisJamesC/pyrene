import React from 'react';

import Collapsible from './Collapsible';

const props = {
  renderCallback: () => (<div>ContentDiv</div>),
  title: 'Show More',
};

describe('<Collapsible />', () => {
  it('renders without crashing', () => {
    shallow(<Collapsible {...props} />);
  });

  it('renders the content', () => {
    const rendered = shallow(<Collapsible {...props} />);

    expect(rendered.contains('Show More')).toBe(true);
    expect(rendered.contains('ContentDiv')).toBe(true);
  });

});
