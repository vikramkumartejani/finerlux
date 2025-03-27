"use client"

export default function TabsNavigation({ tabs, activeTab, setActiveTab }) {
     return (
          <div className="bg-[#E3E8ED] rounded-[30px] px-4 py-1.5 h-[54px] flex items-center justify-between w-full">
               <div className="flex justify-evenly w-full">
                    {tabs.map((tab) => (
                         <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`px-8 py-2 rounded-[30px] text-lg font-normal transition-colors ${activeTab === tab.id ? "bg-[#017EFE] text-white" : "text-black hover:bg-[#017EFE] hover:text-white"
                                   }`}
                         >
                              {tab.label}
                         </button>
                    ))}
               </div>
          </div>
     )
}

