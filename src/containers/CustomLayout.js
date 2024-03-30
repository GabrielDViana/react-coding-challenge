import React from 'react';
import GalleryContainer from './GalleryContainer';
import CustomLink from './CustomLink';

class CustomLayout extends React.Component {

    render() {
        return (
            <div>
                <div className='container'>
                    <GalleryContainer>
                    </GalleryContainer>
                </div>
            </div>
        );
    }
}

export default CustomLayout;