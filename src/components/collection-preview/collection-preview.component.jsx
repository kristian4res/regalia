import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';
import SubHeader from '../sub-header/sub-header.component';

import './collection-preview.styles.scss';


const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <SubHeader title={title.toUpperCase()} />
        <div className='preview'>
            {
                items.filter((item, idx) => idx < 4)
                .map((item) => (
                    <CollectionItem key={item.id} collection={title} item={item} />
                ))
            }
        </div>
    </div>
)

export default CollectionPreview;