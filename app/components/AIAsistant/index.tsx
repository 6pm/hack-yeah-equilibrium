"use client";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  User,
} from "@nextui-org/react";
import { Card, CardBody } from "@nextui-org/react";
import ChatForm from "./ChatForm";

export default function AIAsistant() {
  return (
    <Popover placement="top">
      <PopoverTrigger className="fixed right-4 bottom-3 z-10">
        <Card>
          <CardBody>
            <User
              as="button"
              name="Albert Einstein"
              description="AI asistant"
              className="transition-transform"
              avatarProps={{
                src: "/images/ai-avatar.jpg",
              }}
            />
          </CardBody>
        </Card>
      </PopoverTrigger>

      <PopoverContent>
        <ChatForm />
      </PopoverContent>
    </Popover>
  );
}
