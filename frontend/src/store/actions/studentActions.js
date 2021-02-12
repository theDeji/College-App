import { studentConstants } from '../constants';
import { alertActions } from './alertActions';

export const studentActions = {
    addStudent, getStudents
};

function addStudent(student) {
    return dispatch => {
        dispatch(addStudent(student));
        dispatch(alertActions.success('Student Added'));
    };

    function addStudent(data) { return { type: studentConstants.ADD_STUDENT, data } }
}

function getStudents(data){
    return dispatch => {
        dispatch(getStudents(data));
        dispatch(alertActions.success('Students Loaded'));
    }

    function getStudents(){
        return {
            type: studentConstants.GET_STUDENTS, data
        }
    }
}
