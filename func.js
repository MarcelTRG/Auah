document.addEventListener("DOMContentLoaded", function () {
  // Penciptaan Playlist
  const playlist = [
    {
      title: "Lagu 1 - Band A",
      file: "Music/lagu1.mp3",
      cover: "Cover/Cover1.png",
      lyrics: `Ku berjalan di malam gelap tanpa arah dan tujuan
Bintang pun bersinar redup seperti hatiku yang kelam
Rasa rindu datang perlahan menyesakkan dada
Namun bayangmu tetap hilang dalam gelap malam`
    },
    {
      title: "Lagu 2 - Band B",
      file: "Music/lagu2.mp3",
      cover: "Cover/Cover2.png",
      lyrics: `...`
    },
    {
      title: "Lagu 3 - Band C",
      file: "Music/lagu3.mp3",
      cover: "Cover/Cover3.png",
      lyrics: `...`
    }
  ];

  // Deklarasi Variabel
  let currentSongIndex = 0;
  const audio = document.getElementById("audioPlayer");
  const songTitle = document.getElementById("songTitle");
  const coverImage = document.getElementById("coverImage");
  const lyricsContainer = document.getElementById("lyrics");
  const wrapper = document.querySelector('.player');

  // Fungsi untuk memuat lagu
  function loadSong(index) {
    const song = playlist[index];
    audio.src = song.file;
    songTitle.textContent = song.title;
    coverImage.src = song.cover;
    lyricsContainer.textContent = song.lyrics;
  }

  function playSong() {
    audio.play();
    wrapper.classList.add('glow');
  }

  function pauseSong() {
    audio.pause();
    wrapper.classList.remove('glow');
  }

  function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
  }

  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    playSong();
  }

  // Load song pertama saat halaman dibuka
  loadSong(currentSongIndex);

  // Hapus glow saat lagu selesai
  audio.addEventListener('ended', () => {
    wrapper.classList.remove('glow');
  });

  // Buat fungsi global agar bisa dipanggil dari tombol HTML
  window.playSong = playSong;
  window.pauseSong = pauseSong;
  window.nextSong = nextSong;
  window.prevSong = prevSong;
});
