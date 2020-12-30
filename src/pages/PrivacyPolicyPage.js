import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import RefundSection from "../components/RefundSection/RefundSection";
import Footer from "../components/Footer/Footer";
import PrivacyPolicy from "../components/Privacy/PrivacyPolicy";

class PrivacyPolicyPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Privacy Policy"/>
                <PageTop pageTitle="Privacy Policy"/>
                <PrivacyPolicy/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PrivacyPolicyPage;