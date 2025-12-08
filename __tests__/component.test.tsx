import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalService = (data?: any) => ({
    loading: false,
    error: null,
    data: data || {},
    fetchData: jest.fn().mockResolvedValue(data),
  });

  beforeEach(() => {
    (useExternalService as jest.Mock).mockReturnValue(mockUseExternalService());
  });

  test('renders component without errors', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles loading state correctly', async () => {
    const mockLoading = mockUseExternalService({ loading: true });
    (useExternalService as jest.Mock).mockReturnValue(mockLoading);

    render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('handles error state correctly', async () => {
    const mockError = mockUseExternalService({ error: new Error('Mock error') });
    (useExternalService as jest.Mock).mockReturnValue(mockError);

    render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('calls fetchData on component mount', () => {
    const mockFetchData = jest.fn();
    (useExternalService as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: {},
      fetchData: mockFetchData,
    });

    render(<CoreFunctionalityComponent />);

    expect(mockFetchData).toHaveBeenCalledTimes(1);
  });

  test('allows user to trigger action', () => {
    const mockAction = jest.fn();
    (useExternalService as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: { actionHandler: mockAction },
    });

    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByText(/trigger action/i));
    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  test('ensures component is accessible', () => {
    const { container } = render(<CoreFunctioninalityComponent />);
    expect(container.firstChild).toHaveAttribute('role', 'region');
    expect(container.firstChild).toHaveAccessibleName();
  });
});

import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import CoreFunctionalityComponent from './CoreFunctionalityComponent';

jest.mock('./externalDependency', () => ({
  useExternalService: jest.fn(),
}));

describe('Core Functionality Component Tests', () => {
  const mockUseExternalService = (data?: any) => ({
    loading: false,
    error: null,
    data: data || {},
    fetchData: jest.fn().mockResolvedValue(data),
  });

  beforeEach(() => {
    (useExternalService as jest.Mock).mockReturnValue(mockUseExternalService());
  });

  test('renders component without errors', () => {
    render(<CoreFunctionalityComponent />);
    expect(screen.getByText(/core functionality/i)).toBeInTheDocument();
  });

  test('handles loading state correctly', async () => {
    const mockLoading = mockUseExternalService({ loading: true });
    (useExternalService as jest.Mock).mockReturnValue(mockLoading);

    render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.getByText(/loading/i)).toBeInTheDocument());
  });

  test('handles error state correctly', async () => {
    const mockError = mockUseExternalService({ error: new Error('Mock error') });
    (useExternalService as jest.Mock).mockReturnValue(mockError);

    render(<CoreFunctionalityComponent />);

    await waitFor(() => expect(screen.getByText(/error/i)).toBeInTheDocument());
  });

  test('calls fetchData on component mount', () => {
    const mockFetchData = jest.fn();
    (useExternalService as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: {},
      fetchData: mockFetchData,
    });

    render(<CoreFunctionalityComponent />);

    expect(mockFetchData).toHaveBeenCalledTimes(1);
  });

  test('allows user to trigger action', () => {
    const mockAction = jest.fn();
    (useExternalService as jest.Mock).mockReturnValue({
      loading: false,
      error: null,
      data: { actionHandler: mockAction },
    });

    render(<CoreFunctionalityComponent />);

    fireEvent.click(screen.getByText(/trigger action/i));
    expect(mockAction).toHaveBeenCalledTimes(1);
  });

  test('ensures component is accessible', () => {
    const { container } = render(<CoreFunctioninalityComponent />);
    expect(container.firstChild).toHaveAttribute('role', 'region');
    expect(container.firstChild).toHaveAccessibleName();
  });
});