import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RequestTable from '../components/request/Table';

describe('Landing Page component', () => {
  beforeAll(() => {
    render(
      <Router>
        <RequestTable />
      </Router>
    );
  });
  test('Table should have table', () => {
    const table = screen.getByTestId('request-table');
    expect(table).toBeInTheDocument();
  });

  test('Table should have column headers', () => {
    const { container } = render(<RequestTable />);
    const table = container.querySelector('.MuiDataGrid-columnHeader');
    expect(table).toBeInTheDocument();
  });

  test('Table should have page change button', () => {
    const { container } = render(<RequestTable />);
    const pageButton = container.querySelector('.MuiButtonBase-root');
    expect(pageButton).toBeInTheDocument();
  });

  test('Table should have table body', () => {
    const { container } = render(<RequestTable />);
    const tableBody = container.querySelector('.MuiDataGrid-main');
    expect(tableBody).toBeInTheDocument();
  });

  test('Table should have table row body', () => {
    const { container } = render(<RequestTable />);
    const rowBody = container.querySelector('.MuiDataGrid-overlay');
    expect(rowBody).toBeInTheDocument();
  });

  test('Table should have text message in table row if no data', () => {
    const { container } = render(<RequestTable />);
    const rowBody = container.querySelector('.MuiDataGrid-overlay');
    const text = 'No rows';
    expect(rowBody).toHaveTextContent(text);
  });
  afterEach(cleanup);
});
