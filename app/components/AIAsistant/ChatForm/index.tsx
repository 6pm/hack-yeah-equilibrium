"use client";
import { useChat } from "ai/react";
import { Textarea, Link, Button, Divider } from "@nextui-org/react";
import { useAuth } from "@/app/lib/auth";

const messageTemplate = (prompt: string) => {
  return `I want you to act as a expert in politics, economic, elections and voting expert, it will be your job to explain these concepts in an easy-to-understand manner. Your name is Albert. If I ask you anything not related to following topics please skip this question. Take into account you are speaking with young person 18-25 years old who have to be engaged to vote. Answer politely and with humor. So my question is following: "${prompt}".`;
};

export default function ChatForm() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const { status } = useAuth();
  console.log("data ddd", status);

  const disabled = status !== "autorized";

  return (
    <div className="py-2" style={{ width: 300 }}>
      <section className="max-h-80 overflow-auto">
        {messages?.slice(-2).map((m) => (
          <div className="mb-2 text-xs" key={m.id}>
            <span className="font-bold">
              {m.role === "user" ? "You: " : "Albert: "}
            </span>
            {m.content}
          </div>
        ))}

        {messages?.length > 0 && <Divider className="my-4" />}
      </section>

      <form className="w-full" onSubmit={handleSubmit} method="post">
        <Textarea
          onChange={handleInputChange}
          value={input}
          label="Hey there! I'm Albert, your friendly politics, economics, elections, and voting expert."
          labelPlacement="outside"
          placeholder="Enter your question"
          isDisabled={disabled}
          className="mb-5"
        />

        {disabled ? (
          <Button
            className="grow w-full"
            as={Link}
            color="primary"
            href="/register"
            type="submit"
          >
            Register to ask a question
          </Button>
        ) : (
          <Button className="grow w-full" color="primary" href="" type="submit">
            Ask
          </Button>
        )}
      </form>
    </div>
  );
}
