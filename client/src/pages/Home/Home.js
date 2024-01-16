import './Home.scss'
import { useEffect } from 'react';

export const Home = () => {
  useEffect(() => {
    console.log('Testing Home')
  }, [])

  return (
    <div className="home">
      <h1>Testing 123</h1>
    </div>
  );
}