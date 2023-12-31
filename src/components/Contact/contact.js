import logo from '../img/creatorLogo.png';

/*--------------------
* Contact Section
----------------------*/

export default function Contact() {
	const handleSubmit = async (event) => {
		event.preventDefault();

		const formData = new FormData(event.target);
		formData.append('service_id', 'service_35apefo');
		formData.append('template_id', 'template_atrbop7');
		formData.append('user_id', 'B8mYrvXrfKfNHWtr5');

		try {
			const response = await fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
				method: 'POST',
				body: formData,
			});

			if (response.ok) {
				alert('Your mail is sent!');
			} else {
				const errorData = await response.json();
				alert('Oops... ' + JSON.stringify(errorData));
			}
		} catch (error) {
			alert('Oops... ' + error.message);
		}
	};

	return (
		<>
			<section
				data-scroll-data="4"
				id="contactus"
				className="section contactus-section bg-dark"
				style={{
					backgroundImage: 'url(/img/effect/bg-effect-3.png)',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}
			>
				<div className="container">
					<div className="row gy-5">
						<div className="col-lg-6">
							<div className="contact-form">
								<h6>Get in touch</h6>
								<p className="lead">I would love to hear from you!</p>
								<form id="contact-form myForm" method="POST" onSubmit={handleSubmit}>
									<div className="row gx-3 gy-4">
										<div className="col-md-6">
											<div className="form-group">
												<label className="form-label">First name</label>
												<input name="from_name" id="from_name" placeholder="Name *" className="form-control" type="text" />
											</div>
										</div>
										<div className="col-md-6">
											<div className="form-group">
												<label className="form-label">Your Email</label>
												<input name="reply_to" id="reply_to" placeholder="Email *" className="form-control" type="email" />
											</div>
										</div>
										<div className="col-12">
											<div className="form-group">
												<label className="form-label">Subject</label>
												<input name="subject" id="subject" placeholder="Subject *" className="form-control" type="text" />
											</div>
										</div>
										<div className="col-md-12">
											<div className="form-group">
												<label className="form-label">Your message</label>
												<textarea name="message" id="message" placeholder="Your message *" rows="4" className="form-control"></textarea>
											</div>
										</div>
										<div className="col-md-12">
											<div className="send">
												<button className="px-btn px-btn-theme2" type="submit" value="Send">
													{' '}
													Send Message
												</button>
											</div>
										</div>
									</div>
								</form>
							</div>
						</div>
						<div className="col-lg-5 ms-auto col-xl-4">
							<div className="pb-5">
								<img className="w-100" src={logo} title="Logo" alt="logo" />
							</div>
							<ul className="contact-infos">
								<li>
									<div className="icon bg-1">
										<i className="fas fa-phone-alt"></i>
									</div>
									<div className="col">
										<h5>Phone</h5>
										<p>+39 340 711 6365</p>
									</div>
								</li>
								<li>
									<div className="icon bg-2">
										<i className="fas fa-envelope"></i>
									</div>
									<div className="col">
										<h5>Mail</h5>
										<p>marianna.albrici@gmail.com</p>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
