import React, { useState } from 'react';
import classname from 'classnames';

export interface AccordionProps {
  title: string;
  body: any;
}

const Accordion: React.FC<AccordionProps> = ({ title, body }) => {
  const [active, setActive] = useState(false);
  const headerClassName = classname('accordion-header', {
    'accordion-header-opened': active,
    'accordion-header-closed': !active
  });
  const bodyClassName = classname('accordion-body', {
    'accordion-body-opened': active,
    'accordion-body-closed': !active
  });
  //   const chevronClassName = classname('accordion__chevron', {
  //     'accordion__chevron--opened': active,
  //     'accordion__chevron--closed': !active
  //   });

  return (
    <div className='accordion'>
      <button className={headerClassName} onClick={() => setActive(!active)}>
        <p className='accordion-header-title'>{title}</p>
        <img alt={active ? 'Accordion Open' : 'Accordion Closed'} />
      </button>
      <div className={bodyClassName}>
        <p className='accordion-body-content'>{body}</p>
      </div>
    </div>
  );
};

export default Accordion;
