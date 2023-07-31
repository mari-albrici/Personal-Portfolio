import ReactTypingEffect from 'react-typing-effect';
import personalAvatar from '../img/personalAvatar.png';

/*--------------------
* Banner Section
----------------------*/
export default function Banner() {
	return (
		<>
			<section data-scroll-data="0" id="home" className="home-section bg-gray">
				<div className="container">
					<div className="row gy-5 align-items-center">
						<div className="col-lg-6">
							<div className="home-intro one-page-nav text-center text-lg-start">
								<h6>👋, My name is Marianna & I'm</h6>
								<h1>
									a <ReactTypingEffect text={['Frontender', 'Backender', 'Fullstack Dev']} speed="100" typingDelay="500" eraseDelay="200" />{' '}
								</h1>
								<p>based in Bergamo, Italy.</p>
							</div>
						</div>
						<div className="col-lg-6 pt-4 pt-lg-0">
							<div className="home-image text-center">
								<img src={personalAvatar} title="Banner" alt="Banner" width={500} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
