/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";
import { Cover } from "@/components/ui/cover";
import { useTranslations } from "next-intl";
import Footer from "@/components/Footer";

export default function Home() {
  const [locale, setLocale] = useState("");
  const [pathname, setPathname] = useState("");

  // Sécuriser l'accès aux API de navigation côté client
  useEffect(() => {
    setLocale(document.documentElement.lang); // Utilisez une approche plus adaptée si nécessaire
    setPathname(window.location.pathname);
  }, []);

  const path = pathname.split('/')[1];
  const t = useTranslations('HomePage');

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
          {/* Reste du composant */}
        </div>
      </BackgroundLines>
      <Footer />
    </div>
  );
}
