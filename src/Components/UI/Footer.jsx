import { MdPlace } from "react-icons/md";
import footerApi from "../../api/footerApi.json";

const Footer = () => {
    const footerIcon = {
        MdPlace: <MdPlace/>
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