import { CAROUSEL_IMAGES } from './image-carousel.data';

const INITIAL_STATE = {
    images: CAROUSEL_IMAGES
};

const imageCarouselReducer = (currentState=INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return currentState;
    }
};

export default imageCarouselReducer;