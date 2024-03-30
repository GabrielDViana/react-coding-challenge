import React from 'react';
import axios from 'axios';
import Feed from '../components/Feed'

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
                <div className="row">
                    {this.state.feedData &&
                        this.state.feedData.entry.map(entry =>
                            <Feed data={entry} key={entry.id} />
                        )
                    }
                </div>
            </div>
        );
    }
}
export default FeedContainer;