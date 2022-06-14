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
  dob: '01-01-2000',
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
  test('Profile should have this text', () => {
    render(<Profile />);
    const email = screen.getByTestId('email');
    user.type(email, profile.email);

    expect(email).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const gender = screen.getByTestId('gender');
    user.type(gender, profile.gender);

    expect(gender).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const department = screen.getByTestId('department');
    user.type(department, profile.department);

    expect(department).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const phoneNumber = screen.getByTestId('phoneNumber');
    user.type(phoneNumber, profile.phoneNumber);

    expect(phoneNumber).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const address = screen.getByTestId('address');
    user.type(address, profile.address);

    expect(address).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const lineManager = screen.getByTestId('lineManager');
    user.type(lineManager, profile.lineManager);

    expect(lineManager).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const preferredLanguage = screen.getByTestId('preferredLanguage');
    user.type(preferredLanguage, profile.preferredLanguage);

    expect(preferredLanguage).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const preferredCurrency = screen.getByTestId('preferredCurrency');
    user.type(preferredCurrency, profile.preferredCurrency);

    expect(preferredCurrency).toBeInTheDocument();
  });
  test('Profile should have this text', () => {
    render(<Profile />);
    const dob = screen.getByTestId('dob');
    user.type(dob, profile.dob);

    expect(dob).toBeInTheDocument();
  });

  afterEach(cleanup);
});
