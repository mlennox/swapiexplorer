import test from 'ava'
import React from 'react';
import { shallow } from 'enzyme'

import Index from './index.android.js';

test('renders correctly', t => {
  const wrapper = shallow(<Index />)
  t.truthy(wrapper.children().length > 0)
})
