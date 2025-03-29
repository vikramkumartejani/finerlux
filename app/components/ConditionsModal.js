import React from "react";

const ConditionsModal = () => {

     return (
          <div>
               <h2 className="text-xl font-bold mb-4">Conditions</h2>
               <ul className="list-disc pl-5 space-y-2">
                    <li className="text-sm sm:text-base"><strong>New:</strong> The item is brand new, never used, and in perfect condition. It has no scratches, marks, or signs of wear. It comes with all original packaging and warranty, just like buying directly from a store.</li>
                    <li className="text-sm sm:text-base"><strong>Unworn:</strong> The item has never been worn, but it might not be straight from the store. It has no signs of use but could have tiny marks from handling or storage. Any original stickers or packaging might still be there.</li>
                    <li className="text-sm sm:text-base"><strong>Very Good:</strong> The item has been worn but taken care of really well. It may have small, barely noticeable scratches, but nothing major. It might have been cleaned or polished to look better. Any markings or engravings are still clear.</li>
                    <li className="text-sm sm:text-base"><strong>Good:</strong> The item has been used and shows clear signs of wear, like scratches or small dents. The bracelet or strap might be a bit stretched. Some markings or engravings may be faded, but they’re still visible.</li>
                    <li className="text-sm sm:text-base"><strong>Fair:</strong> The item has been worn a lot and shows major signs of use, like deep scratches or dents. The bracelet or strap is visibly worn. It may have been polished, but you can still see the damage.</li>
                    <li className="text-sm sm:text-base"><strong>Incomplete:</strong> The item is not fully functional because it's missing parts or is broken. It is meant for repair or to be used for spare parts.</li>
               </ul>
          </div>
     );
};

export default ConditionsModal