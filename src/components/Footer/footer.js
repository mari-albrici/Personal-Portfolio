import { Link } from 'react-scroll';

/*--------------------
* Footer Section
----------------------*/
function Footer() {
	return (
		<footer className="footer">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-md-6 py-2">
						<div className="nav justify-content-center justify-content-md-start">
							<Link to="https://twitter.com/mari_albrici">
								<i className="fab fa-twitter"></i>
							</Link>
							<Link to="https://www.instagram.com/marialbrici/">
								<i className="fab fa-instagram"></i>
							</Link>
							<Link to="https://github.com/mari-albrici">
								<i className="bi bi-github"></i>
							</Link>
							<Link to="https://www.linkedin.com/in/marianna-albrici/">
								<i className="bi bi-linkedin"></i>
							</Link>
						</div>
					</div>
					<div className="col-md-6 py-2 text-center text-md-end">
						<p className="m-0">© 2023 Marianna Albrici</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
