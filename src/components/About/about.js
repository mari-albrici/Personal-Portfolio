import { Link } from 'react-scroll';

/*--------------------
* About Section
----------------------*/
export default function About() {
	return (
		<>
			<section className="section about-section">
				<div className="container">
					<div className="row gy-5 align-items-center">
						<div className="col-lg-6 text-center">
							<img src="img/personalPhoto.png" title="Banner" alt="Banner" />
						</div>
						<div className="col-lg-6 ps-lg-5">
							<div className="about-text">
								<h3 className="h1">I'm a Full stack Developer with over 3 years of experience in the digital world.</h3>
								<p>
									I'm a newly born Full stack Developer with over 3 years of experience in the digital world as a SMM, Digital Manager and website
									Manager. After furthering my expertise with a tech bootcamp with Epicode, I code and create beautiful and useful web elements for
									amazing people around the world.
								</p>
								<div className="row pt-2">
									<div className="col-6 col-md-4">
										<h5>30+</h5>
										<span>Projects Completed</span>
									</div>
								</div>
								<div className="btn-bar pt-4">
									<Link className="px-btn px-btn-theme me-4" to="contactus">
										Contact Me
									</Link>
									<Link className="px-btn px-btn-dark" to="portfolio">
										Portfolio
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
