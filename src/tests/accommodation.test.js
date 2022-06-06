import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import {
  screen,
  render as rtlRender,
  waitFor,
  cleanup,
} from '@testing-library/react';
import store from '../redux/store';
import Card from '../components/accommodation/accoCard';
import ProductPage from '../components/accommodation/productPage';
import Accommodations from '../pages/Accommodations';
import Accomodation from '../components/accommodation/accomodation';

const persistor = persistStore(store);
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>{component}</BrowserRouter>
      </PersistGate>
    </Provider>
  );

describe('IT SHOULD render accommodation TABLE', () => {
  test('it should render like btn', async () => {
    render(<Card />);
    const rowBody = screen.getByTestId('like');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });
  test('it should render view', async () => {
    render(<Card />);
    const rowBody = screen.getByTestId('views');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render card image', async () => {
    render(<Card />);
    const rowBody = screen.getByTestId('cardIMG');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render card descriptions', async () => {
    render(<Card />);
    const rowBody = screen.getByTestId('cardDesc');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render card containt', async () => {
    render(<Card />);
    const rowBody = screen.getByTestId('cardCONTAINT');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render card', async () => {
    render(<Card />);
    const rowBody = screen.getByTestId('card');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render card likes', async () => {
    render(<Card />);
    const rowBody = screen.getByTestId('likesNumber');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render address', async () => {
    render(<Card />);
    const rowBody = screen.getByTestId('cardAddress');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render accomodation description', async () => {
    render(<Card />);
    const rowBody = screen.getByTestId('cardDes');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('expect to have view text on the screen', async () => {
    render(<Card />);
    await waitFor(() => {
      expect(screen.getByText(/View/i)).toBeInTheDocument();
    });
  });

  test('it should render accommodation container', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('accContainer');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render accommodation name', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('accName');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render accommodation cover image', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('accCoverImg');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render accommodation image list', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('accImgList');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render accommodation feedback cover', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('accFeedbackswarper');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render accommodation feedback cover', async () => {
    render(<Accomodation />);
    const rowBody = screen.getByTestId('AccommodationscardContainer');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  it('should have the right message in the dom', () => {
    render(<Accommodations />);
    const message = 'Accommodations';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  test('it should render send feedback btn', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('productFeedbackBtn');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render send feedback input box', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('productFeedbackInput');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render send feedback title', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('productFeedbackTitle');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render give feedback', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('giveFeedback');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  // test('it should render aminities', async () => {
  //   render(<ProductPage />);
  //   const rowBody = screen.getByTestId('aminities');
  //   await waitFor(() => {
  //     expect(rowBody).toBeInTheDocument();
  //   });
  // });

  test('it should render product desc', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('productDescription');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  test('it should render product Description Title', async () => {
    render(<ProductPage />);
    const rowBody = screen.getByTestId('productDescriptionTitle');
    await waitFor(() => {
      expect(rowBody).toBeInTheDocument();
    });
  });

  afterAll(cleanup);
});
