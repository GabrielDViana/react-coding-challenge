import React from 'react';

const Gallery = (props) => {
    console.log('props', props);
    props.data.gallery.photoList.map(photo => {console.log(photo)})
    return (
        <div className="row">
            {props.data.gallery.photoList.map(photo => 
                <div className="col-sm-3">
                    <div className="card">
                        <h5 className="card-header">{photo.title}</h5>
                        <div className="card-body">
                            <h5 className="card-title">{photo.owner}</h5>
                            <p className="card-text">{photo.id}</p>
                            <a href="#" className="btn btn-primary">{photo.server}</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Gallery;