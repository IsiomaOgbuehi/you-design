import React, { useEffect } from "react";
import ProfileBanner from './profileBanner/banner';
import ProfileNav from './profileNav/profileNav';
import Nav from '../navbar/nav';


export default function ProfileHeader() {
  useEffect(() => {
    const banner = document.querySelector<HTMLElement>(".bannerWrapper")!;
    window.addEventListener("scroll", () => {
      const offsetVal = window.pageYOffset;
      // if (offsetVal > 100){
        banner?.classList.toggle("sticky", window.pageYOffset > 120);
        // profileNav?.classList.toggle("sticky", window.pageYOffset > 100);
      // }
      // console.log(Math.round(((offsetVal * 100)/offsetVal * 2.5) - offsetVal));
      // const dimmer = Math.round(
        // ((offsetVal * 100)/offsetVal) - offsetVal
      // );
      // if (offsetVal > 1) {
        // banner.style.filter = `brightness(${dimmer}%)`;
      // }
      // if (offsetVal >= 5) {
      //   banner.style.filter = `brightness(100%)`;
      // }
      // filter: brightness(100%);
    });

    () => {
      return null;
    };
  }, []);
  return (
    <>
      {/* <div className="profileHeaderWrapper"> */}
        <Nav />
        <ProfileBanner />
        <ProfileNav />
      {/* </div> */}
    </>
  );
}