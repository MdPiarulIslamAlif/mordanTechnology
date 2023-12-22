import wir from ".././../assets/wir/wir.jpg";

const WirelessHeadPhone = () => {
  return (
    <div
      className=" max-w-7xl mx-auto flex justify-center gap-8 items-center
      
      "
    >
      <div className=" ">
        <img className="max-h-96 w-96 rounded-2xl" src={wir} alt="" />
      </div>
      <div className="">
        <h1 className="text-3xl font-bold mb-4">Wireless Headphones</h1>
        <div className="ml-8">
          
            <li>Carrying Case</li>
            <li>Seven Wireless HeadPhones</li>
            <li>Quick Start Guide</li>
            <li>USB Charging Cable</li>
         
        </div>
       <div className="text-center mt-4">
        <button className="btn btn-accent">Buy Online</button>
       </div>
      </div>
    </div>
  );
};

export default WirelessHeadPhone;
