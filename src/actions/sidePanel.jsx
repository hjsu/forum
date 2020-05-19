import * as constants from '../constants';

const toggleSidePanel = () => ({ type: constants.TOGGLE_SIDE_PANEL });
const closeSidePanel = () => ({ type: constants.CLOSE_SIDE_PANEL });
const openSidePanel = () => ({ type: constants.OPEN_SIDE_PANEL });

export default toggleSidePanel;
