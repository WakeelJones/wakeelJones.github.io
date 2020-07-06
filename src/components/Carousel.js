import React from 'react';
import linkedin from '../Assets/linkedin.jpg';
import linkedin_profile from '../Assets/linkedin_profile.png';
import codepen from '../Assets/codepen.png';

import Card from './Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: 'GitHub',
          subTitle: 'IT Service Management Company',
          imgSrc: linkedin,
          link: 'https://github.com/WakeelJones',
          selected: false,
        },
        {
          id: 1,
          title: 'Wakeel Jones',
          subTitle: 'LinkedIn Profile',
          imgSrc: linkedin_profile,
          link: 'https://www.linkedin.com/in/wakeel-jones-3b0036157',
          selected: false,
        },
        {
          id: 2,
          title: 'Wakeel Jones',
          subTitle: 'CodePen Profile',
          imgSrc: codepen,
          link: 'https://codepen.io/dashboard',
          selected: false,
        },
      ],
    };
  }

  handleCardClick = (id, card) => {
    console.log(id);
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach((item) => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items,
    });
  };

  makeItems = (items) => {
    return items.map((item) => {
      return (
        <Card
          item={item}
          click={(e) => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
