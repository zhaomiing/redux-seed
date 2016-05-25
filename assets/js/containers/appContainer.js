/**
 * appContainer
 * @author ZhaoMing<zhaoming.me#gmail.com>
 * @date 25/05/2016
 */

import { connect } from 'react-redux';
import App from '../components/app';

const mapStateToProps = (state) => {
  return state
};


const AppContainer = connect(mapStateToProps)(App);

export default AppContainer;