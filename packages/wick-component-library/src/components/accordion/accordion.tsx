import { useState } from 'react';
import './accordion.css';
// import classname from 'classnames';

interface AccordionProps {
  title?: string;
  body?: any;
}

export default function Accordion({ title, body, ...props }: AccordionProps) {
  const [active, setActive] = useState(false);
  //   const headerClassName = classname('accordion-header', {
  //     'accordion-header-opened': active,
  //     'accordion-header-closed': !active
  //   });
  //   const bodyClassName = classname('accordion-body', {
  //     'accordion-body-opened': active,
  //     'accordion-body-closed': !active
  //   });
  //   const chevronClassName = classname('accordion__chevron', {
  //     'accordion__chevron--opened': active,
  //     'accordion__chevron--closed': !active
  //   });

  return (
    <div className='accordion'>
      <button className='accordion-header' onClick={() => setActive(!active)}>
        <p className='accordion-header-title'>{title}</p>
        <img alt={active ? 'Accordion Open' : 'Accordion Closed'} />
      </button>
      <div className='accordion-body'>
        <p className='accordion-body-content'>{body}</p>
      </div>
    </div>
  );
}