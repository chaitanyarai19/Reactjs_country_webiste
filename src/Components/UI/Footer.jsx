import footerApi from "../../api/footerApi.json";

const Footer = () => {
    return(
        <>
            <footer className="footer-section">
                <div className="container grid grid-three-cols">
                    {
                        footerApi.map((footer, index) => {
                            return(
                                <div className="footer-contact" key={index}>
                                    <div className="icon">{footer.icon}</div>
                                    <div className="footer-contact-text">
                                        <h3 className="footer-title">{footer.title}</h3>
                                        <p className="footer-subtitle">{footer.subTitle}</p>
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