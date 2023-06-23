import React from "react";
import "./feedbacks.css";
import ImageMarketing from '/src/assets/make-marketing1.jpg'
import Cliente1 from '/src/assets/business1.png'
import Cliente2 from '/src/assets/business2.jpg'
import Cliente3 from '/src/assets/business3.jpg'

export default function Feedbacks() {
  return (
    <div id="feedbacks" className="feedbacks-main min-h-[100vh] h-[100vh] relative bg-white w-[100%] flex flex-col items-center justify-center">
      <div class="custom-shape-divider-top-1687537516">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
      <h1 className="feedback-title w-[45%] flex items-center justify-center text-[200%] font-[500] text-red-wine mb-[20px] border-b-4 border-b-text-red-bold leading-tight rounded">
        What is Lorem? I dont know, and you?
      </h1>
      <div className="feedbacks-content bg-white-gray h-[70%] w-[90%] flex items-center justify-evenly rounded-2xl p-[25px]">
        <div className="client1">
          <img src={Cliente1} className="img-feedback" />
          <p className="text-feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit eveniet ducimus explicabo quae nihil. Maiores autem, corrupti dolor non unde doloribus.</p>
          <h1 className="title-feedback text-dark-red-wine">Empresa: Lorem Ipsum Dolor</h1>
        </div>
        <div className="client2">
          <img src={Cliente2} className="img-feedback" />
          <p className="text-feedback">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, fugit consectetur deserunt commodi sed consequatur pariatur optio sit perspiciatis.</p>
          <h1 className="title-feedback text-dark-red-wine">Empresa: Lorem Dolor</h1>
        </div>
        <div className="client3">
          <img src={Cliente3} className="img-feedback" />
          <p className="text-feedback">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, pariatur? Cumque qui consequuntur accusamus molestiae deserunt ab quaerat dolorum nesciunt ullam!</p>
          <h1 className="title-feedback text-dark-red-wine">Empresa: Lorem Sit Amet</h1>
        </div>
      </div>
    </div>
  );
}
