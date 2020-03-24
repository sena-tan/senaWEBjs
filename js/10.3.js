//We'll grab the canvas elements and the graphics contexts here
var canvas1 = document.getElementById("myCanvas1"); // HTMLCanvasElement
var context1 = canvas1.getContext('2d'); // CanvasRenderingContext2D
var canvas2 = document.getElementById("myCanvas2");
var context2 = canvas2.getContext('2d'); 
var canvas3 = document.getElementById("myCanvas3"); 
var context3 = canvas3.getContext('2d'); 
var canvas4 = document.getElementById("myCanvas4"); 
var context4 = canvas4.getContext('2d'); 
var canvas5 = document.getElementById("myCanvas5"); 
var context5 = canvas5.getContext('2d'); 
/*
 * Then we create a Javascript Image object and set its source URL
 * to the location of the image file we'll be processing.
 */
var image1 = new Image();
image1.src = "images/prototype.png";
//Now get the image context for second canvas, and create a new ImageData object with the correct width and height
var imgData2 = context2.createImageData(canvas2.width, canvas2.height);
var imgData3 = context3.createImageData(canvas3.width, canvas3.height);
var imgData4 = context4.createImageData(canvas4.width, canvas4.height);
var imgData5 = context5.createImageData(canvas5.width, canvas5.height);
/*
 * Here's the handler that loads when the image has finished downloading.
 *
 * This needs to be asynchronous (triggered by the image load event) since we don't know how
 *  long the image will take to load.
 */
image1.onload = function(){
	// draw the image in the first canvas window 
	context1.drawImage(image1, 0, 0);
	// now grab the ImageData object from the graphics context. This contains a 'bitmap' of every pixel in the image
	var imgData1 = context1.getImageData(0,0, canvas1.width, canvas1.height); // ImageData
	console.log(imgData1)
	//grab the image bitmap data array so we can iterate over it
	var pix = imgData1.data;
	console.log(pix);
	
	// Loop over each pixel and invert the color.
	for (var i = 0, n = pix.length; i < n; i += 4) {
		imgData2.data[i  ] = 255 - pix[i  ]; // red
		imgData2.data[i+1] = 255 - pix[i+1]; // green
		imgData2.data[i+2] = 255 - pix[i+2]; // blue
		imgData2.data[i+3] = pix[i+3]; // alpha
	}
	console.log(imgData2);
	 // now draw the new image data on the second canvas
	context2.putImageData(imgData2, 0, 0);

	// make blue
	for (var i = 0, n = pix.length; i < n; i ++) {
		imgData3.data[i  ] =  pix[i  ];
		if (i % 4 == 0 ) {
			imgData3.data[i  ] = 0;
		}
		else if (i % 4 == 1) {
			imgData3.data[i  ] = 0;
		}
	}
	console.log(imgData3);
	// now draw the new image data on the third canvas
	context3.putImageData(imgData3, 0, 0);
	
	// make transparent
	for (var i = 0, n = pix.length; i < n; i ++) {
		imgData4.data[i  ] =  pix[i  ];
		 if (i % 4 == 3 ) {
			imgData4.data [i] = pix[i]/3
		}
	}
	console.log(imgData4);
	// now draw the new image data on the fourth canvas
	context4.putImageData(imgData4, 0, 0);
	
	// make green?
	for (var i = 0, n = pix.length; i < n; i ++) {
		imgData5.data[i  ] =  pix[i  ];
		if (i % 4 == 0 ) {
			imgData5.data[i  ] = 0;
		}
		else if (i % 4 == 2) {
			imgData5.data[i  ] = 0;
		}
	}
	console.log(imgData5);
	// now draw the new image data on the third canvas
	context5.putImageData(imgData5, 0, 0);
	
};