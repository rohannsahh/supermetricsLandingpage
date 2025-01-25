
const Integration = () => {
  

  return (
    <>
    <section className=" border-y   bg-gradient-to-b from-[#F5F7FA]/80 to-[#FFFFFF]"
    ><div className="relative">
        <img
        src="../../corner.svg"
        alt="Corner Design"
        className="absolute bottom-0 left-[6.3rem] transform translate-x-1/2 translate-y-1/2"
      />
      <img src="../../Dotdesign.svg" alt="" className="absolute left-[8.5rem] top-[42%] "/>
      <img src="../../Dotdesign.svg" alt="" className="absolute right-[8.5rem] top-[42%] scale-x-[-1]"/>


        <div className='max-w-7xl  pt-[4.9rem] pb-5 border-x mx-auto px-9 '>
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-[3.8rem]">
          <h2 className="text-[2.5rem]  font-bold text-[#212F40] mb-2" >
            Access all your marketing data
            without leaving
          </h2>
          <span className="inline-flex items-center"> 
                <img src="../../google.svg" alt="Google Icon" className="" />
             
            <span className="text-[3.3rem] text-[#5F6368]  ml-4">Workspace</span>
             </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl scale-[1.06]  relative">
            <img src="../../integrations.svg" alt="Figma" className=" " />
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 45%, #FFFFFF 92%)",
              }}
            ></div>
        </div>
        </div>
        </div>
        
    </section>
    <div className=" bg-white">
        <div className="relative">
    <svg className='hidden lg:block absolute top-0 right-[7.5rem]  ' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13V1H0" stroke="black"/>
</svg>
    <div className="max-w-7xl mx-auto border-x py-6  px-4 flex justify-center items-center gap-4"  style={{ fontFamily: 'Geist Mono Variable' }}
    >
      <span className="text-[1.25rem] text-[#697586] font-normal">Looking for</span>
      <span className="text-[1.25rem] font-bold text-[#212F40]">DataStudio</span>
      <span className="text-[1.25rem] text-[#697586] -ml-4 font-normal">?</span>
      <button className="bg-white border font-semibold border-[#CFD5DE] px-5 py-2 rounded-xl text-[#212F40] hover:bg-gray-50 transition-colors duration-200  shadow-md">
        Check it out
      </button>
    </div>
  </div>
  </div>
  </>
  );
};

export default Integration;