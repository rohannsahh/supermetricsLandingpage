import 'non.geist/mono';

const PartnerCompany = () => {
  const partners = [
    { name: 'Beta', logo: '../../partnercompany/Beta.svg' },
    { name: 'Incus', logo: '../../partnercompany/incus.svg' },
    { name: 'Universe', logo: '../../partnercompany/universe.svg' },
    { name: 'Blue Spec Marketing', logo: '../../partnercompany/Bluespec.svg' },
    { name: 'Uncle Charlie', logo: '../../partnercompany/UncleCharlie.svg' },
    { name: 'The Container', logo: '../../partnercompany/container.svg' },
  ];

  return (
    <section className="relative border-y border-[#CFD5DE] bg-white">
      {/* Top-Left Corner Design */}
      <img
        src="../../corner.svg"
        alt="Corner Design"
        className="absolute top-0 left-[7.5rem]  transform -translate-x-1/2 -translate-y-1/2"
      />

 <svg className='hidden lg:block absolute top-0 right-[7.5rem] ' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13V1H0" stroke="black"/>
</svg>

<svg className='hidden lg:block absolute bottom-0 left-[7.5rem]   ' width="13" height="13" viewBox="13 13 " fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 -1.11759e-07V12H13" stroke="black"/>
</svg>



      {/* Bottom-Right Corner Design */}
      <img
        src="../../corner.svg"
        alt="Corner Design"
        className="absolute bottom-0 right-[7.5rem] transform translate-x-1/2 translate-y-1/2"
      />

      <div className="max-w-7xl py-20 border-x mx-auto px-9">
        <h2
          className="text-center text-xl/8 font-normal text-[#697586] mb-12"
          style={{ fontFamily: 'Geist Mono Variable' }}
        >
          Trusted by 5000+ marketing professionals
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={partner.logo} alt={`${partner.name} logo`} className="w-auto object-contain" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerCompany;
