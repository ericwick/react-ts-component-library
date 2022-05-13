import { useState } from 'react';
import classname from 'classnames';
import './accordion.scss';

export interface AccordionProps {
  title: string;
  body: any;
}

export default function Accordion(props: AccordionProps) {
  const [active, setActive] = useState(false);
  const headerClassName = classname('accordion__header', {
    'accordion__header--opened': active,
    'accordion__header--closed': !active
  });
  const bodyClassName = classname('accordion__body', {
    'accordion__body--opened': active,
    'accordion__body--closed': !active
  });
  //   const chevronClassName = classname('accordion__chevron', {
  //     'accordion__chevron--opened': active,
  //     'accordion__chevron--closed': !active
  //   });

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div className='accordion'>
      <button className={headerClassName} onClick={toggleAccordion}>
        <p className='accordion__header--title'>{props.title}</p>
        <img />
      </button>
      <div className={bodyClassName}>
        <p className='accordion__body--content'>{props.body}</p>
      </div>
    </div>
  );
}
