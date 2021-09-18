import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCarouselImages } from '../../redux/image-carousel/image-carousel.selectors';

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import './image-carousel.styles.scss';
import { TextOverlay, SliderWrapper, Dots } from './image-carousel.styles';


const ImageCarousel = ({ carouselImagesProp }) => {
    const numOfImages = carouselImagesProp.length;

    const getWidth = () => window.innerWidth;
    const [slideObject, setSlideObject] = useState({
        activeIndex: 0,
        translate: 0,
        transition: 0.45
      })

    const { activeIndex, translate, transition } = slideObject;

    const displayArrows = (index) => {
        if (index === 0) {
            return (
                <HiChevronRight className="arrow right-arrow" onClick={nextSlide} />
            )
        }
        if (index === numOfImages - 1) {
            return (
                <HiChevronLeft className="arrow left-arrow" onClick={prevSlide} />
            )
        }
        else {
            return (
                <>
                    <HiChevronLeft className="arrow left-arrow" onClick={prevSlide} />
                    <HiChevronRight className="arrow right-arrow" onClick={nextSlide} />
                </>
            )
        }
    };
    
    const nextSlide = () => {
        setSlideObject(prevState => {
            const evalIndex = (activeIndex) === (numOfImages - 1);

            return ({
                ...prevState,
                activeIndex: evalIndex ? 0 : (activeIndex + 1),
                translate: evalIndex ? 0 : ((activeIndex + 1) * getWidth())
            })
        })
    };

    const prevSlide = () => {
        setSlideObject(prevState => {
            const evalIndex = (activeIndex === 0 );

            return ({
                ...prevState,
                activeIndex: evalIndex ? numOfImages - 1 : activeIndex - 1,
                translate: evalIndex ? (numOfImages - 1) * getWidth() : (activeIndex - 1) * getWidth()
            })
        })
    };

    if (numOfImages <= 0) {
        return null;
    };

    return (
        <section className="carousel-container">
            {displayArrows(activeIndex)}
            <TextOverlay>
                {carouselImagesProp[activeIndex].heroText}
            </TextOverlay>
            <SliderWrapper 
                translate={translate} 
                transition={transition}
                width={getWidth() * numOfImages}
            >
                {carouselImagesProp.map((image, idx) => {
                    return (
                        <div key={idx} className={`image-wrapper`}>
                            <img className="image" src={image.url} alt={image.description} />
                            <div className="caption">{image.captions}</div> 
                        </div>
                    )
                })}
            </SliderWrapper>
            <Dots slides={carouselImagesProp} activeIndex={activeIndex} />
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    carouselImagesProp: selectCarouselImages
});

export default connect(mapStateToProps)(ImageCarousel);