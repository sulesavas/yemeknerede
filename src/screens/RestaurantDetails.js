import React from 'react';
import { Card, Row, Col, Container, Button } from 'react-bootstrap';
import { useLocation, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getReviews } from '../services/api';
import ReactStars from 'react-stars';
import Image from '../components/Common/Image/Image';

function RestaurantDetails() {

  const history = useHistory();
  const { restaurantName } = useParams();
  const { state } = useLocation();
  const restaurant = state.restaurant;


  const viewReviews = () => {
    debugger;
    const init = async () => {
      try {
        const { data } = await getReviews(restaurant.id);
        let reviews = data.user_reviews;
        history.push(`/restaurant-reviews/${restaurant.name}`, { reviews });
      } catch (err) {
        alert(err);
      }
    };

    init();

  }


  return (

    <Container>
      <Card
        bg="light"
        className="mb-2">
        <Row className="p-3">
          <Col sm={5} lg={3} className="p-3">
            <Image className="rounded" src={restaurant.thumb||"/assets/not-found.png"} alt="Restaurant" />
          </Col>
          <Col sm={7} lg={9} className="p-3">
            <Row>
              <h3><i>{restaurantName}</i></h3>
            </Row>
            <Row>
              <ReactStars value={restaurant.user_rating.aggregate_rating} size={24} color2={'#800000'} /> <b className="mt-2 ml-2">{restaurant.user_rating.aggregate_rating}</b>
            </Row>
            <Row>
              {restaurant.cuisines}
            </Row>
            <Row>
              <span className="mr-2">2 Kişilik Tahmini Fiyat: </span>
              {restaurant.average_cost_for_two}{restaurant.currency}
            </Row>
          </Col>
        </Row>
        <Row className="px-4">
          <b className="mr-2">Adres:</b>{restaurant.location.address} {restaurant.location.locality}/{restaurant.location.city}
        </Row>
        <Row className="px-4">{restaurant.phone_numbers}</Row>
        <Row className="px-4 py-5">
          <Button variant="secondary" size="lg" block onClick={() => viewReviews()}>
            Restoran yorumları için tıklayın.
            </Button>
        </Row>
      </Card>
    </Container>


    /* {
      "id": "16774318",
      "name": "Otto Enoteca & Pizzeria",
      "url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village",
      "location": {
        "address": "1 5th Avenue, New York, NY 10003",
        "locality": "Greenwich Village",
        "city": "New York City",
        "latitude": "40.732013",
        "longitude": "-73.996155",
        "zipcode": "10003",
        "country_id": "216"
      },
      "average_cost_for_two": "60",
      "price_range": "2",
      "currency": "$",
      "thumb": "https://b.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_thumb.png",
      "featured_image": "https://d.zmtcdn.com/data/pictures/chains/8/16774318/a54deb9e4dbb79dd7c8091b30c642077_featured_v2.png",
      "photos_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/photos#tabtop",
      "menu_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/menu#tabtop",
      "events_url": "https://www.zomato.com/new-york-city/otto-enoteca-pizzeria-greenwich-village/events#tabtop",
      "user_rating": {
        "aggregate_rating": "3.7",
        "rating_text": "Very Good",
        "rating_color": "5BA829",
        "votes": "1046"
      },
      "has_online_delivery": "0",
      "is_delivering_now": "0",
      "has_table_booking": "0",
      "deeplink": "zomato://r/16774318",
      "cuisines": "Cafe",
      "all_reviews_count": "15",
      "photo_count": "18",
      "phone_numbers": "(212) 228-2930",
      "photos": [
        {
          "id": "u_MjA5MjY1OTk5OT",
          "url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_640_640_thumb.JPG",
          "thumb_url": "https://b.zmtcdn.com/data/reviews_photos/c15/9eb13ceaf6e90129c276ce6ff980bc15_1435111695_200_thumb.JPG",
          "user": {
            "name": "John Doe",
            "zomato_handle": "John",
            "foodie_level": "Super Foodie",
            "foodie_level_num": "9",
            "foodie_color": "f58552",
            "profile_url": "https://www.zomato.com/john",
            "profile_deeplink": "zoma.to/u/1170245",
            "profile_image": "string"
          },
          "res_id": "16782899",
          "caption": "#awesome",
          "timestamp": "1435111770",
          "friendly_time": "3 months ago",
          "width": "640",
          "height": "640",
          "comments_count": "0",
          "likes_count": "0"
        }
      ],
      "all_reviews": [
        {
          "rating": "5",
          "review_text": "The best latte I've ever had. It tasted a little sweet",
          "id": "24127336",
          "rating_color": "305D02",
          "review_time_friendly": "2 months ago",
          "rating_text": "Insane!",
          "timestamp": "1435507367",
          "likes": "0",
          "user": {
            "name": "John Doe",
            "zomato_handle": "John",
            "foodie_level": "Super Foodie",
            "foodie_level_num": "9",
            "foodie_color": "f58552",
            "profile_url": "https://www.zomato.com/john",
            "profile_deeplink": "zoma.to/u/1170245",
            "profile_image": "string"
          },
          "comments_count": "0"
        }
      ] */
  )
}

export default RestaurantDetails
