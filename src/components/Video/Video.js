import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import 'video-react/dist/video-react.css';
import { Player,BigPlayButton } from 'video-react';
import RestClient from "../../RestAPI/RestClient";
import AppUrl from "../../RestAPI/AppUrl";

class Video extends Component {

        constructor() {
            super();
            this.state={
                show:false,
                video_title:"....",
                video_desc:"...",
                video_url:"..."
            }
        }
        modalClose=()=>this.setState({show:false})
        modalOpen=()=>this.setState({show:true})

    componentDidMount() {
        RestClient.GetRequest(AppUrl.VideoHome).then(result=>{
            this.setState({
                video_title:result[0]['video_title'],
                video_desc:result[0]['video_desc'],
                video_url:result[0]['video_url']
            })
        })
    }

    render() {
        return (
            <Fragment>
                <Container>
                    <Row className="text-center">
                        <Col lg={12} md={12} sm={12} className="videoCard">
                            <div>
                                <h4 className="videoTitle">{this.state.video_title}</h4>
                                <p className="videoContent">{this.state.video_desc}</p>
                                <p><FontAwesomeIcon onClick={this.modalOpen} className="videoIcon" icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modalClose}>
                    <Modal.Body>
                        <Player>
                            <source src={this.state.video_url} />
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalClose}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;