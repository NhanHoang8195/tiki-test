import React from 'react';
import { shallow } from 'enzyme';
import Header from '../index';
const DEFAULT_PROPS = {};

const createComponent = props => shallow(<Header {...props} />);

describe('Header component', () => {
  it('should render successfully with empty props', () => {
    const component = createComponent(DEFAULT_PROPS);
    const divE = component.find('.header-screen');

    expect(divE).toHaveLength(1);
  });
  it('should render successfully with requried props', () => {
    const props = {filmName: 'spider-man', note: 'Vietnamsub'};
    const component = createComponent(props);
    const name = component.find('.film-name');
    const note = component.find('.film-note');

    expect(name.text()).toEqual(props.filmName);
    expect(note.text()).toEqual(props.note);
  });
});
