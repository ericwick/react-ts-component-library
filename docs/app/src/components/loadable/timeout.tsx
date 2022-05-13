import './styles/container.scss';
import './styles/text.scss';
import './styles/button.scss';

const Timeout = (props: any) => {
  return (
    <div className='container'>
      <p className='static-text'>Sum'n went wrong bruh...</p>
      <button className='loadable-button' onClick={props.retry}>
        Retry
      </button>
    </div>
  );
};

export default Timeout;
