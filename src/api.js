export const fetchAPI = (date, time = "") => {
    console.log(`Fetching available times for ${date} ${time}`)
    return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};
export const submitAPI = (formData) => {
    console.log("Submitting Reservation:", formData);
    return true;
}