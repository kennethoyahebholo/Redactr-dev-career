function redactContent() {
  const content = document.getElementById("content").value;
  const redactWords = document.getElementById("redactWords").value;
  const replacement = document.getElementById("replacement").value;

  const wordsScannedCount = document.getElementById("wordsScanned");
  const wordsRedactedCount = document.getElementById("wordsRedacted");
  const charactersRedactedCount = document.getElementById("charactersRedacted");
  const timeTakenValue = document.getElementById("timeTaken");
  if (content?.length <= 0) {
    alert("Please enter the content you want to redact!");
    return;
  }

  if (redactWords?.length <= 0) {
    alert("Please enter the redact you want to redact!");
    return;
  }

  const startTime = new Date().getTime();

  let redactedText = content;
  let redactedCount = 0;
  let charCount = 0;

  redactWords.split(" ").forEach((word) => {
    const regex = new RegExp(word, "gi");
    redactedText = redactedText.replace(regex, replacement);
    redactedCount += (content.match(regex) || []).length;
    charCount += replacement.length * (content.match(regex) || []).length;
  });

  const endTime = new Date().getTime();
  const timeTaken = ((endTime - startTime) / 1000).toFixed(2);

  document.getElementById("redactedText").textContent = redactedText;

  wordsScannedCount.innerText = redactWords.split(" ").length;
  wordsRedactedCount.innerText = redactedCount;
  charactersRedactedCount.innerText = charCount;
  timeTakenValue.innerText = timeTaken;
}

function resetForm() {
  const form = document.getElementById("myForm");
  const wordsScannedCount = document.getElementById("wordsScanned");
  const wordsRedactedCount = document.getElementById("wordsRedacted");
  const charactersRedactedCount = document.getElementById("charactersRedacted");
  const timeTakenValue = document.getElementById("timeTaken");
  form.reset();

  document.getElementById("redactedText").textContent = "";
  wordsScannedCount.innerText = 0;
  wordsRedactedCount.innerText = 0;
  charactersRedactedCount.innerText = 0;
  timeTakenValue.innerText = 0;
}
