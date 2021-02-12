import React, { Component } from 'react';
import { teacherActions } from '../../store/actions';
import Header from "../../components/atoms/Header";
import { connect } from 'react-redux';
import './index.css'


// components 
import TeacherForm from '../../components/atoms/TeacherForm'


function mapStateToProps(state) {
    const teachers = state.teacher.teachers;
    const headers =  state.teacher.headers;

    return {
        teachers, headers
    };
}


function mapDispatchToProps(dispatch) {
    return {
        addTeacher: (teacher) => dispatch(teacherActions.addTeacher(teacher)),
        getTeachers: (data) => dispatch(teacherActions.getTeachers(data))
    };
}


class index extends Component {

    state = {
        modalShown: false
    }

    componentDidMount(){
        this.queryDb();
    }

    async queryDb(){
        const response = await fetch("http://localhost:3002/teachers/")
        const data = await response.json()
        this.props.getTeachers(data)
    }

    renderTableData() {
        const { teachers } = this.props;

        return teachers.map((teacher, index) => {
            const { staffNo, firstName, lastName, level, classHeld } = teacher;
            return (
                <tr key={index} onClick={()=>this.goToTeacher(teacher)}>
                    <td>{staffNo}</td>
                    <td>{firstName}</td>
                    <td>{lastName}</td>
                    <td>{level}</td>
                    <td>{classHeld}</td>
                </tr>
            )
        })
    }

    renderTableHeader() {
        const { headers } = this.props;

        return headers.map((field) => {
            return (
                <th key={headers.indexOf(field)}>{this.formatCamelCase(field).toUpperCase()}</th>
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

    addTeacher = (teacher) => {
        const { addTeacher } = this.props;
        addTeacher(teacher);
        this.setState({ modalShown: false })
    }

    getTeachers = (data) => {
        const { getTeachers } = this.props;
        getTeachers(data);
        this.setState({ modalShown: false })
    }

    goToTeacher = (teacher) => {
        const { history } = this.props;

        history.push({
            pathname: '/teacherandstudents',
            state: { teacher: teacher }
        });
    };

    render() {
        const { modalShown } = this.state;

        return (
            <div>
                <Header {...this.props} openModal={this.openModal} />
                <div>
                    <h1 id='title'>Teachers</h1>
                    <p style={{color:'white', textAlign:'center'}}><i>click on a teacher to view assigned students</i></p>
                    <table id='teachers'>
                        <tbody>
                            <tr>{this.renderTableHeader()}</tr>
                            {this.renderTableData()}
                        </tbody>
                    </table>
                    <TeacherForm
                        onSubmit={this.addTeacher}
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