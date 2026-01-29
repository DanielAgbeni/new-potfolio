'use client';

import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	const socialLinks = [
		{
			icon: FaGithub,
			href: 'https://github.com/DanielAgbeni',
			label: 'GitHub',
		},
		{
			icon: FaLinkedin,
			href: 'https://linkedin.com/in/danielagbeni',
			label: 'LinkedIn',
		},
		{
			icon: FaTwitter,
			href: 'https://twitter.com/danielagbeni',
			label: 'Twitter',
		},
		{
			icon: FaEnvelope,
			href: 'mailto:danielagbeni12@gmail.com',
			label: 'Email',
		},
	];

	return (
		<footer className="relative bg-background-950 border-t border-background-700 mt-20">
			<div className="h-1 w-full bg-primary-500" />

			<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
					{/* Brand */}
					<div>
						<h3 className="text-2xl font-mono font-bold mb-4">
							<span className="text-text-50">Daniel</span>
							<span className="text-gradient"> Agbeni</span>
						</h3>
						<p className="text-text-300 font-mono text-sm">
							Full Stack Developer & Cloud Engineer
						</p>
						<p className="text-text-400 font-mono text-sm mt-2">
							Building modern web applications with cutting-edge technologies.
						</p>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className="text-lg font-mono font-semibold text-text-50 mb-4">
							Quick Links
						</h4>
						<ul className="space-y-2">
							{['Home', 'About', 'Services', 'Portfolio'].map((link) => (
								<li key={link}>
									<Link
										href={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
										className="text-text-300 hover:text-primary font-mono text-sm transition-colors">
										{link}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* Contact Info */}
					<div>
						<h4 className="text-lg font-mono font-semibold text-text-50 mb-4">
							Connect
						</h4>
						<div className="flex gap-4 mb-4">
							{socialLinks.map((social) => (
								<a
									key={social.label}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="w-10 h-10 flex items-center justify-center rounded-lg bg-background-800 text-text-300 hover:text-primary hover:bg-background-700 transition-all duration-300 hover:scale-110">
									<social.icon className="text-xl" />
								</a>
							))}
						</div>
						<p className="text-text-300 font-mono text-sm">
							Lagos State, Nigeria
						</p>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="pt-8 border-t border-background-700">
					<div className="flex flex-col md:flex-row justify-between items-center gap-4">
						<p className="text-text-400 font-mono text-sm">
							&copy; {currentYear} Daniel Agbeni. All rights reserved.
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
