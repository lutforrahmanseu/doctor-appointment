import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import doctorCategories from "@/lib/data";
import Image from "next/image";

export default function CategoryList({ selectedCategory, searchTerm }) {
  // Filter categories based on selected category
  const filteredCategories = selectedCategory
    ? doctorCategories.filter((cat) => cat.categoryName === selectedCategory)
    : doctorCategories;

  return (
    <div className="">
      {filteredCategories.map((category) => {
        // Filter doctors within the category by search term
        const filteredDoctors = category.doctors.filter((doctor) =>
          doctor.name.toLowerCase().includes(searchTerm.toLowerCase())
        )

        return (
          <div key={category.categoryName} className="mt-6 ">
            <h3 className="text-xl font-bold">{category.categoryName} <span className="text-primary">Doctors</span></h3>
            {filteredDoctors.length > 0 ? (
              <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {filteredDoctors.map((doctor, index) => (
                  <Card key={index}>
                  <CardHeader>
                    <Image src={doctor.image} alt={doctor.name} width={200} height={200} className="w-full" />
                    <p className="text-primary bg-blue-200 w-28 text-center rounded-lg ">{category.categoryName}</p>
                    <CardTitle>{doctor.name}</CardTitle>
                    <CardDescription>{doctor.name}</CardDescription>
                    <Button className="w-full bg-white text-primary hover:text-white rounded-2xl border border-blue-500">Book Now </Button>
                  </CardHeader>
                </Card>
                ))}
              </ul>
            ) : (
              <p className="text-red-600 my-10 font-medium text-center ">No doctors found for this category</p>
            )}
          </div>
        );
      })}
    </div>
  );
}


