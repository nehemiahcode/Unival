import React from 'react'

export function CloseIcon({children}) {
  return (
    <span className="material-symbols-outlined md:hidden text-red-500 text-4xl">
     {children}
    </span>
  )
}



 export function MenuIcon({children}) {
    return (
      <span className="material-symbols-outlined md:hidden text-white text-4xl">
       {children}
      </span>
    )
  }

  export function Button({children}) {
    return (
      <button 
      className=" text-white text-center p-3 font-semibold w-[170px]
      flex justify-center items-center hover:bg-pink-500 duration-300 mx-auto  lg:m-0 ring-0 hover:ring-offset-2 mt-4
  bg-pink-600 rounded-full"
    >
      {children}
    </button>
    )
  }
  


  export function SVG() {
    return (
      <>
       <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "30px", width: "300px", margin:" 0 auto" }}
            viewBox="0 0 1440 320"
            className=" animate-pulse"
          >
            <path
              fill="#f4008a"
              fillOpacity="3.04"
              d="M0,288L0,128L36.9,128L36.9,32L73.8,32L73.8,256L110.8,256L110.8,128L147.7,128L147.7,288L184.6,288L184.6,320L221.5,320L221.5,96L258.5,96L258.5,256L295.4,256L295.4,256L332.3,256L332.3,160L369.2,160L369.2,128L406.2,128L406.2,96L443.1,96L443.1,160L480,160L480,96L516.9,96L516.9,96L553.8,96L553.8,224L590.8,224L590.8,256L627.7,256L627.7,256L664.6,256L664.6,224L701.5,224L701.5,128L738.5,128L738.5,160L775.4,160L775.4,64L812.3,64L812.3,160L849.2,160L849.2,128L886.2,128L886.2,128L923.1,128L923.1,192L960,192L960,64L996.9,64L996.9,160L1033.8,160L1033.8,96L1070.8,96L1070.8,192L1107.7,192L1107.7,192L1144.6,192L1144.6,128L1181.5,128L1181.5,32L1218.5,32L1218.5,160L1255.4,160L1255.4,288L1292.3,288L1292.3,64L1329.2,64L1329.2,224L1366.2,224L1366.2,320L1403.1,320L1403.1,32L1440,32L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
            ></path>
          </svg>
      </>
    )
  }