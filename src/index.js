const form = document.querySelector("form");

form /
  addEventListener("submit", (event) => {
    event.preventDefault();

    const submission = object.fromEntries(new FormData(event.target));

    if (Object.keys(submission).includes("saveUsername")) {
      localStorage.setItem("username", submission.username);
    }
  });
