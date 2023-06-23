import React from 'react';
import './expandYourBusiness.css';
// import GrowGraphic from '/src/assets/grow-graphic-red.png';
import Graphic1 from '/src/assets/graphic-red1.png'

export default function ExpandYourBusiness() {
    return (
        <div className='expand-main h-[93vh] bg-white w-[100%] flex items-center justify-center'>
            {/* ------------------------------ SHAPE DIVIDER --------------------- */}
            <div className="custom-shape-divider-bottom-1687493914">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" className="shape-fill"></path>
                </svg>
            </div>
            {/* ------------------------------ SHAPE DIVIDER --------------------- */}
            <div className="expand-content bg-white-gray h-[80%] w-[80%] flex items-center rounded-2xl">
                <div className="left-side w-[50%] p-[30px] flex flex-col justify-evenly items-center h-[80%]">
                    <h1 className='title-about-expand text-[225%] font-semibold uppercase text-text-red-bold text-center'>What is Lorem? I dont know, and You?</h1>
                    <p className='text-about-expand text-text-red text-[120%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas in perspiciatis pariatur odio officiis quidem, id repellat neque quaerat, cumque autem minima? Facilis, magni incidunt in libero velit similique eum?</p>
                    <div className="button-saiba-mais w-[100%] flex justify-end">
                        <button className='bg-red-wine px-[23px] py-[7px] text-white-gray font-[400] rounded text-[120%] cursor-pointer'>Lorem ipsum</button>
                    </div>
                </div>
                <div className="right-side w-[50%] h-[80%] flex items-center justify-center">
                    <img src={Graphic1} alt="Gráfico Subindo" className='w-[400px]' />
                </div>
            </div>
        </div>
    );
}
