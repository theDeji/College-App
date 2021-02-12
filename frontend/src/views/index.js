import React, { Component } from 'react';
import { studentActions } from '../store/actions';
import Header from "../components/atoms/Header";
import { connect } from 'react-redux';
import './index.css'


// components 
import StudentForm from '../components/atoms/StudentForm'



function mapStateToProps(state) {
    const students = state.student.students
    const headers = state.student.headers


    return {
        students, headers
    };
}


function mapDispatchToProps(dispatch) {
    return {
        addStudent: (student) => dispatch(studentActions.addStudent(student)),
        getStudents: (data) => dispatch(studentActions.getStudents(data))
    };
}


class index extends Component {

    state = {
        modalShown: false
    }

    async renderTableData() {
        let { students } = this.props;

        // const response = await fetch("http://localhost:3002/students/")
        // const data = await response.json()
        // this.props.getStudents(data)
        
        // console.log(students)
        
        return students.map((student, index) => {
            const { studentNo, firstName, lastName, classIn } = student;
            return (
                <tr key={index}>
                    <td>{studentNo}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{classIn}</td>
                </tr>
            )
        })
    
    }

    renderTableHeader() {
        const { headers } = this.props;

        return headers.map((field) => {
            return (
                <th field={headers.indexOf(field)}>{this.formatCamelCase(field).toUpperCase()}</th>
            )
        })
    }

    formatCamelCase(text) {
        return text.replace(/([A-Z])/g, ' $1')
            .replace(/^./, function (str) { return str.toUpperCase(); })
    }

    openModal = () => {
        this.setState({ modalShown: true })
    }

    addStudent = (student) => {
        const { addStudent } = this.props;
        addStudent(student);
        this.setState({ modalShown: false })
    }

    getStudents = (data) => {
        const { getStudents } = this.props;
        getStudents(data);
        this.setState({ modalShown: false })
    }

    render() {
        const { modalShown } = this.state;

        return (
            <div>
                <Header {...this.props} openModal={this.openModal} />
                <div>
                    <h1 id='title'>Students</h1>
                    <table id='students'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    <StudentForm
                        onSubmit={this.addStudent}
                        show={modalShown}
                        onHide={() => this.setState({ modalShown: false })}
                    />
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);