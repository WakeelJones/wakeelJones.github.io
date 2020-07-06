import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import './App.css';

import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Info from './pages/Info';
import ContactPage from './pages/ContactPage';
import Testimonials from './pages/Testimonials';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Mogamat Wakeel Jones',
      headerlinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Info', path: '/info' },
        { title: 'Contact', path: '/contact' },
        { title: 'Testimonial', path: '/testimonial' },
      ],
      home: {
        title: 'Be Relentless',
        subTitle: 'Projects That Makes A Difference',
        text: 'Checkout my Profiles Below',
      },
      about: {
        title: 'About Me',
      },
      Info: {
        title: 'Personal Info',
      },
      contact: {
        title: "Let's Talk",
      },
      testimonial: {
        title: 'What We Think About Wakeel!',
      },
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>
              <button path="/"><i class="far fa-angry"></i>
                <i class="fab fa-angrycreative"></i></button>
            </Navbar.Brand>

            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                <Link className="nav-link" to="/info">
                  Info
                </Link>
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
                <Link className="nav-link" to="/testimonials">
                  Testimonials
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
                text={this.state.home.text}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route path="/info" render={() => <Info title={this.state.Info.title} />} />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />
          <Route path="/testimonials" render={() => <Testimonials title={this.state.testimonial.title} />} />

          <Footer />
        </Container>
      </Router>
    );
  }
}

export default App;
