import React from 'react';
import { render } from '@testing-library/react';
import { Col } from 'react-bootstrap';
import BigButton from './BigButton';

describe('BigButton', () => {
  test('renders default button', () => {
    const { getByRole } = render(<BigButton value="button" onClick={()=>console.log("deneme")} />);

    const ButtonContent = getByRole('button');

    expect(ButtonContent).toHaveClass('btn-danger');
  });

  test('control button text', () => {
    const { getByRole } = render(<BigButton value="hello" onClick={()=>console.log("deneme")} />);

    const ButtonContent = getByRole('button');

    expect(ButtonContent.textContent).toBe('hello');
  });

});
