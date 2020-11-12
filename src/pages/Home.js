import React from 'react';
import Spinner from '../components/shared/Spinner';

export default function Home({ data }) {
  if (!data) {
    return <Spinner />;
  }

  return <h1>Home</h1>;
}
