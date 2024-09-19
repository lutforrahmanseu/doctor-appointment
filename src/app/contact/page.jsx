import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export default function ContactUs() {
  return (
    <div className="max-w-2xl mx-auto my-10 p-6 border border-gray-200 shadow-md rounded-md">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Us</h1>
      <form className="space-y-6">
        {/* Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Your Name
          </label>
          <Input type="text" id="name" placeholder="Enter your name" className="mt-1 w-full" />
        </div>

        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <Input type="email" id="email" placeholder="Enter your email" className="mt-1 w-full" />
        </div>

        {/* Subject Input */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
            Subject
          </label>
          <Input type="text" id="subject" placeholder="Enter subject" className="mt-1 w-full" />
        </div>

        {/* Message Textarea */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">
            Message
          </label>
          <Textarea id="message" placeholder="Enter your message" className="mt-1 w-full" rows={6} />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <Button type="submit" className="w-full">
            Send Message
          </Button>
        </div>
      </form>
    </div>
  );
}
