import { Link } from 'react-router-dom';

function Home() {

  return (
    <>
        <h1>Enlaces</h1>
        <Link to={`/`}>Home</Link>
        <Link to={`/projects`}>Projects</Link>
        <Link to={`/resume`}>Resume</Link>
        <h2>¡Bienvenidos a mi portfolio!</h2>
    </>
  );
}

export default Home;