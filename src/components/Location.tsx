import building from '../image/location/01.jpg';
import { YMaps, Map, Placemark, FullscreenControl } from 'react-yandex-maps';

export const Location = () => {
  return (
    <div className="location">
      <div className="container">
        <div className="location-title">Адрес</div>
        <div className="location-studio">
          <div className="location-left">
            <YMaps>
              <div>
                <Map
                  defaultState={{ center: [56.645876, 47.863873], zoom: 17 }}
                  width={621}
                  height={352}>
                  <FullscreenControl />
                  <Placemark geometry={[56.645876, 47.863873]} />
                </Map>
              </div>
            </YMaps>
          </div>
          <div className="location-right">
            <div className="location-right-img">
              <img src={building} alt="Вход в здание" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
