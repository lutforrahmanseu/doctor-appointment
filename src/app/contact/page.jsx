import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";
import 'animate.css';  // Importing Animate.css

export default function ContactUs() {
  return (
    <div className="max-w-2xl mx-auto my-10 p-6 border border-gray-200 shadow-md rounded-md animate__animated animate__fadeIn"> {/* Add animation to the container */}
      <h1 className="text-3xl font-bold text-center mb-6 animate__animated animate__bounceIn"> {/* Heading animation */}
        Contact Us
      </h1>
      <form className="space-y-6">
        {/* Name Input */}
        <div className="animate__animated animate__fadeInUp"> {/* Input animation */}
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <Input type="text" id="name" placeholder="Enter your name" className="mt-1 w-full" />
        </div>

        {/* Email Input */}
        <div className="animate__animated animate__fadeInUp animate__delay-1s"> {/* Delay for staggered animation */}
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input type="email" id="email" placeholder="Enter your email" className="mt-1 w-full" />
        </div>

        {/* Subject Input */}
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <Input type="text" id="subject" placeholder="Enter subject" className="mt-1 w-full" />
        </div>

        {/* Message Textarea */}
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <Textarea id="message" placeholder="Enter your message" className="mt-1 w-full" rows={6} />
        </div>

        {/* Submit Button */}
        <div className="text-center animate__animated animate__zoomIn animate__delay-4s">
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
