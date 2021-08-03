import React, { useEffect, useState, useRef } from "react";
import ProfileHeader from '../components/profile';
import Head from 'next/head';
import style from '../styles/mybids/mybids.module.css';
import Footer from '../components/footer/footer';
import { FaEdit } from 'react-icons/fa';
import { IoTrashOutline } from 'react-icons/io5';
import Pagination from '../components/pagination/pagination';

export default function MyBids() {
    const [data, setData] = useState([]);
    const [activeBids, setActiveBids] = useState([]);
    const [archivedBids, setArchivedBids] = useState([]);
    const itemsPerPage = 5;
    const activeRef = useRef<any>();
    const archivedRef = useRef<any>();
    const [activeMenu, setActiveMenu] = useState('activeBids');

     useEffect(() => {
       fetch("https://jsonplaceholder.typicode.com/todos")
         .then((response) => response.json())
         .then((json) => setData(json));
     }, []);
     const renderData = (currentPage: any) => {
    //    console.log(currentIndex);
       const indexOfLastItem = currentPage * itemsPerPage;
       const indexOfFirstItem = indexOfLastItem - itemsPerPage;
       const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);
    //    console.log(currentItems);
     };
      const moveToSection = (ref: any, elementVal: string) => {
        setActiveMenu(elementVal);
        if (ref && ref.current /* + other conditions */) {
          //  ref.current.scrollIntoView({ behavior: "smooth", block: "start", style: {top: "350px"} }); // behavior: "instant", block: "start"
          const element = ref.current;
        //   element.classList.toggle(`${style.active}`);
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition - 600;

          window.scrollBy({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      };

    return (
      <>
        <Head>
          <title>My Bids | YouDesign</title>
          <meta
            property="og:my bids"
            content="YouDesign user Bids"
            key="my bids"
          />
        </Head>
        <ProfileHeader />
        {/* CONTENT */}
        <div className={`${style.wrapper} profileSideMenu`}>
          <div className="container">
            <div className="row">
              {/* MENU ITEMS */}
              <div className="d-none d-md-block col-3">
                <div className={`${style.sideContent} profileSideMenuItems`}>
                  <div
                    className={`${style.menuItems} ${
                      activeMenu === "activeBids" ? style.active : ""
                    }`}
                    onClick={() => moveToSection(activeRef, "activeBids")}
                  >
                    Active Bids
                  </div>
                  <div
                    className={`${style.menuItems} ${
                      activeMenu === "archivedBids" ? style.active : ""
                    }`}
                    onClick={() => moveToSection(archivedRef, "archivedBids")}
                  >
                    Archived
                  </div>
                </div>
              </div>

              {/* CONTENT BODDY */}
              <div className="col-12 col-md-9" ref={activeRef}>
                {/* ACTIVE BIDS */}
                <div className="mb-4">
                  <span className={style.headerText}>Active bids (10)</span>
                  <div className={style.subText}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonum
                  </div>
                </div>
                <div className={style.tableWrapper}>
                  <table className={`w-100`}>
                    <thead>
                      <tr className="table-row">
                        <th>Project</th>
                        <th>Average Bid</th>
                        <th>Mid Bid</th>
                        <th></th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-row">
                        <td style={{ fontWeight: 500 }}>
                          Need help redesigning my company logo
                        </td>
                        <td>
                          N40K
                          <div style={{ fontSize: "11px" }}>20 bids</div>
                        </td>
                        <td>N30K</td>
                        <td>
                          <div className={style.iconBtn}>
                            <FaEdit />
                          </div>
                        </td>
                        <td>
                          <div className={style.iconBtn}>
                            <IoTrashOutline />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={`p-2 d-flex justify-content-end`}>
                    {data ? (
                      <Pagination
                        data={data}
                        itemsPerPage={itemsPerPage}
                        renderData={renderData}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>

                {/* ARCHIVED BIDS */}
                <div className="mb-4" ref={archivedRef}>
                  <span className={style.headerText}>Archived bids (8)</span>
                  <div className={style.subText}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonum
                  </div>
                </div>
                <div className={style.tableWrapper}>
                  <table className={`w-100`}>
                    <thead>
                      <tr className="table-row-archived">
                        <th>Project</th>
                        <th>Average Bid</th>
                        <th>Mid Bid</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="table-row">
                        <td style={{ fontWeight: 500 }}>
                          Need help redesigning my company logo
                        </td>
                        <td>
                          N40K
                          <div style={{ fontSize: "11px" }}>20 bids</div>
                        </td>
                        <td>N30K</td>
                        <td>
                          <span style={{ fontSize: "12px" }}>
                            Project closed
                          </span>
                          <div style={{ fontSize: "11px" }}>12-05-2021</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div className={`p-2 d-flex justify-content-end`}>
                    {data ? (
                      <Pagination
                        data={data}
                        itemsPerPage={itemsPerPage}
                        renderData={renderData}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
}