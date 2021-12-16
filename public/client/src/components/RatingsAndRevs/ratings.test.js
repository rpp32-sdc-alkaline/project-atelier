import { render, screen, cleanup } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app.jsx';


describe('App', () => {
  test('renders App component', () => {
    render(<App />);
  });
})

