"use client";
import AuthComponent from "@/app/components/AuthComponent";
import { Image } from "@nextui-org/react";

export default function RegisterPage() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl my-10 text-center">
        Join us, manage your future!
      </h1>

      <div className="mb-10">
        <AuthComponent />
      </div>

      <Image
        isBlurred
        src="/images/reg.jpeg"
        alt="Register image"
        shadow="sm"
        radius="lg"
        width="100%"
        className="w-full object-cover h-[200px] "
      />

      <ol className="my-5">
        <li>✅ AI chat assistant</li>
        <li>✅ Voting reminders</li>
        <li>✅ Reward prizes and badges</li>
        <li>✅ Multi-information quizzles</li>
        <li>✅ Valuable and simple information</li>
        <li>✅ Useful links</li>
      </ol>
    </div>
  );
}
