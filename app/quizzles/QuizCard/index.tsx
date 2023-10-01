"use client";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Button,
  Link,
} from "@nextui-org/react";

export type QuizQuestion = {
  id: number;
  question_text: string;
  answer_1: string;
  answer_2: string;
  answer_3: string;
  answer_4: string;
  correct_answer_key: "a1" | "a2" | "a3" | "a4";
  quiz_id: number;
};

export type QuizType = {
  title: string;
  image_name: string;
  description: string;
  point_award: string;
  id: string;
  blocked: boolean;
  badge: { title: string };
  support_info: { title: string; description: string };
  quiz_questions: QuizQuestion[];
};

type Props = {
  quiz: QuizType;
  className?: string;
};

export default function QuizCard({ quiz }: Props) {
  return (
    <Card className="col-span-12 sm:col-span-4 h-[400px]" isFooterBlurred>
      <CardHeader className="absolute z-10 top-1 flex-col !items-start">
        <h4 className="text-white font-medium text-large">{quiz.title}</h4>
      </CardHeader>

      <Image
        removeWrapper
        alt="Card background"
        className="z-0 w-full h-full object-cover"
        src={`/images/quizes/${quiz.image_name}.jpeg`}
      />

      <CardFooter className="flex flex-col absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 ">
        <p
          className="text-black text-small leading-tight"
          style={{ minHeight: 70 }}
        >
          {quiz.description}
        </p>
        <div className="flex justify-between w-full mt-3">
          <div className="flex flex-col">
            <span className="text-small">
              Coins: <b className="text-primary">{quiz.point_award}</b>
            </span>
            <span className="text-small">
              Badge: <b className="text-primary">{quiz.badge.title}</b>
            </span>
          </div>

          {quiz.blocked ? (
            <Button
              className="text-tiny"
              // color="disabled"
              radius="full"
              disabled={quiz.blocked}
              size="sm"
            >
              Not available
            </Button>
          ) : (
            <Button
              className="text-tiny"
              as={Link}
              color="primary"
              radius="full"
              disabled={quiz.blocked}
              href={`/quizzles/${quiz.id}`}
              size="sm"
            >
              Play
            </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
