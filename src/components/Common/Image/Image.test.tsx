import React, {FC} from 'react';
import { render } from '@testing-library/react';
import Image from './Image';

const SimpleImage: FC = () => {
  return (
    <Image />
  )
};

describe('Image', () => {
  test('renders image', () => {
    const { getByRole } = render(<SimpleImage />);

    const img = getByRole('img') as HTMLImageElement;

    expect(img.alt).toBe('resim');
  });

  test('image controls', () => {
    const { getByRole } = render(<SimpleImage />);

    const img = getByRole('img') as HTMLImageElement;

    expect(img).toBeInTheDocument();
  });

  test('image style', () => {
    const { getByRole } = render(<SimpleImage />);

    const img = getByRole('img') as HTMLImageElement;

    expect(img.src).toBe('http://localhost/assets/not-found.png');
  });

});
