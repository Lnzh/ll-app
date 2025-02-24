import React, { useEffect } from "react";
import './App.css';
import { useState } from "react";

function BookingForm({availableTime, dispatch, submitForm}) {
    const [resDate, setResDate] = useState('');
    const [resTime, setResTime] = useState('');
    const [numGuests, setNumGuests] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');
    useEffect(() => {
        if (availableTime.length > 0){
            setResTime(availableTime[0]);
        }
    }, [availableTime]);
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        setResDate(selectedDate);
       // updateTimes(selectedDate);
        dispatch({type: "UPDATE_TIMES", date: selectedDate});
        setResTime(availableTime[0] || "17:00");
    };
    const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setResTime(selectedTime);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    const formData = {
        date: resDate,
        time: resTime,
        guests: numGuests,
        occasion: occasion,
    };
    submitForm(formData);
};
    return(
    <section className="form-section">
        <form onSubmit={handleSubmit}>
            <label htmlFor="resDate">Choose Date</label>
            <input
            type="date"
            value={resDate}
            onChange={handleDateChange}
            />
            <label htmlFor="Time">Choose Time</label>
            <select value={resTime} onChange={handleTimeChange}>
              {availableTime.map((time, index) => (
                <option key={index} value={time}>
                    {time}
                </option>
              ))}
            </select>
            <label htmlFor="numGuests">Number of Guests</label>
            <input
              type="number"
              value={numGuests}
              onChange={(e) => setNumGuests(e.target.value)}
              placeholder="1"
              min="1"
              max="10"
              required/>
            <label htmlFor="occasion">Occasion</label>
            <select value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Other/Just Fun">Other/Just Fun</option>
            </select>
            <button type="submit">Reserve a Table</button>
        </form>
    </section>
    );
}
export default BookingForm;