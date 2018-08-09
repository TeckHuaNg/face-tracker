// Start tracking here...
// 3. add the tracker object to track face
const tracker = new tracking.ObjectTracker('face');

// create canvas
const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');


const result = document.getElementById('result'); // ask how to get element

// 6. image and canvas details
const image = new Image();
let filterX = 0;
let filterY = 0;
let filterWidth = 0;
let filterHeight = 0;

// 7. assign values
function createPic(x, y, width, height, src) {
  image.src = src;
  filterX = x;
  filterY = y;
  filterWidth = width;
  filterHeight = height;
}

// createPic(-0.5, -0.4, 2, 2, 'dog.gif');
createPic(-0.4, -0.9, 2, 2, 'chihuahua.png');

// 4. check and see if the camera is working
// Add this to make tracker work
tracker.setInitialScale(4);
tracker.setStepSize(2);
tracker.setEdgesDensity(0.1);

tracking.track('#myVideo', tracker, { camera: true });

// 5. make the p tag do something when a face is detected
tracker.on('track', (event) => {
  // 8. clear image
  context.clearRect(0, 0, canvas.width, canvas.height);

  // print no face
     result.innerHTML = 'No Face';

  event.data.forEach((rect) => {
     result.innerHTML = 'Face !!!';

    // 8. add image
    context.drawImage(
      image,
      rect.x + filterX * rect.width,
      rect.y + filterY * rect.height,
      rect.width * filterWidth,
      rect.height * filterHeight,
    );
  });
});
