import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import courseOne from '../../assets/images/coursesone.jpg';
import courseTwo from '../../assets/images/eLearning3.jpg';
import courseThree from '../../assets/images/TE+internship.png';
import {Link} from "react-router-dom";
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";
import Loading from "../Loading/Loading";

class Courses extends Component {
    short_title;
    short_desc;
    small_img;

    constructor() {
        super();
        this.state={
            myData:[],
            loading:true
        }
    }

    componentDidMount() {
        RestClient.GetRequest(AppUrl.CourseHome).then(result=>{
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
                return <Col lg={6} md={12} sm={12} className="mt-5">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <img className="coursesImg" src={myList.small_img} alt="course"/>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h4 className="text-left coursesTitle">{myList.short_title}</h4>
                            <p className="text-left coursesDesc">{myList.short_desc}</p>
                            <Link className="coursesDetails" to={"/courseDetails/"+myList.id}>Details</Link>
                        </Col>
                    </Row>
                </Col>
            })

            return (
                <Fragment>
                    <Container className="text-center">
                        <h2 className="serviceMainTitle">OUR COURSES</h2>
                        <Row>

                            {myView}

                        </Row>
                    </Container>
                </Fragment>
            );
        }

    }
}

export default Courses;