import {useReducer} from 'react';
import React  from 'react';
import BookingForm from './BookingForm';
import {useNavigate } from 'react-router-dom';
import {fetchAPI} from './api';
import {submitAPI} from "./api";
const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0];
  return fetchAPI(today);
};
const updateTimes = (state, action) => {
if (action.type === "UPDATE_TIMES"){
  return fetchAPI(action.date);
} else if (action.type === "SELECTED_TIME"){
  return state.filter(time => time !== action.time);
}
  return state; 
};
const  Reservation = () => {
  const [availableTime, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();
  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      dispatch({type:"SELECTED_TIME", time: formData.time});
      navigate('/confirmed-booking', {state: formData});
    } else {
      alert("There was an issue with your reservation. Please try again.")
    }
   };
  return (
  <div>
  <h1 className='reservation'>Table Reservation</h1>
  <BookingForm availableTime={availableTime} dispatch={dispatch} submitForm={submitForm}/>
  </div>
  );
}
export default Reservation;