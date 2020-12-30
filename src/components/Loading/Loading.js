import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import loading from '../../assets/images/loader.svg';

class Loading extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center">
                    <Row>
                        <Col>
                            <img className="LoadingCla" src={loading} alt="loading"/>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Loading;