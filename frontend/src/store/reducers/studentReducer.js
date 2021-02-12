import { studentConstants } from '../constants';

const ADD_STUDENT = studentConstants.ADD_STUDENT
const GET_STUDENTS = studentConstants.GET_STUDENTS

export function studentReducer(state = {
    loading: false,
    headers: ["studentNo", "firstName", "lastName", "class"],
    students: []
}, action) {
    switch (action.type) {
        case GET_STUDENTS:
            return{
                ...state,
                students: action.data
            }
        case ADD_STUDENT:
            return {
                ...state,
                // loading: true,
                students: [...state.students, action.data]
            }
        default:
            return state
    }
}
