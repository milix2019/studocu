import { render, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Left from './Left';

afterEach(() => cleanup);
describe('Left Component', () => {
  test('User can navigate to home screen', async () => {
    const app = render(
      <MemoryRouter>
        <Left />
      </MemoryRouter>
    );
    expect(app.getByText(/home/i)).toBeTruthy();
  });
});
