import React from 'react';
import { Container, Row} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { getLocations } from '../services/api';
import { MainBackground } from '../styles/Background.styles';
import BigButton from '../components/Common/BigButton/BigButton';
import CityList from '../utils/CityList'

function Home() {

  const history = useHistory();

  const selectCity = (query) => {
    const init = async () => {
      try {
        const { data } = await getLocations(query);
        let city = data.location_suggestions[0];
        history.push(`/restaurants/${city.city_name}`, { city });
      } catch (err) {
        alert(err); 
      }
    };

    init();

  }


  return (
    <MainBackground>
      <Container>
        <center>
          <Row className="mt-5 justify-content-md-center w-75 text-center">
            {
              CityList.map(value => {
                return <BigButton 
                onClick={() => selectCity(value.name)} 
                value={value.id+" - "+value.name} />
              })
            }
          </Row>
        </center>
      </Container>
    </MainBackground>
  )
}

export default Home
