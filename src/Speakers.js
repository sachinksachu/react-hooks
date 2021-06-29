import React, { useEffect, useState, useReducer, useCallback, useMemo } from 'react';

import { Header } from './Header';
import { Menu } from './Menu';
import SpeakerData from './SpeakerData';
import SpeakerDetail from './SpeakerDetail';

import speakersReducer from './speakersReducer';

const Speakers = ({ }) => {
  const [speakingSaturday, setSpeakingSaturday] = useState(true);
  const [speakingSunday, setSpeakingSunday] = useState(true);

  // const [speakerList, setSpeakerList] = useState([]);
  const [speakerList, dispatch] = useReducer(speakersReducer, []) //using useReducer insted of useState
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);

    new Promise(function (resolve) {

      setTimeout(function () { // to delay and show loading..
        resolve();
      }, 1000);

    }).then(() => {

      setIsLoading(false) //setting loading to false

      const speakerListServerFilter = SpeakerData.filter(({ sat, sun }) => { //filtering based on sat & sun speaking
        return (speakingSaturday && sat) || (speakingSunday && sun);
      });

      //setSpeakerList(speakerListServerFilter);

      dispatch({ //using dispatch to set action type, it will invoke 'speakersReducer'
        type: 'setSpeakerList',
        data: speakerListServerFilter, // passs the filtered data & update state 'speakerList'
      });
    });

    return () => {
      console.log('cleanup');
    };
  }, []);

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

  const heartFavoriteHandler = useCallback((e, favoriteValue) => {
    e.preventDefault();
    const sessionId = parseInt(e.target.attributes['data-sessionid'].value); // get the ID value from attribute convert into int
    // setSpeakerList(
    //   speakerList.map((item) => {
    //     if (item.id === sessionId) {
    //       return { ...item, favorite: favoriteValue };
    //     }
    //     return item;
    //   }),
    // );

    dispatch({
      type: favoriteValue === true ? "favourite" : "unfavourite",
      sessionId: sessionId

    })
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
              ({ id, firstName, lastName, bio, favorite }) => {
                return (
                  <SpeakerDetail
                    key={id}
                    id={id}
                    favorite={favorite}
                    firstName={firstName}
                    lastName={lastName}
                    bio={bio}
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
