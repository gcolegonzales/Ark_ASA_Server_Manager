import './Home.scss'

export const Home = ({ server }) => {
  return (
    <>
      <div>
        <h1>Home</h1>
        <h5>Server: {server.name}</h5>
      </div>
    </>
  );
}