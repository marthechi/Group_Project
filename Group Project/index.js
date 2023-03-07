const showButton = document.getElementById('showDialog');
const favDialog = document.getElementById('favDialog');
const outputBox = document.querySelector('output');
const confirmBtn = favDialog.querySelector('#confirmBtn');


// "Confirm" button of form triggers "close" on dialog because of [method="dialog"]
favDialog.addEventListener('close', () => {
  outputBox.value = `ReturnValue: ${favDialog.returnValue}.`;
});