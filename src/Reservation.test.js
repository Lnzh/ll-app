import { render, screen } from "@testing-library/react";
import {initializeTimes, timeReducer} from ".Reservation.js"
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Number of Guests");
    expect(headingElement).toBeInTheDocument();
})

describe("initializeTimes", () => {
    test("should return the correct initial times", () => {
        const initialTimes = initializeTimes();
        expect(initialTimes).toEqual(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"])
    });
});
describe("timesReducer (updateTimes)", () => {
 test("should return the same state when action type is UPDATE_TIMES", () => {
 const previousState = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
 const action = {type: "UPDATE_TIMES", date: "2025-02-01" };
 const newState = timeReducer(previousState, action);
 expect(newState).toEqual(previousState);
 });
});