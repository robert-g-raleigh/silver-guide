import React from 'react';
import PropTypes from 'prop-types';
import ReactFontFace from 'react-font-face';
import Helmet from 'react-helmet';
import Header from '../components/header';
import Navbar from '../components/navbar.js';
import Billboard from '../components/billboard.js';
import SecondaryNav from '../components/secondary-nav.js';
import Footer from '../components/footer.js';
import './index.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

const flexContainer = {
  display: "flex",
  flexDirection: "column",
  flexFlow: "wrap"
};

const Layout = ({ children, data }) => (
  <div className="flexContainer">
    <Helmet
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Navbar />
    <Billboard />
    <div
      className="flexxy"
      style={{
        display: "flex",
        margin: '0 auto',
      }}>
        {children()}
    </div>
    <SecondaryNav />
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
