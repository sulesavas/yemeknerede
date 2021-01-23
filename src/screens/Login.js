import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, Container } from 'react-bootstrap';
import Button from '../components/Common/Button/Button';
import Input from '../components/Common/Input/Input';
import { FormContainer } from '../styles/WrappedFormElements.styles';
import { Middle } from '../styles/Common.styles';
import { LoginBackground } from '../styles/Background.styles';

import SessionContext from '../contexts/SessionContext';

const Login = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [error, setError] = useState({});

  const { setAuthenticated } = useContext(SessionContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    setError({});
    if (username !== 'user') {
      setError({username:'Kullanıcı adı hatalı!'});
    } 
    else if(password !== '123456'){
      setError({password:'Şifre hatalı!'});
    }
    else {
      setAuthenticated(true);
      history.push('/');
    }
  };

  return (
    <LoginBackground>
      <Container className="justify-content-center">
        <Middle>
          <Card border="danger" style={{ backgroundColor: '#ffffffa6', width: '18rem' }}>
            <Card.Header>YEMEK NEREDE?</Card.Header>

            <Card.Body>

              <FormContainer onSubmit={handleSubmit}>
                <Input
                  type="text"
                  name="username"
                  placeholder="Kullanıcı Adı"
                  autoComplete="off"
                  value={username}
                  onChange={(event) => {
                    setUsername(event.target.value);
                  }}
                  error={error.username}
                />
                <Input
                  type="password"
                  name="password"
                  placeholder="Şifre"
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                  error={error.password}
                />

                <Button type="submit" text="Oturum Aç" />
              </FormContainer>

            </Card.Body>
          </Card>
        </Middle>
      </Container>
    </LoginBackground>
  );
};

export default Login;
