import './footer.css'
function Footer(){
    return(
        <footer className="footer">
        <div className="contain">
          <span className="text-dark">Donate Organ &copy; {new Date().getFullYear()}</span>
        </div>
        
      </footer>
    )
}
export default Footer;