"use client";

import { ClipboardEdit, CreditCard, MousePointerSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import Counter from "./components/counter";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="flex items-center justify-center">
          <h3 className="my-5 text-3xl text-center">Home Page</h3>
          <Button className="ml-3" onClick={() => router.push("/board")}>
            <ClipboardEdit size={20} />
          </Button>
        </div>
        <Counter />
        <div className=" w-[500px] flex justify-center bg-stone-100 mt-7 rounded-md p-5">
          <div className="grid justify-center grid-cols-2 gap-2 ">
            <Button
              className="bg-indigo-500"
              onClick={() => router.push("/card")}
            >
              <CreditCard size={20} className="mr-2" />
              Card
            </Button>
            <Button
              className="bg-purple-600"
              onClick={() => router.push("/button")}
            >
              <MousePointerSquare size={20} className="mr-2" />
              Button
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
