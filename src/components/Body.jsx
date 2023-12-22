import { useEffect, useRef, useState } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'


const organ = ["Retina", "Teeth","Thyroid", "Heart","Kidneys", "Skin", "Bones", "Joints", "Peripheral Nerves", "Blood Vessels", "Bone Marrow", "Muscles",   ]

const mockedItems = [
    {
        id: '0',
        title: 'slide 1'
    },
    {
        id: '1',
        title: 'slide 2'
    },
    {
        id: '2',
        title: 'slide 3'
    },
    {
        id: '3',
        title: 'slide 3'
    },
    {
        id: '4',
        title: 'slide 3'
    },
    {
        id: '5',
        title: 'slide 3'
    },
    {
        id: '6',
        title: 'slide 3'
    },
    {
        id: '7',
        title: 'slide 3'
    },
    {
        id: '8',
        title: 'slide 3'
    },
    {
        id: '9',
        title: 'slide 3'
    },
    {
        id: '10',
        title: 'slide 3'
    },
    {
        id: '11',
        title: 'slide 3'
    },
]

const Body = () => {
    const [activeIndex, setActiveIndex] = useState(0)
    const [currentSlide, setCurrentSlide] = useState(mockedItems[0].id)
    const [isIntersecting, setIsIntersecting] = useState(false);

    console.log(isIntersecting)
    const targetRef = useRef(null);
    const active = (e, index) => {
        setActiveIndex(index);
    }

    
    
    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        initialActiveItem:2,
        itemsPerSlide: 3, // number of slides per view
        initialStartingPosition: 'center', // the active slide will be at the center
        items: mockedItems.map((item,index) => {
            return {
                ...item,
                renderItem: (
                    <li
                                key={index}
                                id={index}
                                className={`text-[#1f99d5] text-[16px] font-bold cursor-pointer px-8 py-2 ${activeIndex == index ? 'border-t-[#d0191f] border-t-4 borderTop text-[#d0191f]' : ''}`}
                                onClick={(e) => active(e,index)}
                            >
                                {organ[index]}
                            </li>
                )
            }
        })
    })

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
        }
    })

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsIntersecting(true);
                    } else {
                        setIsIntersecting(false);
                    }
                });
            },
            {
                 root: null,
                rootMargin: '0px',
                threshold: 0.90,
            }
        );
    
        if (targetRef.current) {
          observer.observe(targetRef.current);
        }
    
        return () => {
          if (targetRef.current) {
            observer.unobserve(targetRef.current);
          }
        };
      }, [targetRef]);
    
    useEffect(() => {
        if (isIntersecting) {
            
            window.ontouchmove = (e) => {
                if (e.deltaY > 0) {
                    if (parseInt(currentSlide) <= 12) {
                        setActiveIndex(currentSlide)
                        slideToNextItem()
                    }
                } else {
                    if (parseInt(currentSlide) >= 0) {

                        setActiveIndex(currentSlide)
                        slideToPrevItem()
                    }
                }
            } 
            window.onwheel = (e) => {
                if (e.deltaY > 0) {
                    if (parseInt(currentSlide) <= 12) {
                        console.log(currentSlide)
                        setActiveIndex(currentSlide)
                        slideToNextItem()
                    }
                } else {
                    if (parseInt(currentSlide) >= 0) {
                        console.log(currentSlide)
                        setActiveIndex(currentSlide)
                        slideToPrevItem()
                    }
                }
            } 
        }
     },[currentSlide, isIntersecting, slideToNextItem, slideToPrevItem])

    return (
        <div className=' mx-24 z-50'>
            
            
            
                    <div className=' flex  md:flex-row flex-col justify-around mt-14 max-h-[94vh] '>
                        <div ref={targetRef} className=' md:m-0 mx-auto my-10 relative'>
                            <div onClick={(e) => active(e, 0)} id='1' style={{ top: "39px", left: "147px", opacity: activeIndex == "0" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle   `}></div>
                            <div onClick={(e) => active(e, 1)} id='2' style={{ top: "69px", left: "134px", opacity: activeIndex == "1" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 2)} id='3' style={{ top: "103px", left: "133px", opacity: activeIndex == "2" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 3)} id='4' style={{ top: "157px", left: "155px", opacity: activeIndex == "3" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 4)} id='5' style={{ top: "238px", left: "167px", opacity: activeIndex == "4" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 5)} id='6' style={{ top: "316px", left: "245px", opacity: activeIndex == "5" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 6)} id='7' style={{ top: "414px", left: "184px", opacity: activeIndex == "6" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 7)} id='8' style={{ top: "422px", left: "101px", opacity: activeIndex == "7" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 8)} id='9' style={{ top: "467px", left: "103px", opacity: activeIndex == "8" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 9)} id='10' style={{ top: "620px", left: "170px", opacity: activeIndex == "9" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 10)} id='11' style={{ top: "229px", left: "51px", opacity: activeIndex == "10" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <div onClick={(e) => active(e, 11)} id='12' style={{ top: "378px", left: "98px", opacity: activeIndex == "11" ? "1" : "0" }} className={` bg-[white] rounded-full pulsating-circle `}></div>
                            <img src="/download.png" alt="" />
                        </div>
                        <div className='md:flex md:flex-row max-h-[438px] justify-center items-center gap-16 hidden'>
                            <ul className='flex flex-col max-h-[438px]  gap-8  flex-wrap'>
                                {Array.from({ length: 12 }, (_, index) => (
                                    <li
                                        key={index}
                                        id={index}
                                        className={`text-[#1f99d5] text-[16px] font-bold cursor-pointer px-8 py-2 ${activeIndex === index ? 'border-l-[#d0191f] border-l-4 borderLeft text-[#d0191f]' : ''}`}
                                        onClick={(e) => active(e, index)}
                                    >
                                        {organ[index]}
                                    </li>
                                ))}
                            </ul>
                   
                        </div>
                        <div className='flex flex-row justify-center items-center gap-16 md:hidden'>
                            <ul className='carousel flex flex-row gap-8 max-h-[438px]'>
                                {carouselFragment}
                            </ul>
                   
                        </div>
                    </div>
                
        </div>
    );
};

export default Body