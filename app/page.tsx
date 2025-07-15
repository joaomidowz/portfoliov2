// app/page.tsx
import { Suspense } from "react";
import HomeContent from "@/components/HomeContent";

export default function Page() {
  return (
    <Suspense fallback={<div className="text-center p-4">Carregando...</div>}>
      <HomeContent />
    </Suspense>
  );
}
