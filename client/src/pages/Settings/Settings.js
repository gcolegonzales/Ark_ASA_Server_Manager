import './Settings.scss'
import { useEffect } from 'react';

export const Settings = () => {
  useEffect(() => {
    console.log('Testing Settings')
  }, [])

  return (
    <div className="settings">
      <h1>Testing Settings</h1>
    </div>
  );
}