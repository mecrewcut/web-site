import React, { useState } from 'react';
import photo1 from '../image/services/01_5.png';
import photo2 from '../image/services/02.png';
import photo3 from '../image/services/03.png';
import photo4 from '../image/services/04_1.png';
import photo5 from '../image/services/05.png';
import photo6 from '../image/services/06_2.png';
import photo7 from '../image/services/07.png';
import photo8 from '../image/services/08.png';
import photo9 from '../image/services/09_5.png';
import passport from '../image/info/photo-document/35x45.jpg';
import visa from '../image/info/photo-document/visa.jpg';
import foto23 from '../image/info/photo-document/2x3cm.jpg';
import foto34 from '../image/info/photo-document/30x40.jpg';
import foto45 from '../image/info/photo-document/40x50.jpg';
import foto912 from '../image/info/photo-document/9x12.jpg';
import { Modal } from '@material-ui/core';
import { ModalContent } from './ModalContent';
import { makeStyles, createStyles } from '@material-ui/core/styles';

export type Elements = {
  title: string;
  price: string[];
  photo?: string;
}[];

type Services = {
  title: string;
  photo: string;
  elements: Elements;
}[];

export const Services = () => {
  const styles = useSarviceStyles();

  const services: Services = [
    {
      title: 'Фото на документы',
      photo: photo1,
      elements: [
        {
          title: 'Фото на паспорт',
          price: ['2 шт - 200 р', '3 шт - 220 р', ' 4 шт - 240 р'],
          photo: passport,
        },
        {
          title: 'Фото на физу',
          price: ['2 шт - 220 р', '3 шт - 240 р', '4 шт - 260 р'],
          photo: visa,
        },
      ],
    },
    {
      title: 'Ксерокс / сканер',
      photo: photo2,
      elements: [
        {
          title: 'Фото 10 х 15',
          price: ['10 р / лист', '8 р / лист (от 100 листов)'],
        },
        {
          title: 'Фото 13 х 18',
          price: ['15 р / лист'],
        },
      ],
    },
    {
      title: 'ЧБ и цветная печать',
      photo: photo3,
      elements: [],
    },
    {
      title: 'Печать фотографий',
      photo: photo4,
      elements: [],
    },
    {
      title: 'Фотоуслуги',
      photo: photo5,
      elements: [],
    },
    {
      title: 'Сублимация',
      photo: photo6,
      elements: [],
    },
    {
      title: 'Печати, штампы, факсимиле',
      photo: photo7,
      elements: [],
    },
    {
      title: 'Фото на холсте',
      photo: photo8,
      elements: [],
    },
    {
      title: 'Фотокерамика',
      photo: photo9,
      elements: [],
    },
  ];
  const [isOpenModal, setIsOpenModal] = useState({});

  const handleCloseModal = () => {
    setIsOpenModal({});
  };

  return (
    <div className="services">
      <div className="container">
        <div className="services-title">Наши услуги</div>
        <div className="services-card-main">
          {services.map((element, key) => {
            return (
              <div className="services-card" onClick={() => setIsOpenModal(element)} key={key}>
                <div className="services-card-item">
                  <div className="services-card-item-img">
                    <img src={element.photo} alt={element.title} />
                  </div>
                  <div className="services-card-item-title">{element.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={styles.modal}
          onClose={handleCloseModal}
          open={Object.values(isOpenModal).length !== 0}>
          <ModalContent handleCloseModal={handleCloseModal} element={isOpenModal} />
        </Modal>
      }
    </div>
  );
};

const useSarviceStyles = makeStyles(() =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }),
);
