import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './landingPage.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function LandingPage() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate animation loading duration (3 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="preloader-container">
        <DotLottieReact
          src="https://lottie.host/043bca10-f413-41e4-aee4-3839239056ec/TZcULRPfUE.lottie"
          loop
          autoplay
          
          style={{
            width: "80%",
            maxWidth: "450px",
            height: "50%",
          }}
        />
      </div>
    );
  }

  return (
    <div className="landingPage-container fade-in">
      <h2>Hello there, <br /> I am a frontend Developer</h2>
      <DotLottieReact
        src="https://lottie.host/043bca10-f413-41e4-aee4-3839239056ec/TZcULRPfUE.lottie"
        loop
        autoplay
        style={{
          width: "100%",
          height: "50%",
          maxWidth: "450px",
        }}
      />
      <button className="landingPage-btn" onClick={() => navigate('/home')}>
        Learn More
      </button>
    </div>
  );
}

export default LandingPage;
