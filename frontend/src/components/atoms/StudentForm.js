import Modal from 'react-bootstrap/Modal'
import React, { Component } from 'react';
import { Button, Form, Col } from 'react-bootstrap'


class StudentForm extends Component {

    state = {
        studentNo: '',
        firstName: '',
        lastName: '',
        classIn: ''
    }

    handleSubmit= async () => {
        const { onSubmit } = this.props;
        if(this.state.studentNo && this.state.firstName && this.state.lastName && this.state.classIn ){
            const response = await fetch("http://localhost:3002/students/add", {method: "POST", body:JSON.stringify(this.state), headers:{"Content-Type":"application/json"}});
            const data = await response.json()
            onSubmit(data)
        }
    }

    render() {
        const { onHide } = this.props;

        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Add Student
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/* <h4>Centered Modal</h4> */}
                    <Form>
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    placeholder="Student No"
                                    onChange={e => this.setState({ studentNo: e.target.value })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    placeholder="First name"
                                    onChange={e => this.setState({ firstName: e.target.value })}
                                />
                            </Col>
                        </Form.Row>
                        <br />
                        <Form.Row>
                            <Col>
                                <Form.Control
                                    placeholder="Last name"
                                    onChange={e => this.setState({ lastName: e.target.value })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    placeholder="Class"
                                    onChange={e => this.setState({ classIn: e.target.value })}
                                />
                            </Col>
                        </Form.Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.handleSubmit}>Submit</Button>

                    <Button onClick={onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default StudentForm;
