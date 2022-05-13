/// <reference types="react" />
import './accordion.css';
export interface AccordionProps {
    title: string;
    body: any;
}
declare function Accordion(props: AccordionProps): JSX.Element;
export default Accordion;
