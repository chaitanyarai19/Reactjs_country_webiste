import { MdPlace } from "react-icons/md";
import footerApi from "../../api/footerApi.json";
import { TbMailPlus } from "react-icons/tb";
import { IoCallsharp } from "react-icons/io5";

const Footer = () => {
    const footerIcon = {
        MdPlace: <MdPlace/>,
        IoCallsharp: <IoCallsharp/>,
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
                                    <div className="icon">{footer.MdPlace}</div>
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