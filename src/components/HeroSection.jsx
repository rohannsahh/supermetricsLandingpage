const HeroSection = () => {
    return (
      <section className="bg-gradient-to-b from-[#DCEFFF] via-[#F7FAFC] to-[#FFFFFF] py-16">
        <div className="max-w-[85rem] mx-auto px-4 flex flex-col justify-between md:flex-row items-center">
          
          {/* Left Side: Text Content */}
          <div className="md:w-[50%] text-center md:text-left">
            <h1 className="text-[3.4rem] font-bold leading-tight bg-gradient-to-b from-[#0D314F] to-[#165182] bg-clip-text text-transparent">
              Sync Your Marketing Data to 
              <span className="ml-4"> 
                <img src="../../google.svg" alt="Google Icon" className="inline-block" />
              </span>
              <span className="text-5xl font-medium text-[#5F6368]"> Workspace</span>
            </h1>
  
            <p className="mt-5 text-xl font-normal md:max-w-[37rem] text-[#697586]">
              With the SuperMetrics Workspace add-on, access all your connected marketing and sales
              accounts directly in Google Sheets, Slides, and everywhere else.
            </p>
            <div className="mt-9 flex justify-center md:justify-start space-x-4">
              <button className="bg-[#1B91F0] flex items-center text-white px-6 py-3 rounded-xl font-medium shadow-md hover:bg-blue-700 shadow-[#1B91F0]/50">
                Install Now
                <span className="ml-2">
                  <svg width="19" height="18" viewBox="0 0 19 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.5 4H3.5C2.96957 4 2.46086 4.21071 2.08579 4.58579C1.71071 4.96086 1.5 5.46957 1.5 6V15C1.5 15.5304 1.71071 16.0391 2.08579 16.4142C2.46086 16.7893 2.96957 17 3.5 17H12.5C13.0304 17 13.5391 16.7893 13.9142 16.4142C14.2893 16.0391 14.5 15.5304 14.5 15V10M7.5 11L17.5 1M17.5 1H12.5M17.5 1V6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </button>
              <button className="bg-white border border-gray-300 px-6 py-3 rounded-xl font-medium shadow hover:bg-gray-100">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Right Side: Image */}
          <div className="relative md:w-[50%] w-full mt-10 md:mt-7 lg:-mr-[6rem]">
            <img
              src="../../image.svg"
              alt="SuperMetrics Google Workspace Integration"
              className="w-full h-auto object-contain"
            />
            
            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 rounded-lg"
              style={{
                background: "linear-gradient(180deg, rgba(255, 255, 255, 0) 70%, #FFFFFF 94%)",
              }}
            ></div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default HeroSection;