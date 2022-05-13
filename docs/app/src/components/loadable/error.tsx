import './styles/container.scss';
import './styles/text.scss';
import './styles/button.scss';

export default function Error(props: any) {
  return (
    <div>
      <p className='static-text'>404 Error</p>
      <button className='loadable-button' onClick={props.retry}>
        Retry
      </button>
    </div>
  );
}
