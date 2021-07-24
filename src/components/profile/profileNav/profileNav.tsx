import React from 'react';
import style from './profileNav.module.css';
import { useRouter } from "next/router";
import Link from "next/link";

export default function ProfileNav(){
    const router = useRouter();
    return (
       <div className={`${style.wrapper}`}>
          <div className={`container-fliud ${style.menuMain}`}>
            <div className={`${style.viewPublicProfile} d-none d-lg-flex`}>
              view Public Profile
            </div>
            <div className={`container`}>
              <div className={`row justify-content-between align-items-center`}>
                <ul className={`${style.menuItems} m-0`}>
                  <Link href="/profile">
                    <a>
                      <li
                        className={`${
                          router.pathname === "/profile" ? style.active : ""
                        }`}
                      >
                        Profile
                      </li>
                    </a>
                  </Link>
                  <Link href="/mybids">
                    <a>
                      <li
                        className={`${
                          router.pathname === "/mybids" ? style.active : ""
                        }`}
                      >
                        My Bids
                      </li>
                    </a>
                  </Link>
                  <Link href="/myjobs">
                    <a>
                      <li
                        className={`${
                          router.pathname === "/myjobs" ? style.active : ""
                        }`}
                      >
                        My Jobs
                      </li>
                    </a>
                  </Link>
                  <Link href="/portfolio">
                    <a>
                      <li
                        className={`${
                          router.pathname === "/portfolio" ? style.active : ""
                        }`}
                      >
                        Portfolio
                      </li>
                    </a>
                  </Link>
                </ul>
                <div className={`w-auto d-none d-md-block`}>
                  <div
                    className={`d-inline-flex flex-column align-items-center ${style.rightMenuPoints}`}
                  >
                    <span className={`fw-bold`}>30K</span>
                    <div>Earned</div>
                  </div>

                  <div
                    className={`ms-4 d-inline-flex flex-column align-items-center ${style.rightMenuPoints}`}
                  >
                    <span className={`fw-bold`}>0</span>
                    <div>WIP</div>
                  </div>

                  <div
                    className={`ms-4 d-inline-flex flex-column align-items-center ${style.rightMenuPoints}`}
                  >
                    <span className={`fw-bold`}>0</span>
                    <div>Completed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
}