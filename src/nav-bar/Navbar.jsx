import './Navbar.css'
import logoSvg from "../assets/E-Clinicome Logo-Light.svg"


const Yet2do = ()=> alert("Needs to be worked on!")
const App2do = ()=> alert("Appointment App not developed yet!")

function Navbar() {
    return (
        <div className='Navbar'>
            <NavLogo/>
            <NavOptions/>
            <NavFunctions/>
        </div>
    )
}

function NavLogo() {
    return (
        <a href=""> <img src={logoSvg} alt="" className='NavLogo' /> </a>
    )
}

function NavOptions() {
    return (
        <div className='NavOptions'>
            <TestsOffered/>
            <AntenatalGenetics/>
            <CancerGenetics/>
            <AboutUs/>
        </div>
    )
}

const TestsOffered = () => {
    return (
        <div className='dropDown'>
            <button className='TestsOffered' >
                Tests Offered <i className="fa-solid fa-caret-down"></i>
            </button>
            <div className='dropDownContent'>
                <a href="" onClick={Yet2do}> Test Placeholder #1 </a>
                <a href="" onClick={Yet2do}> Test Placeholder #2 </a>
                <a href="" onClick={Yet2do}> Test Placeholder #3 </a>
                <a href="" onClick={Yet2do}> Test Placeholder #4 </a>
            </div>
        </div>
    )
}
const AntenatalGenetics = () => <a href="" onClick={Yet2do}> <div className='AntenatalGenetics'>Antenatal Genetics</div> </a>
const CancerGenetics = () => <a href="" onClick={Yet2do}> <div className='CancerGenetics'>Cancer Genetics</div> </a>
const AboutUs = () => <a href="" onClick={Yet2do}> <div className='AboutUs'>About Us</div> </a>

function NavFunctions() {
    return (
        <div className='NavFunctions'>
            <NavSeparator/>
            <Appointment/>
            <NavSeparator/>
            <Signin/>
        </div>
    )
}

const NavSeparator = () => <div className='NavSeparator'> </div>

const Appointment = () => <a href="" onClick={App2do}> <i className="fa-regular fa-calendar-days"></i> <div className='Appointment'>Schedule Appointment</div> </a>
const Signin = () => {
    return (
        <div className='dropDown'>
            <button className='Signin'>
                <i className="fa-solid fa-arrow-right-to-bracket"></i>
                {/* <div className='Signin'>Login</div> */}
                <div>Login</div>
            </button>
            <div className='dropDownContent'>
                <input type="text" placeholder="Enter Username"></input>
                <input type="password" placeholder="Enter Password"></input>
                <button onClick={Yet2do}>LOGIN</button>
            </div>
        </div>
    )
}

export default Navbar
