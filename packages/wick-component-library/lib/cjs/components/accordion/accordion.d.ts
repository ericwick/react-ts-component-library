<<<<<<< HEAD
/// <reference types="react" />
import './accordion.css';
=======
import React from 'react';
import './accordion.scss';
>>>>>>> 8c8894dd25773e9a786b5a6a0451492371387ce5
export interface AccordionProps {
    title: string;
    body: any;
}
declare function Accordion(props: AccordionProps): JSX.Element;
export default Accordion;
