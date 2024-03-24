const helloWorld = () => {
    console.log("Hello World");
  };
  
  helloWorld();


const imageCanvas = document.querySelector( '.section--image-canvas' );
const imageCanvasImages = imageCanvas.querySelectorAll( 'img' );
const imageCanvasImageCount = imageCanvasImages.length;

let unveiledImageCounter = 0;

const unveilImage = ( ) => {
  if ( unveiledImageCounter == imageCanvasImageCount ) return;

  const currentImage = imageCanvasImages[ unveiledImageCounter ];
  currentImage.classList.add( 'unveiled' );

  unveiledImageCounter++;
}

imageCanvas.addEventListener( 'click', unveilImage );
