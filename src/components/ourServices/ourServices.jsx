import React from "react";

export default function OurServices() {
  return (
    <div
      id="ourServices"
      className="ourServices-main h-[100vh] bg-red-wine flex flex-col items-center justify-evenly py-[20px]"
    >
      <h1 className="w-[45%] flex items-center justify-center text-[200%] font-[500] text-white-gray mb-[20px] border-b-4 border-dark-red-wine leading-tight rounded">
        What is Lorem? I dont know, and you?
      </h1>
      <div className="outServices-content bg-dark-red-wine h-[70%] w-[85%] flex items-center rounded-2xl p-[20px]">
        <div className="left-side w-[100%] h-[100%] rounded mx-[10px] flex overflow-hidden">
          <div className="img-text relative w-[100%] flex items-start justify-center">
            <img src="/src/assets/make-work1.jpg" alt="" className="desc-img" />
            <p className="desc-text absolute bottom-0 bg-opacity-75 bg-text-red h-[25%] w-[100%] flex items-center justify-center font-[400] text-[130%] text-white-gray text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus amet ab quae nemo atque, hic debitis odit.
            </p>
          </div>
        </div>
        <div className="right-side w-[100%] h-[100%] rounded mx-[10px] flex overflow-hidden">
          <div className="img-text relative w-[100%] flex items-start justify-center">
            <img
              src="/src/assets/make-marketing1.jpg"
              alt=""
              className="desc-img w-[100%]"
            />
            <p className="desc-text absolute bottom-0 bg-opacity-75 bg-text-red h-[25%] w-[100%] flex items-center justify-center font-[400] text-[130%] text-white-gray text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              nesciunt in ut incidunt obcaecati, odit veritatis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
