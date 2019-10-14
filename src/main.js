const config = {
  size: 500,
  backgroundColour: '#3171B8',
  textColour: 'white',
  fontSize: {
    top: 50,
    middle: 170,
    bottom: 50
  },
  font: 'Helvetica'
}

function drawCircle({canvasContext}) {
  const { size, backgroundColour } = config;

  canvasContext.beginPath();
  canvasContext.fillStyle = backgroundColour;

  canvasContext.arc(
    size / 2,
    size / 2,
    size / 2,
    0,
    2 * Math.PI,
    false
  );

  canvasContext.fill();
}

function drawMiddleText({canvasContext, text}) {
  const { size, textColour, fontSize, font } = config;

  canvasContext.fillStyle = textColour;
  canvasContext.font = `100 ${fontSize.middle}px ${font}`;

  const textWidth = canvasContext.measureText(text).width;

  canvasContext.fillText(
    text,
    (size / 2) - (textWidth / 2),
    (size / 2) + (fontSize.middle / Math.PI)
  );
}

function drawTopText({canvasContext, text}) {
  const { size, textColour, fontSize, font } = config;

  canvasContext.fillStyle = textColour;
  canvasContext.font = `100 ${fontSize.top}px ${font}`;

  const textWidth = canvasContext.measureText(text).width;

  canvasContext.fillText(
    text,
    (size / 2) - (textWidth / 2),
    ((size / 2) / 2) - (fontSize.top / Math.PI)
  );
}

function drawBottomText({canvasContext, text}) {
  const { size, textColour, fontSize, font } = config;

  canvasContext.fillStyle = textColour;
  canvasContext.font = `100 ${fontSize.bottom}px ${font}`;

  const textWidth = canvasContext.measureText(text).width;

  canvasContext.fillText(
    text,
    (size / 2) - (textWidth / 2),
    size - ((size / 2) / 2) + fontSize.bottom
  );
}

function createCanvas({top, middle, bottom}) {
  const canvas = document.createElement('canvas');

  const { size } = config;

  const dpr = window.devicePixelRatio || 1;

  canvas.width = size * dpr;
  canvas.height = size * dpr;

  const context = canvas.getContext('2d');
  context.scale(dpr, dpr);

  drawCircle({canvasContext: context});
  drawTopText({canvasContext: context, text: top.toUpperCase()});
  drawMiddleText({canvasContext: context, text: middle.toUpperCase()});
  drawBottomText({canvasContext: context, text: bottom.toUpperCase()});

  return canvas;
}

const destination = document.querySelector('.content');

const form = document.querySelector('form');

form.addEventListener('input', e => {
  const downloadLink = document.getElementById('download');
  downloadLink.removeAttribute('href');

  const formData = new FormData(form);

  const canvas = createCanvas(Object.fromEntries(formData));

  if(destination.firstChild) {
    destination.firstChild.remove();
  }

  destination.appendChild(canvas);

  const image = canvas.toDataURL("image/png");
  downloadLink.setAttribute('href', image);
});
