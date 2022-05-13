import React from 'react';
import './styles/container.scss';
import './styles/text.scss';

// import Lottie from 'react-lottie';
// import circleTracer from './animations/circle-tracer.json';
// import flame from './animations/flame.json';
// import unicorn from './animations/unicorn.json';
// import infinite from './animations/infinite.json';
// import icon from './animations/icon.json';
// import hypnotoad from './animations/hypnotoad.json';

// const animations = [
//   {
//     loop: true,
//     autoplay: true,
//     animationData: flame
//   },
//   {
//     loop: true,
//     autoplay: true,
//     animationData: unicorn
//   },
//   {
//     loop: true,
//     autoplay: true,
//     animationData: icon
//   },
//   {
//     loop: true,
//     autoplay: true,
//     animationData: hypnotoad
//   },
//   {
//     loop: true,
//     autoplay: true,
//     animationData: infinite
//   },
//   {
//     loop: true,
//     autoplay: true,
//     animationData: circleTracer
//   }
// ];

// const randomizedAnimation = () => {
//   let randomIndex = Math.floor(Math.random() * animations.length);
//   return animations[randomIndex];
// };

const Loading = () => {
  return (
    <div className='container'>
      {/* <Lottie options={randomizedAnimation()} height={500} width={500} /> */}
      <p className='loadable-text'>loading...</p>
    </div>
  );
};

export default Loading;
