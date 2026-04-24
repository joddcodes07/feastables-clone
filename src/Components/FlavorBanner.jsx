import bannerImg from '../images/Screenshot 2026-04-25 at 2.15.03 AM.png';

const FlavorBanner = () => {
  return (
    <section className="w-full border-t-4 border-b-4 border-black overflow-hidden bg-[#1fa9e4]">
      <img 
        src={bannerImg} 
        alt="Feastables - A Flavor For Every Craving" 
        className="w-full h-auto min-h-[250px] md:min-h-[400px] object-cover object-center"
      />
    </section>
  );
};

export default FlavorBanner;
 