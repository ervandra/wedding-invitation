import React, { Component } from 'react';
import { SimpleShareButtons } from 'react-simple-share';

import fotoEddie from '../assets/images/eddie.jpg';
import fotoIntan from '../assets/images/intan.jpg';
import fotoGelas from '../assets/images/gelas.svg';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrolling: false
		};
		this.handleScroll = this.handleScroll.bind(this);
	}
	componentDidMount() {
		this.handleScroll;
		window.addEventListener('scroll', this.handleScroll);
	}
	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}
	handleScroll(event) {
		var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
		console.log(h);
		if (window.scrollY < h && this.state.scrolling === true) {
			this.setState({ scrolling: false });
		} else if (window.scrollY >= h && this.state.scrolling !== true) {
			this.setState({ scrolling: true });
		}
	}

	render() {
		return (
			<div id="invitation">
				<div className="hero">
					<h1>Edy Syahputra & Intan Pelangi</h1>
					<h3>We're Getting Married</h3>
					<div className="save-the-date">
						<h5>Save the Date</h5>
						<h2>AUG 28, 2018</h2>
					</div>
				</div>
				<header id="top" className={ this.state.scrolling ? 'fixed' : ''}>
					<div className="grid-container">
						<div className="grid-x grid-margin-x">
							<div className="cell">
								<div className="navigation">
									<div className="logo">
										<a href="#">E & I</a>
									</div>
									<div id="mainmenu">
										<ul>
											<li>
												<a href="#the-couple">The Couple</a>
											</li>
											<li>
												<a href="#date-time">Date & Time</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>
				<div className="section" id="the-couple">
					<div className="grid-container">
						<div className="the-couple-container">
							<div className="grid-x align-stretch">
								<div className="cell small-12 medium-6">
									<div className="photo">
										<img src={fotoEddie} alt="Eddie Syahputra" />
									</div>
								</div>
								<div className="cell small-12 medium-6">
									<div className="profile profile-eddie">
										<h3>Eddie Syahputra</h3>
									</div>
								</div>
							</div>
							<div className="grid-x align-stretch">
								<div className="cell small-12 medium-6">
									<div className="profile profile-intan">
										<h3>Intan Pelangi</h3>
									</div>
								</div>
								<div className="cell small-12 medium-6">
									<div className="photo">
										<img src={fotoIntan} alt="Intan Pelangi" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <div className="section" id="just-say-yes">
					<div className="grid-container">
						<div className="grid-x align-middle">
							<div className="cell small-12 medium-6">
								<h4>We'll say yes in...</h4>
							</div>
							<div className="cell small-12 medium-6">
								<div className="countdown">
									<div className="count day">
										<span className="num" id="num-day">
											18
										</span>
										<span className="text">Days</span>
									</div>
									<div className="count hour">
										<span className="num" id="num-hour">
											18
										</span>
										<span className="text">Hours</span>
									</div>
									<div className="count minute">
										<span className="num" id="num-minute">
											18
										</span>
										<span className="text">Minutes</span>
									</div>
									<div className="count second">
										<span className="num" id="num-second">
											18
										</span>
										<span className="text">Seconds</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div> */}
				<div className="section" id="date-time">
					<div className="grid-container">
						<div className="grid-x">
							<div className="cell">
								<div className="wedding-event">
									<h2>Wedding Reception</h2>
									<p>
										<img src={fotoGelas} alt="WEDDING EVENT" width="100" />
									</p>
									<address>
										<h5>
											<span className="fa fa-map-marker" />
											The Medan Plaza
										</h5>
										<h2>
											<span className="fa fa-calendar" />
											18 Agustus 2018
										</h2>
										<h2>
											<span className="fa fa-clock-o" />
											10:00 WIB
										</h2>
										<p>
											Jalan Tunjungan Raya No. 1 <br />
											Medan Pusat, Kota Medan - Sumatera Barat
										</p>
									</address>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="section" id="happiest-couple">
					<div className="grid-container">
						<div className="grid-x">
							<div className="cell">
								<div className="grid-x">
									<div className="cell small-12 medium-6 h3-eddie">
										<h3>Edy Syahputra</h3>
									</div>
									<div className="cell small-12">
										<h4>&amp;</h4>
									</div>
									<div className="cell small-12 medium-6 h3-intan medium-offset-6">
										<h3>Intan Pelangi</h3>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<footer id="footer">
					<div className="grid-container">
						<div className="grid-x grid-margin-x">
							<div className="cell">
								<div className="berbagi">
									<div className="flex-container align-center align-middle">
										<h5>Bagikan kegembiraan kami: </h5>
										<SimpleShareButtons whitelist={['Facebook', 'Twitter']} size="32px" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</footer>
			</div>
		);
	}
}

export default Home;
