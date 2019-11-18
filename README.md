# Front-end-practice
Trying out a few front end techniques.

<h2 id="table-of-contents"> Table of Contents</h2>
<ol>
	<a href="#animated-bg"<li id="animated-bg">Animated background</li></a>
</ol>
 
 <h2 id="animated-bg">Animated background </h2><br />
 A simple sample of four animated backgrounds using css animations and radial backgrounds.
 Files:
 <ul>
	<a href="https://github.com/Aniganesh/Front-end-practice/blob/master/Animated%20Background.css"><li>Animated Background.css </li></a>
	<a href="https://github.com/Aniganesh/Front-end-practice/blob/master/Animated%20Background.html"><li>Animated Background.html</li></a>
	</ul>
	Four divs with different classes are created in the markup.
	The classes used are:
	<ul><li>bg</li><li>bg1</li><li>bg2</li><li>rad-bg</li><li>rad-bg2</li>
	</ul>
	<h3> Explanation for each class:</h3>
	<h4>bg:</h4>
	<p>This class sets the display, width, height, margin, border and border radii of the divs. They are probabaly unnecessary if the background is for the entire screen. It was made simply to enable demonstrating all four kinds of backgrounds.</p>
	<h4>bg1:</h4>
	<p>Simply adds animation <a href="#changebg"><code>changebg</code></a>for the background.</p>
	<h4>bg2</h4>
	<p>Sets background to a linear gradient with four colours (#ee7752,#e73c7e, #23a6d5, #23d5ab).
	Also sets background size to 400% and animation to <a href="#changebg-moving"><code>changebg-moving.</code></a>
		</p>
	<h4>rad-bg</h4>
	<p>
	Simply sets animation to <a href="#change-radialbg"><code>change-radialbg</code></a>
	</p>
	<h4>rad-bg2</h4>
	<p>Sets background to 2 radial gradients with two colour stop pairs(#ff8855 to transparent and #22ff22 to transparent) and animation to  <a href="#change-radialbg2"><code>change-radialbg2</code></a></p>
	<h3>Explanation for css @keyframes animations:</h3>
	<h4 id="changebg">changebg</h4><p>Sets linear-gradient with 4 different colour stop pairs from left to right. </p>
	<h4 id="changebg-moving">changebg-moving</h4>
	<p>Simply moves the background position from  0% 50% coordinates to 100% 50% and back.</p>
	<h4 id="change-radialbg">change-radialbg</h4>
	<p>Moves the circle from bottom right corner to top left corner with steps of 6.25%</p>
	<h4 id="change-radialbg2">change-radialbg2</h4>
	<p>Moves the ellipses from one side to the other in steps of 6.25%</p>