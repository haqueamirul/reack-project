import React, {Component, Fragment} from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {Col, Container, Row} from "react-bootstrap";
import clientImg from '../../assets/images/IMG_0193.JPG'
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class ClientsReview extends Component {
    client_img;
    client_title;
    client_desc;

    constructor() {
        super();
        this.state={
            myData:[]
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.Clientsec).then(result=>{
            this.setState({myData:result})
        })
    }

    render() {
        var settings = {
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            infinite: true,
            speed: 3000,
            vertical: true,
            verticalSwiping: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };


        const myList= this.state.myData;
        const myView=myList.map(myList=>{
            return <div>
                <Row className="text-center justify-content-center">
                    <Col lg={6} md={6} sm={12}>
                        <img className="circleImage" src={myList.client_img} alt="profile"/>
                        <h4 className="clientTitle">{myList.client_title}</h4>
                        <p className="clientDesc">{myList.client_desc}</p>
                    </Col>
                </Row>
            </div>
        })

        return (
            <Fragment>
                <Container className="text-center">
                    <h2 className="serviceMainTitle">CLIENT SAYS</h2>
                    <Slider {...settings}>
                        {myView}
                    </Slider>
                </Container>
            </Fragment>
        );
    }
}

export default ClientsReview;