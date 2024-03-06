export function parseTitles(text) {
  if (text === "" || text === undefined || text === null) {
    return "";
  }
  let newText = text;

  const lines = "[nnn]";
  while (newText.indexOf(lines) > -1) {
    newText = newText.replace(lines, "<br><br>");
  }
  const splitter = "[bbb]";
  let count = 0;
  while (newText.indexOf(splitter) > -1) {
    if (count % 2 === 0) {
      newText = newText.replace(splitter, `<b class="how-it-works-header">`);
    } else {
      newText = newText.replace(splitter, "</b>");
    }
    count++;
  }
  return newText;
}
