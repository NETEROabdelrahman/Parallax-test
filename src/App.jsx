import { useEffect, useRef, useState } from "react"
import Body from "./components/Body"
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const ref = useRef()

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth < 768);
    }

    window.addEventListener('resize', handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="w-full h-full">

        <Parallax style={{
          top: "0",
          left: "0"
        }} pages={5} ref={ref} >
           <div className=' mx-24 z-50'>

            <h2 className=' text-[#062059] text-[40px] leading-10 font-black text-center my-5'>
              PH1 CAN BE LIFE-THREATENING, OFTEN DUE TO COMPLICATIONS OF ESKD AND/OR SYSTEMIC OXALOSIS
              <sup className=' text-[20px]'>1,5</sup>
            </h2>
            <p className=' text-[#45464d] text-[20px] leading-8 font-light'>Once the estimated glomerular filtration rate declines to below 30-45 mL/min/1.73 m2, systemic oxalosis can occur because the kidney is unable to excrete oxalate effectively due to excess accumulation of calcium oxalate crystals.
              <sup> 5,7</sup>
            </p>
          </div>
          {isMobile ? <ParallaxLayer
            className=""
            offset={0}
            sticky={{start:0.6,end:2}}
          >
            <Body  />
          </ParallaxLayer>:<ParallaxLayer
          offset={0.3}>
            <Body />
          </ParallaxLayer>}
          
        
          {/* sticky={{start:0,end:1}} */}
          
          
          <ParallaxLayer offset={0} speed={2} className=" flex items-center justify-start -z-10">
            <img src="shard-1.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.2} speed={1.5} className=" flex items-center justify-start -z-10">
            <img src="shard-3.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.4} speed={1} className=" flex items-center justify-start -z-10">
            <img src="shard-2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={1.8} className=" flex items-center justify-start -z-10">
            <img src="shard-4.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.8} speed={2} className=" flex items-center justify-end -z-10">
            <img src="shard-1.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.7} speed={1.5} className=" flex items-center justify-end -z-10">
            <img src="shard-3.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.2} speed={2} className=" flex items-center justify-end -z-10">
            <img src="shard-2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={1.8} className=" flex items-center justify-end -z-10">
            <img src="shard-4.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={0.9} speed={0.8} className=" flex items-center justify-end -z-10">
            <img src="shard-1.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8} className=" flex items-center justify-start -z-10">
            <img src="shard-1.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={1.2} speed={1} className=" flex items-center justify-end -z-10">
            <img src="shard-2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={1.4} speed={1} className=" flex items-center justify-start -z-10">
            <img src="shard-2.png" alt="" />
          </ParallaxLayer>
          <ParallaxLayer offset={7} speed={1} className=" flex items-center">
            <div className=" h-[100vh] w-full">hello</div>
          </ParallaxLayer>
          
  
  
        
        </Parallax>
      </div>
    </>
  );
}

export default App
