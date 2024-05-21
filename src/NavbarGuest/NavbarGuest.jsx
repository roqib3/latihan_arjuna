import "./NavbarGuest.css";
import { LogoPlaceholder } from "../LogoPlaceholder/LogoPlaceholder.jsx";
import { MenuItemProperty1Default } from "../MenuItemProperty1Default/MenuItemProperty1Default.jsx";
import { MasukProperty1Default } from "../MasukProperty1Default/MasukProperty1Default.jsx";
import { DaftarProperty1Default } from "../DaftarProperty1Default/DaftarProperty1Default.jsx";

export const NavbarGuest = ({ className, ...props }) => {
  return (
    <div className={"navbar-guest " + className}>
      <div className="frame-24">
        <LogoPlaceholder className="logo-placeholder-instance"></LogoPlaceholder>
        <ul class="menu">
            <li><a href="/">Home</a></li>
            <li><a href="./news.html">News</a></li>
            <li><a href="./support.html">Support wohoo</a></li>
            <li><a href="./about us.html">About Us</a></li>
        </ul>
        <ul className="frame-11">
          <a href="masuk">Masuk</a>
          <a class="daft" href="daftar">Daftar</a>
        </ul>
      </div>
      
    </div>
  );
};
