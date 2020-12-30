import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import error from "../../assets/images/warning.svg";

class WentWrong extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="LoadingCla" src={error} alt="loading"/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default WentWrong;