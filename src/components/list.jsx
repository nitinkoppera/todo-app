import React, { Component } from 'react'
import Task from "./task"

class List extends Component {
	state = {
		list : [
			{id: 1, name:"Can add my tasks"},
			{id: 2, name:"Can complete my tasks"},
			{id: 3, name:"Can delete my tasks"}
		],
		taskName: "",
		warningText: "",
		noTask: ""
	};
  handleDelete = (task) => {
    // Creating a new array
	console.log(this.state.list.length );
    const list = this.state.list.filter(t => t !== task);
    // this.setState({ counters : counters }) OR
	// console.log(this.state.list);
	console.log(this.state.list.length );
    this.setState({ list:list });
	console.log(this.state.list.length );
	// console.log(this.state.list);
	if (this.state.list.length === 1) {
		this.setState({noTask: " *** Add tasks to show here *** "});
	}
	console.log(this.state.list.length );
  };

	onstrike = (task) => {
		const list =  [...this.state.list];
		const index = list.indexOf(task);
		console.log(list[index]);
		// list[index].
	};

	handleFinish = (task) => {
		const list =  [...this.state.list];
		const index = list.indexOf(task);
		console.log(list[index]);
		// list[index].
	};

	handleInputChange = (e) => {
    this.setState({taskName: e.target.value});
	};

	handleEnterKey = (e) => {
		if(e.key === 'Enter'){
			this.handleIncrement();
		}
	};

	handleIncrement = () => {
		if (this.state.taskName !== "")
		{
			const newId = (this.state.list.length>0) ? this.state.list[this.state.list.length-1].id+1 : 1 ;
			const newTask = { id:newId, name: this.state.taskName };
			const list =  [...this.state.list,newTask];
			// console.log(list);
			this.setState({list});
			this.setState({taskName: ""});
			this.setState({warningText: ""});
		}
		else{
			this.setState({warningText: "Type something *******!"});
		}
	};

	render () {
		return (
			<div className="container ">
				<div className="input-div" >
					<input 
						autocomplete="off"
						className=" form-control  "
						type="tel" 
						name="taskName" 
						value={this.state.taskName}
						placeholder="Enter to Add a new task"
						onChange={ this.handleInputChange }
						onKeyPress={ this.handleEnterKey }
						/>
					<button className=" btn btn-outline-secondary " type="button" onClick={this.handleIncrement} >Add</button>
				</div>

				<p className="warning" >{this.state.warningText}</p>
				<h1 className="todo-name text-center" ><strong>To-do List</strong></h1>
				<div className="list-div" >
				<p className="no-task" >{this.state.noTask}</p>
					{this.state.list.map( task => (
						<ul>
							<Task 
								key ={task.id} 
								task = {task}
								onFinish = {this.handleFinish} 
								onstrike = {this.handleStrike}
								onDelete = {this.handleDelete} 
								selected = {true} 
							></Task>
						</ul>
					) ) }
				</div>
			</div>
		);
	};

}

export default List;