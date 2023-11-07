import { Link } from 'react-router-dom';
import '../styles/App.css';

const Error404 = () => {
  return (
    <div className="wrapper">
      <h2>Not Found</h2>
      <Link to="/">Go Home</Link>
    </div>
  );
};
export default Error404;
