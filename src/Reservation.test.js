import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import {initializeTimes} from "./Reservation";
import BookingForm from './BookingForm';
import { BrowserRouter } from 'react-router-dom';

/*jest.mock('react-router-dom', () => ({
  ...jest.requireActual("react-router-dom"),
  initializeTimes: jest.fn(() => Promise.resolve(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])),
  //BrowserRouter: ({ children }) => <div>{children}</div>,
  timeReducer: jest.fn((state, action) => state),
  useNavigate: jest.fn(),
}));*/
const validateForm = (formData) => {
  if (!formData.date || !formData.time || !formData.guests || !formData.occasion) {
      return false;
    }
    if (formData.guests < 1 || formData.guests > 10) {
      return false;
    }
    return true;
};
describe('BookingForm', () => {
test('Renders the BookingForm heading', () => {
     render(
    <BrowserRouter>
    <BookingForm availableTime={["17:00", "18:00", "19:00"]}/>
    </BrowserRouter>);
       const labelElement = screen.getByLabelText(/Number of Guests/i);
    expect(labelElement).toBeInTheDocument();
});
})
describe("initializeTimes", () => {
    test("should return the correct initial times", async () => {
        const initialTimes = await initializeTimes();
        const expectedTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]
        expect(initialTimes).toEqual(expectedTimes);
    });
    test("should return an array of times", async() => {
        const initialTimes = await initializeTimes();
        expect (Array.isArray(initialTimes)).toBe(true);
    });
    test("should return an array of six times", async() => {
        const initialTimes = await initializeTimes();
        expect (initialTimes.length).toBe(6);
    });
});
/*
describe("timesReducer (updateTimes)", () => {
 test("should return the same state when action type is UPDATE_TIMES", () => {
    const previousState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = {type: "UPDATE_TIMES", date: "2025-02-10" };
    const newState = timeReducer(previousState, action);
    expect(newState).toEqual(previousState);
    });
 test("should throw an error when action type is UPDATE_TIMES and date is missing", () => {
    const previousState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = {type: "UPDATE_TIMES"};
    expect(() => timeReducer(previousState, action)).toThrowError();
    });
 test("should return the updated state when action type is UPDATE_TIMES and date is valid", () => {
    const previousState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = {type: "UPDATE_TIMES", date: "2025-02-10" };
    const newState = timeReducer(previousState, action);
    expect(newState).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
    });
});*/

describe('validateForm', () => {
  test('should return false for invalid form data', () => {
  const invalidFormData = {
  };
  expect (validateForm(invalidFormData)).toBe(false);
}) 
test('should return true for valid form data', () => {
    const validFormData = {
      date: "2025-02-10",
      time: "17:00",
      guests: 5,
      occasion: "Birthday"
    };
    expect(validateForm(validFormData)).toBe(true);
  });
  test('should return false for form data with invalid guest number', () => {
    const invalidFormData = {
      date: "2025-02-10",
      time: "17:00",
      guests: 15,
      occasion: "Birthday"
    };
    expect(validateForm(invalidFormData)).toBe(false);
  });
  test('should return false for form data with missing required fields', () => {
    const invalidFormData = {
      date: "2025-02-10",
      time: "17:00",
      occasion: "Birthday"
    };
    expect(validateForm(invalidFormData)).toBe(false);
  });
});
