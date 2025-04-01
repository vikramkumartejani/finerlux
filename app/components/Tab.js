"use client";

import { useState } from "react";
import TabsNavigation from "./TabsNavigation";
import SellTab from "./SellTab";
import AuthenticateTab from "./AuthenticateTab";
import SourceTab from "./SourceTab";
import PartExchangeTab from "./PartExchangeTab";
import BuyTab from "./BuyTab";

export default function Tab() {
  const [activeTab, setActiveTab] = useState("sell");
  
  const tabs = [
    { id: "buy", label: "Buy" },
    { id: "sell", label: "Sell" },
    { id: "part-exchange", label: "Part Exchange" },
    { id: "source", label: "Source" },
    { id: "authenticate", label: "Authenticate" },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "buy":
        return <BuyTab />;
      case "part-exchange":
        return <PartExchangeTab />;
      case "sell":
        return <SellTab />;
      case "source":
        return <SourceTab />;
      case "authenticate":
        return <AuthenticateTab />;
      default:
        return <SellTab />;
    }
  };

  return (
    <main className="flex mt-[12px] md:mt-[32px] flex-col items-center justify-center px-5">
      <div className="w-full max-w-[1296px] mx-auto bg-white rounded-[20px] md:rounded-[30px] p-2.5 md:p-6 overflow-hidden">
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="">{renderTabContent()}</div>
      </div>
    </main>
  );
}
