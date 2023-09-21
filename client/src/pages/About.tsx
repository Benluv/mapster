import CurrentLocation from "../components/CurrentLocation"

const About = () => {
    return(
    <>
        <div>
            <h1>About</h1>
            <p>This is the about page</p>
            <CurrentLocation latitude={0} longitude={0} />
        </div>

    </>
    )
}

export default About