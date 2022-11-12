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

  return <div>NavBar</div>;
};
