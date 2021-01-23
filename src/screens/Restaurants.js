import React, { useState, useEffect } from 'react';
import { Row, Col, Card, Badge } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { getGeoCode } from '../services/api';
import { useHistory } from 'react-router-dom';

function Restaurants() {

  const history = useHistory();
  const { cityName } = useParams();
  const { state } = useLocation();
  const city = state.city;

  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    const init = async () => {
      try {
        const { data } = await getGeoCode(city.latitude, city.longitude);
        setRestaurantList(data.nearby_restaurants);
      } catch (err) {
        alert(err);
      }
    };

    init();
  }, [city.latitude, city.longitude]);

  const selectRestaurant = (restaurant) => {
    history.push(`/restaurant-details/${restaurant.name}`, { restaurant });
    console.log(restaurant);
  }
  return (
    <div className="jumbotron jumbotron-fluid">
      <center><h2 className="pb-2">{cityName} Restoranları</h2></center>
      <Row className="justify-content-md-center">
        {
          restaurantList.map(value => {
            return <Col md={6}>
              <center>
                <Card className="mb-3" style={{ width: '20rem' }} onClick={() => selectRestaurant(value.restaurant)}>
                  <Card.Img variant="left" src={value.restaurant.thumb || "/assets/not-found.png"} />
                  <Card.Body>
                    <Card.Title>
                      {value.restaurant.name}
                      <Badge pill variant="warning">
                      {value.restaurant.user_rating.aggregate_rating}/5
                       </Badge>
                      </Card.Title>
                  </Card.Body>
                </Card>
              </center>
            </Col>


          })
        }
      </Row>



    </div>
  )
}

export default Restaurants
