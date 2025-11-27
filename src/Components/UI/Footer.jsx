import { MdPlace } from "react-icons/md";
import footerApi from "../../api/footerApi.json";
import { IoCallSharp } from "react-icons/io5";
import { TbMailPlus } from "react-icons/tb";

const Footer = () => {
    const footerIcon = {
        MdPlace: <MdPlace/>,
        IoCallSharp: <IoCallSharp/>,
        TbMailPlus: <TbMailPlus/>
    }
    return(
        <>
            <footer className="footer-section">
                <div className="container grid grid-three-cols">
                    {
                        footerApi.map((footer, index) => {
                            return(
                                <div className="footer-contact" key={index}>
                                    <div className="icon">{footerIcon.icon}</div>
                                    <div className="footer-contact-text">
                                        <p>{footer.title}</p>
                                        <p>{footer.subTitle}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </footer>
        </>
    )
}

export default Footer;