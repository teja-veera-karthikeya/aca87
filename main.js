
var canvas = new fabric.Canvas("myCanvas")

block_y = 1;
block_x = 1;

block_image_width = 350;
block_image_height = 430;

var block_image_object = "";


function new_image(getImage) {
    fabric.Image.fromURL(getImage, function (Img) {
        block_image_object = Img

        block_image_object.scaleToWidth(block_image_width)
        block_image_object.scaleToHeight(block_image_height)

        block_image_object.set({
            top: block_y,
            left: block_x
        })
        canvas.add(block_image_object)
    })
}
window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if (keyPressed == '82'){  // add appropriate keycode
		block_x = 35;
		console.log("red ranger")
		new_image('rr1.png')
		// upload red ranger
	}
	if (keyPressed == '71') {
		block_x = 350;
		console.log("green ranger")
		new_image('gr.png')
		// upload green ranger
	}

	if (keyPressed == '89') {
		block_x = 550;
		console.log("yellow ranger")
		new_image('yr.png')
		// upload yellow ranger
	}
	if (keyPressed == '80') {
		block_x = 850;
		console.log("pink ranger")
		new_image('pr.png')
		// upload pink ranger
	}
	if (keyPressed == '66') {
		block_x = 1000;
		console.log("blue ranger")
		new_image('br.png')
		// upload blue ranger
	}

}

