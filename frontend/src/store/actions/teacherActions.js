import { teacherConstants } from '../constants';
import { alertActions } from './alertActions';


export const teacherActions = {
    addTeacher, getTeachers
};

function addTeacher(teacher) {
    return dispatch => {
        dispatch(addTeacher(teacher));
        dispatch(alertActions.success('Teacher Added'));
    };

    function addTeacher(data) { return { type: teacherConstants.ADD_TEACHER, data } }
}


function getTeachers(data){
    return dispatch => {
        dispatch(getTeachers(data));
        dispatch(alertActions.success('Teachers Loaded'));
    }

    function getTeachers(){
        return {
            type: teacherConstants.GET_TEACHERS, data
        }
    }
}
