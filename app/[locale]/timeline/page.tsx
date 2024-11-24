'use client';

import React from "react";
import { Timeline } from "../../../components/ui/timeline";
import Navbar from "../../../components/Navbar";
import { cars } from "../../../data/cars";
import Footer from "@/components/Footer";

export default function TimelineDemo() {
  // Regroupement des voitures par année
  const groupedCars = cars.reduce((acc, car) => {
    (acc[car.year] = acc[car.year] || []).push(car);
    return acc;
  }, {} as Record<number, typeof cars>);

  // Transformation des données pour le composant Timeline
  const timelineData = Object.entries(groupedCars).map(([year, cars]) => ({
    title: year, // Utilisation de l'année comme titre
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {cars.map(car => (
          <div key={car.title} className="border p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">{car.title}</h3>
            <img 
              src={car.src} 
              alt={car.title} 
              className="rounded-lg w-full h-auto"
            />
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <div>
      <Navbar />
      <Timeline data={timelineData} />
      <Footer />
    </div>
  );
}
