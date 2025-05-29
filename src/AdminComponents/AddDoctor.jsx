import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import Sidebar from "./Sidebar";
import { AdminAssets } from "../AdminAssets/assets";
import '../styles/AddDoctor.css';

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');  
  const [experience, setExperience] = useState('1 Year');
  const [fees, setFees] = useState('');
  const [degree, setDegree] = useState('');
  const [address1, setAddress1] = useState('');
  const [address2, setAddress2] = useState('');
  const [about, setAbout] = useState('');
  const [speciality, setSpeciality] = useState('General physician');

  return (
    <div>
    <div>
      <AdminNavbar />
      <div className='flex items-start bg-blue-50 min-h-screen'>
        <Sidebar />
        <div className="form-container">
          <form className="add-doctor-form">
            <h2 className="form-title">Add Doctor</h2>
            <div className="form-box">
              <div className="image-upload">
                <label htmlFor="doc-img">
                  <img className="upload-preview" src={docImg ? URL.createObjectURL(docImg) : AdminAssets.upload_area} alt="Upload" />
                </label>
                <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id="doc-img" hidden />
                <p className="upload-label">Upload Doctor Picture</p>
              </div>

              <div className="form-sections">
                <div className="form-section">
                  <div className="form-group">
                    <label>Doctor Name</label>
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" placeholder="Name" required />
                  </div>

                  <div className="form-group">
                    <label>Doctor Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="Email" required />
                  </div>

                  <div className="form-group">
                    <label>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" required />
                  </div>

                  <div className="form-group">
                    <label>Experience</label>
                    <select onChange={(e) => setExperience(e.target.value)} value={experience}>
                      {[...Array(10)].map((_, i) => (
                        <option key={i + 1} value={`${i + 1} Year`}>{i + 1} Year</option>
                      ))}
                      <option value="More than 10">More than 10 Year</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Fees</label>
                    <input onChange={(e) => setFees(e.target.value)} value={fees} type="number" placeholder="Fees" required />
                  </div>
                </div>

                <div className="form-section">
                  <div className="form-group">
                    <label>Speciality</label>
                    <select onChange={(e) => setSpeciality(e.target.value)} value={speciality}>
                      <option value="General physician">General physician</option>
                      <option value="Gynecologist">Gynecologist</option>
                      <option value="Dermatologist">Dermatologist</option>
                      <option value="Pediatricians">Pediatricians</option>
                      <option value="Neurologist">Neurologist</option>
                      <option value="Gastroenterologist">Gastroenterologist</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Education</label>
                    <input onChange={(e) => setDegree(e.target.value)} value={degree} type="text" placeholder="Education" required />
                  </div>

                  <div className="form-group">
                    <label>Address</label>
                    <input onChange={(e) => setAddress1(e.target.value)} value={address1} type="text" placeholder="Address 1" required />
                    <input onChange={(e) => setAddress2(e.target.value)} value={address2} type="text" placeholder="Address 2" required />
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label>About Doctor</label>
                <textarea onChange={(e) => setAbout(e.target.value)} value={about} rows={4} placeholder="About doctor" required></textarea>
              </div>

              <button type="submit" className="submit-btn">Add Doctor</button>
            </div>
          </form>
        </div>
      </div>
  </div>
  </div>
  );
};

export default AddDoctor;
