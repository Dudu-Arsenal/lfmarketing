import React from 'react';
import './header.css'
import { HiPhotograph } from 'react-icons/hi'
import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
    return ( 
        <div id="headerTop" className='header-main min-h-[7vh] h-max w-[100%] bg-white-gray flex justify-center'>
            <div className="header-content w-[95%] flex justify-around text-[110%]">
                <div className="header-logo flex h-[100%] items-center">
                    <HiPhotograph className='text-[250%] text-dark-red-wine'/>
                    <span className='font-[600] text-[120%]'>LF Marketing</span>
                </div>
                <div className="header-links flex h-[100%] w-[40%] items-center justify-evenly">
                    <Link to='ourServices' smooth={true} duration={400} className='cursor-pointer'>
                        <span className='h-[100%] flex items-center'>Nossos Serviços</span>
                    </Link>
                    <Link to='feedbacks' smooth={true} duration={400} className='cursor-pointer'>
                        <span className='h-[100%] flex items-center'>Clientes</span>
                    </Link>
                    <Link to='contactUs' smooth={true} duration={400} className='cursor-pointer'>
                        <span className='h-[100%] flex items-center'>Contato</span>
                    </Link>
                </div>
                <div className="login-register h-[100%] flex items-center">
                    <p className='font-[500]'>
                        <span className='text-red-wine cursor-pointer'>Faça seu Login </span>
                        ou
                        <span className='text-red-wine cursor-pointer'> Registre-se</span>
                    </p>
                </div>
            </div>
        </div>
     );
}
