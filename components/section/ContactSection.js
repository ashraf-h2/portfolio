import React from "react";
import ContactCard from "../cards/ContactCard";
import H2 from "../headings/H2";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import { HiMail } from "react-icons/hi";

export default function ContactSection() {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex justify-center mb-5 pb-3">
          <H2>Contact Me @</H2>
        </div>
        <div className="flex justify-center">
          <div className="grid auto-rows-max lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 xl:gap-x-8 gap-x-5 gap-y-8">
            <ContactCard
              title="LinkedIn"
              subtitle="/aggarwal-h"
              href="https://www.linkedin.com/in/aggarwal-h/"
              icon={<FaLinkedinIn color="white" size="40px" />}
            />
            <ContactCard
              title="GitHub"
              subtitle="/aggarwal-h"
              href="https://github.com/aggarwal-h"
              icon={<FaGithub color="white" size="46px" />}
            />
            <ContactCard
              title="Contact Number"
              subtitle="647-546-9571"
              href="tel://16475469571"
              icon={<MdPhone color="white" size="40px" />}
            />
            <ContactCard
              title="Email Address"
              subtitle="aggarwal.h@outlook.com"
              href="mailto:aggarwal.h@outlook.com"
              icon={<HiMail color="white" size="46px" />}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
