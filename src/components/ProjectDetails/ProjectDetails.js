import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import ProjectImg from '../../assets/images/ux-788002_1280.jpg';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import ReactHtmlParser from "react-html-parser";

class ProjectDetails extends Component {

    constructor(props) {
        super();
        this.state={
            myProjectID:props.id,

            project_img2:"",
            project_shortdesc:"",
            project_longdesc:"",
            project_preview:"",
            project_title:"",
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectDetails+this.state.myProjectID).then(result=>{
            this.setState({
                project_img2:result[0]['project_img2'],
                project_shortdesc:result[0]['project_shortdesc'],
                project_longdesc:result[0]['project_longdesc'],
                project_preview:result[0]['project_preview'],
                project_title:result[0]['project_title'],
            })
        }).catch(error=>{

        })
    }

    render() {
        return (
            <Fragment>
                <Container className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="img-details" src={this.state.project_img2} alt="image"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h2>{this.state.project_title}</h2>
                            <p>{this.state.project_shortdesc}</p>
                            {ReactHtmlParser(this.state.project_longdesc)}
                            <a href={this.state.project_preview} target="_blank"><Button variant="primary">Live Preview</Button></a>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ProjectDetails;