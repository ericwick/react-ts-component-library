import { Link } from 'react-router-dom';
import components from './navlinks';
import './sidenav.scss';

export default function Sidenav() {
  return (
    <nav className='navbar'>
      {components.map((e, i) => {
        return (
          <Link key={i} to={e.link} className='navbar__link' replace>
            {e.name}
          </Link>
        );
      })}
    </nav>
  );
}
