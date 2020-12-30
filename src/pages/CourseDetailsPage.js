import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import Footer from "../components/Footer/Footer";
import RestClient from "../RestAPI/RestClient";
import AppUrl from "../RestAPI/AppUrl";

class CourseDetailsPage extends Component {

    constructor({match}) {
        super();
        this.state={
            MyCourseId:match.params.courseID,
            CourseData:[]
        }
    }

    componentDidMount() {
        window.scroll(0,0)

        RestClient.GetRequest(AppUrl.CourseDetails+this.state.MyCourseId).then(result=>{
            this.setState({CourseData:result})
        }).catch(error=>{

        })
    }
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <CourseDetails courseData={this.state.CourseData}/>
                <Footer/>
            </Fragment>
        );
    }
}

export default CourseDetailsPage;