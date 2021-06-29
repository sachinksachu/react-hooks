const speakersReducer = (state, action) => {

    switch (action.type) {
      case 'setSpeakerList': {
        // return action.data;
        return {...state, speakerList : action.data, isLoading : false}
      }
      case 'favourite': {
        return {...state, speakerList : updateFavorite(true) }
      }
      case 'unfavourite': {
        return {...state, speakerList : updateFavorite(false) }
      }
      default:
        return state;
    }


    function updateFavorite(favoriteValue) { //to update fav.
        return state.speakerList.map((item, index) => {
          if (item.id === action.id) {
            return { ...item, favorite: favoriteValue };
          }
          return item;
        });
      }
  };

  export default speakersReducer;