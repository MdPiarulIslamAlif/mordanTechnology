import Banner from "../../Component/Banner/Banner";
import DesignSection from "../../Component/DesignSection/DesignSection";
import Navbar from "../../Component/Navbar/Navbar";
import SecondWirelessSection from "../../Component/SecondWirlessSection/SecondWirelessSection";
import WirelessHeadPhone from "../../Component/WirelessHeadPhone/WirelessHeadPhone";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <WirelessHeadPhone />
            <DesignSection />
            <SecondWirelessSection />
        </div>
    );
};

export default Home;