import React from 'react';
import { shallow } from 'enzyme';
import Comparison from '../components/Comparison';

describe('Comparison', ()=>{
  let wrapper; 

  const mockData = [
    {
      location: 'ADAMS COUNTY 14',
      stats: {
        2004: 0.228, 
        2005: 0.3, 
        2006: 0.293, 
        2007: 0.306, 
        2008: 0.673,
        2009: 1,
        2010: 1,
        2011: 1,
        2012: 1,
        2013: 0.998,
        2014: 1
      }
    },
    {
      location: 'ADAMS COUNTY 14',
      stats: {
        2004: 0.228, 
        2005: 0.3, 
        2006: 0.293, 
        2007: 0.306, 
        2008: 0.673,
        2009: 1,
        2010: 1,
        2011: 1,
        2012: 1,
        2013: 0.998,
        2014: 1
      }
    }
  ];


  const mockCompareDistrictAverages = jest.fn();

  const mockProcesSelection = jest.fn();

  beforeEach(()=>{
    wrapper = shallow(<Comparison 
      compareDistrictAverages={mockCompareDistrictAverages}
      selection={mockData}
      processSelection={mockProcesSelection}
    />);
  });

  it('should exist', () => {
    expect(wrapper).toBeDefined();
  });

  it('should render content to the DOM', () => {
    expect(wrapper).toMatchSnapshot();    
  });

});