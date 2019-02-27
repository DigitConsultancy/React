import React, { Component } from 'react';
import { Container, Row, Col,Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, NavLink } from 'reactstrap';
import './VehicleBrowser.css';

class VehicleBrowser extends Component {
    constructor(props){
        super(props);
    }
  render() {
    const cardItem = this.props.vehicledata.map((item) => {
      return (
        <Col key={item.detailKey}  md={ Math.ceil(12 / this.props.vehicledata.length) }>
        <Card>
        <CardImg top width="100%" src={item.thumbnail} alt={item.altText} />
        <CardBody>
          <CardTitle>{item.modelYear}   {item.model }</CardTitle>
          <CardSubtitle>{item.tagline}</CardSubtitle>
          <CardText></CardText>
          <NavLink href={"/detail"+item.detailKey}>Details</NavLink>
          <NavLink href="/build-and-price">Build & Price</NavLink>
          <NavLink href="/find-a-dealer">Dealers near You</NavLink>
        </CardBody>
      </Card>
      </Col>
      );
    });
    return (
      <div className="vehicleBrowser">
      <Container>
        <Row>
          
          {cardItem}
        
        </Row>
      </Container>
    </div>
    );
  }
}

export default VehicleBrowser;