import './App.css'
import manja from "./assets/Images/manja.gif"
function App() {


  return (
    <div className="h-screen bg-gray-200 w-full flex justify-center items-center">
    <div className="w-96 h-96 p-2 m-2">
    <h1 className='text-3xl font-serif font-semibold'>I love you</h1>
    <img
        className="object-cover object-center w-full rounded-lg h-96" src={manja}
        alt="nature image"
      />
      <div className='mt-2'>
      <button className='  px-5 mr-2 rounded-md bg-white shadow-md hover:shadow-lg hover:shadow-gray-600 focus:outline-none'> <h3>Yes</h3></button>
      <button className=' mx-2 px-5 rounded-md bg-white shadow-md hover:shadow-lg hover:shadow-gray-600 focus:outline-none'> <h3>No</h3></button>
    </div>
    </div>
</div>
     
  )
}

export default App
