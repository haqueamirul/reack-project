import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Summary extends Component {
    constructor() {
        super();
        this.state={
            project:"",
            client:""
        }
    }
    componentDidMount() {
        RestClient.GetRequest(AppUrl.HomeTopTitle).then(result=>{
            this.setState({project:result[0]['total_project'],client:result[0]['total_client']})
        })
    }

    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryFixBanner summarySection p-0">
                    <div className="summaryBannerOverly">
                        <Container>
                            <Row className="text-center">
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="countSection">
                                        <Col>
                                            <h2 className="summaryCount">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h2>
                                            <h4 className="summaryTitle">Total Projects</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                        <Col>
                                            <h2 className="summaryCount">
                                                <CountUp start={0} end={90}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h2>
                                            <h4 className="summaryTitle">Total Clients</h4>
                                            <hr className="bg-white w-25"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={6} sm={12}>
                                    <Card style={{ width: '18rem' }} className="cardSection">
                                        <Card.Body>
                                            <Card.Title className="cardTitle text-justify">How I Work</Card.Title>
                                            <Card.Text>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement Gathering</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System Analysis</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding Testing</p>
                                                <p className="cardSubTitle text-justify"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;