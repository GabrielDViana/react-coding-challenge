import React from 'react';
import axios from 'axios';
import FeedCard from '../components/FeedCard'

class FeedContainer extends React.Component {
    state = {
        feedData: undefined
    }

    componentDidMount() {

        axios.get('http://localhost:4000/feed')
            .then(res => {
                this.setState({
                    feedData: res.data
                })
            }
            )
    }


    render() {
        return (
            <div className="container">
                <nav class="navbar navbar-light bg-light">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            Flickr Public Feed
                        </a>
                    </div>
                </nav>
                <div className="row">
                    {this.state.feedData &&
                        this.state.feedData.entry.map(entry =>
                            <FeedCard data={entry} key={entry.id} />
                        )
                    }
                </div>
            </div>
        );
    }
}
export default FeedContainer;