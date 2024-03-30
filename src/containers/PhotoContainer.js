import React from 'react';
import axios from 'axios';

class PhotoContainer extends React.Component {
    state = {
        galleryData: {}
    }
    
    componentDidMount() {
        axios.get('http://localhost:4000/photo')
            .then(res => {
                console.log(res.data);
                this.setState({
                    galleryData: res.data
                })
            })
    }

    render() {
        return (
            <Photo data={this.state.galleryData} />
        );
    }
}
export default PhotoContainer;