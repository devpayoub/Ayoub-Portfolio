"use client";
import Image from "next/image";
import Link from "next/link";
import GitHubIcon from "../../public/images/socials/github-icon.svg";
import LinkedinIcon from "../../public/images/socials/linkedin-icon.svg";
import XIcon from "../../public/images/socials/x-icon.svg";
import MailIcon from "../../public/images/socials/icons8-gmail.svg";
import { MessageIcon } from "./MessageIcon";
import { FormEvent } from "react";
import toast from "react-hot-toast";

export const EmailSection = () => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;
    const data = {
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    toast.promise(
      fetch(endpoint, options).then((response) => {
        if (!response.ok) {
          throw new Error(`Server error: ${response.status}`);
        }
        form.reset();
      }),
      {
        loading: "Sending message...",
        success: "Message sent successfully",
        error: "Failed to send message.",
      }
    );
  };

  return (
    <section className="grid md:grid-cols-2 md:my-8 py-24 gap-4" id="contact">
      <div>
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="flex flex-row gap-2 items-center">
          <Link href="https://github.com/devpayoub" target="_blank">
            <Image src={GitHubIcon} alt="github icon" width={40} height={40} />
          </Link>
          <Link href="mailto:trabelsi.ayoub1998@gmail.com" target="_blank">
            <Image
              src={MailIcon}
              alt="linkedin icon"
              width={40}
              height={40}
            />
          </Link>
          {/* <Link href="https://x.com/AshwinN84178463" target="_blank">
            <Image src={XIcon} alt="twitter icon" width={40} height={40} />
          </Link> */}
         
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white font-medium block mb-2 text-sm"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 w-full"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-6">
            <label className="text-white font-medium block mb-2 text-sm">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 w-full"
              placeholder="Enter your subject"
            />
          </div>
          <div className="mb-6">
            <label className="text-white font-medium block mb-2 text-sm">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block p-2.5 w-full"
              placeholder="Enter your message"
            />
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#6b22cf] via-[#7074e5] to-[#74aff5] text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message <MessageIcon />
          </button>
        </form>
      </div>
    </section>
  );
};
