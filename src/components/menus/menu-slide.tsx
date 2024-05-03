"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import type { Menu } from "@/types";

import "swiper/css";
import "./slide.css";

interface MenuSlideProps {
  menus: Menu[];
  title: string;
}

export function MenuSlide({ menus, title }: MenuSlideProps) {
  return (
    <div className="w-full pl-6 md:pl-0">
      <h3 className="font-bold mb-2">{title}</h3>

      <Swiper
        spaceBetween={10}
        slidesPerView={3}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
        }}
      >
        {menus.map(({ id, name, image }) => (
          <SwiperSlide key={id}>
            <div className="relative max-w-[157px] md:max-w-[265px] rounded-xl overflow-hidden">
              <Image
                alt="Indonesia Food"
                className="object-cover w-full aspect-square md:aspect-auto"
                height="129"
                src={image}
                width="265"
              />
              <p className="absolute text-sm font-semibold text-white z-20 bottom-2 start-2">
                {name}
              </p>
              <div className="absolute bg-gradient-to-t from-black to-transparent z-10 w-full h-full inset-0 start-0"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
