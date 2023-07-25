/*--------------------
* Skill Section
----------------------*/
function Skill(props) {
	return (
		<>
			<div className="col-6 col-md-4 col-lg-6">
				<div className={props.id + ' feature-box-02 '}>
					<div className="icon">
						<i className="fab fa-html5"></i>
					</div>
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
		{ id: 'bg-1', title: 'HTML' },
		{ id: 'bg-2', title: 'CSS' },
		{ id: 'bg-3', title: 'JavaScript' },
		{ id: 'bg-4', title: 'React JS' },
		{ id: 'bg-5', title: 'Bootstrap' },
		{ id: 'bg-6', title: 'Material UI' },
		{ id: 'bg-1', title: 'SASS' },
		{ id: 'bg-2', title: 'Java' },
		{ id: 'bg-3', title: 'SpringBoot' },
		{ id: 'bg-4', title: 'PostgreSQL' },
	];

	return (
		<>
			<section data-scroll-data="2" id="skill" className="section experience-section">
				<div className="container">
					<div className="row gy-5">
						<div className="col-lg-6">
							<div className="section-heading">
								<h3 className="m-0">
									<span>My Skills</span>
								</h3>
							</div>
							<div className="skill-box">
								<div className="row g-3">
									{skill_list.map((val, i) => {
										return <Skill key={i} id={val.id} title={val.title} />;
									})}
								</div>
							</div>
						</div>
						<div className="col-lg-6 text-center">
							<img src="img/techStack.jpg" title="" alt="" height={605} />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
