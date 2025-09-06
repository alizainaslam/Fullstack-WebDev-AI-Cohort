const userInput = element$(".user-input"),
  searchBtn = element$(".search-btn"),
  userProfileCard = element$(".user-profile");

function element$(cls) {
  return document.querySelector(cls);
}

function fetchGithubUser(username) {
  return fetch(`https://api.github.com/users/${username}`).then((raw) => {
    if (!raw.ok) {
      throw new Error("User not found.");
    } else {
      return raw.json();
    }
  });
}
function displayGithubUser(details) {
  let userProfile = `
    <!-- Header Section -->
        <div
          class="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 p-6 border-b border-slate-700"
        >
          <img
            src="${details.avatar_url}"
            alt="Profile"
            class="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-blue-500 shadow-lg"
          />
          <div class="text-center sm:text-left">
            <h2 class="text-xl sm:text-2xl font-bold text-white">${
              details.name
            }</h2>
            <p class="text-blue-400 text-sm sm:text-base">@${details.login}</p>
            <p class="mt-2 text-slate-300 text-xs sm:text-sm max-w-md">
              ${details.bio ? details.bio : "Bio not found..."}
            </p>
          </div>
        </div>

        <!-- Stats -->
        <div
          class="grid grid-cols-3 text-center divide-x divide-slate-700 text-sm sm:text-base"
        >
          <div class="p-3 sm:p-4">
            <p class="text-lg sm:text-xl font-bold text-white">${
              details.followers
            }</p>
            <p class="text-slate-400">Followers</p>
          </div>
          <div class="p-3 sm:p-4">
            <p class="text-lg sm:text-xl font-bold text-white">${
              details.following
            }</p>
            <p class="text-slate-400">Following</p>
          </div>
          <div class="p-3 sm:p-4">
            <p class="text-lg sm:text-xl font-bold text-white">${
              details.public_repos
            }</p>
            <p class="text-slate-400">Repos</p>
          </div>
        </div>

        <!-- Additional Info -->
        <div class="p-5 sm:p-6 space-y-2 sm:space-y-3 text-sm sm:text-base">
          <p class="flex items-center sm:justify-start text-slate-300">
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 2C6.686 2 4 4.686 4 8c0 4.418 6 10 6 10s6-5.582 6-10c0-3.314-2.686-6-6-6z"
              />
            </svg>
            ${details.location}
          </p>
          <a href = "${
            details.html_url
          }"class="flex items-center sm:justify-start text-slate-300">
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 9.24l-10-7-10 7V20h7v-6h6v6h7V9.24z" />
            </svg>
            github.com
          </a>
          <p class="flex items-center sm:justify-start text-slate-300">
            <svg
              class="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M16 11V9a4 4 0 10-8 0v2H6v10h12V11h-2zm-6 0V9a2 2 0 114 0v2h-4z"
              />
            </svg>
            Company: ${details.company ? details.company : "N/A"}
          </p>
        </div>
  `;
  userProfileCard.innerHTML = userProfile;
}
function handleUserInfo(username) {
  let userName = username.value.trim();
  if (userName.length > 0 && username !== null) {
    fetchGithubUser(userName)
      .then((data) => displayGithubUser(data))
      .catch((err) => alert("User not found."));
  }
  username.value = null;
}
searchBtn.addEventListener("click", () => handleUserInfo(userInput));

window.addEventListener("keypress", (ev) => {
  if (ev.key === "Enter") {
    handleUserInfo(userInput);
  }
});
