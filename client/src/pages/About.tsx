import CurrentLocation from "../components/CurrentLocation"
import NavBar from "../components/NavBar"

const About = () => {
const links = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' }
  ]

    return(
    <>
        <NavBar links={links}/>
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            <CurrentLocation latitude={0} longitude={0} />
        </div>

    </>
    )
}

export default About