import React, { useState, useEffect } from "react";
import './App.css';
function ErrorMessage({message}) {
    if (!message) return null;
    return (
        <div 
          style={{color: 'red', padding:'7px', border: '1px solid red', fontSize:'small'}}
          aria-errormessage="Error: please select a date today or in the future.">
            {message}
        </div>
    )
}
function BookingForm({availableTime, reservedTime, dispatch, submitForm, updateAvailableTime, selectedDate, setSelectedDate}) {
    const [resDate, setResDate] = useState(selectedDate);
    const [resTime, setResTime] = useState('');
    const [numGuests, setNumGuests] = useState('1');
    const [occasion, setOccasion] = useState('Birthday');
    const [dateError, setDateError] = useState(null);
    useEffect(() => {
        if (availableTime.length > 0){
            setResTime(availableTime[0]);
        }
    }, [availableTime]);
    const handleDateChange = (e) => {
        const selectedDate = e.target.value;
        const today = new Date().toISOString().split('T')[0];
        setResDate(selectedDate);
        setSelectedDate(selectedDate);
        console.log({today});
        if (selectedDate < today){
            setDateError('Please select a date today or in the future.');
        } else {
          setDateError(null);
          updateAvailableTime(selectedDate);
        }
    };
    const handleTimeChange = (e) => {
    setResTime(e.target.value);
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
            required aria-required="true"
            aria-label="Choose a date"
            />
            <label htmlFor="Time">Choose Time</label>
            <select 
            value={resTime} 
            onChange={handleTimeChange} 
            required aria-required="true"
            aria-label="Choose time">
              {availableTime.map((time, index) => (
                <option key={index} value={time} >
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
              required aria-required="true"
              aria-label="Number of Guests: must be min 1, max 10"/>
            <label htmlFor="occasion">Occasion</label>
            <select 
            value={occasion} 
            onChange={(e) => setOccasion(e.target.value)} 
            required aria-required="true"
            aria-label="Occasion">
                <option value="Birthday" aria-label="Birthday">Birthday</option>
                <option value="Anniversary" aria-label="Anniversary">Anniversary</option>
                <option value="Other/Just Fun" aria-label="Other/just fun">Other/Just Fun</option>
            </select>
            <ErrorMessage message={dateError}></ErrorMessage>
            <button 
            type="submit" 
            disabled={dateError!== null || !resDate}
            className={dateError || !resDate ? 'disabled-button' : 'enabled-button'}
            aria-label="Reserve a table"
            >Reserve a Table</button>
        </form>
    </section>
    );
}
export default BookingForm;