import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Homenew.css";
import"../style/Booking.css";
0
function Newbooking({ setUserDetails }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (setUserDetails) {
      setUserDetails(formData); // ✅ this works ONLY if setUserDetails is passed correctly
    }
    navigate("/appointment-booking");
  };

  return (
    <div className="header__form">
      <form onSubmit={handleSubmit}>
        <h4>Register Now!!!</h4>
        <input type="text"
          placeholder="First Name"
          required
          onChange={(e) =>
            setFormData({ ...formData, firstName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Last Name"
          required
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Address"
          required
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Phone No."
          required
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />
        <button type="submit" className="btn form__btn">
          Register to start Booking
        </button>
      </form>
    </div>
  );
}

export default Newbooking;
