import { requestSingleUser } from '../../actions/user_actions';
import { connect } from 'react-redux';
import User from './user';

const mapStateToProps = (state, ownProps) => {
  const id = parseInt(ownProps.params.id);
  const user = state.users.find(owner=> owner.id === id );
  return { User };
};


const mapDispatchToProps = dispatch => ({
  requestSingleUser: id => (dispatch(requestSingleUser(id)))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(User);
