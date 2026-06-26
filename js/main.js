
(function () {
  'use strict';

  const video      = document.getElementById('wildlifeVideo');
  const wrapper    = document.getElementById('videoWrapper');
  const toggleBtn  = document.getElementById('toggleBtn');
  const btnIcon    = toggleBtn.querySelector('.btn-icon');
  const btnLabel   = toggleBtn.querySelector('.btn-label');

  function setButtonState(state) {
    switch (state) {
      case 'playing':
        btnIcon.textContent  = '⏸';
        btnLabel.textContent = 'Pause Video';
        toggleBtn.setAttribute('aria-pressed', 'true');
        toggleBtn.classList.remove('state-hidden');
        break;

      case 'paused':
        btnIcon.textContent  = '▶';
        btnLabel.textContent = 'Play Video';
        toggleBtn.setAttribute('aria-pressed', 'false');
        toggleBtn.classList.remove('state-hidden');
        break;

      case 'hidden':
        btnIcon.textContent  = '👁';
        btnLabel.textContent = 'Show Video';
        toggleBtn.setAttribute('aria-pressed', 'false');
        toggleBtn.classList.add('state-hidden');
        break;
    }
  }

  toggleBtn.addEventListener('click', function () {
    const isHidden = wrapper.classList.contains('is-hidden');

    if (isHidden) {
      // Video was hidden → show it and play
      wrapper.classList.remove('is-hidden');
      video.play();
      setButtonState('playing');

    } else if (video.paused) {
      // Video visible but paused → play it
      video.play();
      setButtonState('playing');

    } else {
      // Video is playing → pause and hide
      video.pause();
      wrapper.classList.add('is-hidden');
      setButtonState('hidden');
    }
  });

  // Keep button in sync if user uses native video controls
  video.addEventListener('play', function () {
    if (!wrapper.classList.contains('is-hidden')) {
      setButtonState('playing');
    }
  });

  video.addEventListener('pause', function () {
    if (!wrapper.classList.contains('is-hidden')) {
      setButtonState('paused');
    }
  });

  video.addEventListener('ended', function () {
    setButtonState('paused');
  });

})();
