import React from 'react';
import { connect } from 'react-redux';

const footerStyle = {
  backgroundColor: 'blue'
}

const FooterComponent = (props) => {
  return (
    <div style={footerStyle}>
      Footer here
    </div>
  );
}

const mapStateToProps = state => state;

export const Footer = connect(mapStateToProps)(FooterComponent);
