```javascript

document.addEventListener('DOMContentLoaded', function() {

  const yesBtn = document.querySelector('.yes');

  const noBtn = document.querySelector('.no');

  const resultText = document.querySelector('.result');

  yesBtn.addEventListener('click', function() {

    resultText.textContent = 'YESSSS! My heart skips a beat!';

    resultText.style.color = '#4CAF50';

  });

  noBtn.addEventListener('click', function() {

    resultText.textContent = 'My heart breaks into pieces...';

    resultText.style.color = '#e74c3c';

  });

});

```
