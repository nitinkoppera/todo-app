import React, { Component } from 'react'

class Task extends Component {
    state = {
        complete:0
    };
    render () {
        return (
            <li>
                <div className="task-div" >
                    <p className={this.handleStrikeClasses()} >{this.props.task.name}</p>
                    <div>
                        <button onClick={ () => this.handleStrike()} >Complete</button>
                        <button onClick={ () => this.props.onDelete(this.props.task)} >Delete</button>
                    </div>
                </div>
            </li>

        );
    };

    handleStrike () {
        const newComplete = (this.state.complete) ? 0 : 1 ;
        console.log(newComplete);
        console.log(this.state.complete);
        this.setState({ complete: newComplete });
    };

	handleStrikeClasses () {
		let classes = "taskName";
		classes += (this.state.complete === 1) ? " text-decoration-line-through" : "";
		return classes;
	};
}

export default Task;