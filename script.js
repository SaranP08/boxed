// Wait for the DOM to be fully loaded before running scripts
document.addEventListener("DOMContentLoaded", () => {
  // --- Logout Modal Functionality ---
  const logoutLink = document.getElementById("logout-link");
  const logoutModal = document.getElementById("logout-modal");
  const closeModalBtn = logoutModal
    ? logoutModal.querySelector(".modal-close-btn")
    : null;
  const cancelLogoutBtn = document.getElementById("cancel-logout-btn");
  const confirmLogoutBtn = document.getElementById("confirm-logout-btn");

  const openModal = () => {
    if (logoutModal) {
      logoutModal.style.display = "flex"; // Make overlay visible
      // Timeout needed to allow display change before adding class for transition
      setTimeout(() => {
        logoutModal.classList.add("active");
      }, 10); // Small delay
    }
  };

  const closeModal = () => {
    if (logoutModal) {
      logoutModal.classList.remove("active");
      // Wait for transition to finish before hiding
      setTimeout(() => {
        logoutModal.style.display = "none";
      }, 300); // Should match CSS transition duration
    }
  };

  // Event Listener for Logout Link
  if (logoutLink) {
    logoutLink.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent link from navigating
      openModal();
    });
  }

  // Event Listener for Modal Close Button
  if (closeModalBtn) {
    closeModalBtn.addEventListener("click", closeModal);
  }

  // Event Listener for "NO, JUST KIDDING" Button
  if (cancelLogoutBtn) {
    cancelLogoutBtn.addEventListener("click", closeModal);
  }

  // Event Listener for "YES, LOG ME OUT" Button
  if (confirmLogoutBtn) {
    confirmLogoutBtn.addEventListener("click", () => {
      console.log("Simulating logout..."); // Replace with actual logout logic
      // For demonstration, redirect to homepage after logging out
      alert("You have been logged out."); // Simple feedback
      closeModal();
      // window.location.href = 'index.html'; // Optional: redirect after logout
    });
  }

  // Event Listener to close modal if overlay is clicked
  if (logoutModal) {
    logoutModal.addEventListener("click", (event) => {
      // Close only if the overlay itself (not the content) is clicked
      if (event.target === logoutModal) {
        closeModal();
      }
    });
  }

  // Event Listener to close modal with Escape key
  document.addEventListener("keydown", (event) => {
    if (
      event.key === "Escape" &&
      logoutModal &&
      logoutModal.classList.contains("active")
    ) {
      closeModal();
    }
  });

  // --- Sidebar Filter Toggle Functionality (Products Page) ---
  const filterTitles = document.querySelectorAll(
    ".sidebar-filters .filter-title"
  );

  filterTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const optionsList = title.nextElementSibling; // Get the ul element
      const arrow = title.querySelector(".toggle-arrow");

      if (optionsList && optionsList.classList.contains("filter-options")) {
        const isOpen = optionsList.classList.toggle("open");
        // Update arrow indicator
        if (arrow) {
          arrow.textContent = isOpen ? "-" : "+";
        }
        // Optional: Adjust max-height for CSS transition effect if using max-height instead of display
        // optionsList.style.maxHeight = isOpen ? optionsList.scrollHeight + "px" : null;
      }
    });

    // Initialize arrows based on initial state
    const optionsList = title.nextElementSibling;
    const arrow = title.querySelector(".toggle-arrow");
    if (
      arrow &&
      optionsList &&
      optionsList.classList.contains("filter-options")
    ) {
      arrow.textContent = optionsList.classList.contains("open") ? "-" : "+";
    }
  });

  // --- FAQ Toggle Functionality (About/Reserve Pages) ---
  const faqItems = document.querySelectorAll(".faq-section .faq-item");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const toggle = item.querySelector(".faq-toggle");
      // Optional: Add a content div below the item to toggle
      // const answer = item.nextElementSibling; // Assuming answer is the next element
      // if(answer && answer.classList.contains('faq-answer')) {
      //    answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
      // }

      // Simple toggle for the '+' sign
      if (toggle) {
        // Basic example: toggle between + and -
        if (toggle.textContent === "+") {
          toggle.textContent = "-";
          item.classList.add("open"); // Add class for potential styling
        } else {
          toggle.textContent = "+";
          item.classList.remove("open");
        }
        // Implement actual answer toggle logic here if needed
      }
    });
  });
}); // End DOMContentLoaded
