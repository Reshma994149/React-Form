import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [showPwd, setShowPwd] = useState(false);

  const countries = ["India", "USA", "UK", "Canada", "Australia"];

  const [data, setData] = useState({
    fname: "",
    lname: "",
    username: "",
    email: "",
    password: "",
    countryCode: "+91",
    phone: "",
    country: "",
    city: "",
    pan: "",
    aadhaar: ""
  });

  const errors = {
    fname: !data.fname,
    lname: !data.lname,
    username: !data.username,
    email: !/^\S+@\S+\.\S+$/.test(data.email),
    password: data.password.length < 6,
    phone: data.phone.length !== 10,
    country: !data.country,
    city: !data.city,
    pan: !/^[A-Z]{5}[0-9]{4}[A-Z]$/.test(data.pan),
    aadhaar: data.aadhaar.length !== 12
  };

  const isValid = !Object.values(errors).includes(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) navigate("/details", { state: data });
  };

  return (
    <form className="card" onSubmit={handleSubmit}>
      <h2>Registration Form</h2>

      <input className={errors.fname ? "input error" : "input"} name="fname" placeholder="First Name" onChange={handleChange} />
      <input className={errors.lname ? "input error" : "input"} name="lname" placeholder="Last Name" onChange={handleChange} />
      <input className={errors.username ? "input error" : "input"} name="username" placeholder="Username" onChange={handleChange} />
      <input className={errors.email ? "input error" : "input"} name="email" placeholder="Email" onChange={handleChange} />

      <div className="row">
        <input
          type={showPwd ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className={errors.password ? "input error" : "input"}
        />
        <button type="button" className="eye" onClick={() => setShowPwd(!showPwd)}>👁</button>
      </div>

      <div className="row">
        <select name="countryCode" onChange={handleChange} className="input">
          <option value="+91">🇮🇳 +91</option>
          <option value="+1">🇺🇸 +1</option>
          <option value="+44">🇬🇧 +44</option>
          <option value="+61">🇦🇺 +61</option>
        </select>

        <input className={errors.phone ? "input error" : "input"} name="phone" placeholder="Phone Number" onChange={handleChange} />
      </div>

      <select
        name="country"
        onChange={handleChange}
        className={errors.country ? "input error" : "input"}
      >
        <option value="">Select Country</option>
        {countries.map(c => <option key={c}>{c}</option>)}
      </select>

      <input className={errors.city ? "input error" : "input"} name="city" placeholder="City" onChange={handleChange} />
      <input className={errors.pan ? "input error" : "input"} name="pan" placeholder="PAN (ABCDE1234F)" onChange={handleChange} />
      <input className={errors.aadhaar ? "input error" : "input"} name="aadhaar" placeholder="Aadhaar (12 digits)" onChange={handleChange} />

      <button disabled={!isValid}>Submit</button>
    </form>
  );
}

export default Form;
