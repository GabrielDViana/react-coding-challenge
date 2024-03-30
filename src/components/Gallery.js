import React from 'react';
import PhotoContainer from '../containers/PhotoContainer';

const Gallery = (props) => {
    return (
        <div className="row">
            {props.data.gallery.photoList.map(photo => 
                <div className="col-sm-3 my-2" key={photo.id}>
                    <PhotoContainer data={photo} />
                </div>
            )}
        </div>
    );
}

export default Gallery;