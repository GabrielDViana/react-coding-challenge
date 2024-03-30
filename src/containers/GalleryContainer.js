import React from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery'

class GalleryContainer extends React.Component {
    state = {
        galleryData: undefined
    }
    
    componentDidMount() {

        axios.get('http://localhost:4000/gallery')
            .then(res => {
                this.setState({
                    galleryData: res.data
                })
            })
    }

    render() {
        return (
            this.state.galleryData && <Gallery data={this.state.galleryData} />
        );
    }
}
export default GalleryContainer;