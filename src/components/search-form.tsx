"use client";

import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export function SearchForm() {
  const router = useRouter();

  const searchParams = useSearchParams();

  const queryValue = searchParams.get("q") ?? "";

  function handleSubmit(evt: FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const q = formData.get("q");

    router.push(`/search?q=${q}`);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="hidden lg:flex w-[320px] items-center gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-zinc-700"
    >
      <Search className="w-5 h-5 text-zinc-500" />
      <input
        name="q"
        required
        defaultValue={queryValue}
        placeholder="Buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder::text-zinc-500"
      />
    </form>
  );
}
