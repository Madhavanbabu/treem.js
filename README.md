Treem.js:
---------

- Treem.js is a simple treemap library built with javascript. 

- Currently it depends on jQuery to manipulate the DOM. 

- To use this component, just pass an array of percentages (sorted in descending order and summing up to 100), the element selector to which the treemap has to be appended and the size of the treemap.

- CSS unit can be passed as an input property if needed (Default is px).

			treem.treemap({
				data : [40, 30, 20, 10],
				container : ".parentContainer",
				side : 400
			}); 

- The treemap will be formed as a square and appended to the element passed.

- It gives different colour to different blocks inside the treemap and also displays the percentage value on hover 
