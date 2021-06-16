import './App.css';
import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import login from "./images/signin.jpg";


export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  const width = 1000;
  const height = 1200;
  return (
    <div className="slider" style={{ padding: `0 ${chevronWidth}px`, background: 'lightblue' }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button className="button">{'<'}</button>}
        rightChevron={<button className="button">{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        <a href="https://www.google.com/" className="">
          <div style={{ width, }} className="responsive-image">
            <div style={{ paddingBottom: (height / width * 50) + '%', paddingTop: (height / width * 50) + '%' }} />
            <img src={login} className="responsive-image__image" />
          </div>
        </a>

        <a href="https://www.google.com/" className="">
          <div style={{ width, }} className="responsive-image">
            <div style={{ paddingBottom: (height / width * 50) + '%', paddingTop: (height / width * 50) + '%' }} />
            <img src={login} className="responsive-image__image" />
          </div>
        </a>

        <a href="https://www.google.com/" className="">
          <div style={{ width, }} className="responsive-image">
            <div style={{ paddingBottom: (height / width * 50) + '%', paddingTop: (height / width * 50) + '%' }} />
            <img src={login} className="responsive-image__image" />
          </div>
        </a>

        <a href="https://www.google.com/" className="">
          <div style={{ width, }} className="responsive-image">
            <div style={{ paddingBottom: (height / width * 50) + '%', paddingTop: (height / width * 50) + '%' }} />
            <img src={login} className="responsive-image__image" />
          </div>
        </a>

        <a href="https://www.google.com/" className="">
          <div style={{ width, }} className="responsive-image">
            <div style={{ paddingBottom: (height / width * 50) + '%', paddingTop: (height / width * 50) + '%' }} />
            <img src={login} className="responsive-image__image" />
          </div>
        </a>
        <a href="https://www.google.com/" className="">
          <div style={{ width, }} className="responsive-image">
            <div style={{ paddingBottom: (height / width * 50) + '%', paddingTop: (height / width * 50) + '%' }} />
            <img src={login} className="responsive-image__image" />
          </div>
        </a>


      </ItemsCarousel>
    </div>
  );
};

