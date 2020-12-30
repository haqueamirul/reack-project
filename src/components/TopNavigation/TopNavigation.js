import React, {Component, Fragment} from 'react';
import '../../assets/css/custom.css';
import {Nav, Navbar} from "react-bootstrap";
import whiteLogo from '../../assets/images/navlogo.f599bd96.svg';
import blueLogo from '../../assets/images/navlogoScroll.d6db46a9.svg';
import {NavLink, Route} from "react-router-dom";

class TopNavigation extends Component {

    constructor(props) {
        super();
        this.state={
            navBarTitle:"navTitle",
            navVariant: "dark",
            navBarLogo:[whiteLogo],
            navBarBack:"navBackground",
            navBarItem:"navItem",
            pageTitle: props.title,
        }
    }
    onScroll=()=>{
        if (window.scrollY>100){
            this.setState({navVariant:'light',navBarTitle:'navTitleScroll', navBarLogo:[blueLogo], navBarBack:'navBackgroundScroll', navBarItem:'navItemScroll'})
        }else if (window.scrollY<100){
            this.setState({navVariant:'dark',navBarTitle:'navTitle', navBarLogo:[whiteLogo], navBarBack:'navBackground', navBarItem:'navItem'})
        }
    }

    componentDidMount() {
        window.addEventListener('scroll',this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBarBack} fixed="top" collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand><NavLink to="/" className={this.state.navBarTitle}><img src={this.state.navBarLogo} alt="logo"/> CommanderIT</NavLink></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">

                        </Nav>
                        <Nav>
                            <Nav.Link><NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/">HOME</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/service">SERVICES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/course">COURSES</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/portfolio">PORTFOLIO</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/contact">CONTACT</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#0073e6'}} className={this.state.navBarItem} to="/about">ABOUT</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;