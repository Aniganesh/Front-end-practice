# Front-end-practice
Trying out a few front end techniques.
<h2 id="table-of-contents"> Table of Contents</h2>
<ol>
	<li id="animated-bg">[Animated background](#animated-bg)</li></a>
</ol>
 <h2 id="animated-bg">Animated background </h2><br />
 A simple sample of four animated backgrounds using css animations and radial backgrounds.
 Files:
	* [Animated Background.css](https://github.com/Aniganesh/Front-end-practice/blob/master/Animated%20Background.css)
	* [Animated Background.html](https://github.com/Aniganesh/Front-end-practice/blob/master/Animated%20Background.html)
	
	Four divs with different classes are created in the markup.
	The classes used are:
	* bg
	* bg1
	* bg2
	* rad-bg
	* rad-bg2
	### Explanation for each class:
	#### bg:
	This class sets the display, width, height, margin, border and border radii of the divs. They are probabaly unnecessary if the background is for the entire screen. It was made simply to enable demonstrating all four kinds of backgrounds.
	#### bg1:
	Simply adds animation <code>[changebg](#changebg)</code>for the background.
	#### bg2
	Sets background to a linear gradient with four colours (#ee7752,#e73c7e, #23a6d5, #23d5ab).
	Also sets background size to 400% and animation to <a href="#changebg-moving"><code>changebg-moving.</code></a>
	#### rad-bg
	Simply sets animation to <code>[change-radialbg](#change-radialbg)</code>
	#### rad-bg2
	<p>Sets background to 2 radial gradients with two colour stop pairs(#ff8855 to transparent and #22ff22 to transparent) and animation to  <code>[change-radialbg2](#change-radialbg2)</code></p>
	###Explanation for css @keyframes animations:
	<h4 id="changebg">changebg<p>Sets linear-gradient with 4 different colour stop pairs from left to right. 
	