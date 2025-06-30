document.addEventListener("DOMContentLoaded", () => {
  const selectedTitle = localStorage.getItem("selectedTitle");
  const detail = songDetails.find(song => song.title === selectedTitle);

  if (detail) {
    document.getElementById("title").textContent = detail.title;
    document.getElementById("cover").src = detail.cover;
    document.getElementById("singer").textContent = detail.singer;
    document.getElementById("year").textContent = detail.year;
    document.getElementById("genre").textContent = detail.genre;
    document.getElementById("description").textContent = detail.description;
  } else {
    document.querySelector(".content-wrapper").innerHTML = "<p>Data lagu tidak ditemukan.</p>";
  }
});