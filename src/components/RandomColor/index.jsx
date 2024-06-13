const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const colorsText = [
  "#1679AB",
  "#1679AB",
  "#BC5A94",
  "#AF47D2",
  "#26355D",
  "#686D76",
  "#F1E5D1",
];
const colorsBorder = [
  "green",
  "yellow",
  "#1679AB",
  "#1679AB",
  "#BC5A94",
  "#AF47D2",
  "#26355D",
  "#686D76",
  "#F1E5D1",
];
export function getRandomColor(id) {
  if (id == 1) {
    return colors[Math.floor(Math.random() * colors.length)];
  } else if (id == 2 || id == 4) {
    return colorsText[Math.floor(Math.random() * colorsText.length)];
  } else if (id == 3) {
    return colorsBorder[Math.floor(Math.random() * colorsBorder.length)];
  }
}
