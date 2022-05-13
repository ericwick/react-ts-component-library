import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import Loading from './loading';
import Error from './error';
import Timeout from './timeout';

import Home from '../../pages/Home';
import AccordionDocs from '../../pages/AccordionDocs/accordion-docs';
// import BentoDocs from '../../pages/BentoDocs/bento-docs';
// import BreadcrumbDocs from '../../pages/BreadcrumbDocs/breadcrumb-docs';
// import ButtonDocs from '../../pages/ButtonDocs/button-docs';
// import CardDocs from '../../pages/CardDocs/card-docs';
// import CarouselDocs from '../../pages/CarouselDocs/bento-docs';
// import CheckboxDocs from '../../pages/CheckboxDocs/cehckbox-docs';
// import CommentDocs from '../../pages/CommentDocs/comment-docs';
// import DatePickerDocs from '../../pages/DatePickerDocs/date-picker-docs';
// import DropdownDocs from '../../pages/DropdownDocs/dropdown-docs';
// import FeedDocs from '../../pages/FeedDocs/feed-docs';
// import FormDocs from '../../pages/FormDocs/form-docs';
// import IconDocs from '../../pages/IconDocs/icon-docs';
// import InputDocs from '../../pages/InputDocs/input-docs';
// import LoaderDocs from '../../pages/LoaderDocs/loader-docs';
// import MenuDocs from '../../pages/MenuDocs/menu-docs';
// import ModalDocs from '../../pages/ModalDocs/modal-docs';
// import NotificationDocs from '../../pages/NotificationDocs/notification-docs';
// import RadioDocs from '../../pages/RadioDocs/radio-docs';
// import SearchDocs from '../../pages/SearchDocs/search-docs';
// import ToggleDocs from '../../pages/ToggleDocs/toggle-docs';
// import TooltipDocs from '../../pages/TooltipDocs/tooltip-docs';

const LoadingComp = (props) => {
  if (props.error) {
    return <Error retry={props.retry} />;
  } else if (props.pastDelay) {
    return <Loading />;
  } else if (props.timedOut) {
    return <Timeout retry={props.retry} />;
  } else {
    return null;
  }
};

const page = (path) => {
  Loadable({
    loader: () => import(`../${path}`),
    loading: LoadingComp,
    delay: 300,
    timeout: 1000
  });
};

export default (
  <Routes>
    <Route path='/home' element={<Home />} />
    <Route path='/pages/accordion-docs' element={<AccordionDocs />} />
    {/* <Route path='bento-docs' element={<BentoDocs />} /> */}
    {/* <Route path='/breadcrumb-docs' element={<BreadcrumbDocs />} /> */}
    {/* <Route path='/button-docs' element={<ButtonDocs />} /> */}
    {/* <Route path='/card-docs' element={<CardDocs />} /> */}
    {/* <Route path='/carousel-docs' element={<CarouselDocs />} /> */}
    {/* <Route path='/comment-docs' element={<CommentDocs />} /> */}
    {/* <Route path='/checkbox-docs' element={<CheckboxDocs />} /> */}
    {/* <Route path='/dropdown-docs' element={<DropdownDocs />} /> */}
    {/* <Route path='/date-picker-docs' element={<DatePickerDocs />} /> */}
    {/* <Route path='/feed-docs' element={<FeedDocs />} /> */}
    {/* <Route path='/form-docs' element={<FormDocs />} /> */}
    {/* <Route path='/menu-docs' element={<MenuDocs />} /> */}
    {/* <Route path='/icon-docs' element={<IconDocs />} /> */}
    {/* <Route path='/input-docs' element={<InputDocs />} /> */}
    {/* <Route path='/loader-docs' element={<LoaderDocs />} /> */}
    {/* <Route path='/modal-docs' element={<ModalDocs />} /> */}
    {/* <Route path='/notification-docs' element={<NotificationDocs />} /> */}
    {/* <Route path='/picker-docs' element={<PickerDocs />} /> */}
    {/* <Route path='/radio-buttons-docs' element={<RadioDocs />} /> */}
    {/* <Route path='/pagination-docs' element={<PaginationDocs />} /> */}
    {/* <Route path='/progress-bar-docs' element={<ProgressBarDocs />} /> */}
    {/* <Route path='/search-field-docs' element={<SearchDocs />} /> */}
    {/* <Route path='/slider-docs' element={<SliderDocs />} /> */}
    {/* <Route path='/stepper-docs' element={<StepperDocs />} /> */}
    {/* <Route path='/tabs-docs' element={<TabsDocs />} /> */}
    {/* <Route path='/tab-bar-docs' element={<TabBarDocs />} /> */}
    {/* <Route path='/tags-docs' element={<TagsDocs />} /> */}
    {/* <Route path='/toggle-docs' element={<ToggleDocs />} /> */}
    {/* <Route path='/tooltip-docs' element={<TooltipDocs />} /> */}
  </Routes>
);
