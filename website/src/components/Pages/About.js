import React, { Component } from 'react';
import Header from '../Common/Header';
import Timeline from '../Common/Timeline';

class About extends Component {
	render() {
		return (
			<div>
				<Header title="About Us" subtitle="IT'S REALLY A GREAT STORY" showButton={false} image="/assets/img/header-bg.jpg" />
				<Timeline />
			</div>
		);
	}
}

export default About;
