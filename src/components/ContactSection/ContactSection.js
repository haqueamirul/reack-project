import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class ContactSection extends Component {

    constructor() {
        super();
        this.state={
            address:"...",
            email:"...",
            phone:"...",
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{
            this.setState({
                address:result[0]['address'],
                email:result[0]['email'],
                phone:result[0]['phone'],
            })
        })
    }

    sendContact(){
        let name=document.getElementById("name").value;
        let email=document.getElementById("email").value;
        let msg=document.getElementById("msg").value;

        let JsonObjects={name:name,email:email,msg:msg};
        RestClient.PostRequest(AppUrl.ContactSend,JSON.stringify(JsonObjects)).then(result=>{
            alert(result);
        }).catch(error=>{
            alert("error");
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="mt-5">
                        <Col lg={6} md={6} sm={12}>
                            <h4 className="contactTitle">Quick Connect</h4>
                            <Form>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" id="name" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>E-mail</Form.Label>
                                    <Form.Control type="email" id="email" />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control id="msg" as="textarea" rows={3} />
                                </Form.Group>

                                <Button onClick={this.sendContact} variant="primary">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12} className="pl-5">
                            <h4 className="contactTitle">Discuss Now</h4>
                            <p className="footerAdd">{this.state.address}</p>
                            <p className="footerAdd"><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</p>
                            <span className="footerAdd"><FontAwesomeIcon icon={faPhone} /> {this.state.phone}</span>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;