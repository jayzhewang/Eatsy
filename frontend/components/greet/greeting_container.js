import { connect } from 'react-redux';
import Greeting from './greeting';
import { logout, clearErrors } from '../../actions/session_actions';

const mapStateToProps = state => {
  return { currentUser: state.session.currentUser };
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Greeting);
