import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {faCheckCircle, faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook,faLinkedin,faTwitter,faYoutube} from "@fortawesome/free-brands-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import WentWrong from "../WentWrong/WentWrong";

class Footer extends Component {
    constructor() {
        super();
        this.state={
            facebook:"...",
            twitter:"...",
            linkedin:"...",
            address:"...",
            email:"...",
            phone:"...",
            youtube:"...",
            footer_credit:"...",
            error:""
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Footer).then(result=>{

            if (result==null){
                this.setState({error:true})
            }
            else {
                this.setState({
                    facebook:result[0]['facebook'],
                    twitter:result[0]['twitter'],
                    linkedin:result[0]['linkedin'],
                    address:result[0]['address'],
                    email:result[0]['email'],
                    phone:result[0]['phone'],
                    youtube:result[0]['youtube'],
                    footer_credit:result[0]['footer_credit']
                })
            }
        }).catch(error=>{
            this.setState({error:true})
        })
    }

    render() {
        if (this.state.error==false){
            return (
                <Fragment>
                    <div className="footerSection">
                        <Container>
                            <Row>
                                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                    <h4 className="clientTitle">Follow Me</h4>
                                    <a className="followMe" target="_blank" href={"//"+this.state.facebook}><FontAwesomeIcon icon={faFacebook} /> Facebook</a><br/>
                                    <a className="followMe" target="_blank" href={"//"+this.state.linkedin}><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a><br/>
                                    <a className="followMe" target="_blank" href={"//"+this.state.twitter}><FontAwesomeIcon icon={faTwitter} /> Twitter</a><br/>
                                    <a className="followMe" target="_blank" href={"//"+this.state.youtube}><FontAwesomeIcon icon={faYoutube} /> Youtube</a>
                                </Col>
                                <Col lg={3} md={6} sm={12} className="p-5 text-justify">
                                    <h4 className="clientTitle">Address</h4>
                                    <p className="footerAdd">{this.state.address}</p>
                                    <p className="footerAdd"><FontAwesomeIcon icon={faEnvelope} /> {this.state.email}</p>
                                    <span className="footerAdd"><FontAwesomeIcon icon={faPhone} /> {this.state.phone}</span>
                                </Col>
                                <Col lg={3} md={6} sm={12} className="p-5">
                                    <h4 className="clientTitle">Information</h4>
                                    <Link className="infoLegal" to="/about">About</Link><br/>
                                    <Link className="infoLegal" to="/contact">Contact Us</Link>
                                </Col>
                                <Col lg={3} md={6} sm={12} className="p-5">
                                    <h4 className="clientTitle">Legal</h4>
                                    <Link className="infoLegal" to="/refund">Refund Policy</Link><br/>
                                    <Link className="infoLegal" to="/terms">Terms And Condition</Link><br/>
                                    <Link className="infoLegal" to="/privacy">Privacy Policy</Link>
                                </Col>
                            </Row>
                        </Container>
                        <Container fluid={true} className="text-center copyrightSection">
                            <a className="copyrightText" href="https://commanderit.com/" target="_blank">{this.state.footer_credit}</a>
                        </Container>
                    </div>
                </Fragment>
            );
        }
        else if (this.state.error==true){
            return <WentWrong/>
        }
    }
}

export default Footer;