import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import graphicsIcon from '../../assets/images/graphic-design.png';
import mobileIcon from '../../assets/images/mobile-app.png';
import webLogo from '../../assets/images/web-coding.png';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";

class Services extends Component {
    service_img;
    service_name;
    service_desc;

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ServiceAll).then(result=>{
            this.setState({myData:result,loading:false})
        })
    }


    render() {

        if (this.state.loading==true){
            return <Loading/>
        }
        else {
            const myList= this.state.myData;
            const myView=myList.map(myList=>{
                return <Col lg={4} md={6} sm={12}>
                    <div className="serviceCard text-center">
                        <img className="serviceCardImage" src={myList.service_img} alt="webIcon"/>
                        <h2 className="serviceCardTitle">{myList.service_name}</h2>
                        <p className="serviceCardPare">{myList.service_desc}</p>
                    </div>
                </Col>
            })

            return (
                <Fragment>
                    <Container className="text-center">
                        <h2 className="serviceMainTitle">Our Services</h2>
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Services;