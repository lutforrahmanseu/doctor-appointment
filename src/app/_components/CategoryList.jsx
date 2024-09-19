
'use client'
import { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import doctorCategories from "@/lib/data";
import Image from "next/image";
import Modal from "./Modal";
import "animate.css"; // Import Animate.css

export default function CategoryList({ selectedCategory, searchTerm }) {
  // Modal state
  const [showModal, setShowModal] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const router = useRouter(); // Initialize useRouter

  // Filter categories based on selected category
  const filteredCategories = selectedCategory
    ? doctorCategories.filter((cat) => cat.categoryName === selectedCategory)
    : doctorCategories;

  // Handle image click to show modal with details
  const handleImageClick = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  // Handle Book Now button click
  const handleBookNowClick = (doctor) => {
    router.push(`/booknow?doctorId=${encodeURIComponent(doctor.name)}`);
  };

  return (
    <div>
      {filteredCategories.map((category) => {
        // Filter doctors within the category by search term
        const filteredDoctors = category.doctors.filter((doctor) =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return (
          <div key={category.categoryName} className="mt-6">
            <h3 className="text-xl font-bold animate__animated animate__fadeInLeft">
              {category.categoryName}{" "}
              <span className="text-primary">Doctors</span>
            </h3>
            {filteredDoctors.length > 0 ? (
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {filteredDoctors.map((doctor, index) => (
                  <Card
                    key={index}
                    className="animate__animated animate__fadeInUp"
                  >
                    <CardHeader>
                      <Image
                        src={doctor.image}
                        alt={doctor.name}
                        width={200}
                        height={200}
                        className="w-full cursor-pointer animate__animated animate__zoomIn animate__delay-0.8s"
                        onClick={() => handleImageClick(doctor)} // Handle image click
                      />
                      <p className="text-primary bg-blue-200 w-28 text-center rounded-lg ">
                        {category.categoryName}
                      </p>
                      <CardTitle>{doctor.name}</CardTitle>
                      <CardDescription>{doctor.specialization}</CardDescription>
                      <Button
                        className="w-full bg-white text-primary hover:text-white rounded-2xl border border-blue-500"
                        onClick={() => handleBookNowClick(doctor)} // Handle Book Now click
                      >
                        Book Now
                      </Button>
                    </CardHeader>
                  </Card>
                ))}
              </ul>
            ) : (
              <p className="text-red-600 my-10 font-medium text-center animate__animated animate__shakeX">
                No doctors found for this category
              </p>
            )}
          </div>
        );
      })}

      {/* Modal for showing doctor details */}
      {showModal && selectedDoctor && (
        <Modal onClose={() => setShowModal(false)}>
          <div className="p-6 animate__animated animate__fadeIn">
            {/* Modal fade-in animation */}
            <Image
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              width={400}
              height={400}
            />
            <h2 className="text-2xl font-bold mt-4">{selectedDoctor.name}</h2>
            <p>{selectedDoctor.specialization}</p>
            <p>{selectedDoctor.experience}</p>
            <h3>{selectedDoctor.contact}</h3>
          </div>
        </Modal>
      )}
    </div>
  );
}
