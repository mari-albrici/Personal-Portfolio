import React from 'react';
import html from '../img/svgs/html.svg';
import css from '../img/svgs/css.svg';
import js from '../img/svgs/js.svg';
import react from '../img/svgs/react.svg';
import bootstrap from '../img/svgs/bootstrap.svg';
import material from '../img/svgs/material.svg';
import java from '../img/svgs/java.svg';
import postgres from '../img/svgs/postgres.svg';
import springboot from '../img/svgs/springboot.svg';
import sass from '../img/svgs/sass.svg';
import ps from '../img/svgs/ps.svg';
import ai from '../img/svgs/ai.svg';
import xd from '../img/svgs/xd.svg';
import figma from '../img/svgs/figma.svg';
import postman from '../img/svgs/postman.svg';
import id from '../img/svgs/id.svg';

/*--------------------
* Skill Section
----------------------*/
function Skill(props) {
	return (
		<>
			<div className="col-6 col-md-2 col-lg-3">
				<div className={props.id + ' feature-box-02'}>
					<img src={props.icon} alt={props.title} height="60" />

					<h6>{props.title}</h6>
				</div>
			</div>
		</>
	);
}

/*--------------------
* Skill List Section
----------------------*/
export default function SkillList() {
	const skill_list = [
		{ id: 'bg-10', title: 'HTML', icon: html },
		{ id: 'bg-10', title: 'CSS', icon: css },
		{ id: 'bg-10', title: 'JavaScript', icon: js },
		{ id: 'bg-10', title: 'React JS', icon: react },
		{ id: 'bg-10', title: 'Bootstrap', icon: bootstrap },
		{ id: 'bg-10', title: 'Material UI', icon: material },
		{ id: 'bg-10', title: 'SASS', icon: sass },
		{ id: 'bg-10', title: 'Java', icon: java },
		{ id: 'bg-10', title: 'SpringBoot', icon: springboot },
		{ id: 'bg-10', title: 'PostgreSQL', icon: postgres },
		{ id: 'bg-10', title: 'Postman', icon: postman },
		{ id: 'bg-10', title: 'Figma', icon: figma },
		{ id: 'bg-10', title: 'Adobe Photoshop', icon: ps },
		{ id: 'bg-10', title: 'Adobe Illustrator', icon: ai },
		{ id: 'bg-10', title: 'Adobe XD', icon: xd },
		{ id: 'bg-10', title: 'Adobe InDesign', icon: id },
	];

	return (
		<>
			<section data-scroll-data="2" id="skill" className="section experience-section">
				<div className="container">
					<div className="row gy-5">
						<div className="col-lg-12">
							<div className="section-heading">
								<h3 className="m-0">
									<span>Tech stack</span>
								</h3>
							</div>
							<div className="skill-box">
								<div className="row g-3">
									{skill_list.map((val, i) => {
										return <Skill key={i} id={val.id} title={val.title} icon={val.icon} />;
									})}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
