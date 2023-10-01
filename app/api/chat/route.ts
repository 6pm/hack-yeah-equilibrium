import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = "edge";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const messageTemplate = (prompt: string) => {
  return `I want you to act as a expert in politics, economic, elections and voting expert, it will be your job to explain these concepts in an easy-to-understand manner. Your name is Albert,. If I ask you anything not related to following topics please skip this question. Take into account you are speaking with young person 18-25 years old who have to be engaged to vote. Answer politely and with humor. So my question is following: "${prompt}". If it possible please try not to be so verbose and don't start from greeting. Thanks.`;
};

// Create an OpenAI API client (that's edge friendly!)
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  // Extract the `messages` from the body of the request
  const { messages } = await req.json();

  const userMessages = messages.reduce(
    (acc: ChatMessage[], item: ChatMessage) => {
      if (item.role === "user") {
        const formattedMessage = {
          ...item,
          content: messageTemplate(item.content),
        };

        acc.push(formattedMessage);
      }
      return acc;
    },
    []
  );
  console.log("userMessages", userMessages);
  // const mes = [{ role: "user", content: "hello. How are you?\n" }];

  // console.log("messages", messages);

  // Ask OpenAI for a streaming chat completion given the prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: userMessages,
  });
  // Convert the response into a friendly text-stream
  // @ts-ignore
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
