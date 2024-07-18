import React from 'react';
import instagramIcon from '../assets/social-icons/pink-icons/instagram-icon.svg';
import linkedInIcon from '../assets/social-icons/pink-icons/linkedIn-icon.svg';
import twitterIcon from '../assets/social-icons/pink-icons/twitter-icon.svg';
import gitHubIcon from '../assets/social-icons/pink-icons/github-icon.svg';
import teregramIcon from '../assets/social-icons/pink-icons/telegram-icon.svg';
import classes from './SocialIcons.module.css';

const socialLinks = [
    { href: "https://instagram.com", src: instagramIcon, alt: "Instagram icon" },
    { href: "https://linkedin.com", src: linkedInIcon, alt: "LinkedIn icon" },
    { href: "https://t.me", src: teregramIcon, alt: "Telegram icon" },
    { href: "https://github.com", src: gitHubIcon, alt: "GitHub icon" }
];

const SocialIcons = () => {
    return (
        <nav className={classes["social-icons"]}>
            {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                    <img src={link.src} alt={link.alt} />
                </a>
            ))}
        </nav>
    );
}

export default SocialIcons;
