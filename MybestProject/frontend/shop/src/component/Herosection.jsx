


import React, { useState, useEffect, useRef } from 'react';
import { IoCartSharp } from 'react-icons/io5';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'; // Import arrow icons

export const Herosection = () => {
    const [currentItem, setCurrentItem] = useState(0);
    const [touchStartX, setTouchStartX] = useState(0);
    const itemsRef = useRef(null);
    const dotsRef = useRef(null);

    // Number of items to show at once on desktop. Adjust as needed.
    const itemsPerPageDesktop = 3;

    const text1 = "Red Clay Bricks";
    const text2 = "Ventilator(Roshandan)";
    const text3 = "Sand & Aggregate";
    const text4 = "Experts Team"; // Added for more items to showcase carousel on desktop
    const text5 = "Cement Bags";
    const text6 = "Construction Soil";

    const img1 = "/bricks.jpeg";
    const img2 = "/ventilator.jpg";
    const img3 = "/solil.jpg";
    const img4 = "/slide2.jpg"; // Assuming you have these images
    const img5 = "/slide3.jpg";
    const img6 = "/slide4.jpg";

    const items = [
        { img: img1, text: text1 },
        { img: img2, text: text2 },
        { img: img3, text: text3 },
        { img: img4, text: text4 },
        { img: img5, text: text5 },
        { img: img6, text: text6 },
    ];

    const totalItems = items.length;

    useEffect(() => {
        const autoSlide = () => {
            if (itemsRef.current) {
                setCurrentItem((prev) => (prev + 1) % totalItems);
            }
        };

        const intervalId = setInterval(autoSlide, 3000);
        return () => clearInterval(intervalId);
    }, [totalItems]);

    const handleTouchStart = (event) => {
        setTouchStartX(event.touches[0].clientX);
    };

    const handleTouchMove = (event) => {
        const touchEndX = event.touches[0].clientX;
        const deltaX = touchStartX - touchEndX;

        if (Math.abs(deltaX) > 50) {
            if (deltaX > 0) {
                changeItem('left');
            } else {
                changeItem('right');
            }
            setTouchStartX(touchEndX);
        }
    };

    const changeItem = (direction) => {
        setCurrentItem(prev => {
            if (!itemsRef.current) return prev;

            let nextIndex = prev;
            if (direction === 'left') {
                nextIndex = (prev + 1) % totalItems;
            } else if (direction === 'right') {
                nextIndex = (prev - 1 + totalItems) % totalItems;
            }
            return nextIndex;
        });
    };

    const handleDotClick = (index) => {
        setCurrentItem(index);
    };

    // Calculate the transform percentage for the 'items' container
    const transformPercentage = 100 / (window.innerWidth >= 768 ? itemsPerPageDesktop : 1);
    const currentTransform = -currentItem * transformPercentage;

    // Function to get the index of the item to display at a specific position
    const getItemIndex = (index) => {
        if (totalItems === 0) return 0;
        return (index + currentItem) % totalItems;
    };

    return (
        <div
            className="
                owncontainer
                bg-gray-200
                mx-auto
                h-[280px]
                shadow-lg
                max-w-full
                overflow-hidden
                relative
                sm:max-w-[768px]
                lg:max-w-[1200px]
            "
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
        >
            <div
                className="
                    flex
                    transition-transform
                    duration-500
                    ease-in-out
                    h-full
                "
                ref={itemsRef}
                style={{ transform: `translateX(${currentTransform}%)` }}
            >
                {Array.from({ length: totalItems }).map((_, i) => {
                    const indexToShow = getItemIndex(i);
                    const item = items[indexToShow];
                    return (
                        <div
                            className={`
                                h-[285px]
                                flex-none
                                w-full
                                box-border
                                p-[20px]
                                text-center
                                bg-white
                                ${window.innerWidth >= 768 ? `sm:w-1/${itemsPerPageDesktop} lg:w-1/${itemsPerPageDesktop}` : 'sm:w-1/2 lg:w-1/3'}
                            `}
                            key={indexToShow}
                        >
                            <div
                                className="
                                    object-contain
                                    w-full
                                    h-[160px]
                                    flex items-center justify-center
                                "
                            >
                                <img
                                    src={item.img}
                                    alt={item.text}
                                    className="
                                        max-h-full
                                        w-full
                                        mx-auto
                                        rounded-[8px]
                                        object-cover
                                    "
                                />
                            </div>
                            <h3
                                className="
                                    text-[22px]
                                    text-[#ff6348]
                                    mt-[10px]
                                    font-[Verdana]
                                    tracking-[0.8px]
                                    font-bold
                                    no-underline
                                    italic
                                "
                                style={{ wordSpacing: '2px', fontVariant: 'small-caps' }}
                            >
                                {item.text}
                            </h3>
                            <IoCartSharp
                                id="herocartbtn"
                                className="
                                    text-[45px]
                                    rounded-[5px]
                                    w-full
                                    bg-[#2ed573]
                                    text-white
                                    p-[5px]
                                    cursor-pointer
                                    transition-all
                                    duration-500
                                    hover:opacity-80
                                "
                            />
                        </div>
                    );
                })}
            </div>

            {/* Navigation Arrows (Desktop Only) */}
            <button
                onClick={() => changeItem('right')}
                className="
                    hidden
                    md:block
                    absolute
                    left-0
                    top-1/2
                    -translate-y-1/2
                    bg-gray-800
                    bg-opacity-50
                    text-white
                    p-2
                    rounded-full
                    z-10
                    hover:bg-opacity-75
                    focus:outline-none
                    ml-2
                "
            >
                <IoIosArrowBack className="text-3xl" />
            </button>
            <button
                onClick={() => changeItem('left')}
                className="
                    hidden
                    md:block
                    absolute
                    right-0
                    top-1/2
                    -translate-y-1/2
                    bg-gray-800
                    bg-opacity-50
                    text-white
                    p-2
                    rounded-full
                    z-10
                    hover:bg-opacity-75
                    focus:outline-none
                    mr-2
                "
            >
                <IoIosArrowForward className="text-3xl" />
            </button>

            {/* Dots Container (Visible on Mobile) */}
            <div
                className="
                    flex
                    justify-center
                    mt-[16px]
                    w-full
                    md:hidden
                "
                ref={dotsRef}
            >
                {items.map((_, index) => (
                    <div
                        key={index}
                        className={`
                            w-[10px]
                            h-[10px]
                            bg-gray-400
                            rounded-full
                            mx-[5px]
                            cursor-pointer
                            ${index === currentItem ? 'bg-blue-500' : ''}
                        `}
                        onClick={() => handleDotClick(index)}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default Herosection;