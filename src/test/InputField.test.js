import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import InputField from '../components/InputField';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from '../helper.js'

describe('InputField', ()=>{
  let wrapper; 

  const mockProcessFilter = jest.fn();

  const mockEvent = {target: {value: 'place'}}

  beforeEach(()=>{
    wrapper = shallow(<InputField 
      processFilter={mockProcessFilter}/>);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });
  
  it('should have default state', () => {
    expect(wrapper.state()).toEqual({
      input: '', 
      clearFilter: 'clear-input-button hidden-button'
    });
  });

  it('should update state when processInput is called', () => {
    wrapper.instance().processInput('place')

    expect(wrapper.state()).toEqual({"clearFilter": "clear-input-button", "input": "place"})
  });

  it('should update state when process Input is called with an empty string', () => {
    wrapper.instance().processInput('')

    expect(wrapper.state()).toEqual({
      "clearFilter": "clear-input-button hidden-button", 
      "input": ""
    });
  });

  it('should call processFilter when processInput is called', () => {
    wrapper.instance().processInput('place');

    expect(mockProcessFilter.mock.calls.length).toBe(3);
  })

  it('should call processInput on text input', () => {
    wrapper.find('.text-input').simulate('change', mockEvent);

    expect(wrapper.state().input).toEqual('place');
  })

  it('should call processInput on click of the clear button', () => {
    wrapper.instance().processInput('place');
    expect(wrapper.state().input).toEqual('place');

    wrapper.find('.clear-input-button').simulate('click');
    expect(wrapper.state().input).toEqual('');
  })

});