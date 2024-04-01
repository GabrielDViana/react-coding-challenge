import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeedCard = (props) => {
    const entry = props.data;
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/gallery', { state: { author: entry.author } });
    };
    return (
        <div className="col-sm-3 my-2">
            <div className="card" >
                <img src={entry.content} className="card-img-top card-img-fit" alt="..." />
                <div className="card-body pt-2 pb-0">
                    <h5 className="card-title text-capitalize" style={{
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}>{entry.title}</h5>
                    <p className="card-text"> {new Date(entry.published).toLocaleDateString("en-US", dateOptions)}</p>
                    <div onClick={handleClick} className="border-top row p-2" style={{cursor: 'pointer'}}>
                        <div className="col-3">
                            <img src={entry.author.icon} className="rounded" alt="..." />
                        </div>
                        <div className="col-9 text-md-start align-middle">
                            <span className="align-middle fs-6">{entry.author.name}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedCard;