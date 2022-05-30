import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import RegistrationForm from '../components/registration/registrationForm';
import Unverified from '../pages/unverified';

test('button should be disabled', () => {
  const { getByTestId } = render(<RegistrationForm />);
  const button = getByTestId('submit');
  expect(button.disabled).toBe(false);
});

test('tiltle should be in the dom', () => {
  const { getByTestId } = render(<RegistrationForm />);
  const title = getByTestId('title');
  expect(title).toBeInTheDocument();
});

describe('it should get all input', () => {
  test('it should get all input in registration form', () => {
    render(<RegistrationForm />);

    const Registration = screen.getByLabelText('First Name');
    expect(Registration).toBeInTheDocument();
  });
  test('it should get FIRST input in registration form', () => {
    render(<RegistrationForm />);

    const Registration = screen.getByLabelText('User Name');
    expect(Registration).toBeInTheDocument();
  });
  test('it should get LAST NAME input in registration form', () => {
    render(<RegistrationForm />);

    const Registration = screen.getByLabelText('Last Name');
    expect(Registration).toBeInTheDocument();
  });
  test('it should get EMAIL input in registration form', () => {
    render(<RegistrationForm />);

    const Registration = screen.getByLabelText('Email');
    expect(Registration).toBeInTheDocument();
  });
  afterEach(cleanup);
});

describe('Render registration page', () => {
  test('it should render registrationForm componrnt', () => {
    render(<RegistrationForm />);

    const Registration = screen.getByTestId('regForm');
    expect(Registration).toBeInTheDocument();
  });
  afterEach(cleanup);
});

describe('Unverified PAGE', () => {
  beforeAll(() => {
    render(<Unverified />);
  });

  it('should have the right message in the dom', () => {
    const message = 'Please verify your Email to continue.';

    expect(screen.getByText(message)).toBeInTheDocument();
  });

  afterAll(cleanup);
});
