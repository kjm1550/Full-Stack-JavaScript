import React, { Component } from 'react';
import Header from '../Common/Header';

// Reusable Components
import Services from '../Common/Services';
import Portfolio from '../Common/Portfolio';

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
			</div>
		);
	}
}

export default Home;
