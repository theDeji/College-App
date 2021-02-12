import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import './index.css'
import { studentActions } from '../../store/actions';


function mapStateToProps(state) {
    const students = state.student.students;
    const headers = state.student.headers


    return {
        students, headers
    };
}

// getStudents = (data) => {
//     const { getStudents } = this.props;
//     getStudents(data);
//     this.setState({ modalShown: false })
// }

function mapDispatchToProps(dispatch) {
    return {
        getStudents: (data) => dispatch(studentActions.getStudents(data))
    };
}

function TableData() {

    async function getAll(){
        const res = fetch("http://localhost:3002/students/");
        const data = await res.json()
        this.props.getStudents(data)
    }

    useEffect(() => {
       getAll()
    }, [])

    return (
        <div>
            
        </div>
    )
}

export default connect( mapStateToProps,mapDispatchToProps)(TableData)