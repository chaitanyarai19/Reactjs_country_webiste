import React from "react";

const Contact = () => {
    const handleFormSubmit = (formData) => {

        const formInputData = Object.fromEntries(formData.entries());
    }
    return(
        <>
            <section className="section-contact container">
                <h2 className="container-title">
                Get in Touch with Us
                </h2>
                <div className="contact-wrapper container">
                <form action={handleFormSubmit}>
                    <input className="form-control" type="text" name="name" placeholder="Your Name" autoComplete="false" required/>
                    <input className="form-control" type="email" name="email" placeholder="Your Email" autoComplete="false" required/>
                    <textarea className="form-control" name="message" rows="5" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-darken btn-inline bg-blue-box">Send Message</button>
                </form>
                </div>
            </section>
        </>
    )
}

export default Contact;