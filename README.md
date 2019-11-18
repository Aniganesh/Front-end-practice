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
	<p>Sets background to a linear gradient with four colours (<input type="color" value="#ee7752" disabled />,<input type="color" value="#e73c7e" disabled />, <input type="color" value="#23a6d5" disabled />,<input type="color" value="#23d5ab" disabled />).
	Also sets background size to 400% and animation to <a href="#changebg-moving"><code>changebg-moving.</code></a>
		</p>

	<h4>rad-bg</h4>
	<p>
	Simply sets animation to <a href="#change-radialbg"><code>change-radialbg</code></a>
	</p>

	<h4>rad-bg2</h4>
	<p>Sets background to radial gradient with two colours (<input type="color" value="#ff8855" disabled />, <input type="color" value="rgba(0,0,0,0)" disabled /> and animation to  <a href="#change-radialbg2"><code>change-radialbg2</code></a></p>