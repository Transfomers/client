import React from "react";
import ContactSection from "../components/ContactSection";
import ContactBooking from "../components/home/ContactBooking"
function Contact() {
 
  return (
    <div className="mx-[34px] text-body">
      
      <ContactBooking/>
      <ContactSection/>

      <div className="my-[100px] text-green-800">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.344124046556!2d9.239497274788327!3d4.15256539582125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x106133cf9ec0abd7%3A0x93a336ad96afa749!2sClerk&#39;s%20Quarter%20(clerk&#39;s%20quarter)!5e0!3m2!1sen!2scm!4v1728753660678!5m2!1sen!2scm"
          width="100%"
          height="450"
          style={{border:0}}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Digisol location clerks quaters"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
