import React, { useState, UseEffect } from "react";
import { MdNotifications } from "react-icons/md";
import { CgMenuRight, CgMenuLeft } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";

import { Discover, HelpCenter, Notification, Profile, SideBar } from "index";
import { Button } from "../importComponents";
import Style from "./NavBar.module.css";
import images from "../../img";

import Image from "next/image";
import Link from "next/link";

export const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(true);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(true);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  return (
    <div className={Style.navBar}>
      <div className={Style.navbar_container}>
        <div className={Style.navbar_container_left}>
          <div className={Style.logo}>
            <Image
              src={images.logo}
              alt="Cyclone NFT Marketpace"
              width={100}
              height={100}
            />
          </div>
          <div className={Style.navbar_container_left_input}>
            <div className={Style.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search" />
              <BsSearch onClick={(e) => {}} className={Style.search_icon} />
            </div>
          </div>
        </div>

        <div className={Style.navbar_container_right}>
          <div className={Style.navbar_container_right_discover}>
            <p
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Discover
            </p>
            {discover && (
              <div className={Style.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>
          <div className={Style.navbar_container_right_help}>
            <p
              onClick={(e) => {
                openMenu(e);
              }}
            >
              Help Center
            </p>
            {help && (
              <div className={Style.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          <div className={Style.navbar_container_right_notify}>
            <MdNotifications
              className={Style.notify}
              onClick={() => {
                openNotification();
              }}
            />
            {notification && <Notification />}
          </div>
        </div>
      </div>
    </div>
  );
};
