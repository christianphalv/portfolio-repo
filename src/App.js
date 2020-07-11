import React from 'react';
import './App.css';
import Intro from './components/intro/Intro.js';

class App extends React.Component {

  	constructor() {
    	super();
    	this.state = {
      	route: 'home',
    	}
  	}

  	render() {
    	return (
      	<div className="App">
        	{ this.state.route === 'home' &&
				<Intro />

        	}

			<h1>More content and stuff</h1>
			<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam feugiat eget leo ac bibendum. Donec tristique ante quis est fringilla sagittis. Maecenas scelerisque elementum elit vel suscipit. Phasellus consectetur odio nec nulla scelerisque faucibus. Maecenas sit amet mattis enim, vitae volutpat orci. Vivamus congue fringilla massa ut mollis. Donec fringilla urna eget ipsum facilisis placerat. Cras eget ligula purus. Etiam eleifend sapien sapien, sed venenatis mauris eleifend ac. Phasellus eleifend eu urna sit amet porttitor.

			Proin luctus mollis velit, sed porttitor mauris faucibus sit amet. Aliquam tempus ullamcorper magna, id ornare quam luctus et. Pellentesque laoreet eu ex eget volutpat. Curabitur tempus sed ante a sagittis. Morbi sagittis massa diam, id rutrum sem fermentum sed. Morbi mollis quis ex nec maximus. Morbi suscipit elit ipsum, a lobortis risus mattis sed. Quisque rutrum neque eu posuere posuere. Vestibulum id molestie erat. Curabitur posuere diam quis massa accumsan, a vehicula erat sagittis.

			Nam non dapibus diam, ut ultricies ex. Vivamus in mauris eu purus aliquam fringilla. Etiam sodales lorem sed ornare varius. Pellentesque bibendum placerat purus eu elementum. Donec vel urna vitae elit facilisis fermentum eget vitae sapien. Nam vestibulum euismod justo ut suscipit. Cras finibus accumsan leo sed porttitor. Nullam non blandit elit, eleifend finibus justo. Fusce a dolor sit amet velit mollis aliquet. Morbi hendrerit quam id mauris commodo hendrerit. Morbi eu enim lacus. In finibus ut lacus non tempus. Suspendisse sit amet ex at diam scelerisque consequat. Praesent tincidunt imperdiet porttitor.

			Aenean accumsan neque in urna auctor lacinia. Curabitur purus augue, sagittis lobortis neque vitae, lacinia sagittis dolor. Morbi in urna odio. Praesent accumsan blandit massa, ac placerat augue pharetra nec. Sed venenatis viverra nibh, ut pellentesque odio consectetur quis. Nulla fermentum dolor ut augue dignissim luctus. Maecenas lobortis vel nunc sit amet blandit. Proin congue pharetra congue. Nam auctor facilisis tempus.

			Donec sed arcu sit amet tortor aliquet tempus eget eget nibh. Phasellus posuere vulputate neque non aliquet. Donec aliquet varius felis. Praesent elementum, velit dictum dictum lacinia, neque nibh pretium tellus, nec fermentum purus ipsum et massa. Donec rutrum nulla diam, vitae aliquet sem tempor id. Donec rutrum nunc nec orci malesuada aliquet. Vestibulum vitae lacus sit amet sem porta hendrerit.</p>
      	</div>
    	);
  	}
}

export default App;
