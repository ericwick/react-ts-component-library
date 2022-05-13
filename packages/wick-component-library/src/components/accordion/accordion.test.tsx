// import { shallow } from 'enzyme';
// import Accordion from './accordion';

// let component: any;
// let trigger: any;

// fdescribe('Accordion', () => {
//   beforeEach(() => {
//     component = shallow(<Accordion />);
//     trigger = component.find('button');
//   });

//   it('should render', () => {
//     expect(component).toBeTruthy();
//   });

//   fit('toggles the body className', () => {
//     console.log(component);
//     expect(component.find('p').ref('body')).toHaveClass(
//       'accordion__body accordion__body--closed'
//     );
//     trigger.simulate('click');
//     expect(component.find('p').ref('body')).toHaveClass(
//       'accordion__body accordion__body--opened'
//     );
//   });

//   it('toggles the header className', () => {
//     expect(component.ref('title')).toHaveClass(
//       'accordion__header accordion__body--closed'
//     );
//     trigger.simulate('click');
//     expect(component.ref('title')).toHaveClass(
//       'accordion__header accordion__body--opened'
//     );
//   });

//   it('rotates chevron to indicate active status', () => {
//     expect(component.ref('chevron')).toHaveClass(
//       'accordion__chevron accordion__chevron--closed'
//     );
//     trigger.simulate('click');
//     expect(component.ref('chevron')).toHaveClass(
//       'accordion__chevron accordion__chevron--opened'
//     );
//   });
// });
