import React from 'react';
/* Pink Icons */
import instagramIconPink from '../assets/social-icons/pink-icons/instagram-icon.svg';
import linkedInIconPink from '../assets/social-icons/pink-icons/linkedIn-icon.svg';
import twitterIconPink from '../assets/social-icons/pink-icons/twitter-icon.svg';
import gitHubIconPink from '../assets/social-icons/pink-icons/github-icon.svg';
import telegramIconPink from '../assets/social-icons/pink-icons/telegram-icon.svg';
/* White Icons */
import instagramIconWhite from '../assets/social-icons/white-icons/instagram-icon.svg';
import linkedInIconWhite from '../assets/social-icons/white-icons/linkedIn-icon.svg';
import twitterIconWhite from '../assets/social-icons/white-icons/twitter-icon.svg';
import gitHubIconWhite from '../assets/social-icons/white-icons/github-icon.svg';
import telegramIconWhite from '../assets/social-icons/white-icons/telegram-icon.svg';

import classes from './SocialIcons.module.css';

const SocialIcons = ({ footerSection = false }) => {

    const socialLinks = [
        { href: 'https://instagram.com', src: footerSection ? instagramIconWhite : instagramIconPink, alt: 'Instagram icon' },
        { href: 'https://linkedin.com', src: footerSection ? linkedInIconWhite : linkedInIconPink, alt: 'LinkedIn icon' },
        { href: 'https://t.me', src: footerSection ? telegramIconWhite : telegramIconPink, alt: 'Telegram icon' },
        { href: 'https://github.com', src: footerSection ? gitHubIconWhite : gitHubIconPink, alt: 'GitHub icon' }
    ];

    return (
        <nav className={`${footerSection ? classes['footer-section-icons'] : classes['social-icons']}`}>
            {socialLinks.map((link, index) => (
                <a key={index} href={link.href} target='_blank' rel='noopener noreferrer'>
                    <img src={link.src} alt={link.alt} />
                </a>
            ))}
        </nav>
    );
}

export default SocialIcons;
