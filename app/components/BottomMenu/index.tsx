import TitleLink from "./TitleLink";

export default function BottomMenu() {
  return (
    <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
      <TitleLink
        url={"/register"}
        title="Create an account"
        description="Sign in to play quizzles and evolve your city."
      />

      <TitleLink
        url={"/map"}
        title="Chat with AI bot"
        description="You can ask in AI assistant anything about politics or economics"
      />
      <TitleLink
        url={"/quizzles"}
        title="Play quizzles"
        description="Explore and play our interactive quizzles."
      />

      <TitleLink
        url={"/achievements"}
        title="Achievements"
        description="Earn achievements and win free tickets and more."
      />
    </div>
  );
}
