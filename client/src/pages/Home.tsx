import CountComponent from '../components/Count'
import DefaultLayout from '../layouts/DefaultLayout'

export default function Home() {

  return (
    <>
      <DefaultLayout>
        <div className="container mx-auto bg-gray-200 rounded-xl shadow border p-8 m-10">
          <p className="text-3xl text-gray-700 font-bold mb-5">
            Welcome!
          </p>
          <p className="text-gray-500 text-lg">
            React and Tailwind CSS in action
          </p>
        </div>
        <CountComponent />
      </DefaultLayout>
    </>
  )
}
