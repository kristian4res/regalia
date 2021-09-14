import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import SubHeader from '../../components/sub-header/sub-header.component';
import { HomePageContainer } from './homepage.styles';
import ImageCarousel from '../../components/image-carousel/image-carousel.component';


const HomePage = () => {
    const title = 'Collections';

    return (
        <HomePageContainer>
            <ImageCarousel />
            <SubHeader title={title.toUpperCase()} />
            <Directory />
        </HomePageContainer>
    )
};

export default HomePage;