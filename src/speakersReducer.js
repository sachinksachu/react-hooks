const speakersReducer = (state, action) => {

    switch (action.type) {
      case 'setSpeakerList': {
        return action.data;
      }
      case 'favourite': {
        return updateFavorite(true);
      }
      case 'unfavourite': {
        return updateFavorite(false);
      }
      default:
        return state;
    }


    function updateFavorite(favoriteValue) { //to update fav.
        return state.map((item, index) => {
          if (item.id === action.sessionId) {
            return { ...item, favorite: favoriteValue };
          }
          return item;
        });
      }
  };

  export default speakersReducer;