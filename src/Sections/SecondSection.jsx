import React from "react";
import PeopleImage from "../assets/PeopleImage.jpg";
import PeopleReading from "../assets/PeopleReading.jpg";
import ReadingStudents from "../assets/StudentsReading.jpg";
import TwoStudentPic from "../assets/TwoStudentPic.jpg";
import Avatar from "../assets/Avatar.jpg";
import StudentsInClass from "../assets/StudentsInClass.jpg";
import { Button, SVG } from "../Components/WrapperIcon";
import { FooterLogo } from "../Components/Logo";
import { Link } from "react-router-dom";


export default function SecondSection() {
  return (
    <>
      <div className=" grid grid-cols-1 lg:grid-cols-2 w-full lg:px-12 px-2 h-auto py-5 mt-14 gap-4">
        <div className=" flex px-3 flex-col lg:w-[93%] w-[100%] sm:w-[87%] md:w-[80%] h-[auto] rounded-md shadow-xl mx-auto">
          <div>
            <img
              src={PeopleImage}
              alt="People smilling togther"
              className="w-[100%] sm:h-[380px] h-[340px] rounded-xl"
            />
          </div>
          <div className=" grid grid-cols-1 gap-5 lg:grid-cols-2  place-items-center mt-5  w-full h-auto ">
            <div className=" w-[100%] lg:w-[100%] md:w-[70%] flex flex-col items-center h-[300px] shadow-2xl pt-3 text-center rounded-lg bg-white">
              <div className="flex items-center gap-3">
                <span className="material-symbols-outlined text-6xl bg-gray-300 p-2 rounded-full ">
                  social_leaderboard
                </span>
                <h1 className=" font-semibold text-xl text-black ">
                  Certified Institute
                </h1>
              </div>
              <p className=" px-4 pt-5 text-zinc-900 font-medium text-base">
                Lacinia asperiores incididunt saepe corrupti quos eros cupidatat
                faucibus natus.
              </p>
            </div>
            <div className=" w-[100%] lg:w-[100%]  md:w-[70%] flex flex-col pt-3 items-center h-[300px] text-center  shadow-2xl rounded-lg bg-white ">
              <div className="flex  items-center gap-3 ">
                <span className="material-symbols-outlined text-6xl  bg-gray-300 p-2 rounded-full">
                  manage_accounts
                </span>
                <h1 className=" font-semibold text-xl text-black">
                  Qualifed Teachers
                </h1>
              </div>
              <p className=" px-4 pt-5 text-zinc-900 font-medium text-base">
                Lacinia asperiores incididunt saepe corrupti quos eros cupidatat
                faucibus natus.
              </p>
              <Button>MORE ABOUT US</Button>
            </div>
          </div>
        </div>
        <div className=" flex  px-3 flex-col  lg:w-[93%] w-[100%] sm:w-[87%] md:w-[80%] bg-white h-[auto] pt-5 rounded-md shadow-xl mx-auto">
          <h2 className=" font-bold text-4xl text-black lg:text-lef ">
            Why Students Choose Us for Gaining Knowledge !
          </h2>
          <p className="  font-medium text-lg text-black py-6">
            Per sed, mattis. Integer viverra euismod maecenas incidunt,
            phasellus consequatur aliquam nihil temporibus in assumens deserunt
            convallis. Inceptos per consectetur consequatur proin.
          </p>
          <div>
            <img
              src={PeopleReading}
              alt="People Reading togther"
              className="w-[100%] lg:h-[400px] sm:h-[380px] h-[330px] rounded-xl"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export function Cards() {
  const Card = [
    {
      id: 0,
      heading: " Engineering",
      paragrapg:
        " Here are the biggest enterprise technology acquisitions of 2021 so",
      icon: "engineering",
    },
    {
      id: 1,
      heading: " IT & Software",
      paragrapg:
        " Here are the biggest enterprise technology acquisitions of 2021 so",
      icon: "webhook",
    },
    {
      id: 2,
      heading: "Chemistry",
      paragrapg:
        " Here are the biggest enterprise technology acquisitions of 2021 so",
      icon: "biotech",
    },
  ];
  return (
    <>
      <div className=" grid grid-cols-1 gap-4 lg:grid-cols-4 w-full px-3  mt-16 mb-10  md:grid-cols-2">
        <div className=" h-[200px] md:h-[300px] bg-white w-[100%] pl-5 pt-5">
          <h1 className=" font-bold text-4xl text-black">
            Our Best Categories
          </h1>
          <button

            className=" uppercase p-3 px-4 w-[200px] bg-indigo-950 font-bold text-white rounded-full mt-7 duration-300 hover:bg-indigo-800 hover:ring-2 ring-slate-900"
          >
            more categories
          </button>
        </div>

        {Card.map((card, index) => (
          <div
            key={index}
            className=" w-[100%] mx-auto sm:w-[80%] md:w-[100%] py-5 md:mx-0 h-[330px] px-3 bg-white border border-gray-200 rounded-xl hover:shadow-inner shadow-2xl
             mt-5 hover:ring-2 duration-300 ring-red-300 "
          >
            <span className="material-symbols-outlined text-6xl bg-gray-300 p-2 rounded-full">
              {card.icon}
            </span>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {card.heading}
            </h5>
            <p className="mb-3 font-medium text-lg text-gray-900 ">
              {card.paragrapg}
            </p>
            <a
              href="#home"
              className="inline-flex items-center px-3 py-3 text-sm font-medium text-center text-white bg-pink-600 rounded-full mt-7 hover:text-black hover:bg-pink-400 focus:ring-4 focus:outline-none focus:ring-blue-300"
            >
              Read more
              <svg
                aria-hidden="true"
                className="w-4 h-4 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export function FeaturedCourses() {
  const Gallery = [
    {
      id: 0,
      heading: "",
      src: PeopleReading,
      name: "Prof. Sammy James",
      button: "Management",
      pink: true,
      title: "The Complete Advance Management Study",
    },
    {
      id: 1,
      heading: "",
      src: StudentsInClass,
      name: "Prof. Alison White",
      button: "Business",
      blue: true,
      title: "Advance Begineer's Goal & Managing Course",
    },
    {
      id: 2,
      heading: "",
      src: TwoStudentPic,
      name: "Prof. George Hobbs",
      button: "Technology",
      pink: true,
      placeSelf: true,
      title: "Advance Technology & Architecture Course",
    },
  ];
  return (
    <>
      <p className=" mb-10 ">.</p>
      <SVG />
      <h1 className=" text-3xl lg:text-5xl font-bold text-black text-center">
        Most Featured Courses
      </h1>
      <p className=" text-lg lg:text-xl font-medium text-black px-5 text-center py-6">
        Saepe quo labore aenean dictumst expedita commodi auctor,
        <br />
        nisl, lorem iusto feugiat nemo reiciendis laboris.
      </p>
      <div className=" bg-slate-100 py-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mx-auto w-full h-auto px-6 lg:px-10 place-content-center place-items-center">
        {Gallery.map((gallery, index) => (
          <div
            key={index}
            className={` ${
              gallery.placeSelf && " md:ml-[100%] lg:m-0"
            } bg-white shadow-lg rounded-md h-[500px] sm:w-[80%] md:w-[100%] w-[100%]`}
          >
            <div className="relative">
              <img
                src={gallery.src}
                alt="An image "
                className=" w-[100%] h-[240px] sm:h-[270px] rounded-t-lg"
              />
              <button
                className={` absolute px-5 py-1 left-5 ${
                  gallery.blue && " bg-slate-900 hover:bg-slate-800"
                } ${gallery.pink && "bg-pink-600  hover:bg-pink-500"}
                top-[14rem] lg:top-[15rem] h-[40px] w-[150px] font-medium text-white rounded-full `}
              >
                {gallery.button}
              </button>
              <button
                data-tooltip-target="tooltip-hover"
                data-tooltip-trigger="hover"
                type="button"
                data-tooltip-placement="left"
                className=" absolute top-1 right-4 flex justify-center items-center bg-gray-500 hover:bg-pink-800 duration-300 rounded-full h-12 w-12"
              >
                <span className=" material-symbols-outlined text-white text-3xl">
                  bookmark
                </span>
                <span
                  id="tooltip-hover"
                  role="tooltip"
                  className=" absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-black bg-white rounded-lg shadow-md opacity-0 tooltip"
                >
                  Bookmark
                </span>
              </button>
              <h1 className=" font-semibold text-xl pt-6 px-5">
                {gallery.title}
              </h1>
              <div className="flex items-center gap-3 mt-3 mb-1">
                <img
                  src={Avatar}
                  alt=""
                  className=" h-12 w-12 ml-4 rounded-full"
                />
                <h1 className=" font-medium text-md text-black">
                  {gallery.name}
                </h1>
              </div>
              <hr />
              <button className=" bg-black hover:bg-zinc-900 duration-300 mt-3 ml-2 px-3 py-2 w-[150px] text-white border-2 outline-none rounded-full">
                ENROLL
              </button>
            </div>
          </div>
        ))}
      
      </div>
      <div className=" grid place-content-center w-full"> <button className=" bg-slate-900  lg:visible text-white font-medium py-4 px-6 hover:bg-pink-600 hover:ring-4  ring-slate-600 duration-200 rounded-full">
          VIEW ALL COURSES
        </button></div>
    </>
  );
}

export function Offers() {
  const OfferCards = [
    {
      id: 0,
      icon: "  group_add",
      headers: "Skilled Teachers",
      number: 1,
      pink: true,
    },
    {
      id: 1,
      icon: "currency_exchange",
      headers: "Affordable Courses",
      number: 2,
      purple: true,
    },
    {
      id: 2,
      icon: "bubble_chart",
      headers: "Efficient & Flexible",
      number: 3,
      pink: true,
      margin: true,
    },
  ];
  return (
    <>
      <p className=" mb-10 ">.</p>
      <SVG />
      <h1 className=" text-3xl lg:text-5xl font-bold text-black text-center">
        Our Best Features
      </h1>
      <p className=" text-lg lg:text-xl font-medium text-black px-5 text-center py-6">
        Saepe quo labore aenean dictumst expedita commodi auctor,
        <br />
        nisl, lorem iusto feugiat nemo reiciendis laboris.
      </p>
      <div
        className={` grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-content-center place-items-center  mb-10 gap-7 w-full px-5 lg:px-10 h-auto bg-white`}
      >
        {OfferCards.map((offers, index) => (
          <div
            key={index}
            className={` relative flex justify-center flex-col bg-white border-dotted border-4
             text-center border-b-gray-300 shadow-xl  ${
               offers.margin && "md:ml-[100%] lg:m-0"
             } md:w-[100%] rounded-2xl w-[100%] sm:w-[80%] lg:w-[100%] h-[380px] lg:h-[400px]`}
          >
            <span className=" material-symbols-outlined text-8xl text-pink-600">
              {offers.icon}
            </span>
            <h1 className=" font-bold text-2xl text-black">{offers.headers}</h1>
            <p className=" text-lg font-normal text-gray-800 py-3">
              Dictumst magni irure nascetur <br />
              nam primis, aliquam ipsum. <br />
              Element, occaecat rerum .
            </p>
            <button
              className=" absolute bottom-[-17px] flex justify-center items-center  text-pink-600 hover:bg-pink-600 hover:translate-y-[-5px]
                    hover:text-white duration-300 right-[40%] w-[70px] h-[70px] rounded-full drop-shadow-2xl bg-white"
            >
              <span className="material-symbols-outlined text-3xl">
                arrow_right_alt
              </span>
            </button>
            <button
              className={` absolute top-[70px] right-[30%] ${
                offers.pink && "bg-pink-500"
              } ${
                offers.purple && " bg-slate-900"
              } text-white shadow-lg h-[52px] w-[52px] rounded-full`}
            >
              {offers.number}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export function Reviews() {
  
  return (
    <>
      <div className=" bg-gray-100">
        <p className=" mb-10 ">.</p>
        <SVG />
        <h1 className=" text-3xl lg:text-5xl font-bold text-black text-center">
          Review's From Student
        </h1>
        <p className=" text-lg lg:text-xl font-medium text-black px-5 text-center py-6">
          Saepe quo labore aenean dictumst expedita
          <br />
          commodi auctor, nisl, lorem iusto feugiat nemo reiciendis laboris.
        </p>

       
                <div className=" bg-white rounded-2xl h-[auto] mx-auto my-5  px-10 py-10 shadow-2xl w-[90%] lg:w-[70%] ">
                  <p className=" text-base font-medium text-gray-700 text-center pt-4">
                    “Per sed, mattis. Integer viverra euismod maecenas incidunt,
                    phasellus consequatur aliquam nihil temporibus in assumenda?
                    Aute praesentium fugiat. Perspiciatis, ultrices deserunt
                    convallis, eius at non.”
                  </p>
                  <div className=" w-full bg-white h-[200px]">
                    
                    <div className=" flex justify-end items-center flex-col">
                    <span className="material-symbols-outlined text-pink-600 text-4xl font-normal">
                    arrow_downward
                    </span>
                      <img
                        src={Avatar}
                        alt=""
                        width={90}
                        className=" rounded-full mt-4"
                      />
                      <h1 className=" text-lg font-semibold">William Skot</h1>
                      <p className=" text-pink-500 font-normal">
                      SCIENCE STUDENT
                      </p>
                    </div>
                  </div>
                </div>
          </div>
    </>
  );
}


export function Footer() {

    const Links = [
        {id:0, text:"home", Url:"/", Url2:"#", text2:"help center"},
        {id:1, text:"about us", Url:"/about" , Url2:"#", text2:"Faqs"},
        {id:2, text:"facility", Url:"/facility" , Url2:"#", text2:"parent community"},
        {id:3, text:"blog", Url:"/blog" , Url2:"#", text2:"Legal notice"},
        {id:4, text:"contact", Url:"/contact" , Url2:"#", text2:"news and articles"}
    ]
    return (
        <>
        <footer style={{backgroundImage: "url(https://images.pexels.com/photos/6135340/pexels-photo-6135340.jpeg?auto=compress&cs=tinysrgb&w=300)",
         backgroundRepeat:"no-repeat", backgroundPosition:"center",  backgroundSize:'cover', backgroundBlendMode:"color-burn"}} 
         className=" grid bg-indigo-950 grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 w-full pr-3  h-auto pb-10 pt-4">
            <div className=" w-[100%] pl-7  md:pl-3 py-4 ">
            <FooterLogo/>
            <p className=" font-medium text-base text-white pt-4">
            “Per sed, mattis. Integer viverra euismod maecenas 
            incidunt, phasellus consequatur aliquam nihil
             temporibus in assumenda? Aute praesentium fugiat.
              Perspiciatis, ultrices deserunt convallis, eius at non.”
            </p>
            </div>
            <div className=" w-[100%] pl-7  md:pl-3 py-4">
                <h1 className=" text-xl font-semibold text-white pt-4 pb-6 uppercase">Quick Links</h1>
                <ul className="flex flex-col gap-2">
                    {Links.map((link, index) => (
                        <li key={index}><Link to={link.Url} className=" font-medium text-white text-md hover:text-pink-600 hover:underline uppercase">{link.text}</Link></li>
                    ))}
                </ul>
            </div>

            <div className=" w-[100%] pl-7  md:pl-3 py-4">
            <h1 className=" text-xl font-semibold text-white pt-4 pb-6 uppercase">usefull Links</h1>
            <ul className="flex flex-col gap-2">
                    {Links.map((link, index) => (
                        <li key={index}><a href={link.Url2} 
                        className=" font-medium text-white text-md hover:text-pink-600 hover:underline uppercase">
                            {link.text2}</a></li>
                    ))}
                </ul>
            </div>

            <div className=" w-[100%] pl-7  md:pl-3 py-4">
            <h1 className=" text-xl font-semibold text-white pt-4 pb-6 uppercase">school hours</h1>
            <p className=" text-white flex items-center gap-3"> <span className="material-symbols-outlined text-pink-600">schedule</span> 8 AM - 5 PM , Monday - Saturday</p>
            <p className=" font-medium text-base text-white pt-4">
            Aut, quae convallis minim cum ornare! Pede ut rem, totam dictum convallis.
            </p>
            <Button>Join us</Button>
            </div>
          
        </footer>
        </>
    )
}