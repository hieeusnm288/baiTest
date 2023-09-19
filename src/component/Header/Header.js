import React from "react";
// import { Popover } from "antd";
import { UnorderedListOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import "./StyleHeader.scss";

function Header() {
  const contentHome = (
    <div>
      <p>Home 1 - Backgruond Image</p>
      <p>Home 2 - Backgruond Video</p>
      <p>Home 3 - Google Inspỉred</p>
      <p>Home 4 - Travel Site</p>
    </div>
  );
  return (
    <div className="header-page">
      <div className="container">
        <div className="content-header">
          <div className="logo">
            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png" />
          </div>
          <div className="link-page">
            <div className="name-link">Home</div>
            <div className="name-link">Tours</div>
            <div className="name-link">Booking</div>
            <div className="name-link">Destinations</div>
            <div className="name-link">Page</div>
            <div className="name-link">Blog</div>
            <div className="name-link">Shortcodes</div>
            <div className="name-link">Shop</div>
            <div className="icon-header">
              <UnorderedListOutlined />
            </div>
            <div className="icon-header">
              <ShoppingCartOutlined />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
