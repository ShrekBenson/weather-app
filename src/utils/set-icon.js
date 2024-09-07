const contextIcons = require.context('../assets/icons', false, /\.svg$/);

export default function setConditionIcon(htmlImg, data) {
  htmlImg.src = contextIcons(`./${data.icon}.svg`);
}