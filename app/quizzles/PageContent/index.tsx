"use client";

import { useEffect, useState } from "react";
import QuizCard from "../QuizCard";
import type { QuizType } from "../QuizCard";
import { getQuizzles } from "@/app/lib/backend";
import { Card, CardBody, Skeleton } from "@nextui-org/react";
import { useAuth } from "@/app/lib/auth";

export default function QuizpageContent() {
  const [quizzles, setQuizzles] = useState<QuizType[]>([]);
  const [loading, setLoading] = useState(true);
  const { status } = useAuth();

  useEffect(() => {
    (async () => {
      const { quizzes } = await getQuizzles();

      setQuizzles(quizzes);
      setLoading(false);
    })();
  }, []);

  if (loading) {
    return (
      <div className="gap-4 grid grid-cols-12">
        <Skeleton
          isLoaded={true}
          className="col-span-12 sm:col-span-4 h-[400px]"
        >
          <div className="bg-default-300 h-400 rounded-lg  col-span-12 sm:col-span-4 h-[400px]"></div>
        </Skeleton>

        <Skeleton
          isLoaded={true}
          className="col-span-12 sm:col-span-4 h-[400px]"
        >
          <div className="bg-default-300 h-400 rounded-lg  col-span-12 sm:col-span-4 h-[400px]"></div>
        </Skeleton>

        <Skeleton
          isLoaded={true}
          className="col-span-12 sm:col-span-4 h-[400px]"
        >
          <div className="bg-default-300 h-400 rounded-lg  col-span-12 sm:col-span-4 h-[400px]"></div>
        </Skeleton>
      </div>
    );
  }

  {
    status === "not-autorized" && (
      <Card>
        <CardBody>
          <h2 className="text-2xl text-center">
            Sign in to collect achievements
          </h2>
        </CardBody>
      </Card>
    );
  }

  return (
    <div className="gap-4 grid grid-cols-12">
      {quizzles?.map?.((i) => {
        return <QuizCard quiz={i} key={i.id} />;
      })}
    </div>
  );
}
