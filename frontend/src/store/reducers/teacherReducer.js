import { teacherConstants } from '../constants';

const ADD_TEACHER = teacherConstants.ADD_TEACHER
const GET_TEACHERS = teacherConstants.GET_TEACHERS

export function teacherReducer(state = {
    loading: false,
    headers: ["staffNo", "firstName", "lastName", "Level", "classHeld"],
    teachers: []
}, action) {
    switch (action.type) {
        case GET_TEACHERS:
            return{
                ...state,
                teachers: action.data
            }
        case ADD_TEACHER:
            return {
                ...state,
                // loading: true,
                teachers: [...state.teachers, action.data]
            }
        default:
            return state
    }
}
