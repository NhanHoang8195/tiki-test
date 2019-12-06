import React from 'react';
import { shallow } from 'enzyme';
import Checkbox from '../index';
const DEFAULT_PROPS = {
  id: '1234',
  onChange: jest.fn(),
  type: 0,
  seatNumber: 10,
  status: false,
  disabled: false,
};

const createComponent = props => shallow(<Checkbox {...props} />);

describe('Checkbox component', () => {
  it('should render with empty props', () => {
    const component = createComponent({});
    const label = component.find('.unknown-seat');
    expect(label).toHaveLength(1);
  });
  it('should render with type equal to 0', () => {
    const component = createComponent(DEFAULT_PROPS);
    const label = component.find('.standard-seat-checkbox');

    expect(label).toHaveLength(1);
    expect(label.text()).toEqual(DEFAULT_PROPS.seatNumber.toString());
  });
  it('should render with type equal to 1', () => {
    const component = createComponent({ ...DEFAULT_PROPS, type: 1 });
    const label = component.find('.vip-seat-checkbox');

    expect(label).toHaveLength(1);
    expect(label.text()).toEqual(DEFAULT_PROPS.seatNumber.toString());
  });
  it('should render with type equal to 2', () => {
    const component = createComponent({ ...DEFAULT_PROPS, type: 2 });
    const label = component.find('.deluxe-seat-checkbox');

    expect(label).toHaveLength(1);
    expect(label.text()).toEqual(DEFAULT_PROPS.seatNumber.toString());
  });
  it('should call onChange when has disabled prop equal to false', () => {
    const component = createComponent(DEFAULT_PROPS);
    const input = component.find('[type="checkbox"]');

    expect(input.prop('onChange')).toEqual(DEFAULT_PROPS.onChange);
  });
});