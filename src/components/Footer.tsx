import React from 'react';
import LocalPhoneIcon from '@material-ui/icons/LocalPhone';
import EmailIcon from '@material-ui/icons/Email';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-block">
          <div className="footer-left">
            <div className="footer-left-schedule-title">График работы</div>
            <div className="footer-left-schedule-main">
              <p>понедельник - пятница: с 9:30 до 18:00</p>
              <p>суббота - воскресенье: выходной</p>
            </div>
            <div className="copyright">&copy; 2021</div>
          </div>
          <div className="footer-right">
            <div className="footer-right-item">
              <div className="footer-messenger">
                <div className="messenger-whatsApp">
                  <a href="https://wapp.click/79023296939">
                    <WhatsAppIcon />
                  </a>
                </div>
                <div className="messenger-telegram">
                  <a href="https://telegram.me/логинкомпании">
                    <TelegramIcon />
                  </a>
                </div>
                <div className="messenger-viber">
                  <a href="viber://chat?number=79023296939">
                    <PhoneInTalkIcon />
                  </a>
                </div>
              </div>
              <div className="footer-phone">
                <a href="tel:+79023296939">
                  {' '}
                  <LocalPhoneIcon /> +7(902)329-69-39
                </a>
              </div>
              <div className="footer-email">
                <EmailIcon />
                <a href="mailto:foto.k103@mail.ru">foto.k103@mail.ru</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
