import React from 'react';
import {Row, ListGroup, Card, Nav} from 'react-bootstrap';
import Typical from 'react-typical';
import "../App.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faChessQueen, faFileAlt} from '@fortawesome/free-solid-svg-icons';

function Main(){
    return <Card className="text-center" style={{backgroundColor: '#282c34'}}>
        <Card.Body style={{justifyContent: 'center', height:'750px', paddingTop:'250px'}}>
            <Card.Title className="text-white" style={{fontSize: '4rem'}}>
                <code>
                <Typical
                    steps={['Hi, World', 1000, 'I am Dinda Gladis', 500]}
                    loop={Infinity}
                    wrapper="b"
                />
                </code>
            </Card.Title>
            <hr className="w-25 line"/>
            <Card.Text>
                <h5 className="text-white">[ Software Engin<span className="text-danger">ee</span>ring ]</h5>
            </Card.Text>
            <div className="justify-content-between align-items-center m-2">
                <a href="https://github.com/dindagladies" className="mr-3" style={{color:'white'}}><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://www.linkedin.com/in/dindagladis/" className="mr-3" style={{color:'gray'}}><FontAwesomeIcon icon={faLinkedin} size="2x" transform={{ rotate: 42 }} /></a>
                <a href="mailto:dindagladies44@gmail.com" className="mr-3" style={{color:'white'}}><FontAwesomeIcon icon={faEnvelope} size="2x" /></a>
                <a href="/" className="mr-3" style={{color:'gray'}}><FontAwesomeIcon icon={faFileAlt} size="2x" /></a>
                <a href="https://lichess.org/@/Dindunious" className="mr-3" style={{color:'gray'}}><FontAwesomeIcon icon={faChessQueen} size="2x" transform={{ rotate: 330 }} /></a>
            </div>
        </Card.Body>
        <div className="text-muted">
                Gladis © 2021. Made w ❤ JS
        </div>
        
    </Card>
}

export default Main;