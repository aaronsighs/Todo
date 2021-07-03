import './css/styles.scss';
import img1 from "./assets/images/test.png"


let image:HTMLImageElement = new Image();
image.src = img1;
image.id = "test-img-0001"

document.body.appendChild(image);



