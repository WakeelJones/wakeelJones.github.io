import React from 'react';

import Hero from '../components/Hero';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Info(props) {
    return (
        <div>
            <Hero title={props.title} />

            <Container>
                <Row>
                    <Col>
                        <h3>Overview</h3>
                        <p>Full Name: Mogamat Wakeel Jones</p>
                        <p>Date of Birth: 23 February 1999</p>
                        <p>Gender: Male</p>
                        <p>Location (suburb): Mitchell’s Plain</p>
                        <p>Nationality (or legal status in this country): South Africa</p>
                        <p>Willing to relocate (Yes/No – Then where Johannesburg, Pretoria or Durban): NO</p>
                        <p>Any type of criminal record: No</p>
                        <p>Are you blacklisted or do you have any credit issues? : No</p>


                        
                        
                        <h3 className="justify-content-center">Student Bio</h3>

                        <p>I am a creative, committed and business-minded individual. I believe that discipline in one’s
                        approach to all one challenges is key to success. I am a family man and believe that family comes first.</p>

                        <p>I built my first basic website by the age of 20 and I have never looked back. I realized then that I had
a passion for developments and started to learn basics in HTML and CSS.</p>
                        
                        <ul>
                            <li>Sports: swimming, rugby and soccer</li>
                            <li>coding</li>
                            <li>music</li>
                            <li>gaming</li>
                        </ul>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p>Matric (year and school): 2017 - Pelican Park High</p>
                        <h2>Working Experience</h2>
                        <p>Company: Pick N Pay</p>
                        <p>Period: 7 months</p>
                        <p>Role: Shelf packer</p>
                        <p>Duties:</p>
                        <ul>
                            <li>merchandising</li>
                            <li>filling shelves</li>
                            <li>Off Loading Stock</li>
                        </ul>
                    </Col>
                    
                    
                        
                    
                </Row>
            </Container>
        </div>
    );
}

export default Info;

