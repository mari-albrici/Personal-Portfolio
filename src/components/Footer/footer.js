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
							<Link to="#">
								<i className="fab fa-twitter"></i>
							</Link>
							<Link to="#">
								<i className="fab fa-instagram"></i>
							</Link>
							<Link to="#">
								<i className="fab fa-linkedin-in"></i>
							</Link>
							<Link to="#">
								<i className="fab fa-pinterest"></i>
							</Link>
						</div>
					</div>
					<div className="col-md-6 py-2 text-center text-md-end">
						<p className="m-0">© 2023 copyright all right reserved - Marianna Albrici</p>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
