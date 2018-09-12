import React, { Component } from 'react';
import { SimpleShareButtons } from 'react-simple-share';

import fotoEddie from '../assets/images/eddie.jpg';
import fotoIntan from '../assets/images/intan.jpg';
import fotoGelas from '../assets/images/gelas.svg';

import 'react-photoswipe/lib/photoswipe.css';

import { PhotoSwipeGallery } from 'react-photoswipe';

let items = [
	{
		src: 'https://via.placeholder.com/1200x900',
		thumbnail: 'https://via.placeholder.com/120x90',
		w: 1200,
		h: 900,
		title: 'Image 1',
	},
	{
		src: 'https://via.placeholder.com/1200x900',
		thumbnail: 'https://via.placeholder.com/120x90',
		w: 1200,
		h: 900,
		title: 'Image 2',
	},
	{
		src: 'https://via.placeholder.com/1200x900',
		thumbnail: 'https://via.placeholder.com/120x90',
		w: 1200,
		h: 900,
		title: 'Image 2',
	},
	{
		src: 'https://via.placeholder.com/1200x900',
		thumbnail: 'https://via.placeholder.com/120x90',
		w: 1200,
		h: 900,
		title: 'Image 2',
	},
	{
		src: 'https://via.placeholder.com/1200x900',
		thumbnail: 'https://via.placeholder.com/120x90',
		w: 1200,
		h: 900,
		title: 'Image 2',
	},
	{
		src: 'https://via.placeholder.com/1200x900',
		thumbnail: 'https://via.placeholder.com/120x90',
		w: 1200,
		h: 900,
		title: 'Image 2',
	},
];

let options = {
	//http://photoswipe.com/documentation/options.html
};

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrolling: false,
			items: items,
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
		if (window.scrollY < h && this.state.scrolling === true) {
			this.setState({ scrolling: false });
		} else if (window.scrollY >= h && this.state.scrolling !== true) {
			this.setState({ scrolling: true });
		}
	}
	getTick() {

	}

	render() {
		const countDownDate = new Date("Oct 4, 2018 08:00:00").getTime();
		setInterval(function(){
			var now = new Date().getTime();
			var distance = countDownDate - now;
			var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  		var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  		var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
			var seconds = Math.floor((distance % (1000 * 60)) / 1000);
			// document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
			document.getElementById('day').innerHTML = days;
			document.getElementById('hour').innerHTML = hours;
			document.getElementById('minute').innerHTML = minutes;
			document.getElementById('second').innerHTML = seconds;
		}, 1000);
		return (
			<div id="invitation">
				<div className="hero">
					<h1>Edy Syahputra & Intan Pelangi</h1>
					<h3>We're Getting Married</h3>
					<div className="save-the-date">
						<h5>Save the Date</h5>
						<h2>Oct 4, 2018</h2>
					</div>
					<div className="the-countdown">
						<div className="flex-container align-center" id="countdown">
							<div className="block block-day">
								<div className="count" id="day"></div>
								<div className="label">Days</div>
							</div>
							<div className="block block-hour">
								<div className="count" id="hour"></div>
								<div className="label">Hours</div>
							</div>
							<div className="block block-minute">
								<div className="count" id="minute"></div>
								<div className="label">Minutes</div>
							</div>
							<div className="block block-second">
								<div className="count" id="second"></div>
								<div className="label">Seconds</div>
							</div>
						</div>
					</div>
				</div>
				<header id="top" className={this.state.scrolling ? 'fixed' : ''}>
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
												<a href="#gallery">Gallery</a>
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
										<h3>Eddie Syahputra, S.Kom.</h3>
									</div>
								</div>
							</div>
							<div className="grid-x align-stretch">
								<div className="cell small-12 medium-6">
									<div className="profile profile-intan">
										<h3>Intan Pelangi, SH.</h3>
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
				<div className="section" id="gallery">
					<div className="grid-container">
						<div className="grid-x grid-margin-x">
							<div className="cell">
								<PhotoSwipeGallery items={items} options={options} />
							</div>
						</div>
					</div>
				</div>
				<div className="section" id="date-time">
					<div className="grid-container">
						<div className="grid-x grid-margin-x">
							<div className="cell">
								<h2>Wedding Reception</h2>
								<p>
									<img src={fotoGelas} alt="WEDDING EVENT" width="100" />
								</p>
							</div>
						</div>
						<div className="grid-x grid-margin-x">
							<div className="cell small-12 medium-6">
								<div className="wedding-event">
									<h4>Resepsi Pernikahan Pihak Lelaki</h4>
									<address>
										<h2>
											<span className="fa fa-calendar" />
											Kamis, 4 Oktober 2018
										</h2>
										<h2>
											<span className="fa fa-clock-o" />
											17.00 Wib - selesai
										</h2>
										<p>
											<span className="fa fa-map-marker" />
											Jl. Petai No. 56 <br/>Pasar 2 Tionghoa <br/>Tandam
										</p>
										<p><a href="https://www.google.com/maps/dir//Gedung+Garuda+Mas,+Jalan+Pasar+V+Barat,+Bulu+Cina,+Hamparan+Perak,+Kabupaten+Deli+Serdang,+Sumatera+Utara+20374/@3.7504366,98.5331932,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3036d451a49efad5:0x65d02a17c3526359!2m2!1d98.5353819!2d3.7504366!3e0" target="_blank" rel="noopener noreferrer" className="button hollow">Get direction</a></p>
									</address>
								</div>
							</div>
							<div className="cell small-12 medium-6">
								<div className="wedding-event">
									<h4>Resepsi Pernikahan Pihak Perempuan</h4>
									<address>
										<h2>
											<span className="fa fa-calendar" />
											Senin, 1 Oktober 2018
										</h2>
										<h2>
											<span className="fa fa-clock-o" />
											17.00 Wib - selesai
										</h2>
										<p>
											<span className="fa fa-map-marker" />
											Gedung Garuda Mas <br/>Pasar 5 Tionghoa <br/>Tandam
										</p>
										<p><a href="https://www.google.com/maps/dir//Gedung+Garuda+Mas,+Jalan+Pasar+V+Barat,+Bulu+Cina,+Hamparan+Perak,+Kabupaten+Deli+Serdang,+Sumatera+Utara+20374/@3.7504366,98.5331932,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x3036d451a49efad5:0x65d02a17c3526359!2m2!1d98.5353819!2d3.7504366!3e0" target="_blank" rel="noopener noreferrer" className="button hollow">Get direction</a></p>
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
										<h3>Edy Syahputra, S.Kom.</h3>
									</div>
									<div className="cell small-12">
										<h4>&amp;</h4>
									</div>
									<div className="cell small-12 medium-6 h3-intan medium-offset-6">
										<h3>Intan Pelangi, SH.</h3>
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
