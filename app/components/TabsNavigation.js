"use client"

export default function TabsNavigation({ tabs, activeTab, setActiveTab }) {
     return (
          <div className="bg-[#E3E8ED] rounded-[30px] px-2 md:px-4 py-1.5 h-[37px] md:h-[54px] flex items-center gap-2 justify-between w-full">
               <div className="flex md:justify-evenly items-center gap-2 w-full overflow-auto scrollbar-hide">
                    {tabs.map((tab) => (
                         <button
                              key={tab.id}
                              onClick={() => setActiveTab(tab.id)}
                              className={`px-3.5 md:px-8 py-[5px] md:py-2 text-nowrap rounded-[30px] text-sm md:text-lg font-normal transition-colors ${activeTab === tab.id ? "bg-[#017EFE] text-white" : "text-black hover:bg-white"
                                   }`}
                         >
                              {tab.label}
                         </button>
                    ))}
               </div>
          </div>
     )
}

