import "./Footer.css";
import { warpleFooter } from "../../../assets";

const Footer = () => {
    return (
        <footer className="footerWarrper">
            <img
                className="footerLearge"
                src={warpleFooter.footerLearge}
                alt=""
            />
            <img
                className="footerMobile"
                src={warpleFooter.footerMobile}
                alt=""
            />
        </footer>
    );
};

export default Footer;
