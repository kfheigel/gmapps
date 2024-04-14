var textareaElement = document.querySelector("textarea.gLFyf");
var textareaValue = textareaElement.value;

var iframeElement = document.getElementById('mapsIframe');

textareaElement.addEventListener("input", function() {
    var textareaValue = textareaElement.value;
    var iframeSrc = `https://www.google.com/maps/search=${encodeURIComponent(textareaValue)}`;
    iframeElement.setAttribute('src', iframeSrc);
});

var divElement = document.createElement('div');
var aElement = document.createElement('a');
aElement.setAttribute('class', 'nPDzT T3FoJb');
aElement.setAttribute('href', '#');

var nestedDivElement = document.createElement('div');
nestedDivElement.setAttribute('class', 'YmvwI');
nestedDivElement.textContent = 'Maps';

aElement.appendChild(nestedDivElement);
divElement.appendChild(aElement);
var mapsElement = divElement;

mapsElement.addEventListener("click", function() {
    window.location.href = `https://www.google.pl/maps/search/${encodeURIComponent(textareaValue)}`;
});

var existingContainer = document.querySelector("#hdtb-sc > div > div.qogDvd > div.crJ18e");
var graphics = existingContainer.querySelector("div:nth-child(2)");

existingContainer.insertBefore(mapsElement, graphics);

console.log(document.getElementById("gmapps"));
