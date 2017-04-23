import React from 'react';
import { connect } from 'react-redux';

const headerStyle = {
  backgroundColor: 'blue'
}

const HeaderComponent = (props) => {
  return (
    <div style={headerStyle}>
      Header here
    </div>
  );
}

const mapStateToProps = state => state;

export const Header = connect(mapStateToProps)(HeaderComponent);
