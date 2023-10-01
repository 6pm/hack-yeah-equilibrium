"use client";

import { getQuizById } from "@/app/lib/backend";
import { Image } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { QuizType } from "../../QuizCard";
import SupportInfo from "../SupportInfo";
import QuizForm from "../QuizForm";

type Props = {
  quizId: string;
};

export default function QuizPageContent({ quizId }: Props) {
  const [quiz, setQuizzles] = useState<QuizType | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const data = await getQuizById(quizId);
      setQuizzles(data);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return <h1 className="text-2xl my-10 text-center">Loading quiz ...</h1>;
  }

  if (quiz) {
    return (
      <>
        <h1 className="text-2xl my-10 text-center">{quiz?.title}</h1>

        <div className="gap-4 grid grid-cols-4 mb-7">
          <div className="col-span-4 sm:col-span-1">
            <Image
              isBlurred
              src={`/images/quizes/${quiz.image_name}.jpeg`}
              alt="Quiz image"
              className="w-full"
            />
          </div>

          <div className="col-span-4 sm:col-span-3">
            <p className="pb-10 indent-4">{quiz.description}</p>
            <span className="text-lg">
              Coins: <b className="text-primary">{quiz.point_award}</b>
            </span>
            <br />
            <span className="text-lg">
              Badge: <b className="text-primary">{quiz.badge.title}</b>
            </span>
          </div>
        </div>

        <SupportInfo quiz={quiz} />

        <QuizForm quiz={quiz} />

        <p className="mb-10">
          If you have any questions about the quiz, feel free to ask our AI
          assistant, Albert. He is here to help and might even crack a joke or
          two! 😊
        </p>
      </>
    );
  }

  return null;
}
