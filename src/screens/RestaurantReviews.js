import React from 'react';
import { Row, Container, Card, Col} from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import ReactStars from 'react-stars';
import Image from '../components/Common/Image/Image';


function RestaurantReviews() {

    const { restaurantName } = useParams();
    const { state } = useLocation();
    const reviews = state.reviews;

    return (
      
      <Container>
        <Row className='pb-4'><h3><i>{restaurantName} Görüşleri</i></h3></Row>
        {reviews.map(value=>{
          return <Card border="secondary" className="mb-3">
          <Card.Header>
            <div className="d-flex"><b className="mr-2">{value.review.rating}/5</b><ReactStars value={value.review.rating} size={20} /> </div>
          </Card.Header>
          <Card.Body>
            <Row>
            <Col sm={3} lg={2}>
             <Image src={value.review.user.profile_image} alt="profile" />
            </Col>
            <Col sm={9} lg={10}>
            <Card.Title>{value.review.user.name}</Card.Title>
            <Card.Text>
                {value.review.review_text}
            </Card.Text>
            </Col>
            </Row>
          </Card.Body>
        </Card>
        })}
        
      </Container>


    )
}

export default RestaurantReviews
