import speakersReducer from "./speakersReducer";
import speakerData from "./SpeakerData";
import { useEffect, useReducer } from "react";

const useSpeakerDatamanager = () => {
const [{ isLoading, speakerList }, dispatch] = useReducer(speakersReducer, {
    isLoading: true,
    speakerList: []
}) //useReducer(method,initialValue)

useEffect(() => {
    new Promise(function (resolve) {

        setTimeout(function () { // to delay and show loading..
            resolve();
        }, 1000);

    }).then(() => {

        dispatch({ //using dispatch to set action type, it will invoke 'speakersReducer'
            type: 'setSpeakerList',
            data: speakerData, // passs the filtered data & update state 'speakerList'
        });
    });

    return () => {
        console.log('cleanup');
    };
}, []);

return {isLoading, speakerList, dispatch}

}

export default useSpeakerDatamanager;