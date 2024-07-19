import React, { lazy, Suspense } from 'react';
import classes from './Footer.module.css';

const Container = lazy(() => import('../../UI/Container.jsx'));
const Feedbacks = lazy(() => import('./Feedbacks.jsx'));
const SocialIcons = lazy(() => import('../../UI/SocialIcons.jsx'));
const Copyright = lazy(() => import('./Copyright.jsx'));
const FooterProfile = lazy(() => import('./FooterProfile.jsx'));

const footerData = [
  {
    title: 'Nazar Mocherniuk',
    content:
      'A dedicated React Developer crafting dynamic web solutions. I specialize in turning design blueprints into responsive, high-performance web applications with React.js.',
    delay: 0.1,
  },
  {
    title: 'View My CV',
    content:
      'If you enjoyed browsing my site, feel free to check out my CV for more details about my work and experience.',
    delay: 0.15,
    button: 'Download CV',
  },
  {
    title: 'Social Media',
    content: '',
    delay: 0.2,
    icons: <SocialIcons footerSection={true} />,
  },
];

const Footer = () => {

  return (
    <section className='section-footer'>
      <footer className={classes.footer}>
        <Suspense fallback={<div>Loading...</div>}>
          <Container>
            <FooterProfile footerData={footerData} />
            <Feedbacks />
          </Container>
          <Copyright />
        </Suspense>
      </footer>
    </section>
  );
};

export default Footer;
