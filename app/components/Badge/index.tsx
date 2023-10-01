"use client";
import { Card, Image } from "@nextui-org/react";

type Props = {
  available: boolean;
  image: string;
  title: string;
};

export default function Badge({ available, image, title }: Props) {
  return (
    <div>
      <Image
        alt="Woman listing to music"
        className={`object-cover rounded-full ${!available && "blur-md"} `}
        src={image}
      />
      <Card
        isFooterBlurred
        radius="lg"
        className="h-8 mt-2 mb-8 flex text-center justify-center"
      >
        <p className="text-tiny  font-bold text-black">{title}</p>
      </Card>
    </div>
  );
}
