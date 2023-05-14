import back from '../img/Request.png';
import donate from '../img/donate.png';
import blog from '../img/background.webp';
import bg1 from '../img/bg1.png';
import bg1flip from '../img/bg1flip.png';
import '../App.css';
import { Link } from "react-router-dom";
function Home(){
    return(
        <div className='home'>
          <img src= {bg1} style={{ width: '8rem', height: '15rem', marginTop: '5rem', marginRight: '0px', position: 'absolute'}}/>
        <div className="row">
        <div className="image">
          <img src={blog} alt="" style={{width: '100%', height: '100%'}} />
        </div>
        <div className="content">
          <h2>Organ Donation Awareness</h2>
          <p>
          Pledging your organs is a simple procedure. Just fill out the online pledge form and we will send you a donor card with your unique government registration number. All pledges are registered with the National Organ & Tissue Transplant Organisation (NOT TO). Registering as an Organ donor is merely an expression of your intent to be an Organ donor. The card that we will send you does not carry any legal weight, however, it is a great way to show everyone your intent. So keep it with you at all times and make sure you let your family and friends know about your choice. According to Indian law, it is your next of kin who will decide whether to donate your organs or not upon death. Even if you have pledged your organs, no donation will happen unless the next of kin gives their consent. Therefore, when you pledge to be an organ donor, it's very important that you discuss your wish to donate with your family. This is to enable your family to carry out your wishes in case the need arises. 
          </p>
          <button><a href="#" className="btn">Blog</a>
          </button>
        </div>
        <img src= {bg1flip} style={{ width: '8rem', height: '15rem', marginTop: '-25rem', marginLeft: '1260px', position: 'absolute'}}/>
      </div>
      <div className='organ'>
      <Link to='/donate'>
      <button className='Donate col-12-sm'>  <img src={donate} style={{width: '100%', height: '100%'}}/>    </button>
      </Link>
      <Link to='/request'>
      <button className='Request col-12-sm' ><img src={back} style={{width: '100%', height: '100%'}}/>      </button>
      </Link>
      </div>
      </div>
    )
}
export default Home;