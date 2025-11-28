// Simple front-end behaviour for the Perkhub x PrettyLittleThing page

// LIVE VIEW COUNTER
(function () {
  const el = document.getElementById("live-count");
  if (!el) return;

  let count = parseInt(el.textContent || "184", 10) || 184;

  function updateCount() {
    const delta = Math.floor(Math.random() * 7) - 3; // -3..+3
    count = Math.max(80, count + delta);
    el.textContent = String(count);
  }

  setInterval(updateCount, 5000);
})();

// LIVE ACTIVITY TILES (DISPLAY ONLY, NO REAL DATA)
(function () {
  const container = document.getElementById("live-tiles");
  if (!container) return;

  const messages = [
    "A visitor just viewed the reward details.",
    "Someone is checking the partner instructions.",
    "A new user opened the PrettyLittleThing perk link.",
    "Another viewer is reviewing the flow before using it.",
    "A user is exploring this page without sharing any identity.",
    "Someone refreshed the reward page to check availability.",
  ];

  function createTile(msg, index) {
    const tile = document.createElement("div");
    tile.className = "live-tile";

    const top = document.createElement("div");
    top.className = "live-tile-top";

    const dot = document.createElement("span");
    dot.className = "live-dot";

    const label = document.createElement("span");
    label.className = "live-label";
    label.textContent = "Anonymous activity";

    const time = document.createElement("span");
    time.className = "live-time";
    const minsAgo = 1 + ((index * 3) % 9);
    time.textContent = minsAgo + " min ago (approx)";

    top.appendChild(dot);
    top.appendChild(label);

    const body = document.createElement("div");
    body.textContent = msg;

    tile.appendChild(top);
    tile.appendChild(body);
    tile.appendChild(time);

    return tile;
  }

  messages.forEach((m, i) => {
    container.appendChild(createTile(m, i));
  });
})();

// REVIEWS: INITIAL LIST + SUBMISSION (ANONYMOUS)
(function () {
  const reviewList = document.getElementById("review-list");
  const form = document.getElementById("review-form");
  const messageEl = document.getElementById("review-message");
  const ratingInput = document.getElementById("rating-input");
  const reviewText = document.getElementById("review-text");
  const starPicker = document.getElementById("star-picker");

  if (!reviewList || !form || !messageEl || !ratingInput || !reviewText || !starPicker) {
    return;
  }

  // Helper: create star text
  function starsFromRating(rating) {
    const full = "★".repeat(rating);
    const empty = "☆".repeat(5 - rating);
    return full + empty;
  }

  // Render one review card
  function addReviewCard({ rating, text }) {
    if (rating < 3) {
      // Hide low-star reviews per requirements
      return;
    }

    const card = document.createElement("div");
    card.className = "review-card";

    const starRow = document.createElement("div");
    starRow.className = "review-stars";
    starRow.textContent = starsFromRating(rating);

    const textEl = document.createElement("div");
    textEl.className = "review-text";
    textEl.textContent =
      text && text.trim().length > 0
        ? text.trim()
        : "Smooth, easy to follow and feels professional.";

    card.appendChild(starRow);
    card.appendChild(textEl);

    reviewList.appendChild(card);
  }

  // Initial sample reviews (anonymous, no name or place)
  const initialReviews = [
    {
      rating: 5,
      text: "Clean and minimal page. I like that nothing personal is shown.",
    },
    {
      rating: 4,
      text: "Simple flow. Just opened the partner link and followed the steps.",
    },
    {
      rating: 3,
      text: "Looks trustworthy and transparent about being a third-party.",
    },
  ];

  initialReviews.forEach(addReviewCard);

  // Star picker UI
  let currentRating = 5;

  function renderStars() {
    starPicker.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
      const span = document.createElement("span");
      span.className = "star" + (i <= currentRating ? " active" : "");
      span.textContent = "★";
      span.dataset.value = String(i);
      starPicker.appendChild(span);
    }
  }

  starPicker.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const value = target.dataset.value;
    if (!value) return;
    currentRating = parseInt(value, 10) || 5;
    ratingInput.value = String(currentRating);
    renderStars();
  });

  renderStars();

  // Handle form submit
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const rating = parseInt(ratingInput.value || "5", 10) || 5;
    const text = reviewText.value;

    // Add to display only if rating >= 3 (anonymous)
    if (rating >= 3) {
      addReviewCard({ rating, text });
    }

    // Clear the text box
    reviewText.value = "";
    currentRating = 5;
    ratingInput.value = "5";
    renderStars();

    // Show success message
    messageEl.textContent =
      "Review Submitted ✓ We do not highlight names or places to keep your identity private. Thank you!";
    messageEl.classList.remove("error");
    messageEl.classList.add("success");
  });
})();
