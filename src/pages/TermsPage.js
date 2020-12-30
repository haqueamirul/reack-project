import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import RefundSection from "../components/RefundSection/RefundSection";
import Footer from "../components/Footer/Footer";
import TermsCondition from "../components/TearmCondition/TermsCondition";

class TermsPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Terms & Conditions"/>
                <PageTop pageTitle="Terms & Conditions"/>
                <TermsCondition/>
                <Footer/>
            </Fragment>
        );
    }
}

export default TermsPage;