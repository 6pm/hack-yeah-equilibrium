"use client";

import { Accordion, AccordionItem, Card, Image } from "@nextui-org/react";
import { QuizType } from "../../QuizCard";

type Props = {
  quiz: QuizType;
};
export default function SupportInfo({ quiz }: Props) {
  return (
    <Card>
      <Accordion selectionMode="multiple" className="bg-white">
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={quiz.support_info.title}
        >
          {quiz.support_info.description}
        </AccordionItem>
      </Accordion>
    </Card>
  );
}
