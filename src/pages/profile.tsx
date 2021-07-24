import React from 'react';
import Nav from '../components/navbar/nav';
import ProfileBanner from '../components/profile/profileBanner/banner';
import ProfileNav from '../components/profile/profileNav/profileNav';
import ProfileContent from '../components/profile/profileContent/profileContent';
import Footer from '../components/footer/footer';
import style from '../styles/profile/profile.module.css';

export default function Profile() {
    return (
      <>
        <Nav />
        <ProfileBanner />
        <ProfileNav />
        <ProfileContent />
        <Footer />
      </>
    );
}