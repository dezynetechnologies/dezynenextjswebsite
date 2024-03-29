import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from 'next/head';
import TopHeader from './TopBar';
import BurgerMenus from './BurgerMenus';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {

	const [menuOpen, setMenuOpen] = useState(false)

	const router = useRouter()
	const [path, setPath] = useState("")
	useEffect(() => {
		setPath(router.pathname)
	}, [router])

	return (
		<React.Fragment>
			<Head>
                <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
            </Head>
			<header id="header-wrap">
				<TopHeader />
				<div id="sticky-header" className="main-menu-area">
					<div className="container">
						<div className="row align-items-center">
							<div className="col-xl-3 col-lg-3 col-md-6 col-8 d-flex align-items-center">
								<div className="logo">
									<Link href="/" as="/"><a><img src={require("../../../../public/assets/img/logo/logo.png")} alt="logo" /></a></Link>
								</div>
							</div>
							<div id="right-header" className="col-xl-9 col-lg-9 col-md-6 col-4">
								<div className="header-button f-right d-none d-lg-block">
									<a className="btn" href="https://calendly.com/dheerajkaushik/20-minute-startup-consultation"><span className="btn-text">Consultancy <i><FontAwesomeIcon icon={['fas', 'long-arrow-right']} /></i></span> </a>
								</div>
								<div className="main-menu text-right d-none d-lg-block">
									<nav id="mobile-menu">
										<ul>
											<li><Link href="/" as="/"><a>Home</a></Link>
											</li>
											<li><Link href="#about"><a>About</a></Link></li>
											<li><Link href="#services"><a>Services</a></Link>
											</li>
											<li><Link href="#team"><a>Team</a></Link>
											</li>
											<li><Link href="#contact"><a>Contact</a></Link></li>
										</ul>
									</nav>
								</div>
								<div className="d-block d-xl-none d-lg-none text-right">
									<div className="menu-bar">
										<button className="bars" onClick={() => {
											setMenuOpen(!menuOpen)
											}}>
											<i> <FontAwesomeIcon icon={['far', 'bars']} /></i>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<BurgerMenus menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
				<div onClick={() => setMenuOpen(false)} className={menuOpen ? "body-overlay show" : "body-overlay"}></div>
				
			</header>
		</React.Fragment>
	);
}

export default Header;