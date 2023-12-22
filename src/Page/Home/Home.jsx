import Banner from "../../Component/Banner/Banner";
import DesignSection from "../../Component/DesignSection/DesignSection";
import SecondWirelessSection from "../../Component/SecondWirlessSection/SecondWirelessSection";
import WirelessHeadPhone from "../../Component/WirelessHeadPhone/WirelessHeadPhone";

const Home = () => {
    return (
        <div>
            <Banner />
            <WirelessHeadPhone />
            <DesignSection />
            <SecondWirelessSection />
        </div>
    );
};

export default Home;