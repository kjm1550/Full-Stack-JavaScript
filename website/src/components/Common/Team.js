import React, { Components, Component } from 'react';
import TeamMembers from './TeamMembers';

const members = [
	{ name: 'Key Garland', role: 'Lead Designer', image: 'assets/img/team/1.jpg' },
	{ name: 'Lary Parker', role: 'Lead Marketer', image: 'assets/img/team/2.jpg' },
	{ name: 'Diana Pertersen', role: 'Lead Developer', image: 'assets/img/team/3.jpg' },
];

class Team extends Component {
	render() {
		return (
			<section className="page-section bg-light" id="team">
				<div className="container">
					<div className="text-center">
						<h2 className="section-heading text-uppercase">Our Amazing Team</h2>
						<h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
					</div>
					<div className="row">
						{members.map((member, index) => {
							return <TeamMembers {...member} key={index} />;
						})}
					</div>
					<div className="row">
						<div className="col-lg-8 mx-auto text-center">
							<p className="large text-muted">
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad
								perspiciatis, totam corporis ea, alias ut unde.
							</p>
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Team;
