const main = document.querySelector("main");
const jobDescription = [
  {
    companyLogo: "./assets/nike.svg",
    jobRole: "Senior UI Developer",
    payPerHour: "$120/hr",
    bgColor: "#f9f6ff",
    altText: "nike-logo",
  },
  {
    companyLogo: "./assets/google.svg",
    jobRole: "Senior UI Designer",
    payPerHour: "$150/hr",
    bgColor: "#fff3e3",
    altText: "google-logo",
  },
  {
    companyLogo: "./assets/airbnb.svg",
    jobRole: "Azure Data Engineer",
    payPerHour: "$120-145/hr",
    bgColor: "#fcfff2",
    altText: "airbnb-logo",
  },
  {
    companyLogo: "./assets/airbnb.svg",
    jobRole: "Azure Data Engineer",
    payPerHour: "$120/hr",
    bgColor: "#fffceb",
    altText: "azure-logo",
  },
  {
    companyLogo: "./assets/google.svg",
    jobRole: "Senior UI Designer",
    payPerHour: "$150/hr",
    bgColor: "#f5f8ff",
    altText: "google-logo",
  },
  {
    companyLogo: "./assets/nike.svg",
    jobRole: "Senior UI Developer",
    payPerHour: "$120/hr",
    bgColor: "#faf0f1",
    altText: "nike-logo",
  },
];
let jobCard = "";
jobDescription.forEach((job, idx) => {
  jobCard += `<div class="job-card">
        <div class="job-info" style="background-color: ${job.bgColor}">
          <div class="card-header">
            <div class="price-tag">
              <p>${job.payPerHour}</p>
            </div>
            <div class="save-job-btn svg-icon">
              <img
                src="./assets/outline-save.svg"
                alt="outline-save-icon"
                role="button"
              />
            </div>
          </div>
          <div class="card-body">
            <h1>${job.jobRole}</h1>
            <div class="right-arrow svg-icon">
              <img src="assets/right-arrow.svg" alt="right-arrow-icon" />
            </div>
            <div class="dots">
              <div class="dot-1"></div>
              <div class="dot-2"></div>
              <div class="dot-3"></div>
              <div class="dot-4"></div>
            </div>
          </div>
        </div>
        <div class="card-footer">
          <div class="left-content">
            <div class="company-logo">
              <img src="${job.companyLogo}" alt="${job.altText}" />
            </div>
            <h2>${job.jobRole}</h2>
          </div>
          <div class="view-btn">
            <button class="view-details" id=${idx}>View</button>
          </div>
        </div>
      </div>`;
});
main.innerHTML += jobCard;

main.addEventListener("click", (details) => {
  console.log(jobDescription[details.target.id]);
});
