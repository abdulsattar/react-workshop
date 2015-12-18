import React from 'react';

export default class Card extends React.Component {
    render() {
        const {title,description} = this.props.card;
        return <div className="card">
            <h4 className="card__title">{title}</h4>
            <p className="card__description">{description}</p>
        </div>;
    }
}
