import React from "react";
import { Link, Outlet } from "react-router-dom";

const Experience = () => {
  const experiences = [
    {
      name: "BSC in Physics",
      img: "data:image/png;base64,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",
      details: "I admitted on my favourite subject Physics  ",
      company: "National University",
      time: "18 June 2018",
    },
    {
      name: "Web Development",
      img: "data:image/jpeg;base64,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",
      details:
        "Started the journey with batch-6 of Web development with Jhankar Mahbub",
      company: "Programming Hero",
      time: "20 june 2022",
    },
    {
      name: "Next Level Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS13R6am0DDhhpWYLu_8zFM7kY6Ar30bG2xGA&usqp=CAU",
      details: "For development Impove I enrolled the Course .",
      company: "Programming Hero",
      time: "1 may 2023",
    },
    {
      name: "Backend Developement",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsah-jhRymXBTNhby1M4GNQ8jC90KXIF3wug&usqp=CAU",
      details: "I worked on mongodb backend with mongoose",
      company:"Self exploring",
      time: "20 June 2023",
    },
  ];
  return (
    <main className="px-2 bg-primary py-12">
      <section>
        <h3
          className="text-text1 text-[1.8rem] text-center font-bold font-serif
            "
        >
          <span> Education & </span>
          <span className="text-text2">Certification</span>
        </h3>
        <h5 className="font-bold text-text1 text-center"> ————————</h5>

        <p className="text-[1em] font-mono text-text2 text-center">
          I shared my educational and Certification achivement where I learned a
          lot of things .
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {experiences?.map((item, i) => {
          const { name, img, details, time, company } = item;
          return (
            <div
              key={name}
              className="flex justify-between gap-2 items-center shadow-2xl shadow-inherit border-2 border-slate-500 px-2 py-8 rounded"
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <aside className="flex flex-col ">
                <img src={img} className="h-[60px] w-[80px] rounded" alt="" />
                <h5 className="text-text1 font-mono font-bold text-[0.6em] mt-1">
                  {company}
                </h5>
              </aside>

              <section className=" text-end">
                <h2 className="text-text1 font-semibold text-[1em]">{name}</h2>
                <p className="text-text2 text-[0.8em]">
                  {details?.slice(0, 36)}
                </p>
                <button className="text-[0.7em] font-mono text-slate-500">
                  Started on {time}
                </button>
              </section>
            </div>
          );
        })}
      </section>
    </main>
  );
};

export default Experience;
