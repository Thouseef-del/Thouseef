import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import styled from 'styled-components';

const images = [
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
];

const EachSlideEffect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 350px;
`;

const SlideText = styled.span`
  padding: 20px;
  font-size: 20px;
  background: #efefef;
  text-align: center;
`;

const Example = () => {
    return (
        <Slide>
            <EachSlideEffect style={{ backgroundImage: `url(${images[0]})` }}>
                <SlideText>Slide 1</SlideText>
            </EachSlideEffect>
            <EachSlideEffect style={{ backgroundImage: `url(${images[1]})` }}>
                <SlideText>Slide 2</SlideText>
            </EachSlideEffect>
            <EachSlideEffect style={{ backgroundImage: `url(${images[2]})` }}>
                <SlideText>Slide 3</SlideText>
            </EachSlideEffect>
        </Slide>
    );
};

export default Example;
