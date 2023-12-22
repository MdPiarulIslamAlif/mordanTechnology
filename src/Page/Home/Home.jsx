import Banner from "../../Component/Banner/Banner";
import DesignSection from "../../Component/DesignSection/DesignSection";
import Navbar from "../../Component/Navbar/Navbar";
import WirelessHeadPhone from "../../Component/WirelessHeadPhone/WirelessHeadPhone";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Banner />
            <WirelessHeadPhone />
            <DesignSection />
        </div>
    );
};

export default Home;