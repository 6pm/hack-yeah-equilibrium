import AuthComponent from "@/app/components/AuthComponent";

export default function MapPage() {
  return (
    <>
      <h1 className="text-2xl my-10">Login</h1>
      <h3 className="text-xl my-10">Politics, Economics, Elections, and voting.</h3>
      <p>
        Join us, manage your future!
        Expand your borders, gain new knowledge and win prizes by you decisions.
      </p>
      <p>
        - AI chat assistant
        - Voting reminders
        - Reward prizes and badges
        - Multi-information quizzles
        - Valuable and simple information
        - Useful links
      </p>

      <AuthComponent />
    </>
  );
}
