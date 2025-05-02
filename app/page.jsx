"use client"
import { assets } from "@/assets/assets";
import Message from "@/components/Message";
import PromptBox from "@/components/PromptBox";
import Sidebar from "@/components/Sidebar";
import { ChartBar, MenuIcon, MessageSquare } from "lucide-react";
import Image from "next/image";
import { useState } from "react"

export default function Page() {
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <div className="flex h-screen">
        {/* --sidebar-- */}
        <Sidebar expand={expand} setExpand={setExpand} />
        <div className="flex flex-1 flex-col items-center justify-center px-4 pb-8 bg-[#292a2d] text-white relative">
          <div className="md:hidden absolute px-4 top-6 flex items-center justify-between w-full">
            <button onClick={() => (expand ? setExpand(false) : setExpand(true))}>
              <MenuIcon className="rotate-180" />
            </button>
            <MessageSquare className="opacity-70" />
          </div>

          {messages.length === 0 ? (
            <>
              <div className="flex items-center gap-3">
                <Image src={assets.logo_icon} alt="" className="h-16" />
                <p className="text-2xl font-medium">Hi, I'a Deepseek</p>
              </div>
              <p className="text-sm mt-2">How can i help you today?</p>
            </>
          ) : (
            <div>
              <Message role='user' content='What is next js' />
            </div>
          )}

          {/* prompt box */}
          <PromptBox isLoading={isLoading} setIsLoading={setIsLoading} />

          <p className="text-xs absolute bottom-1 text-gray-500">AI-generated , references only</p>
        </div>
      </div>
    </div>
  )
}