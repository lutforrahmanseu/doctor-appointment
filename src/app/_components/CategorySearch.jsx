// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { HeartPulse, Search, Stethoscope } from "lucide-react";
// import Link from "next/link";
// import React from "react";

// export default function CategorySearch() {
//   const categories = [
//     {
//       id: 1,
//       name: "Dentist",
//       path: "/dentist",
//       icons: <Stethoscope />,
//     },
//     {
//       id: 2,
//       name: "Dermatologist",
//       path: "/dermatologist",
//       icons: <HeartPulse />,
//     },
//     {
//       id: 3,
//       name: "Orthopedic",
//       path: "/orthopedic",
//       icons: <HeartPulse />,
//     },
//     {
//       id: 4,
//       name: "Neurologist",
//       path: "/neurologist",
//       icons: <HeartPulse />,
//     },
//     {
//       id: 5,
//       name: "Otology",
//       path: "/otology",
//       icons: <HeartPulse />,
//     },
//     {
//       id: 6,
//       name: "Gender Doctor",
//       path: "/gender-doctor",
//       icons: <HeartPulse />,
//     },
//   ];
//   return (
//     <div className="mb-10">
//       <div className=" flex items-center flex-col gap-4">
//         <h2 className="text-3xl font-bold tracking-wider ">
//           Search <span className="text-primary">Doctor</span>
//         </h2>
//         <p className=" text-gray-600 text-xl">
//           Search your Doctor and Appointment
//         </p>

//         <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
//           <Input type="search" placeholder="Search..." />
//           <Button type="submit">
//             <Search className="h-5 w-5 mr-2" /> Submit
//           </Button>
//         </div>
//         <div className="">
//           <ul className="grid grid-cols-1 gap-4   sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
//             {categories.map((category) => (
//               <Link href={category.path} key={category.id}>
//                 <li className="hover:text-primary hover:scale-105 transition-all w-40 h-20 flex flex-col gap-2 bg-blue-200 rounded-lg justify-center items-center  ease-in-out ">
//                   <div>{category.icons}</div>
//                   {category.name}
//                 </li>
//               </Link>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { HeartPulse, Search, Stethoscope } from "lucide-react";
import doctorCategories from "@/lib/data";

export default function CategorySearch() {
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const renderDoctors = () => {
    const filteredCategories = selectedCategory
      ? doctorCategories.filter((cat) => cat.categoryName === selectedCategory)
      : doctorCategories;

    return filteredCategories.map((category) => (
      <div key={category.categoryName} className="mt-6">
        <h3 className="text-2xl font-bold">{category.categoryName} Doctors</h3>
        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {category.doctors.map((doctor, index) => (
            <li key={index} className="p-4 bg-white shadow-md rounded-lg">
              <h4 className="text-lg font-semibold">{doctor.name}</h4>
              <p className="text-gray-700">{doctor.specialization}</p>
              <p className="text-gray-500">{doctor.experience}</p>
              <p className="text-gray-500">{doctor.location}</p>
              <p className="text-gray-500">{doctor.contact}</p>
            </li>
          ))}
        </ul>
      </div>
    ));
  };

  return (
    <div className="mb-10">
      <div className="flex items-center flex-col gap-4">
        <h2 className="text-3xl font-bold tracking-wider ">
          Search <span className="text-primary">Doctor</span>
        </h2>
        <p className="text-gray-600 text-xl">
          Search your Doctor and Appointment
        </p>

        <div className="flex w-full mt-3 max-w-sm items-center space-x-2">
          <Input type="search" placeholder="Search..." />
          <Button type="submit">
            <Search className="h-5 w-5 mr-2" /> Submit
          </Button>
        </div>

        <div className="mt-6">
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {categories.map((category) => (
              <li
                key={category.id}
                onClick={() => handleCategoryClick(category.name)}
                className="hover:text-primary hover:scale-105 transition-all w-40 h-20 flex flex-col gap-2 bg-blue-200 rounded-lg justify-center items-center cursor-pointer ease-in-out"
              >
                <div>{category.icons}</div>
                {category.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl font-bold tracking-wider">Popular List</h1>
        {renderDoctors()}
      </div>
    </div>
  );
}
