import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

interface IModalContent {
  handleCloseModal: () => void;
  element: any;
}

export const ModalContent: React.FC<IModalContent> = ({ handleCloseModal, element }) => {
  const showDocumentsPhoto = () => {
    return (
      <div className="info-document">
        <div className="closeButton">
          <IconButton aria-label="close" onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className="info-document-block">
          {element.elements?.map((params: any) => {
            return (
              <>
                <div className="info-document-title">
                  <div className="info-document-title-item">{params.title}</div>
                </div>
                <div className="info-document-card">
                  <div className="info-document-img">
                    <img src={params.photo} alt={params.title} />
                  </div>
                  <div className="info-document-text">
                    <div className="price">
                      {params.price?.map((price: string) => {
                        return <div className="price-item">{price}</div>;
                      })}
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    );
  };

  const showAnother = () => {
    return (
      <div className="card">
        <div className="closeButton">
          <IconButton aria-label="close" onClick={handleCloseModal}>
            <CloseIcon />
          </IconButton>
        </div>
        {element.elements?.map((params: any) => {
          return (
            <div className="card-services">
              <div className="services-title">
                <div className="services-title-item">{params.title}</div>
              </div>
              <div className="services-price">
                <div className="price">
                  {params.price?.map((price: string) => {
                    return <div className="price-item">{price}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <div className="container">
        {element.title === 'Фото на документы' ? showDocumentsPhoto() : showAnother()}
      </div>
    </div>
  );
};
