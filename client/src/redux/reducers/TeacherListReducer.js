// Dependencies
import * as types from "../actionTypes";

// Init
const initialState = {
};

// Reducer
export default function TeacherListReducer(state = initialState, action) {
  switch (action.type) {
    
    // Insert here your custom reducers


    // START REDUCERS
    case types.LIST_STUDENT_SUCCESS:
      return { ...state, listStudent: action.payload };
    case types.DELETE_STUDENT_SUCCESS:
      return { ...state, student: action.payload };
    case types.DELETE_TEACHER_SUCCESS:
      return { ...state, teacher: action.payload };
    case types.LIST_TEACHER_SUCCESS:
      return { ...state, listTeacher: action.payload };
     // END REDUCERS
    
    default:
      return state;
  }
}