import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Services from "../components/Services/services";
import Footer from "../components/Footer/Footer";

class ServicePage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services"/>
                <PageTop pageTitle="Services"/>
                <Services/>
                <Footer/>
            </Fragment>
        );
    }
}

export default ServicePage;