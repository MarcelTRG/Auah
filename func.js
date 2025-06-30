document.addEventListener("DOMContentLoaded", function () {
  // Penciptaan Playlist
  const playlist = [
    {
      title: "Lagu 1 - Red Swan",
      file: "Music/lagu1.mp3",
      cover: "Cover/Cover1.png",
      lyrics: [
        { time: 0, text: "Like the scarlet night veiling the dark" },
        { time: 32, text: "You can hide your fear" },
        { time: 36, text: "Can lie, my dear" },
        { time: 39.5, text: "このまま 夢を見て" },
        { time: 46.5, text: "血だらけの翼 広げて" },
        { time: 68, text: "Like a fallen angel 時の風に" },
        { time: 75, text: "流されて 落ちてゆく" },
        { time: 82, text: "Into the starry night 女神のように" },
        { time: 91, text: "抱きしめて 永遠を" },
        { time: 97, text: "Fly into Heaven" },
        { time: 101, text: "What's the lie" },
        { time: 105, text: "What's the truth" },
        { time: 108, text: "What to believe" },
        { time: 113, text: "In my life" },
        { time: 121, text: "See the flowers breathing in the rain" },
        { time: 127, text: "Try growing to the edge of light" },
        { time: 135, text: "It's so far away to reach out to the sky" },
        { time: 145.90, text: "I'll seize, I'll seize the roses with my wings" },
        { time: 156.69, text: "We'll fly" },
        { time: 187, text: "Like a Fallen Angel 時の風に" },
        { time: 196, text: "流されて 落ちてゆく" },
        { time: 201, text: "Into the starry night 女神のように" },
        { time: 210, text: "抱きしめて 永遠を" },
        { time: 217, text: "We'll fly away" },
        { time: 221.60, text: "We'll find a way" },
        { time: 224.70, text: "You can hide your fear" },
        { time: 228, text: "Can lie, my dear" },
        { time: 231, text: "We'll see the end" },
        { time: 234.60, text: "We'll be the end" },
        { time: 240.10, text: "抱きしめて" },
        { time: 243, text: "永遠を" },
        { time: 245.60, text: "Fly into heaven" }
      ]
    },
    {
      title: "Lagu 2 - My Ordinary Life",
      file: "Music/lagu2.mp3",
      cover: "Cover/cover2.jpeg",
      lyrics: [
        { time: 44, text: "They tell me keep it simple, I tell them take it slow" },
        { time: 47, text: "I feed and water an idea so I let it grow" },
        { time: 49, text: "I tell them take it easy, they laugh and tell me no," },
        { time: 52, text: "It's cool but I don't see them laughing at my money though" },
        { time: 55, text: "They spittin facts at me, I'm spittin tracks, catch me?" },
        { time: 57, text: "I'm spinning gold out my records know you can't combat me" },
        { time: 61, text: "They tell me jesus walks, I tell them money talks." },
        { time: 63, text: "Bling got me chill, cause I'm living in an ice box." },
        { time: 66, text: "They tell me I've been sleepin, I say I'm wide awake" },
        { time: 68, text: "Tracks hot and ready so they call me mister e-z bake" },
        { time: 68, text: "They say the grass is greener, I think my grass is dank" },
        { time: 74, text: "Drivin with a drank on an empty tank to the bank" },
        { time: 76, text: "Do you feel me? Talk a look inside my brain" },
        { time: 79, text: "The people always different but it always feel the same" },
        { time: 82, text: "That's the real me. Pop the champagne" },
        { time: 84, text: "The haters wanna hurt me and I'm laughin at the pain" },
        { time: 88, text: "Stayin still, Eyes closed" },
        { time: 90, text: "Let the world just pass me by" },
        { time: 93, text: "Pain pills, Nice clothes" },
        { time: 96, text: "If I fall I think I'll fly" },
        { time: 98, text: "Touch me, Midas" },
        { time: 101, text: "Make me part of your design" },
        { time: 104, text: "None to guide us" },
        { time: 106, text: "I feel fear for the very last time" },
        { time: 131, text: "They tell me that I'm special, I smile and shake my head" },
        { time: 134, text: "I'll give them stories to tell friends about the things I said" },
        { time: 137, text: "They tell me I'm so humble, I say I'm turning red" },
        { time: 139, text: "They let me lie to them and don't feel like they've been misled" },
        { time: 142, text: "They give so much to me, I'm losing touch get me?" },
        { time: 145, text: "Served on a silver platter, ask for seconds they just let me." },
        { time: 148, text: "They tell me I'm a god, I'm lost in the facade" },
        { time: 150, text: "Six feet off the ground at all times I think I'm feelin odd" }
      ]
    },
    {
      title: "Lagu 3 - Silence",
      file: "Music/lagu3.mp3",
      cover: "Cover/Cover3.png",
      lyrics: [
        { time: 7, text: "Talking" },
        { time: 9, text: "Why's everyone always talking?" },
        { time: 13, text: "Noise in my head, but it's nonsense" },
        { time: 18, text: "I can't feel nothing" },
        { time: 23, text: "Guarded" },
        { time: 25, text: "Don't overthink how we started" },
        { time: 29, text: "Knew from the second you walked in" },
        { time: 33, text: "This could be something" },
        { time: 38, text: "Everybody's looking for a love to start a riot" },
        { time: 46, text: "But every time I look in your eyes, the world gets quiet" },
        { time: 53, text: "So let it go, let it fall, let it fly, and keep on trying" },
        { time: 61, text: "'Cause I knew I was in love with you when we sat in silence" },
        { time: 69, text: "🎵🎵🎵" },
        { time: 85, text: "Dreaming" },
        { time: 87, text: "I'm wide awake while I'm dreaming" },
        { time: 91, text: "See in your eyes what you're thinking" },
        { time: 95, text: "So please don't worry" },
        { time: 101, text: "Waiting" },
        { time: 102, text: "Know that I'll always be waiting" },
        { time: 106, text: "Do you believe what I'm saying?" },
        { time: 111, text: "I'm in no hurry" },
        { time: 115, text: "Everybody's looking for a love to start a riot" },
        { time: 123, text: "But every time I look in your eyes, the world gets quiet" },
        { time: 131, text: "So let it go, let it fall, let it fly, and keep on trying" },
        { time: 139, text: "'Cause I knew I was in love with you when we sat in silence" },
        { time: 147, text: "🎵🎵🎵"},
        { time: 161, text: "Sat in silence" },
        { time: 165, text: "Sat in silence~~" },
        { time: 169, text: "Sat in silence" },
        { time: 173, text: "When we sat in silence." },
        { time: 177, text: "Sat in silence" },
        { time: 181, text: "Sat in silence~~" },
        { time: 185, text: "Sat in silence" },
        { time: 188, text: "When we sat in silence." },
        { time: 193, text: "'Cause I knew I was in love with you when we sat in..." },
        { time: 197, text: "Silence." }
      ]
    },

  ];

  // Deklarasi Variabel
  let currentSongIndex = 0;
  const audio = document.getElementById("audioPlayer");
  const songTitle = document.getElementById("songTitle");
  const coverImage = document.getElementById("coverImage");
  const lyricsContainer = document.getElementById("lyrics");
  const wrapper = document.querySelector('.player');

  // Buat coverImage bisa diklik untuk pindah halaman
  coverImage.style.cursor = 'pointer';
  coverImage.addEventListener('click', function () {
    const song = playlist[currentSongIndex];
    localStorage.setItem("selectedTitle", song.title);
    window.location.href = "detail.html";
  });

  // Fungsi untuk memuat lagu
  function loadSong(index) {
    const song = playlist[index];
    audio.src = song.file;
    songTitle.textContent = song.title;
    coverImage.src = song.cover;
    
    // Load lyrics dengan format baru
    if (song.lyrics && Array.isArray(song.lyrics)) {
      const lyricsHTML = song.lyrics.map((lyric, i) => 
        `<div class="lyric-line" data-time="${lyric.time}" data-index="${i}">${lyric.text}</div>`
      ).join('');
      lyricsContainer.innerHTML = lyricsHTML;
      
      // Add click handlers untuk seek
      addLyricClickHandlers();
    } else {
      lyricsContainer.textContent = 'Lirik tidak tersedia';
    }
  }
  
  // Fungsi untuk update lirik berdasarkan waktu
  function updateLyrics() {
    const currentTime = audio.currentTime;
    const currentSong = playlist[currentSongIndex];
    
    if (currentSong.lyrics && Array.isArray(currentSong.lyrics)) {
      let currentLyricIndex = -1;
      
      // Cari lirik yang sesuai dengan waktu saat ini
      for (let i = 0; i < currentSong.lyrics.length; i++) {
        if (currentTime >= currentSong.lyrics[i].time) {
          currentLyricIndex = i;
        } else {
          break;
        }
      }
      
      // Update highlight lirik aktif
      const lyricLines = document.querySelectorAll('.lyric-line');
      lyricLines.forEach((line, index) => {
        line.classList.toggle('active', index === currentLyricIndex);
      });
      
      // Auto scroll ke lirik aktif
      if (currentLyricIndex >= 0) {
        const activeLyric = lyricLines[currentLyricIndex];
        if (activeLyric) {
          activeLyric.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'center' 
          });
        }
      }
    }
  }
  
  // Fungsi untuk menambahkan click handler pada lirik
  function addLyricClickHandlers() {
    document.querySelectorAll('.lyric-line').forEach((line) => {
      line.addEventListener('click', () => {
        const targetTime = parseFloat(line.dataset.time);
        audio.currentTime = targetTime;
      });
    });
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

  function updateSliderColor() {
    const value = seekSlider.value;
    const max = seekSlider.max;
    const percentage = (value / max) * 100;
    seekSlider.style.background = `linear-gradient(to right, green 0%, green ${percentage}%, white ${percentage}%, white 100%)`;
  }

  // Load song pertama saat halaman dibuka
  loadSong(currentSongIndex);

  // Event listener untuk sinkronisasi lirik
  audio.addEventListener('timeupdate', updateLyrics);

  // Hapus glow saat lagu selesai
  audio.addEventListener('ended', () => {
    wrapper.classList.remove('glow');
  });

  // Buat fungsi global agar bisa dipanggil dari tombol HTML
  window.playSong = playSong;
  window.pauseSong = pauseSong;
  window.nextSong = nextSong;
  window.prevSong = prevSong;

  const seekSlider = document.getElementById("seekSlider");
  const currentTimeDisplay = document.getElementById("currentTime");
  const totalTimeDisplay = document.getElementById("totalTime");

  audio.addEventListener('loadedmetadata', () => {
    seekSlider.max = Math.floor(audio.duration);
    totalTimeDisplay.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('timeupdate', () => {
    seekSlider.value = Math.floor(audio.currentTime);
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    updateLyrics(); // Sudah ada di kodenya
    updateSliderColor();
  });

  seekSlider.addEventListener('input', () => {
    audio.currentTime = seekSlider.value;
    updateLyrics(); // Sinkronkan lirik saat slider digeser
  });

  function formatTime(seconds) {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

});
