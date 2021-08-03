import React, {useEffect} from 'react';
import Nav from '../components/navbar/nav';
import ProfileBanner from '../components/profile/profileBanner/banner';
import ProfileNav from '../components/profile/profileNav/profileNav';
import ProfileContent from '../components/profile/profileContent/profileContent';
import ProfileHeader from '../components/profile';
import Footer from '../components/footer/footer';
import Head from "next/head";

export default function Profile() {
    return (
      <>
        <Head>
          <title>Profile | YouDesign</title>
          <meta
            property="og:profile"
            content="YouDesign user Profile"
            key="profile"
          />
        </Head>
        {/* <div className="profileHeaderWrapper"> */}
          {/* <Nav /> */}
          <ProfileHeader />
          <ProfileContent />
        {/* </div> */}
        <Footer />
      </>
    );
}