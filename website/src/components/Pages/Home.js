import React, { Component } from 'react';
import Header from '../Common/Header';

// Reusable Components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';
import Timeline from '../Common/Timeline';
import Team from '../Common/Team';

class Home extends Component {
	render() {
		return (
			<div>
				<Header
					title="Welcome to Our Studio!"
					subtitle="IT'S NICE TO MEET YOU"
					buttonText="Tell me more"
					link="/services"
					showButton={true}
					image="/assets/img/header-bg.jpg"
				/>
				<Services />
				<Portfolio />
				<Timeline />
				<Team />
			</div>
		);
	}
}

export default Home;
