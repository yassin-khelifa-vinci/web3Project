"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../components/hooks/use-outside-click";
import Navbar from "../../../components/Navbar";
import { cars } from "../../../data/cars";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { SelectContent, Select, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useTranslations } from 'next-intl';
import Footer from "@/components/Footer";

export default function ExpandableCardDemo() {
  const t = useTranslations('CarPage');

  const [active, setActive] = useState<(typeof cars)[number] | boolean | null>(null);
  const [hoveredCar, setHoveredCar] = useState<string | null>(null);
  
  // Nouveaux états pour les critères de recherche
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [filteredCars, setFilteredCars] = useState(cars); // Liste de voitures filtrées

  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  // Fonction de recherche
  const handleSearch = () => {
    const filtered = cars.filter((car) => {
      const matchesBrand = brand ? car.brand.toLowerCase().includes(brand.toLowerCase()) : true;
      const matchesModel = model ? car.model.toLowerCase().includes(model.toLowerCase()) : true;
      const matchesYear = year ? car.year === parseInt(year) : true;
      return matchesBrand && matchesModel && matchesYear;
    });
    setFilteredCars(filtered);
  };

  return (
    <>
      <Navbar />
      <div className="mt-28">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl lg:text-5xl font-sans py-2 relative font-bold tracking-tight">
          Car Finder
        </h2>
      </div>
      
      <div className="flex justify-center items-center mb-10">
        <div className="flex space-x-3">
          <Input
            type="text"
            placeholder="Volkswagen"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Tiguan"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <Select onValueChange={(value) => setYear(value)}>
            <SelectTrigger id="year">
              <SelectValue placeholder="Sélectionner une année" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
            </SelectContent>
          </Select>
          <Button type="submit" className="bg-slate-600" onClick={handleSearch}>
            Rechercher
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[600px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <Image
                  priority
                  width={360}
                  height={240}
                  src={active.src}
                  alt={active.title}
                  className="w-full lg:h-96 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <motion.a
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <motion.div className="font-bold grid grid-cols-3 gap-4 text-center">
                  <div>{active.max_speed} km/h</div>
                  <div>{active.power} ch</div>
                  <div>{active.zero_to_100} s</div>
                </motion.div>
              </div>
              <div className="pt-4 relative px-4">
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                >
                  <p>{t(active.title)}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      
      {/* Affichage des voitures filtrées */}
      <ul className="w-full grid grid-cols-1 md:grid-cols-4 items-start gap-4">
        {filteredCars.map((car) => (
          <motion.div
            layoutId={`card-${car.title}-${id}`}
            key={car.title}
            onClick={() => setActive(car)}
            className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer relative"
            onMouseEnter={() => setHoveredCar(car.title)}
            onMouseLeave={() => setHoveredCar(null)}
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${car.title}-${id}`} className="relative">
                <Image
                  width={360}
                  height={240}
                  src={car.src}
                  alt={car.title}
                  className={`h-72 w-full rounded-lg object-cover object-top transition-opacity duration-300 ${hoveredCar === car.title && car.price ? 'opacity-50' : 'opacity-100'}`}
                />
                {hoveredCar === car.title && car.price && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg">
                    <span className="text-lg font-bold text-stone-50">{car.price}</span>
                  </div>
                )}
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${car.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {car.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${car.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {car.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
      <Footer />
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
