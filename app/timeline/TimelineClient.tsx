'use client';

import React from 'react';
import Image from 'next/image';
import { Timeline } from '../../components/ui/timeline';
import Navbar from '../../components/Navbar';
import { cars } from '../../data/cars';
import Footer from '@/components/Footer';

export default function TimelineClient() {
  // Group cars by year
  const groupedCars = Object.entries(
    cars.reduce((acc, car) => {
      (acc[car.year] = acc[car.year] || []).push(car);
      return acc;
    }, {} as Record<string, typeof cars>)
  ).map(([year, cars]) => ({
    year,
    title: `Cars from ${year}`,
    content: (
      <div>
        {cars.map(car => (
          <div key={car.id}>
            <h3>{car.brand} {car.model}</h3>
            <p>{car.description}</p>
          </div>
        ))}
      </div>
    ),
  }));

  return (
    <div>
      <Navbar />
      <Timeline data={groupedCars} />
      <Footer />
    </div>
  );
}