import { connect } from 'react-redux';
import NavBars from './NavBars';

// This function takes the store and returns an object
// that's passed to the props of the component.
function mapStoreToProps(store) {
  return {
    input: store.navbars.input,
    date: new Date().toLocaleDateString(),
    time: new Date().toLocaleTimeString()
  };
}
// This might look odd but, connect returns a function,
// that is then called with the component itself.
export default connect(mapStoreToProps)(NavBars);;