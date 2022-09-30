var im1=document.querySelector("#p1 img");
var im2=document.querySelector("#p2 img");
function msg() {
    var p1=Math.ceil(Math.random()*6);
    var p2=Math.ceil(Math.random()*6);
    if(p1==1)
    im1.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_1.png");
    if(p1==2)
    im1.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_2.png");
    if(p1==3)
    im1.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_3.png");
    if(p1==4)
    im1.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_4.png");
    if(p1==5)
    im1.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_5.png");
    if(p1==6)
    im1.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_6.png");
    if(p2===1)
    im2.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_1.png");
    if(p2===2)
    im2.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_2.png");
    if(p2===3)
    im2.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_3.png");
    if(p2===4)
    im2.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_4.png");
    if(p2===5)
    im2.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_5.png");
    if(p2===6)
    im2.setAttribute("src", "C:\Users\paras\Desktop\web page octave\Web Development\DOM\dice_6.png");
}