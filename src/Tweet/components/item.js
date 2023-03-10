import React, {useState} from 'react';
import PropTypes from "prop-types";
import ReactionCount from "./reaction-count";

function Item({data}) {
    const [a, setA] = useState(false);
    const highLight = () => {
        setA(!a);
    }
    return (
        <div className="tweet-wrap">
            <div className="tweet-header">
                <img src={data.avatar} alt=""
                     className="avatar" onClick={() => highLight()}/>
                <div className="tweet-header-info">
                    {data.name} <span>{data.nickname}</span><span>{data.content}</span>
                    <p></p>
                </div>

            </div>
            <div className="tweet-img-wrap">
                <img src={data.image} alt="" className="tweet-img"/>
            </div>
            <div className="tweet-info-counts">
                {
                    Object.entries(data.info_counts).map((value, key) => {
                        return <ReactionCount type={value[0]} count={value[1]} key={key} a={a}/>
                    })
                }
            </div>
        </div>
    );
}

Item.protoTypes = {
    data: PropTypes.object.isRequired
}

export default Item;