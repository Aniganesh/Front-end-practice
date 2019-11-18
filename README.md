# Front-end-practice

Trying out a few front end techniques.

## Table of Contents

1. [Animated background](#animated-bg)

  ## Animated background

  A simple sample of four animated backgrounds using css animations and radial backgrounds. Files:

  - [Animated Background.css](https://github.com/Aniganesh/Front-end-practice/blob/master/Animated%20Background.css)
  - [Animated Background.html](https://github.com/Aniganesh/Front-end-practice/blob/master/Animated%20Background.html)

Four divs with different classes are created in the markup. The classes used are:

- bg
- bg1
- bg2
- rad-bg
- rad-bg2

  ### Explanation for each class:

  #### bg:

   This class sets the display, width, height, margin, border and border radii of the divs. They are probabaly unnecessary if the background is for the entire screen. It was made simply to enable demonstrating all four kinds of backgrounds.

  #### bg1:

   Simply adds animation [`changebg`](#changebg)for the background.

  #### bg2

   Sets background to a linear gradient with four colours (#ee7752,#e73c7e, #23a6d5, #23d5ab). Also sets background size to 400% and animation to [`changebg-moving.`](#changebg-moving)

  #### rad-bg

Simply sets animation to [`change-radialbg`](#change-radialbg)

### rad-bg2

Sets background to 2 radial gradients with two colour stop pairs(#ff8855 to transparent and #22ff22 to transparent) and animation to [`change-radialbg2`](#change-radialbg2) Explanation for css `@keyframes` animations:


### changebg

Sets linear-gradient with 4 different colour stop pairs from left to right. 


### changebg-moving

 Simply moves the background position from 0% 50% coordinates to 100% 50% and back.


### change-radialbg

 Moves the circle from bottom right corner to top left corner with steps of 6.25%.


### change-radialbg2

 Moves the ellipses from one side to the other in steps of 6.25%.
