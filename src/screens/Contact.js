import React,{useState} from "react";
import { Card, Row, Col, Container, Button, Form } from "react-bootstrap";

function Contact() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const sendForm =()=> {

    if(name===''){
      alert('Ad soyad alanı boş olamaz')
    }
    else if(email===''){
      alert('E-posta alanı boş olamaz')
    }
    else if(message===''){
      alert('Mesaj alanı boş olamaz')
    }
    else{

      alert('Mesajınız iletilmiştir!')
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      
    }
    
  }

  return (
    <Container>
      <Card bg="light" className="mb-2">
        <Row className="p-3">
          <Col className="p-3">
            <Form>
              <Form.Group>
                <Form.Label>Ad Soyad</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Adınızı ve soyadınızı girin"
                  value={name}
                  onChange={(event)=>setName(event.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>E-Posta</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="E-posta adresinizi girin"
                  value={email}
                  onChange={(event)=>setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Telefon</Form.Label>
                <Form.Control
                  type="number"
                  maxLength="11"
                  placeholder="Telefon numaranızı girin"
                  value={phone}
                  onChange={(event)=>setPhone(event.target.value)}
                />
              </Form.Group>

              <Button className="ml-3" variant="dark" type="button" onClick={()=>sendForm()}>
                
                Gönder
              </Button>
            </Form>
          </Col>
          <Col className="p-3">
            <Form.Group>
              <Form.Label>Mesaj</Form.Label>
              <Form.Control
                type="text"
                as="textarea"
                rows={8}
                placeholder="Mesajınız girin"
                value={message}
                onChange={(event)=>setMessage(event.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Contact;
