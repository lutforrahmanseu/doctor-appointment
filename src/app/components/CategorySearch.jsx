"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeartPulse, Search, Stethoscope } from "lucide-react";
import CategoryList from "./CategoryList";

export default function CategorySearch() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    {
      id: 1,
      name: "Dentist",
      path: "/dentist",
      icons: <Stethoscope />,
    },
    {
      id: 2,
      name: "Cardiologist",
      path: "/cardiologist",
      icons: <HeartPulse />,
    },
    {
      id: 3,
      name: "Orthopedic",
      path: "/orthopedic",
      icons: <HeartPulse />,
    },
    {
      id: 4,
      name: "Neurologist",
      path: "/neurologist",
      icons: <HeartPulse />,
    },
    {
      id: 5,
      name: "Otolaryngologist",
      path: "/otolaryngologist",
      icons: <HeartPulse />,
    },
    {
      id: 6,
      name: "Gender Specialist",
      path: "/gender-doctor",
      icons: <HeartPulse />,
    },
  ];

  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="mb-10">
      <div>
        {/* Left Side: Category Selection */}
      <div className="flex items-center flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-wider">
          Search <span className="text-primary">Doctor</span>
        </h2>
        <p className="text-gray-600 text-xl">
          Search your Doctor and Appointment
        </p>

        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
          <Input 
            type="search" 
            placeholder="Search..." 
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <Button type="submit">
            <Search className="h-5 w-5 mr-2" /> Search
          </Button>
        </div>

        <div className="mt-6">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="text-primary hover:scale-105 transition-all w-96 md:w-40 h-20 flex flex-col gap-2 bg-blue-200 rounded-lg justify-center items-center cursor-pointer ease-in-out"
              >
                <div>{category.icons}</div>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
        <h1 className="text-2xl font-bold tracking-wider text-primary">Popular List</h1>
        <CategoryList selectedCategory={selectedCategory} searchTerm={searchTerm} />
      </div>
      </div>
    </div>
  );
}




