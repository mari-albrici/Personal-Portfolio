import { Link } from 'react-scroll';

/*--------------------
* Work Section
----------------------*/
export default function Work() {
	return (
		<>
			<section data-scroll-data="3" id="work" className="section work-section bg-gray">
				<div className="container">
					<div className="row section-heading justify-content-center">
						<div className="col-lg-6 text-center">
							<h3>
								<span>Latest Projects</span>
							</h3>
						</div>
					</div>
					<div className="lightbox-gallery portfolio-box">
						`
						<div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center">
							<div className="col-md-6 col-lg-5">
								<div className="portfolio-img">
									<img src="img/capstonePreview.png" title="Capstone project preview" alt="Capstone project Preview" />
									<Link to="https://github.com/mari-albrici/CapstoneEpicode-HolidayRentals" className="gallery-link gallery-link-icon">
										<i className="fas fa-arrow-right"></i>
									</Link>
								</div>
							</div>
							<div className="col-md-6 col-lg-5">
								<div className="portfolio-text">
									<h6>
										<span>Web Design</span>
									</h6>
									<h4>Website Design for local holiday house rentals</h4>
									<p>
										I designed and developed a website to create an indipendent way for my client to broadcast online their presence with holiday
										rentals in a local area.
									</p>
									<div className="btn-bar">
										<Link to="https://github.com/mari-albrici/CapstoneEpicode-HolidayRentals" className="px-btn px-btn-theme" data-scroll-nav="4">
											View Code{' '}
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row gx-3 pb-3 mb-5 pb-lg-3 mb-lg-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
							<div className="col-md-6 col-lg-5">
								<div className="portfolio-img">
									<img src="img/fedoanPreview.png" title="p2" alt="p2" />
									<Link to="https://www.fedoan.com/" className="gallery-link gallery-link-icon">
										<i className="fas fa-arrow-right"></i>
									</Link>
								</div>
							</div>
							<div className="col-md-6 col-lg-5">
								<div className="portfolio-text">
									<h6>
										<span>Wordpress management</span>
									</h6>
									<h4>Car dealership and rentals Wordpress websites</h4>
									<p>
										I manage, update and modify the previosuly created wordpress websites for a local car dealership and rental car shop. Updates,
										mailing list and SEO are part of daily management tasks.
									</p>
									<div className="btn-bar">
										<Link to="https://www.fedoan.com/" className="px-btn px-btn-theme" data-scroll-nav="4">
											View Project{' '}
										</Link>
									</div>
								</div>
							</div>
						</div>
						<div className="row gx-3 gy-4 portfolio-box justify-content-around align-items-center flex-row-reverse">
							<div className="col-md-6 col-lg-5">
								<div className="portfolio-text">
									<h6>
										<span>Web Design</span>
									</h6>
									<h4>TypeScript news website</h4>
									<p>I developed a news website based on space flight using TypeScript as the primary code language.</p>
									<div className="btn-bar">
										<Link to="https://github.com/mari-albrici/SpaceflightNews-ReactTS-App" className="px-btn px-btn-theme" data-scroll-nav="4">
											View Code{' '}
										</Link>
									</div>
								</div>
							</div>
							<div className="col-md-6 col-lg-5">
								<div className="portfolio-img">
									<img src="img/typescriptPreview.png" title="p4" alt="p4" />
									<Link to="https://github.com/mari-albrici/SpaceflightNews-ReactTS-App" className="gallery-link gallery-link-icon">
										<i className="fas fa-arrow-right"></i>
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
