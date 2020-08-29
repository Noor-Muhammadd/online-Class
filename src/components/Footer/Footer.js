import React from "react";
import "./Footer.css";
import { Container } from "react-bootstrap";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="footer">
			<Container>
				<div>
					&copy; {year} | build with  by{" "}
					<a href="#">NoorMuhammad  </a>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
