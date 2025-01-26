function toggleMenu() {
  const navMenu = document.querySelector('nav ul');
  navMenu.classList.toggle('active');
}
<script>
  const audio = document.getElementById("temple-audio");
  const controlButton = document.getElementById("audio-control");

  function toggleAudio() {
    if (audio.paused) {
      audio.play();
      controlButton.textContent = "Pause";
    } else {
      audio.pause();
      controlButton.textContent = "Play";
    }
  }
</script>
