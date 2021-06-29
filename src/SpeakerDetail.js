import ImageToggleOnScroll from './ImageToggleOnScroll';
import React from 'react';

const SpeakerDetail =  ({
  speakerRec,
  onHeartFavoriteHandler,
}) => {

  const {id, firstName, lastName, favorite} = speakerRec;
  return (

    
    <div className="card col-4 cardmin">

      <ImageToggleOnScroll
        className="card-img-top"
        primaryImg={`/static/speakers/bw/Speaker-${id}.jpg`}
        secondaryImg={`/static/speakers/Speaker-${id}.jpg`}
        alt={`${firstName}  ${lastName}`}
      />
      
      <div className="card-body">
        <h4 className="card-title">
          <button
              
            className={favorite ? 'heartredbutton' : 'heartdarkbutton'}
            onClick={(e) => {
              onHeartFavoriteHandler(e, speakerRec);
            }}
          />
          <span>
            {firstName} {lastName}
          </span>
        </h4>
        
      </div>
    </div>
  );
};

export default React.memo(SpeakerDetail); //wrapping the component inside memo,  so that it caches / memoized version of speaker detail to the calling component
