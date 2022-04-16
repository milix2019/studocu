import { cleanup } from '@testing-library/react';
import RenderWithRedux from '../../renderWithRedux';
import Home from './home';

afterEach(() => cleanup);

describe('Home Component', () => {
  test('Should render the child components', async () => {
    // call our own custom redux-setup
    RenderWithRedux(<Home />);
  });
});
