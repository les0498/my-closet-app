"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen gap-6">
      <h1 className="text-3xl font-bold">My Closet</h1>

      <p className="text-lg">오늘 뭐 입었나?</p>

      <button
        onClick={() => router.push("/closet")}
        className="px-6 py-3 bg-black text-white rounded-xl"
      >
        기록하기
      </button>
    </main>
  );
}