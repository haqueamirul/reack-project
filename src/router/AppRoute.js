import React, {Component, Fragment} from 'react';
import {Route,Switch} from "react-router-dom";
import Homepage from "../pages/Homepage";
import ServicePage from "../pages/ServicePage";
import CoursesPage from "../pages/CoursesPage";
import PortfolioPage from "../pages/PortfolioPage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";
import RefundPage from "../pages/RefundPage";
import TermsPage from "../pages/TermsPage";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import ProjectDetailsPage from "../pages/ProjectDetailsPage";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import CourseDetailsPage from "../pages/CourseDetailsPage";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>

                    <Route exact path="/" component={Homepage}/>
                    <Route exact path="/service" component={ServicePage}/>
                    <Route exact path="/course" component={CoursesPage}/>
                    <Route exact path="/portfolio" component={PortfolioPage}/>
                    <Route exact path="/about" component={AboutPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/refund" component={RefundPage}/>
                    <Route exact path="/terms" component={TermsPage}/>
                    <Route exact path="/privacy" component={PrivacyPolicyPage}/>
                    <Route exact path="/projectDetails/:projectID/:projectName" component={ProjectDetailsPage}/>
                    <Route exact path="/courseDetails/:courseID" component={CourseDetailsPage}/>

                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;