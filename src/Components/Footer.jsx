const Footer = () => {
  return (
    <footer className="w-full bg-[#15a6e8] py-8 px-4 md:px-8">
      <div className="max-w-[1400px] mx-auto bg-[#65d6fa] border-[4px] border-black rounded-[30px] md:rounded-[40px] p-8 md:p-16 flex flex-col xl:flex-row justify-between gap-16 text-[#2e1005]">
        

        <div className="flex flex-col gap-16 xl:w-1/2">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-3 font-black italic uppercase md:text-lg">
              <span className="text-xl md:text-2xl mb-2">Shop</span>
              <a href="#" className="hover:underline">Shop All</a>
              <a href="#" className="hover:underline">Chocolate</a>
              <a href="#" className="hover:underline">Cups</a>
              <a href="#" className="hover:underline">Gummies</a>
              <a href="#" className="hover:underline">Milk</a>
              <a href="#" className="hover:underline">Bundles</a>
              <a href="#" className="hover:underline">Limited Time</a>
              <a href="#" className="hover:underline">Find a Store</a>
            </div>


            {/* Column 2 */}
            <div className="flex flex-col gap-3 font-black italic uppercase md:text-lg">
              <span className="text-xl md:text-2xl mb-2">Info</span>
              <a href="#" className="hover:underline">FAQ</a>
              <a href="#" className="hover:underline">Contact Us</a>
              <a href="#" className="hover:underline">My Account</a>
              <a href="#" className="hover:underline">Order Tracking</a>
              <a href="#" className="hover:underline">Careers</a>
            </div>



            {/* Column 3 */}
            <div className="flex flex-col gap-3 font-black italic uppercase md:text-lg">
              <span className="text-xl md:text-2xl mb-2">Get to Know Us</span>
              <a href="#" className="hover:underline">Our Story</a>
              <a href="#" className="hover:underline">Ethical Sourcing</a>
              <a href="#" className="hover:underline">Better Peanut Butter</a>
            </div>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start mt-4">
            <img 
              src="https://feastables.com/cdn/shop/files/Feastables_Rebrand_Non_Tilted.png?height=400&v=1715198993" 
              alt="MrBeast Feastables" 

              className="w-full max-w-[450px]"
              onError={(e) => e.target.style.display = 'none'}
            />

            <p className="font-bold text-sm md:ml-4">2026 Feastables</p>
          </div>


        </div>




        <div className="flex flex-col gap-8 xl:w-1/2 items-center xl:items-end  text-center ">
          



          <div className="flex justify-center gap-6 mr-26">
            <a href="https://www.instagram.com/chenn_mahith3412/" target="_blank" rel="noreferrer" className="w-16 h-16 bg-white border-[4px] border-black rounded-full flex items-center justify-center font-black text-xl hover:-translate-y-1 transition-transform">
              <img className="rounded-full mb-0.20" src="https://cdn-icons-png.flaticon.com/128/3670/3670274.png" alt="" />
            </a>
            <a href="https://github.com/mahithchenna-ai" target="_blank" rel="noreferrer" className="w-16 h-16 bg-white border-[4px] border-black rounded-full flex items-center justify-center font-black text-xl hover:-translate-y-1 transition-transform">
              <img  src="https://cdn-icons-png.flaticon.com/128/1051/1051326.png" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/mahith-chenna-091714376/" target="_blank" rel="noreferrer" className="w-16 h-16 bg-white border-[4px] border-black rounded-full flex items-center justify-center font-black text-xl hover:-translate-y-1 transition-transform">
              <img src="https://cdn-icons-png.flaticon.com/128/1384/1384014.png" alt="" />
            </a>
          </div>



          <div className="flex flex-col items-center gap-4 max-w-md mt-6">
            <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tight">Text FEAST to <span className="underline decoration-[#ffe600] decoration-4">70616</span></h3>
            <p className="text-[10px] leading-tight font-bold uppercase text-center mt-2">
              By signing up via text, you agree to receive recurring automated marketing messages, including cart reminders, at the phone number provided. Consent is not a condition of purchase. Reply STOP to unsubscribe. Reply HELP for help. Message frequency varies. Msg & data rates may apply. View our <span className="underline">Privacy Policy</span> and <span className="underline">Terms of Service</span>.
            </p>
            <h3 className="text-2xl md:text-3xl font-black uppercase mt-6 leading-tight">
              Snacks, Sweeps, Surprises Straight To Your Inbox.
            </h3>
            <p className="text-xs font-bold uppercase mt-2">
              By signing up, you agree to our <span className="underline">Privacy Policy</span>.
            </p>
          </div>



          <div className="flex flex-col items-center gap-6 mt-auto pt-10">
            <div className="flex items-center gap-2 font-black italic text-xl uppercase tracking-tighter">
              POWERED BY <span className="text-[#95bf47] text-3xl lowercase ml-1 tracking-normal">shopify</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-[10px] md:text-xs font-black italic uppercase text-center mt-4">
              <a href="#" className="hover:underline">Privacy Policy</a>
              <a href="#" className="hover:underline">Terms of Service</a>
              <a href="#" className="hover:underline">Privacy Preferences</a>
              <a href="#" className="hover:underline">Privacy Requests</a>
            </div>
            <a href="#" className="text-[10px] md:text-xs font-black italic uppercase hover:underline mt-2">
              Do Not Sell Or Share My Personal Information
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;