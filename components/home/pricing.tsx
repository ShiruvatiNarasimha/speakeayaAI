import { CheckIcon } from "lucide-react";
import React from "react";

const Pricing = () => {
  const plansMap = [
    {
      name: "Basic",
      description: "Get started with SpeakEasy!",
      price: "10",
      items: ["3 Blog Post", "3 Transcription"],
    },
    {
      name: "Pro",
      description: "All Blog Posts, let's go!",
      price: "19.99",
      items: ["Unlimited Blog Post", "Unlimited Transcriptions"],
    },
  ];
  return (
    <section className="relative overflow-hidden" id="pricing">
      <div className="py-12 lg:py-24 max-w-5xl mx-auto px-12 lg:px-0">
        <div
          className="flex items-center 
      justify-center w-full pb-12"
        >
          <h2
            className="font-bold text-xl
        uppercase mb-8 text-purple-600"
          >
            Pricing
          </h2>
        </div>
        <div
          className="relative flex justify-center
        flex-col lg:flex-row items-center lg:items-stretch gap-8"
        >
          <div className="relative w-full max-w-lg">
            <div
              className="relative flex flex-col h-full gap-4 
            lg:gap-8 z-10 p-8 rounded-box border-[1px]
            border-gray-500/20
            rounded-2xl"
            >
              <div className="flex justify-between items-center gap-4">
                <div>
                  <p className="text-lg lg:text-xl font-bold capitalize">
                    Basic
                  </p>
                  <p className="text-base-content/80 mt-2">desc</p>
                </div>
              </div>
              <div className="flex gap-2">
                <p className="text-5xl tracking-tight font-extrabold">$10</p>
                <div className="flex flex-col justify-end mb-[4px]">
                  <p className="text-xs text-base-content/60 uppercase font-semibold">
                    USD
                  </p>
                  <p className="text-xs text-base-content/60">/month</p>
                </div>
              </div>
              <ul className="space-y-2.5 leading-relaxed text-base flex-1">
                {[].map((item, idx) => (
                  <li className="" key={idx}>
                    <CheckIcon size={18}></CheckIcon>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
