import React, { FC } from 'react';
import { Col, Button } from 'react-bootstrap';

interface BigButtonProps {
  onClick: () => void;
  value: string;
}

const BigButton: FC<BigButtonProps> = ({
  onClick,
  value
}) => {
  return (
    <Col className="mb-5" md="auto">
      <Button variant="danger" size="lg" onClick={onClick}>
        {value}
      </Button>
    </Col>
  );
};

export default BigButton;
