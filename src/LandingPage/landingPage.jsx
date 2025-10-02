import { useNavigate } from 'react-router-dom'
import './landingPage.css'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function LandingPage() {
  const navigate = useNavigate()
  return (
    <div className='landingPage-container'>
      <h2>Hello There, <br/> I am a frontend Developer</h2>
      <DotLottieReact src="https://lottie.host/043bca10-f413-41e4-aee4-3839239056ec/TZcULRPfUE.lottie" loop autoplay style={{ width: "100%", height: "50%", maxWidth: "450px", zIndex: -1 }}/>
      <button className='landingPage-btn' onClick={()=> navigate('/home')}>Learn More</button>  
    </div>
  )
}

export default LandingPage
