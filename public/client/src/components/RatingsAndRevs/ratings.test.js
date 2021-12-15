import { render, screen, cleanup } from '@testing-library/react'
import React from 'react';
import ReactDOM from 'react-dom';
import RatingsAndReviews from './RatingsAndReviews.jsx'
import WriteReview from './writeReview.jsx'

test('renders without crashing', () => {
  render(<WriteReview id={"2"}/>);
  const writeElement = screen.getByTestId('write-1')
  expect(writeElement).toBeInTheDocument()
})