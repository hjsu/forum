import React from 'react';
import { connect } from 'react-redux';

import closeSidePanel from '../actions/sidePanel';

const panelStyle = (props) => {

  const styling = {
    position: 'absolute',
    top: '0';
    bottom: '0',
    right: '0px',
    background: 'wheat',
    transition: '0.5s'
  }

  if (!props.show) styling.width = '0%';
  else styling.width = '30%';

  return styling

}

const children = (props) => (
  <div 
    style={{right: '0px', top: '0px', position: 'absolute'}}
    onClick={props.close}
  >CLOSE </div>
)

const SidePanel = (props) => (
  <div style={panelStyle(props)}>
    <div style={props.show? {} : {display: 'none'}}>
      {children(props)}
    </div>
  </div>
)

const mapStateToProps = (state) => ({
  show: state.view.showSidePanel
});

const mapDispatchToProps = (dispatch) => ({
  close: () => dispatch(closeSidePanel())
});

export default connect(mapStateToProps, mapDispatchToProps)(SidePanel)
