import React from 'react';
import { HiPhotograph } from 'react-icons/hi'

export default function Header() {
    return ( 
        <div className='header-main min-h-[7vh] h-max w-[100vw] bg-white-gray flex justify-center'>
            <div className="header-content w-[95%] flex justify-around text-[110%]">
                <div className="header-logo flex h-[100%] items-center">
                    <HiPhotograph />
                    <span>LF Marketing</span>
                </div>
                <div className="header-links flex h-[100%] w-[40%] items-center justify-evenly">
                    <a href="#">Nosso Produto</a>
                    <a href="#">Nossos Clientes</a>
                    <a href="#">Quem Somos</a>
                </div>
                <div className="login-register h-[100%] flex items-center">
                    <p className='font-[500]'>
                        <span className='text-red-wine'>Entre </span>
                        ou
                        <span className='text-red-wine'> Registre-se</span>
                    </p>
                </div>
            </div>
        </div>
     );
}
