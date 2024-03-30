import React from 'react';
import axios from 'axios';
import Photo from '../components/Photo';

class PhotoContainer extends React.Component {
    state = {
        photoData: null,
        galleryData: this.props.data
    }
    
    componentDidMount() {
        const url = 'http://localhost:4000/photo-info?photoid='+ this.props.data.id;
        console.log(url)
        axios.get(url)
            .then(res => {
                // console.log(res.data);
                this.setState({
                    photoData: res.data
                })
            })
    }

    render() {
        return (
            this.state.photoData && <Photo data={this.state} />
        );
    }
}
export default PhotoContainer;