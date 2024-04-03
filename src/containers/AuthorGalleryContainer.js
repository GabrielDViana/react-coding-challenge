import React from 'react';
import axios from 'axios';
import Gallery from '../components/Gallery'

import {useLocation, useNavigate, useParams} from 'react-router-dom';

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <AuthorGalleryContainer {...props} {...{location, navigate, params}} />;
  }

  return ComponentWithRouterProp;
}

class AuthorGalleryContainer extends React.Component {
    state = {
        ...this.props.location.state,
        galleryData: null
    }

    componentDidMount() {
        axios.get('http://localhost:4000/gallery?authorid='+ this.state.author.id)
            .then(res => {
                this.setState({
                    ...this.state,
                    galleryData: res.data
                })

            })
    }

    render() {

        return (
            
            <div className='container'>
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                    <a class="navbar-brand">
                        <img className="rounded d-inline-block" src={this.state.author.icon} alt="" width="30" height="24"/>
                        <span className="align-middle fs-5 px-2">{this.state.author.name}</span>
                    </a>
                    </div>
                </nav>
                {this.state.galleryData && <Gallery data={this.state.galleryData} />}
            </div>
        );
    }

}
export default withRouter(AuthorGalleryContainer);
