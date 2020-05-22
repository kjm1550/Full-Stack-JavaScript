import React, { Component } from 'react';
import HighScore from './HighScore';
import './css/style.css';

class Application extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count: 0,
			overTen: false,
		};
	}

	handleClick = () => {
		this.setState({ count: this.state.count + 1 });
	};

	componentDidUpdate(props, state) {
		if (this.state.count > 10 && this.state.count !== state.count && !this.state.overTen) {
			this.setState({ overTen: true });
		}
	}

	resetCount = (e) => {
		this.setState({
			count: 0,
			overTen: false,
		});
	};

	render() {
		let { count } = this.state;
		let name = 'Kyle';
		return (
			<div>
				<h1>Hello World!</h1>
				<p>{name} is using React</p>
				<HighScore overTen={this.state.overTen} onReset={(e) => this.resetCount(e)} />

				<span>
					<button onClick={() => this.handleClick()}>Click Me</button>
					<p>You Clicked the button {count} times</p>
				</span>
			</div>
		);
	}
}

export default Application;
