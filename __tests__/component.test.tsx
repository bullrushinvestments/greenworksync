import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: Error) => ({
    data,
    loading: !Boolean(data),
    error,
  });

  beforeEach(() => {
    (useExternalData as jest.Mock).mockImplementation(mockUseExternalData);
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays data when fetched successfully', async () => {
    const mockData = { key: 'value' };
    (useExternalData as jest.Mock).mockImplementation(() =>
      mockUseExternalData(mockData)
    );
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/value/i)).toBeInTheDocument());
  });

  test('displays error message when fetching data fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useExternalData as jest.Mock).mockImplementation(() =>
      mockUseExternalData(undefined, mockError)
    );
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interaction with button', () => {
    const onClickMock = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={onClickMock}
        data={{ key: 'value' }}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('checks accessibility features', () => {
    const { container } = render(<CoreFunctioninalityComponent />);
    expect(container.firstChild).toHaveAttribute('aria-label');
    expect(container.firstChild).toBeVisible();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./ExternalDependency', () => ({
  useExternalData: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalData = (data?: any, error?: Error) => ({
    data,
    loading: !Boolean(data),
    error,
  });

  beforeEach(() => {
    (useExternalData as jest.Mock).mockImplementation(mockUseExternalData);
  });

  test('renders without crashing', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays data when fetched successfully', async () => {
    const mockData = { key: 'value' };
    (useExternalData as jest.Mock).mockImplementation(() =>
      mockUseExternalData(mockData)
    );
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/value/i)).toBeInTheDocument());
  });

  test('displays error message when fetching data fails', async () => {
    const mockError = new Error('Failed to fetch');
    (useExternalData as jest.Mock).mockImplementation(() =>
      mockUseExternalData(undefined, mockError)
    );
    render(<CoreFunctionalityComponent />);
    await waitFor(() => expect(screen.getByText(/failed to fetch/i)).toBeInTheDocument());
  });

  test('handles user interaction with button', () => {
    const onClickMock = jest.fn();
    render(
      <CoreFunctionalityComponent
        onButtonClick={onClickMock}
        data={{ key: 'value' }}
      />
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  test('checks accessibility features', () => {
    const { container } = render(<CoreFunctioninalityComponent />);
    expect(container.firstChild).toHaveAttribute('aria-label');
    expect(container.firstChild).toBeVisible();
  });
});