import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      title: 'Sample Title',
      content: 'This is a sample content.',
    },
  }),
}));

describe('Design Architecture Component', () => {
  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays fetched data correctly', async () => {
    const { getByRole } = render(<DesignArchitectureComponent />);
    await waitFor(() => expect(getByRole('heading')).toHaveTextContent('Sample Title'));
    expect(getByRole('article')).toHaveTextContent('This is a sample content.');
  });

  test('handles errors gracefully', async () => {
    // Mock API to throw an error
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/api error/i));
  });

  test('displays loading state while fetching data', async () => {
    const { getByText } = render(<DesignArchitectureComponent />);

    // Wait for the initial "Loading..." text
    expect(getByText(/loading/i)).toBeInTheDocument();

    // Simulate API call completion to check if it transitions out of loading state
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  test('is accessible', () => {
    render(<DesignArchitectureComponent />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveAttribute('aria-level', '1'); // Assuming the title is an h1
    const content = screen.getByRole('article');
    expect(content).toBeVisible();
  });

  test('handles user interactions such as clicking a button to refresh data', async () => {
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByRole('button', { name: /refresh/i }));
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(2));
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers like toBeInTheDocument
import DesignArchitectureComponent from './DesignArchitectureComponent';

// Mock API response
jest.mock('./api', () => ({
  fetchData: jest.fn().mockResolvedValue({
    data: {
      title: 'Sample Title',
      content: 'This is a sample content.',
    },
  }),
}));

describe('Design Architecture Component', () => {
  test('renders without crashing', () => {
    render(<DesignArchitectureComponent />);
    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  test('displays fetched data correctly', async () => {
    const { getByRole } = render(<DesignArchitectureComponent />);
    await waitFor(() => expect(getByRole('heading')).toHaveTextContent('Sample Title'));
    expect(getByRole('article')).toHaveTextContent('This is a sample content.');
  });

  test('handles errors gracefully', async () => {
    // Mock API to throw an error
    (fetchData as jest.Mock).mockRejectedValueOnce(new Error('API Error'));

    render(<DesignArchitectureComponent />);
    await waitFor(() => expect(screen.getByRole('alert')).toHaveTextContent(/api error/i));
  });

  test('displays loading state while fetching data', async () => {
    const { getByText } = render(<DesignArchitectureComponent />);

    // Wait for the initial "Loading..." text
    expect(getByText(/loading/i)).toBeInTheDocument();

    // Simulate API call completion to check if it transitions out of loading state
    await waitFor(() => expect(screen.queryByText(/loading/i)).not.toBeInTheDocument());
  });

  test('is accessible', () => {
    render(<DesignArchitectureComponent />);
    const heading = screen.getByRole('heading');
    expect(heading).toHaveAttribute('aria-level', '1'); // Assuming the title is an h1
    const content = screen.getByRole('article');
    expect(content).toBeVisible();
  });

  test('handles user interactions such as clicking a button to refresh data', async () => {
    render(<DesignArchitectureComponent />);
    fireEvent.click(screen.getByRole('button', { name: /refresh/i }));
    await waitFor(() => expect(fetchData).toHaveBeenCalledTimes(2));
  });
});