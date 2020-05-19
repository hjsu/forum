import React from 'react';
import { connect } from 'react-redux';

import openSidePanel from '../actions/sidePanel';

const headerStyle = {
  backgroundColor: 'lightblue'
}

const togglerStyle = {
  position: 'absolute';
  right: '0px';
  top: '0px';
}

const HeaderComponent = (props) => {
  return (
    <div style={headerStyle}>
      Header here
      { !props.panelOpen && 
        <div style={togglerStyle} onClick={props.openSidePanel}>OPEN SIDE PANEL</div>
      }
    </div>
  );
}

const mapStateToProps = state => ({
  panelOpen: state.view.showSidePanel
});

const mapDispatchToProps = (dispatch) => ({
  openSidePanel: () => dispatch(openSidePanel())
});


export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);
