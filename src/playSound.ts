const playSound = (text: string) => {
  // Create audio element
  const audio = new Audio(`/sounds/${text}.mp3`);

  // Play the sound
  audio.play().catch((error) => {
    console.error(`Error playing sound: ${error}`);
  });
};

export default playSound;
