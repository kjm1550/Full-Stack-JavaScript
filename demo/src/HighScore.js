import React, { Component } from 'react';

class HighScore extends Component {
	render() {
		if (this.props.overTen) {
			return (
				<h3>
					You beat the high score of 10!
					<button onClick={this.props.onReset}>Reset</button>
				</h3>
			);
		} else {
			return null;
		}
	}
}

export default HighScore;
