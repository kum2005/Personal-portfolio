document.addEventListener("DOMContentLoaded", () => {
  const jobs = document.querySelectorAll(".job");
  jobs.forEach((job) => {
    job.addEventListener("click", () => {
      alert(`You clicked on: ${job.querySelector("h2").innerText}`);
    });
  });
});
