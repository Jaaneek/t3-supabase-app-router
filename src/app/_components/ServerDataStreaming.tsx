import { api } from "~/trpc/server";

export async function ServerDataStreaming() {
  const data = await api.example.hello.query({ text: "from tRPC" });

  await new Promise((resolve) => setTimeout(resolve, 1000));

  return <p className="text-2xl text-white">{data.greeting}</p>;
}
