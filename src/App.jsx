
import './App.css'
import video from "../public/11.mp4"

function App() {


  return (
    <div className='container'>
     <video src={video} controls autoPlay muted></video>
    </div>
  )
}

export default App
