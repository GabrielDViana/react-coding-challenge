import React from 'react';
import GalleryContainer from './GalleryContainer';

class CustomLayout extends React.Component {

    render() {
        return (
            <div className='container'>
                <GalleryContainer>
                </GalleryContainer>
            </div>
        );
    }
}

export default CustomLayout;