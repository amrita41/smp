import React, { Component } from "react";
import { Link } from "react-router-dom";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Custom Actions
import UserActions from '../redux/actions/UserActions';

// START IMPORT ACTIONS
import StudentActions from "../redux/actions/StudentActions";
import TeacherActions from "../redux/actions/TeacherActions";

// END IMPORT ACTIONS

/** APIs

* actionsStudent.list
*	@description CRUD ACTION list
*
* actionsStudent.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsTeacher.delete
*	@description CRUD ACTION delete
*	@param ObjectId id - Id
*
* actionsTeacher.list
*	@description CRUD ACTION list
*

**/

class TeacherList extends Component {
  render() {
    return (
      <div>
        <h1>TeacherList</h1>
                    
        
            
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsUser: bindActionCreators(UserActions, dispatch),
    actionsStudent: bindActionCreators(StudentActions, dispatch),
    actionsTeacher: bindActionCreators(TeacherActions, dispatch)
  };
};

// Validate types
TeacherList.propTypes = {
  actionsUser: PropTypes.object.isRequired,
  actionsStudent: PropTypes.object.isRequired,
  actionsTeacher: PropTypes.object.isRequired
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    user: state.LoginReducer.user
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeacherList);
