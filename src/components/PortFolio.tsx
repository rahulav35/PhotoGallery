import Image from "next/image";
import React from "react";

const PortFolio = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 box-border text-center">
      <h1 className="font-bold text-2xl pb-6 box-border">Travel Photos</h1>
      <div className=" h-full w-full grid grid-rows-none  md:grid-cols-5 p-4 box-border gap-4">
        <div className="w-full h-full cols-span-2 md:col-span-3 row-span-2">
          <img
            height={761}
            width={651}
            src="https://images.unsplash.com/photo-1683009427513-28e163402d16?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        </div>
        <div className="lg:w-[500px] lg:h-[350px] grid grid-cols-2 gap-4 lg:mt-10">
          <img
            height={235}
            width={237}
            src="https://images.unsplash.com/photo-1694804251946-c0bb0234e547?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        
        
          <img
            height={235}
            width={237}
            src="https://images.unsplash.com/photo-1484795819573-86ae049cb815?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
            alt=""
          />
        
          <img
            height={235}
            width={237}
            src="https://images.unsplash.com/photo-1691027500652-f2ac352e9ab2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt=""
          />
       
          <img
            height={235}
            width={237}
            src="https://images.unsplash.com/photo-1691637708314-48dd49655487?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1468&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PortFolio;
