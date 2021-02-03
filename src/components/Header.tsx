import React from 'react';
import { Button, createStyles, makeStyles } from '@material-ui/core';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import logo from '../image/header/01.png';
import 'typeface-roboto';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="header-wrapper">
        <div className="container">
          <div className="header">
            <div className="header-logo">
              <img src={logo} alt="Логотип компании" />
            </div>
            <div className="header-button">
              <div className="header-button_1">
                <a href="#">Услуги</a>
              </div>
              <div className="header-button_1">
                <a href="#">Контакты</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
