const videoData = [
  {
    name: "Chocolate Milk",
    video: "https://cdn.shopify.com/videos/c/vp/592f43bb99cf4143b73808804c6b2efe/592f43bb99cf4143b73808804c6b2efe.HD-720p-1.6Mbps-58272835.mp4",
    img: "https://cdn.shopify.com/s/files/1/0551/6060/2784/files/MilkCarton_Chocolate_1.png?v=1758312578&width=80"
  },
  {
    name: "Peanut Butter Crunch",
    video: "https://cdn.shopify.com/videos/c/vp/2ab25fb6166e4acfa8fcfbd086346641/2ab25fb6166e4acfa8fcfbd086346641.HD-720p-1.6Mbps-55533895.mp4",
    img: "https://cdn.shopify.com/s/files/1/0551/6060/2784/files/Chocolate_PBC_60g_Carton.png?v=1728500237&width=80"
  },
  {
    name: "Milk Crunch",
    video: "https://cdn.shopify.com/videos/c/vp/855cb08a17a647ad9f4b82b1560da988/855cb08a17a647ad9f4b82b1560da988.HD-720p-1.6Mbps-55533030.mp4",
    img: "https://cdn.shopify.com/s/files/1/0551/6060/2784/files/Chocolate_Milk_Crunch_60g_Carton.png?v=1728500159&width=80"
  },
  {
    name: "Cookies & Creme",
    video: "https://cdn.shopify.com/videos/c/vp/8ceaa60c66954c4cb38dc05ddb1f03dc/8ceaa60c66954c4cb38dc05ddb1f03dc.HD-720p-1.6Mbps-55534285.mp4",
    img: "https://cdn.shopify.com/s/files/1/0551/6060/2784/files/Chocolate_CookiesCreme_60g_Carton.png?v=1745519325&width=80"
  },
  {
    name: "Almond",
    video: "https://cdn.shopify.com/videos/c/vp/86969ffbbb6e4e3a8bc7f64b8dfe3c3e/86969ffbbb6e4e3a8bc7f64b8dfe3c3e.HD-720p-1.6Mbps-37338536.mp4",
    img: "https://cdn.shopify.com/s/files/1/0551/6060/2784/files/Chocolate_Almond_60g_Carton.png?v=1728499681&width=80"
  }
];

const VideoCards = () => {
  return (
    <section className="w-full bg-[#15a6e8] py-12 px-6">
      <div className="max-w-[1400px] mx-auto flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {videoData.map((item, index) => (
          <div key={index} className="flex flex-col gap-3 min-w-[280px] w-[280px] snap-center">



            <div className="relative w-full h-[400px] bg-gray-300 border-4 border-black rounded-xl overflow-hidden group">
              <video 
                className="w-full h-full object-cover" 
                controls
                autoPlay 
                muted 
                loop 
                playsInline
              >
                <source src={item.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>




            <div className="w-full h-16 bg-white border-4 border-black rounded-xl flex overflow-hidden">
              <div className="w-20 bg-[#a5e6ff] border-r-4 border-black flex items-center justify-center p-2">
                <img src={item.img} alt={item.name} className="max-h-full object-contain" />
              </div>
              <div className="flex-1 flex items-center px-4">
                <span className="font-black uppercase text-lg leading-tight">{item.name}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VideoCards;
