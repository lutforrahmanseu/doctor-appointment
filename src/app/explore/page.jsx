"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import doctorCategories from "@/lib/data";
import Image from "next/image";
import Modal from "../_components/Modal";

export default function DoctorExplore() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState(null); // State for selected doctor
  const [showModal, setShowModal] = useState(false); // State for modal visibility

  // Combine all doctors into a single array for searching
  const allDoctors = doctorCategories.flatMap((category) => category.doctors);

  // Filter doctors based on search term
  const filteredDoctors = allDoctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle viewing details
  const handleViewDetails = (doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  // Handle closing the modal
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  return (
    <section className="py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl font-bold mb-6">Explore Doctors</h1>

        {/* Search Bar */}
        <div className="mb-6">
          <Input
            type="text"
            placeholder="Search for doctors..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full max-w-md"
          />
        </div>

        {/* Doctors List */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {filteredDoctors.length > 0 ? (
            filteredDoctors.map((doctor, index) => (
              <Card
                key={index}
                className="shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader>
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={200}
                    height={200}
                    className="w-full h-40 object-cover rounded-t-md"
                  />
                  <CardTitle className="text-xl font-semibold mt-2">
                    {doctor.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{doctor.specialization}</CardDescription>
                </CardContent>
                <Button
                  className="w-full bg-primary text-white border border-transparent hover:bg-primary-dark"
                  onClick={() => handleViewDetails(doctor)} // Show modal with doctor details
                >
                  View Details
                </Button>
              </Card>
            ))
          ) : (
            <p className="text-red-600">No doctors found.</p>
          )}
        </div>
      </div>

      {/* Modal for showing doctor details */}
      {showModal && selectedDoctor && (
        <Modal onClose={handleCloseModal}>
          <div className="p-6">
            <Image
              src={selectedDoctor.image}
              alt={selectedDoctor.name}
              width={400}
              height={400}
              className="w-full h-60 object-cover rounded-md"
            />
           <h2 className="text-2xl font-bold mt-4">{selectedDoctor.name}</h2>
            <p>{selectedDoctor.specialization}</p>
            <p>{selectedDoctor.experience}</p>
            <h3>{selectedDoctor.contact}</h3>
          </div>
        </Modal>
      )}
    </section>
  );
}
