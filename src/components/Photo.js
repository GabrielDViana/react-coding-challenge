import React from 'react';

const Photo = (props) => {
    const photo = props.data;
    // console.log(props);
    console.log(photo);

    return (
        <div className="card">
            <img src={photo.photoData.source} className="card-img-top card-img-fit" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{photo.galleryData.title}</h5>
            </div>
        </div>
    );
}

export default Photo;