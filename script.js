const boatName = document.querySelector('#boatName');
const boatTitle = document.querySelector('#boatTitle');
const sailButtons = [...document.querySelectorAll('[data-sail]')];
const sailMain = document.querySelector('#sailMain');
const sailJib = document.querySelector('#sailJib');
const sailOutput = document.querySelector('#sailOutput');
const rudder = document.querySelector('#rudder');
const rudderOutput = document.querySelector('#rudderOutput');
const rudderVisual = document.querySelector('#rudderVisual');
const launchButton = document.querySelector('#launchButton');
const themeButton = document.querySelector('#themeButton');
const workspace = document.querySelector('.workspace');
const statusText = document.querySelector('#statusText');

boatName.addEventListener('input', () => {
  const name = boatName.value.trim();
  boatTitle.textContent = '';
  const nameText = document.createTextNode(name || 'Small craft,');
  const lineBreak = document.createElement('br');
  const phrase = document.createElement('em');
  phrase.textContent = 'wide horizon.';
  boatTitle.append(nameText, lineBreak, phrase);
});

sailButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const setting = button.dataset.sail;
    sailButtons.forEach((item) => item.classList.toggle('active', item === button));
    sailOutput.value = button.textContent;
    sailOutput.textContent = button.textContent;
    sailMain.style.opacity = setting === 'down' ? '0' : '1';
    sailJib.style.opacity = setting === 'down' ? '0' : '1';
    sailMain.style.transform = setting === 'reefed' ? 'scale(.68, .78)' : '';
    sailJib.style.transform = setting === 'reefed' ? 'scale(.72, .8)' : '';
    statusText.textContent = setting === 'down' ? 'Sails lowered' : `${button.textContent} sail set`;
  });
});

rudder.addEventListener('input', () => {
  const angle = Number(rudder.value);
  rudderOutput.value = `${angle > 0 ? '+' : ''}${angle}°`;
  rudderOutput.textContent = rudderOutput.value;
  rudderVisual.style.transform = `rotate(${angle * 0.55}deg)`;
});

launchButton.addEventListener('click', () => {
  const launched = workspace.classList.toggle('launched');
  launchButton.querySelector('span:last-child').textContent = launched ? 'Return to dock' : 'Launch boat';
  statusText.textContent = launched ? 'Under way' : 'Ready to launch';
});

themeButton.addEventListener('click', () => {
  const night = document.body.classList.toggle('night');
  themeButton.setAttribute('aria-label', night ? 'Toggle day mode' : 'Toggle night mode');
  themeButton.title = night ? 'Toggle day mode' : 'Toggle night mode';
  statusText.textContent = night ? 'Night sailing' : 'Ready to launch';
});
