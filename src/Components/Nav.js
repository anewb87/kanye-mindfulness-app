import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'



const Nav = () => {
    const showSettings = (event) => {
        event.preventDefault();
      }

      const styles = {
        bmBurgerButton: {
          position: 'fixed',
          width: '36px',
          height: '30px',
          left: '36px',
          top: '36px',
          border: '5px black solid',
        },
        bmBurgerBars: {
          background: 'white'
        },
        bmBurgerBarsHover: {
          background: 'rgba(95,28,115,0.72)'
        },
        bmCrossButton: {
          height: '24px',
          width: '24px'
        },
        bmCross: {
          background: '#bdc3c7',
          border: '5px green solid',
        },
        bmMenuWrap: {
          position: 'fixed',
          height: '100%',
          border: '5px purple solid',
        },
        bmMenu: {
          background: 'rgba(95,28,115,0.72)',
          border: '5px red solid',
          padding: '2.5em 1.5em 0',
          fontSize: '1.15em'
        },
        bmMorphShape: {
          fill: '#373a47',
          border: '5px yellow solid',
        },
        bmItemList: {
          color: '#b8b7ad',
          border: '5px blue solid',
          padding: '0.8em'
        },
        bmItem: {
          display: 'inline-block'
        },
        bmOverlay: {
          background: 'rgba(0, 0, 0, 0.0)',
          border: '5px aliceblue solid',
        }
      }


    return (
    <Menu styles={ styles }>
        <Link to='/journal'>Journal</Link>
        <Link to='/mood'>Mood</Link>
        <a onClick={ showSettings } className="menu-item--small" href="">Features</a>
        </Menu>
    );
}


export default Nav;