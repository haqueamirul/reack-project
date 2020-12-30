import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="topFixPage p-0">
                    <div className="topFixPageOverly">
                        <Container className="topPageContent">
                            <Row>
                                <Col className="text-center">
                                    <h4 className="pageSubTitle">{this.props.pageTitle}</h4>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;