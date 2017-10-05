import React from 'react';
import {shallow} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection/>', () => {

  it('Renders without crashing', () => {
    shallow(<GuessSection title="foo" />);
  });

  it('Renders feedback', () => {
    const feedback = "stuff and things";
    const wrapper = shallow(<GuessSection feedback={feedback} />);
    expect(wrapper.contains(feedback)).toEqual(true);
  });
});
