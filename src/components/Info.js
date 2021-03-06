import React from 'react';
import PropTypes from 'prop-types';

import '../css/Info.css';

const Info = (props) => {
  return (
    <aside 
      className={props.modalClass}
      aria-label='info-section'
    >
      <img 
        className='close-icon'
        src='./cancel.svg' 
        alt='close-icon'
        onClick={() => {
          props.untoggleModal();
        }} 
      />
      <h1 aria-label='info-header-label'>About Colorado Kindercount</h1>
      <p aria-label='info-description'>This app allows you to compare 
      kindergarten test scores between the school districts 
      throughout Colorado. To compare two districts, simply click 
      their cards to select them.</p>
    </aside>
  );
};

Info.propTypes = {
  modalClass: PropTypes.string.isRequired,
  untoggleModal: PropTypes.func.isRequired
};

export default Info;