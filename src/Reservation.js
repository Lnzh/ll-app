import {useReducer, useEffect} from 'react';
import React  from 'react';
import BookingForm from './BookingForm';
import {useNavigate } from 'react-router-dom';
import {fetchAPI} from './api';
import {submitAPI} from "./api";

export const initializeTimes = async () => {
  const today = new Date().toISOString().split("T")[0];
  return await fetchAPI(today); 
};

const updateTimes = (state, action) => {
if (action.type === "UPDATE_TIMES"){
  return action.times;
} else if (action.type === "SELECTED_TIME"){
  return state.filter(time => time !== action.time);
}
  return state; 
};
const  Reservation = () => {
  const [availableTime, dispatch] = useReducer(updateTimes, []);
  const [reservedTime,  setReservedTime] = React.useState({});
  const [selectedDate, setSelectedDate] = React.useState(new Date().toISOString().split('T')[0]);
  const navigate = useNavigate();

  useEffect(() => {
    initializeTimes().then(times => {
      dispatch({ type: 'UPDATE_TIMES', times });
    });
  }, []);

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      const newReservedTime = { ...reservedTime };
      if (newReservedTime[formData.date]) {
        newReservedTime[formData.date][formData.time] = true;
      } else {
        newReservedTime[formData.date] = { [formData.time]: true };
      }
      setReservedTime(newReservedTime);
      dispatch({type:"SELECTED_TIME", time: formData.time });
      navigate('/confirmed-booking', {state: formData});
    } else {
      alert("There was an issue with your reservation. Please try again.")
    }
   };

   const updateAvailableTime = async (date) => {
    try {
      const times = await fetchAPI(date); 
      const newAvailableTime = times.filter(
        (time) => !reservedTime[date]?.[time]
      );
      dispatch({ type: "UPDATE_TIMES", times: newAvailableTime });
    } catch (error) {
      console.error("Failed to update available times:", error);
      dispatch({ type: "UPDATE_TIMES", times: [] });
    }
  };
   return (
  <div>
  <h1 className='reservation'>Table Reservation</h1>
  <BookingForm
  availableTime={availableTime}
  reservedTime={reservedTime}
  dispatch={dispatch}
  submitForm={submitForm}
  updateAvailableTime={updateAvailableTime}
  selectedDate={selectedDate}
  setSelectedDate={setSelectedDate}/>
  </div>
  );
}
export default Reservation;