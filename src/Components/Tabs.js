import React from 'react';
import "./Tabs.css";

function Tabs (props) {
        return (
            <div className="container">
                <div className="tabs">
                <div className="tab"
                episode_id="4"
                value={1}
                onClick={props.clicker}
                >A New Hope</div>
                <div className="tab"
                episode_id="5"
                value={2}
                onClick={props.clicker}
                >The Empire Strikes Back</div>
                <div className="tab"
                episode_id="6"
                value={3}
                onClick={props.clicker}
                >Return of the Jedi</div>
                <div className="tab"
                episode_id="1"
                value={4}
                onClick={props.clicker}
                >The Phantom Menace</div>
                <div className="tab"
                episode_id="2"
                value={5}
                onClick={props.clicker}
                >Attack of the Clones</div>
                <div className="tab"
                episode_id="3"
                value={6}
                onClick={props.clicker}
                >Revenge of the Sith</div>
            </div>
            </div>
        )
    }

export default Tabs;