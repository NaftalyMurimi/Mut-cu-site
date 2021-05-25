import React  from 'react'
import './Footer.css'
import { FaBuilding, FaCopyright, FaEnvelope, FaEnvelopeOpen, FaFacebook, FaHospitalSymbol, FaPhone, FaWhatsapp } from 'react-icons/fa'


function Footer() {
	return (
		<div class="foot">
		<div class="footer">
		<div class="section social">
			<h2><span>	Murang'a university</span> Christian Union</h2>
			<p>MUTCU is a non demonination christian organisation that aims
				at spreading the Gospel of our Lord Jesus among christian student
			</p>
			<ul>
				<li>Tel: +254-798364632</li>
				<li>Email: info@mutcu.org</li>
			</ul>
		</div>
		<div class="section links">
			<h2>Quick Links</h2>
			<ul>
				<a href=""><li>Events</li></a>
				<a href=""><li>Teams</li></a>
				<a href=""><li>Mentors</li></a>
				<a href=""><li>Gallery</li></a>
				<a href=""><li>Bible study</li></a>
			</ul>
		</div>
		<div class="section contact">
			<h2>Contact Us</h2>
			<form>
				<input type="email" class="mail" placeholder="Your Email...."/>
				<br/>
				<br/>

				<textarea  placeholder="Your Message"></textarea><br/>
				<input type="submit" className="send" value="Send"/>
			</form>
		</div>
		</div>
		<div class="copyright">
			&copy; @mutcudevelop2021
		</div>
	</div>
			
	)
}

export default Footer
