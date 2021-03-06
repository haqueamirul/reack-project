import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import ReactHtmlParser from "react-html-parser";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";

class TermsCondition extends Component {

    constructor() {
        super();
        this.state={
            desc:"...",
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Information).then(result=>{
            this.setState({desc:result[0]['terms'],loading:false})
        })
    }

    render() {
        if (this.state.loading==true){
            return <Loading/>
        }
        else {
            return (
                <Fragment>
                    <Container>
                        <Row>
                            <Col lg={12} md={12} sm={12} className="mt-5">
                                { ReactHtmlParser(this.state.desc) }
                            </Col>
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default TermsCondition;