document.addEventListener('DOMContentLoaded', () => {

  // Unix timestamp (in seconds) to count down to
  let lancamento = (new Date('December 21, 2022  19:00:00').getTime() / 1000);

  // Set up FlipDown
  let flipdown = new FlipDown(lancamento)

    // Start the countdown
    .start()

    // Do something when the countdown ends
    .ifEnded(() => {
      console.log('The countdown has ended!');
    });

});
