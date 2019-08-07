import React from 'react';
import '../styles/components/landing.scss';

import img1 from '../images/ca/effe.png';
import img2 from '../images/ca/ca.jpeg';
import img3 from '../images/ca/37811295_2096965080374205_4625127831544791040_n.jpeg';
import img4 from '../images/ca/tickets.jpg';
import img5 from '../images/ca/37831874_2096961243707922_2127322938368589824_n.jpeg';
import img6 from '../images/ca/goodies.jpeg';
const Landing=()=>{

      return (
            <div id='landing-page'>

                  <nav className="white" role="navigation">
                  <div className="nav-wrapper container">
                        <a id="logo-container" href="https://effe.org.in" className="brand-logo"><img style={{height:'60px',width:'60px',display:'inline-block'}}  src={img1} alt=''/></a><a className="navbar-brand" style={{paddingLeft: '6%',fontSize: '25px', color:'teal',fontFamily:'Berkshire Swash',transition:'all 100ms ease-in-out',display:'inline-block'}} href="https://effe.org.in">Effervescence'19</a>
                        <ul className="right hide-on-med-and-down">
                        <li><a href="#roles">Roles</a></li>
                  <li><a href="#incentives">Incentives</a></li>
                  <li><a href="#contact">Contact</a></li>
                        </ul>

                        <ul id="nav-mobile" className="sidenav">
                              <li><a href="#roles">Roles</a></li>
                        <li><a href="#incentives">Incentives</a></li>
                        <li><a href="#contact">Contact</a></li>
                        </ul>
                        <a href="#" data-target="nav-mobile" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                  </div>
                  </nav>

                  <div id="index-banner" className="parallax-container">
                  <div className="section no-pad-bot">
                        <div className="container">
                        <br/><br/>
                        <h1 className="header center teal-text text-lighten-2 intro">Campus Ambassador</h1>
                        <div className="row center">
                        <h5 className="header col s12 light">Register Now to be part of north's greatest fest!</h5>
                        </div>
                        <div className="row center">
                        <a href="/set_new_user/" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Register</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a href="/user_login/" id="download-button" className="btn-large waves-effect waves-light teal lighten-1">Login</a>
                        </div>
                        <br/><br/>

                        </div>
                  </div>
                  <div className="parallax"><img style={{opacity: '1',transform: 'translate3d(-50%, 171.9px, 0px)'}} src={img2} alt="Unsplashed background img 1" /></div>
                  </div>


                  <div className="container">
                  <div className="section">
                              <div className="row">
                        <div className="col s12 center">
                        <h3><i className="mdi-content-send brown-text"></i></h3>
                        <h4>About CA Program</h4>
                        <p className="left-align light">The CR system of Effervescence,IIIT Allahabad plays an integral part in its growth and promotions. It serves as a platform for binding Effervescence with the students across the country as well as imbibing their culture in our festival.

                  It provides an opportunity to college students across the nation to stand out from multitude of people by being our voice in their respective colleges and thereby significantly bridging the gap between the two.

                  So do register ,by associating with us as College Ambassadors and thereby moulding this edition of Effervescence bigger and glorious than ever before.</p>
                        </div>
                        </div>
                        {/* <!--   Icon Section   --> */}
                        <div className="row" id="roles">
                        <div className="col s12 m4">
                        <div className="icon-block">
                              <h2 className="center brown-text"><i className="material-icons">group</i></h2>
                              <h5 className="center">Participation</h5>

                              <p className="light">It is only the Campus Ambassadors who are responsible to refer other CA to the team Effervescence.Encourage and motivate the people around to register and to show active participation in the EFFE events.</p>
                        </div>
                        </div>

                        <div className="col s12 m4">
                        <div className="icon-block">
                              <h2 className="center brown-text"><i className="material-icons">camera_alt</i></h2>
                              <h5 className="center">Social Media</h5>

                              <p className="light">Promoting Effervescence,IIIT Allahabad on various other social platforms like Twitter,Instagram and even various Facebook and Whatsapp groups.</p>
                        </div>
                        </div>

                        <div className="col s12 m4">
                        <div className="icon-block">
                              <h2 className="center brown-text"><i className="material-icons">location_city</i></h2>
                              <h5 className="center">Multicity</h5>

                              <p className="light">The CAs are expected to coordinate with the EFFE team and help us conduct the multicity program in your city(if selected) along with managing public relations with Effervescence.</p>
                        </div>
                        </div>
                        </div>

                  </div>
                  </div>


                  <div className="container" id="incentives">
                  <div className="section">

                        <div className="row">
                        <div className="col s12 m12 l12 center">
                        <h3><i className="mdi-content-send brown-text"></i></h3>
                        <h4>Incentives</h4>
                        </div>
                        </div>
                              
                                    
                              <div className="row center">
                        <div className="col s12 m6 l3">
                              <h6 className="light">Certificates</h6>
                              
                              <div className="card-image pic" >
                              <img src={img3} className="pic" alt=''/>
                              
                                          </div>
                              
                                    </div>
                              
                              
                              
                                          
                        <div className="col s12 m6 l3">
                              <h6 className="light">Pronite passes</h6>
                        
                              <div className="card-image pic">
                              <img src={img4} className="pic" alt='' />
                              
                                          </div>
                              
                                    </div>
                              
                              
                              
                                          
                        <div className="col s12 m6 l3">
                              <h6 className="light">Internship Opportunity</h6>
                              
                              <div className="card-image pic">
                              {/* src='../images/ca/37831874_2096961243707922_2127322938368589824_n.jpeg' src='../images/ca/37874931_2096968410373872_4147344730256048128_n.jpeg'  */}
                              <img src={img5} className="pic" alt=''/>
                              
                                          </div>
                              
                                    </div>
                              
                              
                              
                                          
                        <div className="col s12 m6 l3">
                              <h6 className="light">Zebronics Goodies</h6>
                              
                              <div className="card-image pic">
                              <img src={img6} className="pic" alt='' />
                              
                                          </div>
                              
                                    </div>
                              
                              
                        
                              
                                                </div>
                                                </div>
                                                
                              
                              </div>
                        



                  <footer className="page-footer teal">
                  <div className="container" id="contact">
                        <div className="row">
                        <div className="col l6 s12">
                        <h5 className="white-text">Effervescence</h5>
                        <p className="grey-text text-lighten-4">Effervescence is the annual cultural fest of IIIT Allahabad and one of the greatest fests of the north.</p>


                        </div>
                        
                        <div className=" col l6 s12">
                        <h5 className="white-text">Connect</h5>
                        <ul >
                                    
                              <li style={{display:'inline',padding:'25px'}} ><a className="white-text" href="https://www.facebook.com/effervescence.iiita/"><i className="fab fa-facebook-f fa-3x"></i></a></li>
                              <li style={{display:'inline',padding:'25px'}} ><a className="white-text" href="https://twitter.com/goeffervescence?lang=en"><i className="fab fa-twitter fa-3x"></i></a></li>
                              <li style={{display:'inline',padding:'25px'}} ><a className="white-text" href="https://instagram.com/goeffervescence"><i className="fab fa-instagram fa-3x"></i></a></li>
                              
                                          
                        </ul>
                        </div>
                        </div>
                  </div>
                  <div className="footer-copyright">
                        <div className="container">
                        effervescence@iiita.ac.in +91-7607020660
                        </div>
                  </div>
                  </footer>


            </div>
      );

};

export default Landing;