import React from 'react';
import Card from './card';

export class Swimlane extends React.Component {
    render() {
        const {id,title,cards} = this.props.swimlane;
        return <div key={id} className="swimlane">
            <h3>{title}</h3>
            <button onClick={() => this.props.onDelete(this.props.swimlane)}>x</button>
            {cards.map(card => <Card key={card.id} card={card}/>)}
        </div>;
    }
}
Swimlane.propTypes = {
    swimlane: React.PropTypes.object,
    onDelete: React.PropTypes.function
};
