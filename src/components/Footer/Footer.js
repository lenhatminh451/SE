import React from "react";
import FooterIcon from "../Icons/FooterIcon";
import s from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={s.footer}>
      <span className={s.footerLabel}>2022 &copy; Tel'net</span>
      <FooterIcon />
    </div>
  )
}

export default Footer;
