import Shop from "../Shop";

export default function MapContent() {
  return (
    <>
      <h1 className="text-2xl my-10 text-center">Shopping items</h1>

      <p className="pb-10 indent-4">
        Lets get starting shopping! This page presents items that you can
        acquire using the coins you have earned from successfully completing
        quizzes. What makes shopping even more rewarding is that every item you
        see can be yours by exchanging your hard-earned coins. It is a unique
        way to turn your knowledge and quiz achievements into tangible rewards.
      </p>
      <Shop />
    </>
  );
}
