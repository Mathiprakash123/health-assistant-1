import React from "react";
import OurServices from "../extrapages/OurServices";
import Feedback from "../extrapages/Feedback";

const Home = () => {
  return (
    <div>
      <div className="mx-32 my-20 flex justify-between">
        <div className="">
          <h1 className="text-[#239d80] text-6xl font-extrabold font-sans leading-[5rem]	mt-32 ">
            Welcome,
          </h1>
          <h1 className="text-[#239d80] text-6xl font-extrabold font-sans leading-[5rem]	">
            MathiPrakash !
          </h1>

          <p className="w-[730px] text-2xl font-sans mt-20 leading-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            animi. Libero illo nobis repellat, ea magnam a vitae numquam aliquid
            delectus voluptatem adipisci aspernatur ipsam nam, veniam aperiam
            facilis sint! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eaque, nostrum. Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Sed unde nulla eaque laborum pariatur. Ipsum illo
            quae maxime cupiditate dolores vel quibusdam repudiandae commodi
            neque, vero iusto nobis modi officia.
          </p>
        </div>
        <div>
          <img
            src="src/assets/Screenshot from 2024-08-04 20-37-41 (1).png"
            alt=" no image"
            className="w-[751px] h-[751px] "
          />
        </div>
      </div>
      <div>
        <h1 className="text-[#239d80] text-6xl mx-32 font-semibold font-sans">
          World Class Service
        </h1>
        <img src="src/assets/blob.png" alt=""className="mx-20 mt-32" />
      </div>
      <div>
      <OurServices/>

      <Feedback/>

        
      </div>
    </div>
  );
};

export default Home;
