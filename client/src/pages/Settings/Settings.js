import './Settings.scss'

export const Settings = ({ server }) => {
  return (
    <div>
      <h1>Settings</h1>
      <h5>Server: {server.name}</h5>
      <h5>Main Directory: {server.mainDirectory}</h5>
    </div>
  );
}