/**
 * @jest-environment jsdom
 */
import React from 'react';
import { Dropdown } from '../Dropdown';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

describe('Dropdown', () => {
  test('should render', () => {
    Enzyme.configure({ adapter: new Adapter() });
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );

    expect(wrapper).toBeDefined();
    console.log(window);
    expect(wrapper.find('div.container').isEmptyRender()).toBeFalsy();
  });

  test('should render (snapshot)', () => {
    const wrapper = shallow(
      <Dropdown children={<div />} button={<button />} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
