import { Link } from 'react-scroll';
import myLogo from '/Users/marialbrici/Desktop/Personal-Portfolio/src/assets/img/creatorLogo.png';

/*--------------------
* Header Menu
----------------------*/
function Menu(props) {
	return (
		<li>
			<Link className="nav-link" data-scroll-nav={props.id} smooth={true} to={props.link}>
				<span>{props.name}</span>
			</Link>
		</li>
	);
}

/*--------------------
* Header
----------------------*/
export default function Header() {
	const header_menus_left = [
		{ id: 0, name: 'Home', scroll_link: 'home' },
		{ id: 1, name: 'Skills', scroll_link: 'skill' },
	];

	const header_menus_right = [
		{ id: 2, name: 'Portfolio', scroll_link: 'work' },
		{ id: 3, name: 'Contact', scroll_link: 'contactus' },
	];

	return (
		<>
			<header className="main-header">
				<nav className="navbar header-nav navbar-expand-lg one-page-nav">
					<div className="container">
						<div className="collapse navbar-collapse justify-content-end" id="navbar-collapse-toggle">
							<ul className="navbar-nav mx-auto">
								{header_menus_left.map((val, i) => {
									return <Menu key={i} id={val.id} name={val.name} link={val.scroll_link} />;
								})}
							</ul>
							<Link className="navbar-brand" smooth={true} to="home">
								<img src={myLogo} title="Logo" alt="Logo" width={200} />
							</Link>
							<ul className="navbar-nav mx-auto">
								{header_menus_right.map((val, i) => {
									return <Menu key={i} id={val.id} name={val.name} link={val.scroll_link} />;
								})}
							</ul>
						</div>
					</div>
				</nav>
			</header>
		</>
	);
}
