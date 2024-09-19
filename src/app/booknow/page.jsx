"use client";

import { useState, useEffect } from "react";
import { useRouter} from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import doctorCategories from "@/lib/data";

const BookNow = () => {
  const [doctor, setDoctor] = useState(null);
  const [appointmentDetails, setAppointmentDetails] = useState({
    name: "",
    email: "",
    date: "",
    message: "",
  });
  const router = useRouter();
 

  useEffect(() => {
    const foundDoctor = doctorCategories
        .flatMap((category) => category.doctors)
        .find((doc) => doc.name === doc.name);
      setDoctor(foundDoctor);
   
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    router.push("/thank");
  };

  if (!doctor) {
    return <p>Loading...</p>;
  }

  return (
    <div className="my-10 max-w-7xl mx-auto px-4">
      <h1 className="text-2xl font-bold mb-10 text-center">
        Book an Appointment with <span className="text-primary ">{doctor.name}</span>
      </h1>
      <div className="flex flex-col items-center md:flex-row">
        <div className="flex-shrink-0 w-full md:w-1/2 mb-6 md:mb-0">
          <Image
            src={doctor.image}
            alt={doctor.name}
            className="w-full h-auto rounded-lg shadow-lg"
            width={500}
            height={300}
          />
        </div>
        {/* Booking Form */}
        <div className="w-full md:w-2/3 md:pl-6">
          <form onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              value={appointmentDetails.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              required
              className="mb-4 outline-none"
            />
            <Input
              type="email"
              name="email"
              value={appointmentDetails.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              required
              className="mb-4 outline-none"
            />
            <Input
              type="date"
              name="date"
              value={appointmentDetails.date}
              onChange={handleInputChange}
              required
              className="mb-4 outline-none"
            />
            <Textarea
              name="message"
              value={appointmentDetails.message}
              onChange={handleInputChange}
              placeholder="Additional Details"
              className="mb-4 outline-none"
            />
            <Button type="submit" className="mt-4">
              Submit Booking
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNow;
