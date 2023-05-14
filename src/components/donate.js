import { Navigate } from 'react-router-dom';
import './donate.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Donate() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    dob: '',
    gender: '',
    height: '',
    weight: '',
    aadhaar: '',
    address: '',
    address2: '',
    address3: '',
    pincode: '',
    city: '',
    state: '',
  }); 
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log(event.target.value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async(e) =>{

    e.preventDefault();
    console.log(formData);
    
    await fetch('http://localhost:4000/donate1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(() => { // Add arrow function here
      // navigate('/donate2');
      console.log("Data Submitted");
    }).catch(error => {
      console.error('Error:', error);
    });
    navigate('/donate2');
  }    
    return (
        <div className="container">
        <form onSubmit={handleSubmit} className='form'>
          <fieldset className='fieldset'>
           <center><legend>Personal Details</legend></center>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">First name<span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="firstname" value={formData.firstname} onChange={handleInputChange} required />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last name<span className="text-danger">*</span></label>
                <input type="text" className="form-control" name="lastname" value={formData.lastname} onChange={handleInputChange} required/>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Phone<span className="text-danger">*</span></label>
                <input type="tel" className="form-control" id="phoneInput" name="phone" value={formData.phone} onChange={handleInputChange} maxlength="10" required/>
              </div>
              <div className="col-md-6">
                <label className="form-label">E-mail<span className="text-danger">*</span></label>
                <input type="email" className="form-control" name="email"  value={formData.email} onChange={handleInputChange} required/>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">D.O.B<span className="text-danger">*</span></label>
                <input type="date" className="form-control" name="dob"  value={formData.dob} onChange={handleInputChange}required/>
              </div>
              <div className="col-md-6">
                <label className="form-label">Gender<span className="text-danger">*</span></label>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="gender"   onChange={handleInputChange} value="male" id="maleRadio" required/>
                  <label className="form-check-label" for="maleRadio">Male</label>
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="gender"  onChange={handleInputChange}value="female" id="femaleRadio" required/>
                  <label className="form-check-label" for="femaleRadio">Female</label>
                </div>
                <div className="form-check">
                  <input type="radio" className="form-check-input" name="gender"   onChange={handleInputChange}value="other" id="otherRadio" required/>
                  <label className="form-check-label" for="otherRadio">Other</label>
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Height<span className="text-danger">*</span></label>
                <input type="number" className="form-control" name="height"  value={formData.height} onChange={handleInputChange}placeholder="in cm" required/>
              </div>
              <div className="col-md-6">
                <label className="form-label">Weight<span className="text-danger">*</span></label>
                <input type="number" className="form-control" name="weight" value={formData.weight} onChange={handleInputChange} placeholder="in kg" required/>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <label className="form-label">Aadhaar card/Uid<span className="text-danger">*</span></label>
                <input type="tel" className="form-control" name="aadhaar" value={formData.aadhaar} onChange={handleInputChange} maxlength="12" required/>
              </div>
            </div>
        
  
            <div className="row mb-3">
            <legend>Address:</legend>
            <div className="col-md-6">
            <label for="addLine1">House no./Floor<span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="addLine1" name="address"  value={formData.address} onChange={handleInputChange}placeholder="House no./Floor" required/>
            </div>
            <div className="col-md-6">
              <label for="addLine2">Address lane 1<span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="addLine2" name="address2"  value={formData.address2} onChange={handleInputChange}placeholder="Address lane 1" required/>
              </div>
            </div>
            

            <div className="row mb-3">
            <div className="col-md-6">
            <label for="addLine3">Address lane 2</label>
              <input type="text" className="form-control" id="addLine3" name="address3"  value={formData.address3} onChange={handleInputChange}placeholder="Address lane 2" required/>
              </div>

              <div className="col-md-6">
            <label for="Pin_code">Pin code<span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="Pin_code" name="pincode"  value={formData.pincode} onChange={handleInputChange}placeholder="Pin code" maxlength="6" required/>
                  </div>
            
            </div>

            <div className="row mb-3">
            <div className="col-md-6">
            <label for="city">City<span className="text-danger">*</span></label>
              <input type="text" className="form-control" id="city" name="city"  value={formData.city} onChange={handleInputChange}placeholder="City" required/>
                  </div>
                  <div className="col-md-6">
                <label for="state">State<span className="text-danger">*</span></label>
                <select className="form-control" id="state" name="state" required onChange={handleInputChange}>
                <option value="">Select</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
              </select>
                  </div>
            </div>
            <br/>
        <div className="text-center">
          <button className="btn btn-primary" >Next</button>
        </div>
      </fieldset>
      </form>
        </div>
      
        )
}
export default Donate;