"use client"
import Badge from "../components/Badge";
import { useEffect, useState } from "react";
import { getBadges } from "@/app/lib/backend";
import { useAuth } from "../lib/auth";
import { Card, CardBody } from "@nextui-org/react";

export type BadgeType = {
  id: string;
  title: string;
  image_name: string;
  coins_needed: number;
  badge_info: {
    passed: boolean;
  };
};

export default function AchievementsPage() {
  const [badges, setBadges] = useState<BadgeType[]>([]);
  const [loading, setLoading] = useState(true);
  const { status } = useAuth();

  useEffect(() => {
    (async () => {
      const data = await getBadges();
      console.log(data);
      setBadges(data);
      setLoading(false);
    })();
  }, []);

  return (
    <div className=" flex-col items-left">
      <h1 className="text-2xl my-10 text-center">Achievements Badges</h1>
      <p className="mb-10 indent-4">
        Here you can see badges you have earned by acing quizzes and interacting
        with the application. These badges recognise your expertise in Politics,
        Economics, Elections, and Voting. Each badge comes with unique titles
        that reflect your achievements, from political enthusiast to election
        expert. Each badge tells the story of your engagement and knowledge.
      </p>

      {status === "not-autorized" && (
        <Card>
          <CardBody>
            <h2 className="text-2xl text-center">
              Sign in to collect achievements
            </h2>
          </CardBody>
        </Card>
      )}

      <div className=" gap-10 grid grid-cols-2 sm:grid-cols-3 grid-rows-2">
        {badges?.map?.((i) => {
          return (
            <Badge
              available={i.badge_info.passed}
              image={`/images/badges/${i.image_name}.jpeg`}
              title={i.title}
              key={i.id}
            />
          );
        })}
      </div>
    </div>
  );
}
