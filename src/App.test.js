import React from 'react';
import { render,screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Snapshot testing for the Calculator App', () => {
  it('should match the snapshot', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Calculator interaction tests', () => {
  beforeEach(() => {
      render(<App />);
  });

  test('should display correct result for addition', () => {
      userEvent.click(screen.getByText('1'));
      userEvent.click(screen.getByText('+'));
      userEvent.click(screen.getByText('2'));
      userEvent.click(screen.getByText('='));
      expect(screen.getByText('3')).toBeInTheDocument();
  });

  test('should display correct result for exponentiation', () => {
      userEvent.click(screen.getByText('2'));
      userEvent.click(screen.getByText('^'));
      userEvent.click(screen.getByText('3'));
      userEvent.click(screen.getByText('='));
      expect(screen.getByText('8')).toBeInTheDocument();
  });

  test('should handle sequence of operations', () => {
      userEvent.click(screen.getByText('9'));
      userEvent.click(screen.getByText('+'));
      userEvent.click(screen.getByText('1'));
      userEvent.click(screen.getByText('-'));
      userEvent.click(screen.getByText('5'));
      userEvent.click(screen.getByText('='));
      expect(screen.getByText('5')).toBeInTheDocument(); // 9 + 1 - 5 = 5
  });

  test('should display Error for division by zero', () => {
    userEvent.click(screen.getByText('6'));
    userEvent.click(screen.getByText('/'));
    userEvent.click(screen.getByText('0'));
    userEvent.click(screen.getByText('='));
    expect(screen.getByText('Error')).toBeInTheDocument();
  });
});