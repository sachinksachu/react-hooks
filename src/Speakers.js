import React, { useEffect, useState, useReducer, useCallback, useMemo } from 'react';

import { Header } from './Header';
import { Menu } from './Menu';
import SpeakerDetail from './SpeakerDetail';

import useSpeakerDataManager from './useSpeakerDataManager';

const Speakers = ({ }) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  // const [speakerList, setSpeakerList] = useState([]);
  // const [speakerList, dispatch] = useReducer(speakersReducer, []) //using useReducer insted of useState
  const {isLoading, speakerList, toggleSpeakerFavourite} = useSpeakerDataManager()

  const handleChangeSaturday = () => {
    setSpeakingSaturday(!speakingSaturday);
  };

  const handleChangeSunday = () => {
    setSpeakingSunday(!speakingSunday);
  };

  const newSpeakerList = useMemo(() => speakerList.length > 0 ?
    speakerList
      .filter(
        ({ sat, sun }) =>
          (speakingSaturday && sat) || (speakingSunday && sun),
      )
      .sort(function (a, b) {
        if (a.firstName < b.firstName) {
          return -1;
        }
        if (a.firstName > b.firstName) {
          return 1;
        }
        return 0;
      }) : null,[speakingSaturday,speakingSunday,speakerList]) // filter only when these dep. changed


  const speakerListFiltered = isLoading
    ? []
    : newSpeakerList

  const heartFavoriteHandler = useCallback((e, speakerRec) => {
    e.preventDefault();
    // const sessionId = parseInt(e.target.attributes['data-sessionid'].value); // get the ID value from attribute convert into int

    toggleSpeakerFavourite(speakerRec)
  }, []);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <Header />
      <Menu />
      <div className="container">
        <div className="btn-toolbar margintopbottom5 chekbox-bigger">
          <div className="hide">
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSaturday}
                  checked={speakingSaturday}
                />
                Saturday Speakers
              </label>
            </div>
            <div className="form-check-inline">
              <label className="form-check-label">
                <input
                  type="checkbox"
                  className="form-check-input"
                  onChange={handleChangeSunday}
                  checked={speakingSunday}
                />
                Sunday Speakers
              </label>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="card-deck">
            {speakerListFiltered ? speakerListFiltered.map(
              (speakerRec) => {
                return (
                  <SpeakerDetail
                    key={speakerRec.id}
                    speakerRec={speakerRec}
                    onHeartFavoriteHandler={heartFavoriteHandler}
                  />
                );
              },
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
