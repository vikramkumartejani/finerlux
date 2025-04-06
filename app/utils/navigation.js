import { useRouter } from "next/navigation";

/**
 * Navigate to the buy form with prefilled information
 * @param {string} item - The name of the item
 * @param {string} details - Additional details about the item
 * @param {string} price - The price of the item (optional)
 */
export const navigateToBuyForm = (item, details, price) => {
  // Create a query string with the item details
  const queryParams = new URLSearchParams();
  if (item) queryParams.append("item", item);
  if (details) queryParams.append("details", details);
  if (price) queryParams.append("price", price);

  // Store the fact that we need to scroll in sessionStorage
  sessionStorage.setItem("scrollToBuyForm", "true");

  // Navigate to the buy tab with the query parameters
  window.location.href = `/enquire?tab=buy&${queryParams.toString()}`;
};

/**
 * Scroll to the home form section smoothly
 * @param {string} tabId - The ID of the tab to activate (optional)
 */
export const scrollToHomeFormSection = (tabId = "buy") => {
  // First find the form section
  const formSection = document.getElementById("homeFormSection");

  if (formSection) {
    // Store the desired tab in sessionStorage for the Tab component to pick up
    if (tabId) {
      sessionStorage.setItem("setActiveHomeTab", tabId);
    }

    // Scroll to the form section
    formSection.scrollIntoView({ behavior: "smooth", block: "start" });

    // Try to click the tab button directly after a delay
    setTimeout(() => {
      // Find and click the tab button by data-tab-id
      const tabButton = document.querySelector(`[data-tab-id="${tabId}"]`);
      if (tabButton) {
        tabButton.click();
      } else {
        // Fallback to finding by text content
        const buttons = document.querySelectorAll("button");
        for (const button of buttons) {
          if (button.textContent.trim().toLowerCase() === tabId.toLowerCase()) {
            button.click();
            break;
          }
        }
      }
    }, 500);
  }
};
