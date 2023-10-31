"use client";
import React from "react";
import { Button } from ":/components/ui/button";
import Link from "next/link";

interface FullScreenPromptProps {
  onAccept: () => void;
  onDecline: () => void;
}

function FullScreenPrompt({ onAccept, onDecline }: FullScreenPromptProps) {
  return (
    <div className="fixed l-0 top-0 w-screen h-screen  z-50 backdrop-blur-sm bg-background/50">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[auto] flex items-center justify-center backdrop border border-bg-indigo-700 rounded-2xl bg-opacity-75 backdrop-blur-sm bg-background/50 z-50 drop-shadow-lg p-4">
        <div className="grid grid-rows-5">
          <div className="row-span-4 mb-10">
            <div className="">
              <div className="mb-5">
                Hej, jeg er Fællestivals, og din personlige{" "}
                <Link
                  href={
                    "https://www.ultimate.ai/blog/ai-automation/what-is-a-support-bot"
                  }
                  className=""
                >
                  <span className="text-purple-500 ">AI hjælpe-bot.</span>
                </Link>
                Denne App er gladest i fuld skærm, men du kan altid vælge det
                fra under indstillinger i øverste venstre hjørne hvis du syns
                det er irriterende.
              </div>
              <div>Ønsker du at fortsætte Fællestival rejsen i fuld skærm?</div>
            </div>
          </div>
          <div className="row-span-1 flex justify-between bottom-0">
            <Button onClick={onDecline} variant="secondary" className="">
              Nej tak!
            </Button>
            <Button onClick={onAccept} variant="default" className="">
              Ja klart
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FullScreenPrompt;
