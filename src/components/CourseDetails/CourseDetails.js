import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import {BigPlayButton, Player} from "video-react";
import ReactHtmlParser from "react-html-parser";

class CourseDetails extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        let short_title="";
        let long_title="";
        let short_desc="";
        let long_desc="";
        let total_lecture="";
        let total_student="";
        let video_url="";
        let course_url="";
        let skill_all="";

        let CourseDetailArray=this.props.courseData

        if (CourseDetailArray.length==1){
            long_title=CourseDetailArray[0]['long_title'];
            long_desc=CourseDetailArray[0]['long_desc'];
            short_title=CourseDetailArray[0]['short_title'];
            total_lecture=CourseDetailArray[0]['total_lecture'];
            total_student=CourseDetailArray[0]['total_student'];
            video_url=CourseDetailArray[0]['video_url'];
            course_url=CourseDetailArray[0]['course_url'];
            skill_all=CourseDetailArray[0]['skill_all'];
            short_desc=CourseDetailArray[0]['short_desc'];
        }

        return (
            <Fragment>
                <Container fluid={true} className="topFixPage p-0">
                    <div className="topFixPageOverly">
                        <Container className="PageDetailsTop">
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <h3 className="colo">{long_title}</h3>
                                    <p className="colo">Total Lecture= {total_lecture}</p>
                                    <p className="colo">Total Students= {total_student}</p>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <p className="colo">{short_desc}</p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
                <div className="courseDetails">
                    <Container>
                        <Row>
                            <Col lg={6} md={6} sm={12}>
                                <h2>{short_title}</h2>
                                {ReactHtmlParser(skill_all)}
                                <a href={course_url}><Button variant="primary">Buy Now</Button></a>
                            </Col>
                            <Col lg={6} md={6} sm={12}>
                                <Player>
                                    <source src={video_url} />
                                    <BigPlayButton position="center" />
                                </Player>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default CourseDetails;