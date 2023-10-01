import QuizPageContent from "./QuizPageContent";

export default function SingleQuizPage({ params }: { params: { id: string } }) {
  return <QuizPageContent quizId={params.id} />;
}
