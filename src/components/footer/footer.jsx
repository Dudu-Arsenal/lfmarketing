import React from "react";
import "./footer.css";
import { HiPhotograph } from "react-icons/hi";

export default function Footer() {
  return (
    <div id="contactUs" className="footer-main w-[100%] bg-white-gray">
      <div className="footer-content h-[10vh] w-[90%] flex justify-around">
        <div className="footer-logo flex flex-col h-[100%] w-max mx-[20px] items-center justify-center">
          <HiPhotograph className="text-[200%] text-dark-red-wine" />
          <span className="font-[600] text-[115%]">LF Marketing</span>
        </div>
        <div className="footer-links h-[100%] w-[50%] flex items-center justify-evenly">
          <span>Sobre nós</span>
          <span>Contato</span>
          <span>Termos e Condições</span>
        </div>
        <div className="copyright h-[100%] flex items-center">
            <p>Todos os direitos reservados por <span className="font-[600] text-dark-red-wine">LF Marketing</span></p>
        </div>
      </div>
    </div>
  );
}
