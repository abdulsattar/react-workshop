import React from 'react';
import {Swimlane} from './swimlane';

export class Board extends React.Component {
    constructor() {
        super();
        this.state = {
            swimlanes: [
                {
                    id: 1,
                    title: "In Dev",
                    cards: [
                        {id: 1, title: "Story #1", description: "Hello Story"},
                        {id: 2, title: "Story #2", description: "Hello Story"},
                        {id: 3, title: "Story #3", description: "Hello Story"}
                    ]
                },
                {
                    id: 2,
                    title: "In QA",
                    cards: [
                        {id: 1, title: "Story #1", description: "Hello Story"},
                        {id: 2, title: "Story #2", description: "Hello Story"},
                        {id: 3, title: "Story #3", description: "Hello Story"}
                    ]
                },
                {
                    id: 3,
                    title: "Done",
                    cards: [
                        {id: 1, title: "Story #1", description: "Hello Story"},
                        {id: 2, title: "Story #2", description: "Hello Story"},
                        {id: 3, title: "Story #3", description: "Hello Story"}
                    ]
                }
            ]
        };
    }
    handleDelete(swimlane) {
        this.setState({swimlanes: this.state.swimlanes.filter(s => s !== swimlane)});
    }
    render() {
        return <div className="board">
            <h1>Board</h1>
            {this.state.swimlanes.map(swimlane => <Swimlane key={swimlane.id} swimlane={swimlane} onDelete={(swimlane) => this.handleDelete(swimlane)} />)}
        </div>;
    }
}
