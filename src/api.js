
export const fetchAPI = (date, time = "") => {
    console.log(`Fetching available times for ${date} ${time}`);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);
      }, 500); 
    });
  };
export const submitAPI = (formData) => {
    console.log("Submitting Reservation:", formData);
    return true;
}