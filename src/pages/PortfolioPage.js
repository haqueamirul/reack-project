import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Portfolio from "../components/Portfolios/Portfolio";
import Footer from "../components/Footer/Footer";

class PortfolioPage extends Component {
    componentDidMount() {
        window.scroll(0,0)
    }
    render() {
        return (
            <Fragment>
                <TopNavigation title="Portfolios"/>
                <PageTop pageTitle="Portfolios"/>
                <Portfolio/>
                <Footer/>
            </Fragment>
        );
    }
}

export default PortfolioPage;