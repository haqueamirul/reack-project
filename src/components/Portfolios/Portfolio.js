import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import postOne from "../../assets/images/foodbazz.png";
import postTwo from "../../assets/images/foolbazz.png";
import postThree from "../../assets/images/travelapp.png";
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";

class Portfolio extends Component {

    project_title;
    project_shortdesc;
    project_img1;

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.ProjectSelectAll).then(result=>{
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
                return  <Col lg={4} md={6} sm={12} className="pt-3">
                    <Card className="postCardBox" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={myList.project_img1} />
                        <Card.Body>
                            <Card.Title>{myList.project_title}</Card.Title>
                            <Card.Text>
                                {myList.project_shortdesc}
                            </Card.Text>
                            <Link to={"/projectDetails/"+myList.id+"/"+myList.project_title}><Button variant="primary">Details</Button></Link>
                        </Card.Body>
                    </Card>
                </Col>
            })

            return (
                <Fragment>
                    <Container className="text-center mt-5">
                        <Row>
                            {myView}
                        </Row>
                    </Container>
                </Fragment>
            );
        }
    }
}

export default Portfolio;