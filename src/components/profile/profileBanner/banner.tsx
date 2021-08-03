import React, { useEffect } from 'react';
import style from "./banner.module.css";
import Image from "next/image";
import ProfileImg from "../../../../public/assets/img/profile/profile_sample.png";
import BannerImage from "../../../../public/assets/img/profile/profile_bg.png";

export default function ProfileBanner() {
  
    return (
      <div className={`w-100 ${style.bannerWrapper} bannerWrapper`}>
        <div
          className={`${style.profileBanner} position-relative profileBanner`}
        >
          <div className={style.updateBannerImage}>Update banner image</div>
          <div className={`${style.unsetImg}`}>
            <Image
              src={BannerImage}
              alt="Banner"
              className={`${style.customImg}`}
              layout="fill"
              // objectFit="cover"
            />
          </div>

          <div
            className={`container d-flex justify-content-center align-items-center ${style.profileContentMain}`}
          >
            <div className="row w-100 align-items-center position-relative">
              <div
                className={`text-center ${style.profileContent} profileDynamicContent`}
              >
                <div className={`${style.profileAvatarDiv} profileAvatarDiv`}>
                  <div className={`${style.innerPrifileAvatar}`}>
                    <div className={style.avSet}>
                      <Image
                        src={ProfileImg}
                        alt="avatar"
                        layout="fill"
                        className={`${style.profileImg}`}
                      />
                    </div>
                  </div>
                </div>
                <div
                  className={`mt-2 fw-bold ${style.fSizeBannerName} fSizeBannerName`}
                >
                  Musonda Kabwe
                </div>
                <div
                  className={`d-none mt-2 d-md-flex align-items-center skillz`}
                >
                  <div className={`${style.bannerSkill} mx-1`}>illustrator</div>
                  <div className={`${style.bannerSkill} mx-1`}>typgraphy</div>
                  <div className={`${style.bannerSkill} mx-1`}>
                    motion design
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}