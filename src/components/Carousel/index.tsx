"use client"

import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Carousel = ({ data }: { data: { image: string }[] }) => {
    // State and Ref initialization
    const [currentImg, setCurrentImg] = useState(0)
    const [carouselSize, setCarouselSize] = useState({ width: 6720, height: 4480 })
    const carouselRef = useRef(null)

    // useEffect to get the initial carousel size
    useEffect(() => {
        let elem = carouselRef.current as unknown as HTMLDivElement
        let { width, height } = elem.getBoundingClientRect()
        if (carouselRef.current) {
            setCarouselSize({
                width,
                height,
            })
        }
    }, [])

    return (
        <div>
            {/* Carousel container */}
            <div className='w-400 h-100 rounded-md overflow-hidden relative'>
                {/* Image container */}
                <div
                    ref={carouselRef}
                    style={{
                        left: -currentImg * carouselSize.width
                    }}
                    className='w-full h-full absolute flex transition-all duration-300'
                >
                    {/* Map through data to render images */}
                    {data.map((v, i) => (
                        <div key={i} className='relative shrink-0 w-full h-full'>
                            <Image
                                className='pointer-events-none'
                                alt={`carousel-image-${i}`}
                                fill
                                src={`/images/slider/${v.image}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
            {/* Navigation buttons */}
            <div className='flex justify-center mt-3'>
                <button
                    disabled={currentImg === 0}
                    onClick={() => setCurrentImg(prev => prev - 1)}
                    className={`carousel-nav-btn ${currentImg === 0 && 'opacity-50'}`}
                >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 19l-7-7 7-7' />
                    </svg>
                </button>
                <button
                    disabled={currentImg === data.length - 1}
                    onClick={() => setCurrentImg(prev => prev + 1)}
                    className={`carousel-nav-btn ${currentImg === data.length - 1 && 'opacity-50'}`}
                >
                    <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M9 5l7 7-7 7' />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Carousel