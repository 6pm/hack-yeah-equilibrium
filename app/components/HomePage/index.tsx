"use client";
import { Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import BottomMenu from "../BottomMenu";

export default function HomePage() {
  return (
    <>
      <div className="my-5">
        <Card className="col-span-12 border-0" isFooterBlurred>
          <CardHeader className="absolute z-20 text-xl top-10 text-center flex-col text-black"></CardHeader>

          <Image
            isBlurred
            src="/images/home-bg-2.jpeg"
            alt="NextUI Album Cover"
 
          />

          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-center">
            <h4 className="text-black font-medium text-center text-2xl">
              <span>
                <span className="font-bold text-primary">15 days</span>{" "}
                {"before Poland’s parliamentary election on 15 October"}.
              </span>
              <br />
              <span className="italic text-base text-center">
                Tree days before you will be notified about elections by email.
              </span>
            </h4>
          </CardFooter>
        </Card>
      </div>

      <BottomMenu />
    </>
  );
}
