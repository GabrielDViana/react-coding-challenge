import React from 'react';

const Feed = (props) => {
    const entry = props.data;
    console.log("ASAA", entry)
    return (
        <div className="col-sm-3 my-2">
            <div class="card" >
                <img src={entry.content} class="card-img-top card-img-fit" alt="..."/>
                <div class="card-body">
                    <h5 class="card-title">{entry.title}</h5>
                    <p class="card-text">{entry.published}</p>
                    <a href="" class="btn btn-primary">{entry.author.name}</a>
                </div>
            </div>
        </div>
    );
}

export default Feed;