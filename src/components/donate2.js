import img from '../img/button2.png';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Donate2(){
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    donate: '',
    details: '',
    select: '',
    organs: '',
    blood: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({ ...formData, [name]: value });
    console.log(value);
  }

  const handleSubmit = async(e) =>{

    e.preventDefault();
    console.log(formData);
    
    await fetch('http://localhost:4000/donate2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then(() => { // Add arrow function here
      // alert("Please Visit Your Nearest Hostpital for checkup");
      navigate('/home')
      console.log("Data Submitted");
    }).catch(error => {
      console.error('Error:', error);
    });
  }   
   return(
    <form className="form" onSubmit={handleSubmit}>
  <div className="row">
  <div className="col-md-12">
          <fieldset style={{padding: '5px'}}>
            <p>Once my death has been confirmed and the death certification has been released by a physician, I hereby give permission to donate my organs and tissues:</p>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="donate" id="allOrgan" value="allOrgan" checked={formData.donate === 'allOrgan'} onChange={handleChange} required />
              <label htmlFor="allOrgan" className="form-check-label">all my organs and tissues</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="donate" id="specificOrgan" value="specificOrgan" checked={formData.donate === 'specificOrgan'} onChange={handleChange} required />
              <label htmlFor="specificOrgan" className="form-check-label">specific organs and/or tissues</label>
            </div>

            <div className="form-group">
              <label htmlFor="details">What organ or tissue do you want to donate? Please write details below:</label>
              <textarea className="form-control" id="details" name="details" rows="6" placeholder="Write details" value={formData.details} onChange={handleChange}></textarea>
            </div>
          </fieldset>
        </div>

    
        <div className="col-md-12">
          <fieldset style={{padding: '5px'}}>
            <p>I authorize you to use my organs/tissues for:</p>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="select" id="research" value="research" checked={formData.select === 'research'} onChange={handleChange} required />
              <label htmlFor="research" className="form-check-label">research</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="select" id="transplant" value="transplant" checked={formData.select === 'transplant'} onChange={handleChange} required />
              <label htmlFor="transplant" className="form-check-label">transplant</label>
            </div>
            <div className="form-check">
              <input type="radio" className="form-check-input" name="select" id="researchTransplant" value="researchTransplant" checked={formData.select === 'researchTransplant'} onChange={handleChange} required />
              <label htmlFor="researchTransplant" className="form-check-label">research &amp; transplant</label>
            </div>  

        <div className="form-group">
          <label htmlFor="organs">Organ:</label>
          <select className="form-control" id="organs" name="organs" value={formData.organs} onChange={handleChange} required>
            <option value="">None</option>
            <option value="Heart">Heart</option>
            <option value="Liver">Liver</option>
            <option value="Eyes">Eyes</option>
            <option value="Kidney">Kidney</option>
            <option value="Lungs">Lungs</option>
            <option value="Pancreas">Pancreas</option>
            <option value="Small Bowel">Small Bowel</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="blood">Blood Group:</label>
          <select className="form-control" id="blood" name="blood" value={formData.blood} onChange={handleChange} required>
            <option value="">None</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
      </div>
    </fieldset>
    <br/>
    <center> </center>
    <div className="text-center" style={{color: 'white'}}>
          <button className="btn btn-primary" style={{width: '8rem', color: 'black', fontFamily: 'sans-serif', backgroundColor: 'whitesmoke', marginBottom:'2rem'}} ><img src={img} width='40rem'/>Next</button>
        </div>
    </div>
    </div>
    
    </form>
   )
}

export default Donate2;