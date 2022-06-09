import React from 'react';
import { screen, render as rtlRender, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import user from '@testing-library/user-event';
import store from '../redux/store';
import Profile from '../components/profile/Profile';

const persistor = persistStore(store);
const render = (component) =>
  rtlRender(
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>{component}</BrowserRouter>
      </PersistGate>
    </Provider>
  );
const profile = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@gmail.com',
  gender: 'male',
  phoneNumber: '123-456-7890',
  address: '123 Main St',
  department: 'IT',
  lineManager: 'Jane Doe',
  preferredLanguage: 'English',
  preferredCurrency: 'USD',
  dob: '01/01/2000',
};

describe('Profile Page component', () => {
  test('Component should have form', () => {
    render(<Profile />);
    const form = screen.getByTestId('profile-form');
    expect(form).toBeInTheDocument();
  });

  test('Profile should have form fields', () => {
    render(<Profile />);
    const { container } = render(<Profile />);
    const fields = container.querySelector('.MuiFormLabel-root');
    expect(fields).toBeInTheDocument();
  });

  test('Profile should have this text', () => {
    render(<Profile />);
    const email = screen.getByTestId('email');
    user.type(email, profile.email);

    expect(email).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const firstName = screen.getByTestId('firstName');
    user.type(firstName, profile.firstName);

    expect(firstName).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const lastName = screen.getByTestId('lastName');
    user.type(lastName, profile.lastName);

    expect(lastName).toBeInTheDocument();
  });

  afterEach(cleanup);
});
