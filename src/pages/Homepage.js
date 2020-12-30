import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import TopBanner from "../components/TopBanner/TopBanner";
import Services from "../components/Services/services";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import RecentProject from "../components/RecentProject/RecentProject";
import Courses from "../components/Courses/Courses";
import Video from "../components/Video/Video";
import ClientsReview from "../components/ClientsReview/ClientsReview";
import Footer from "../components/Footer/Footer";

class Homepage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Homepage"/>
                <TopBanner/>
                <Services/>
                <Analysis/>
                <Summary/>
                <RecentProject/>
                <Courses/>
                <Video/>
                <ClientsReview/>
                <Footer/>
            </Fragment>
        );
    }
}

export default Homepage;