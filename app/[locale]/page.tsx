/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import { useLocale } from "next-intl";

export default function Home() {
  const pathname = usePathname();
  const path = pathname.split('/')[1]; 
  const t = useTranslations('HomePage');
  const locale = useLocale();

  return (
    <div>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Find your <Cover>dream</Cover> car <br /> with us.
        </h2>
        <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          {t('description')}
        </p>
        <div className="flex space-x-4 mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md" variant="outline">
                Find a car
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Find a Car</DialogTitle>
                <DialogDescription>
                  Enter your criteria to find the ideal car. Click search when you&apos;re done.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <Label htmlFor="brand" className="block mb-2">
                      Brands
                    </Label>
                    <Select>
                      <SelectTrigger id="brand">
                        <SelectValue placeholder="Select a brand" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="audi">Audi</SelectItem>
                          <SelectItem value="merco">Mercedes-Benz</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="year" className="block mb-2">
                      Year
                    </Label>
                    <Select>
                      <SelectTrigger id="year">
                        <SelectValue placeholder="Select a year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="2020">2020</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <Label htmlFor="model" className="block mb-2">
                    Model
                  </Label>
                  <Input id="model" defaultValue="SLK" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Search</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Link href={`/${locale}/cars`}>
            <Button className="px-4 py-2 rounded-md border border-neutral-300 bg-neutral-100 text-neutral-500 text-sm hover:-translate-y-1 transform transition duration-200 hover:shadow-md" variant="outline">
              All cars
            </Button>
          </Link>
        </div>
      </BackgroundLines>
      <Footer />
    </div>
  );
}
