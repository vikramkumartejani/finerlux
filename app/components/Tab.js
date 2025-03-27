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
    { id: "part-exchange", label: "Part Exchange" },
    { id: "sell", label: "Sell" },
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
    <main className="flex mt-20 flex-col items-center justify-center p-5">
      <div className="w-full max-w-[1296px] mx-auto bg-white rounded-[30px] p-6 overflow-hidden">
        <TabsNavigation
          tabs={tabs}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <div className="p-6">{renderTabContent()}</div>
      </div>
    </main>
  );
}
