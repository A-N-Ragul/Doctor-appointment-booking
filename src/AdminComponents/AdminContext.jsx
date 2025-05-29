import { createContext, useState } from 'react';

export const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [doctors, setDoctors] = useState([]);
  const aToken = "your_token_logic_here";

  const getAllDoctors = () => {
    // logic to fetch and set doctors
  };

  return (
    <AdminContext.Provider value={{ doctors, aToken, getAllDoctors }}>
      {children}
    </AdminContext.Provider>
  );
};
