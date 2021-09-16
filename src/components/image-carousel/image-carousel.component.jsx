import React, { useState } from 'react';
import { connect } from 'react-redux';

import { createStructuredSelector } from 'reselect';
import { selectCarouselImages } from '../../redux/image-carousel/image-carousel.selectors';

import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import './image-carousel.styles.scss';


const ImageCarousel = ({ carouselImagesProp }) => {
    const [imgIndex, setImgIndex] = useState(0);
    const numOfImages = carouselImagesProp.length;

    const prevImage = () => {
        setImgIndex(imgIndex === 0 ? numOfImages - 1 : imgIndex - 1);
    };

    const nextImage = () => {
        setImgIndex(imgIndex === numOfImages - 1 ? 0 : imgIndex + 1);
    };

    if (numOfImages <= 0) {
        return null;
    };

    return (
        <section className="carousel-container">
            <HiChevronLeft className="arrow left-arrow" onClick={prevImage} />
            <HiChevronRight className="arrow right-arrow" onClick={nextImage} />
            {carouselImagesProp.map((image, idx) => {
                return (
                    <div key={idx} className={`image-wrapper slide ${idx === imgIndex ? 'active' : 'inactive'}`}>
                        {idx === imgIndex && 
                            (
                                <>
                                    <img className="image" src={image.url} alt={image.description} />
                                    <div className="caption">{image.captions}</div>
                                </>
                            )
                        }
                    </div>
                )
            })}
        </section>
    )
}

const mapStateToProps = createStructuredSelector({
    carouselImagesProp: selectCarouselImages
});

export default connect(mapStateToProps)(ImageCarousel);
