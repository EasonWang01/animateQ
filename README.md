# Easy animate with a animate store

This is an implementation of animate.css
https://github.com/daneden/animate.css

You can use all the feature just like animate.css,and only 37.4KB for the `animateQ.min.js`


#Install 

```
npm install animate-q
```

then

```
<script src="./node_modules/animate-q/animateQ.min.js"></script>
```
#API

####Q.getStore

which will show all of the active animate in current state

![400](https://cloud.githubusercontent.com/assets/11001914/15459097/23cdfc80-20d4-11e6-9f9c-d52e1d137ace.png)

####Q.stop(selector,animate)

which will stop the specific animated element as the first parameter pass in.

![401](https://cloud.githubusercontent.com/assets/11001914/15459114/5b7bcc34-20d4-11e6-9a55-b43c0b1a291a.png)


####Q.click(selector,animate,infinite)

click an element then the animate will be active

pass true for the infinite will active an infinite animation.

![402](https://cloud.githubusercontent.com/assets/11001914/15459317/82967ace-20d6-11e6-9706-a3b26bdde344.png)

####Q.hover(selector,animate)

hover an element then the animate will be active

![403](https://cloud.githubusercontent.com/assets/11001914/15459369/1dc0614a-20d7-11e6-8500-ae41f2774ee9.png)



####Q.keydown(selector,animate,infinite,keycode)

press a key than the animate will be active.

using a key code in the forth parameter.

You can also choose whether or not to pass a infinite parameter(boolean),if not just pass keycode at third parameter.

https://css-tricks.com/snippets/javascript/javascript-keycodes/#article-header-id-1


![404](https://cloud.githubusercontent.com/assets/11001914/15459472/3eea4f24-20d8-11e6-9939-81ee0fbf3781.png)

then press `M` button on your keyboard then the animation will be active.


####Q.load(selector,animate,infinite)

active an animation when window onload.


![405](https://cloud.githubusercontent.com/assets/11001914/15460377/f7190004-20e2-11e6-8424-cc7656da069a.png)

####Animate option
```
scale
bounce
flash
pulse
rubberBand
shake
headShake
swing
tada
wobble
jello
bounceIn
bounceInDown
bounceInLeft
bounceInRight
bounceInUp
bounceOut
bounceOutDown
bounceOutLeft
bounceOutRight
bounceOutUp
fadeIn
fadeInDown
fadeInDownBig
fadeInLeft
fadeInLeftBig
fadeInRight
fadeInRightBig
fadeInUp
fadeInUpBig
fadeOut
fadeOutDown
fadeOutDownBig
fadeOutLeft
fadeOutLeftBig
fadeOutRight
fadeOutRightBig
fadeOutUp
fadeOutUpBig
flipInX
flipInY
flipOutX
flipOutY
lightSpeedIn
lightSpeedOut
rotateIn
rotateInDownLeft
rotateInDownRight
rotateInUpLeft
rotateInUpRight
rotateOut
rotateOutDownLeft
rotateOutDownRight
rotateOutUpLeft
rotateOutUpRight
hinge
rollIn
rollOut
zoomIn
zoomInDown
zoomInLeft
zoomInRight
zoomInUp
zoomOut
zoomOutDown
zoomOutLeft
zoomOutRight
zoomOutUp
slideInDown
slideInLeft
slideInRight
slideInUp
slideOutDown
slideOutLeft
slideOutRight
slideOutUp

```






