import Link from "next/link";

import { useRef } from "react";

import Menus from "../../Menus";

const MobileMenu = () => {
    const handleClick = () => {
        const ref = document.querySelector('.sidebar-menus');

        ref.classList.toggle('is_stuck');
    }

    return (
        <header id="header" className="main-header">
            <div className="sidebar-menus-wrapper">
                <div className="sidebar-menus">
                    <Menus />
                </div>
            </div>

            <div className="mobile-header">
                <div className="left-section" onClick={handleClick}>
                    <i className="fa fa-bars"></i>
                </div>
                <div className="center-section">
                    <Link href={{ pathname: `/` }}>Zurnal.co</Link>
                </div>
                <div className="right-section">
                    <i className="fa fa-search"></i>
                </div>
            </div>
        </header>
    );
}

export default MobileMenu;