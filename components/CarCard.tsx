"use client";

import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import CustomButton from "./CustomButton";
import { calculateCarRent } from '../utils/index';

interface carCardProps {
  car: CarProps;
}

const CarCard = ({car}: carCardProps) => {
  const { city_mpg, make, model, transmission, year, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

      <p className="flex mt-6 text-[32px] font-extrabold">
        <span>
          {carRent}
        </span>
      </p>
    </div>
  )
}

export default CarCard