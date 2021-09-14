import { createSelector } from "reselect";

const selectImageCarousel = state => state.imageCarousel;

export const selectCarouselImages = createSelector(
    [selectImageCarousel],
    (imageCarousel) => imageCarousel.images
);
