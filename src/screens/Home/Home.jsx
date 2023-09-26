//style
import "./Home.css";

// layout components
import Banner from "../../components/layout/Banner/Banner";
import Footer from "../../components/layout/Footer/Footer";
import Navbar from "../../components/layout/Navbar/Navbar";

// componentes
import WhatIsWarple from "../../components/sections/WhatIsWarple/WhatIsWarple";
import HowToUse from "../../components/sections/HowToUse/HowToUse";
import MemberRegistration from "../../components/sections/MemberRegistration/MemberRegistration";
import Point from "../../components/sections/Point/Points";
import Reason from "../../components/sections/Reason/Reason";

const Home = () => {
    return (
        <>
            <Navbar />
            <Banner />
            <WhatIsWarple />
            <Point />
            <Reason />
            <HowToUse />
            <MemberRegistration
                classIdLeftPlane="leftPlaneHome"
                classIdRightPlane="rightPlaneHome"
                classIdMian="homeTrciket"
            />
            <Footer />
        </>
    );
};

export default Home;
