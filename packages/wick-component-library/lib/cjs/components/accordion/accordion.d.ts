import React from 'react';
import './accordion.scss';
export interface AccordionProps {
    title: string;
    body: any;
}
declare const Accordion: React.FC<AccordionProps>;
export default Accordion;
