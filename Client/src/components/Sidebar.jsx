import React, { useState, useEffect } from "react";
import { MdSpaceDashboard } from "react-icons/md";
import { RiDashboard2Fill } from "react-icons/ri";
import { FaAddressCard } from "react-icons/fa";
import { GiTwirlCenter } from "react-icons/gi";
import { ImSigma } from "react-icons/im";
import { IoSettings } from "react-icons/io5";
import { FiLogOut } from "react-icons/fi";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";
import scrollreveal from "scrollreveal";

export default function Sidebar(prop) {
  const [currentLink, setCurrentLink] = useState(1);
  const [navbarState, setNavbarState] = useState(false);

  const { displayAll, setContract } = prop

  const html = document.querySelector("html");
  html.addEventListener("click", () => setNavbarState(false));

  const hitLink = (val, instrument) => {
    setCurrentLink(val)
    setContract(instrument)
  }

  useEffect(() => {
    const sr = scrollreveal({
      origin: "left",
      distance: "80px",
      duration: 1000,
      reset: false,
    });
    sr.reveal(
      `
      .brand,
      .links>ul>li:nth-of-type(1),
      .links>ul>li:nth-of-type(2),
      .links>ul>li:nth-of-type(3),
      .links>ul>li:nth-of-type(4),
      .links>ul>li:nth-of-type(5),
      .links>ul>li:nth-of-type(6),
      .links>ul>li:nth-of-type(7),
      .logout
      `,
      {
        opacity: 0,
        interval: 300,
      }
    );
  }, []);

  return (
    <>
      <section className="sidebar-section">
        <div className="top">
          <div className="brand">
            <ImSigma />
            <span>Dashboard</span>
          </div>
          <div className="toggle">
            {navbarState ? (
              <VscChromeClose onClick={() => setNavbarState(false)} />
            ) : (
              <GiHamburgerMenu
                onClick={(e) => {
                  e.stopPropagation();
                  setNavbarState(true);
                }}
              />
            )}
          </div>
          <div className="links">
            <ul>
              <li
                className={currentLink === 1 ? "active" : "none"}
                onClick={() => hitLink(1, 'ALL')}
              >
                <a href="#">
                  <MdSpaceDashboard />
                  <span>All Assets</span>
                </a>
              </li>
              {displayAll ? <>
                <li
                  className={currentLink === 2 ? "active" : "none"}
                  onClick={() => hitLink(2, 'BTC')}
                >
                  <a href="#">
                    <RiDashboard2Fill />
                    <span> BTC-USD</span>
                  </a>
                </li>
                <li
                  className={currentLink === 3 ? "active" : "none"}
                  onClick={() => hitLink(3, 'ETH')}
                >
                  <a href="#">
                    <RiDashboard2Fill />
                    <span> ETH-USD</span>
                  </a>
                </li>
                <li
                  className={currentLink === 4 ? "active" : "none"}
                  onClick={() => hitLink(4, 'SOL')}
                >
                  <a href="#">
                    <FaAddressCard />
                    <span> SOL-USD</span>
                  </a>
                </li>
                <li
                  className={currentLink === 5 ? "active" : "none"}
                  onClick={() => hitLink(5, 'USDT')}
                >
                  <a href="#">
                    <GiTwirlCenter />
                    <span> BTC-USDT</span>
                  </a>
                </li>
              </> : <></>}
              <li
                className={currentLink === 6 ? "active" : "none"}
                onClick={() => hitLink(6, 'faq')}
              >
                <a href="#">
                  <ImSigma />
                  <span> FAQs</span>
                </a>
              </li>
              <li
                className={currentLink === 7 ? "active" : "none"}
                onClick={() => hitLink(7, 'Settings')}
              >
                <a href="#">
                  <IoSettings />
                  <span> Settings</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="logout">
          <a href="#">
            <FiLogOut />
            <span>Logout</span>
          </a>
        </div>
      </section>
      <div state={navbarState} className={navbarState ? "sidebar-section-side show" : "sidebar-section-side"}>
        <div className="responsive__links">
          <ul>
            <li
              className={currentLink === 1 ? "active" : "none"}
              onClick={() => hitLink(1, 'ALL')}
            >
              <a href="#">
                <MdSpaceDashboard />
                <span>All Assets</span>
              </a>
            </li>
            {displayAll ? <>
              <li
                className={currentLink === 2 ? "active" : "none"}
                onClick={() => hitLink(2, 'BTC')}
              >
                <a href="#">
                  <RiDashboard2Fill />
                  <span> BTC</span>
                </a>
              </li>
              <li
                className={currentLink === 3 ? "active" : "none"}
                onClick={() => hitLink(3, 'ETH')}
              >
                <a href="#">
                  <RiDashboard2Fill />
                  <span> ETH</span>
                </a>
              </li>
              <li
                className={currentLink === 4 ? "active" : "none"}
                onClick={() => hitLink(4, 'SOL')}
              >
                <a href="#">
                  <FaAddressCard />
                  <span> SOL</span>
                </a>
              </li>
              <li
                className={currentLink === 5 ? "active" : "none"}
                onClick={() => hitLink(5, 'USDT')}
              >
                <a href="#">
                  <GiTwirlCenter />
                  <span> USDT</span>
                </a>
              </li>
            </> : <></>}
            <li
              className={currentLink === 6 ? "active" : "none"}
              onClick={() => hitLink(6, 'faq')}
            >
              <a href="#">
                <ImSigma />
                <span> FAQs</span>
              </a>
            </li>
            <li
              className={currentLink === 7 ? "active" : "none"}
              onClick={() => hitLink(7, 'Settings')}
            >
              <a href="#">
                <IoSettings />
                <span> Settings</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
