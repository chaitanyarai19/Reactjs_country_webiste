import React from "react";

const Contact = () => {
    return(
        <>
            <section className="section-contact container">
                <h2 className="container-title">
                Get in Touch with Us
                </h2>
                <form action="">
                    <input type="text" name="name" placeholder="Your Name" autoComplete="false" required/>
                    <input type="email" name="email" placeholder="Your Email" autoComplete="false" required/>
                    <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-darken btn-inline bg-blue-box">Send Message</button>
                </form>
            </section>
        </>
    )
}

export default Contact;