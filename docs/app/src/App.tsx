import Sidenav from './components/sidenav/sidenav';
import routes from './components/loadable/routes';
import './App.scss';

export default function App() {
  return (
    <div className='site'>
      <Sidenav />
      <div className='site__body'>{routes}</div>
    </div>
  );
}
