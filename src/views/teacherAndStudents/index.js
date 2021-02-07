import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'
import Header from "../../components/atoms/Header";
import ArrowBackOutlinedIcon from '@material-ui/icons/ArrowBackOutlined';

function mapStateToProps(state) {
    const students = state.student.students;
    const teachers = state.teacher.teachers;

    return {
        students,
        teachers
    };
}


function mapDispatchToProps(dispatch) {

    return {

    };
}


class index extends Component {

    state = {
        teacher: null
    }

    renderTableData() {
        const { students } = this.props;
        const { teacher } = this.state;
        let Class = teacher&&teacher.ClassHeld;
        let studentsArr = JSON.parse(JSON.stringify(students))
 
        studentsArr=studentsArr.filter((student) => student.Class == Class)


        return studentsArr.map((student, index) => {
            const { studentNo, firstName, lastName, Class, classTeacherNo, classTeacherFullName } = student;
            return (
                <tr key={index}>
                    <td>{studentNo}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{Class}</td>
                    <td>{classTeacherNo}</td>
                    <td>{classTeacherFullName}</td>
                </tr>
            )
        })
    }

    
    renderTableHeader() {
        const { teacher } = this.state;

        return (
            <td>
                <tr>
                    <th>STAFF NO</th>
                    <th>{teacher && teacher.staffNo}</th>
                </tr>
                <tr>
                    <th>STAFF FULL NAME</th>
                    <th>{teacher && (teacher.firstName + ' ' + teacher.lastName)}</th>
                </tr>
            </td>
        )
    }

    componentWillMount() {
        const { location } = this.props;
        this.setState({ teacher: location.state.teacher })
    }


    render() {

        return (
            <div>
                <Header {...this.props} openModal={this.openModal} />
                <div>
                    <ArrowBackOutlinedIcon />
                    <h1 id='title'>Students per Teacher</h1>
                    <table id='students'>
                        <tbody>
                            {this.renderTableHeader()}
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);