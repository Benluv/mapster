import CurrentLocation from "../components/CurrentLocation"
import DefaultLayout from "../layouts/DefaultLayout"

const About = () => {
    return(
    <>
        <DefaultLayout>
            <div>
                <h1>About</h1>
                <p>This is the about page</p>
                <CurrentLocation latitude={0} longitude={0} />
            </div>
        </DefaultLayout>
    </>
    )
}

export default About