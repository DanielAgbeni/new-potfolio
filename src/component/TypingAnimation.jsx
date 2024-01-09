/** @format */

import React, { useState, useEffect } from 'react';
import '../index.css';

const TypingAnimation = () => {
	const phrases = ['Web Developer', 'Computer Scientist', 'Youtuber'];
	const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
	const [currentPhrase, setCurrentPhrase] = useState('');
	const [isTyping, setIsTyping] = useState(true);
	const [showCursor, setShowCursor] = useState(true);

	useEffect(() => {
		const typingInterval = setInterval(() => {
			const phrase = phrases[currentPhraseIndex];
			const typedText = phrase.slice(0, currentPhrase.length + 1);

			setCurrentPhrase(typedText);

			if (typedText === phrase) {
				setIsTyping(false);
				clearInterval(typingInterval);

				setTimeout(() => {
					setCurrentPhrase('');
					setIsTyping(true);

					setCurrentPhraseIndex((prevIndex) =>
						prevIndex === phrases.length - 1 ? 0 : prevIndex + 1,
					);
				}, 1500);
			}
		}, 100);

		const cursorInterval = setInterval(() => {
			setShowCursor((prevShowCursor) => !prevShowCursor);
		}, 500); // Adjust blinking speed as needed

		return () => {
			clearInterval(typingInterval);
			clearInterval(cursorInterval);
		};
	}, [currentPhrase, currentPhraseIndex]);

	return (
		<div>
			<p>
				a {currentPhrase}
				{showCursor ? <span className='cursor'></span> : null}
			</p>
		</div>
	);
};

export default TypingAnimation;
