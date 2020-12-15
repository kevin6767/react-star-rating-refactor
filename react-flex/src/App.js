import React, {useState} from 'react';
import './App.css';
import Rater from './Rater';
import Selector from './Selector';

function App(props) {
	const [iconValue, setIconValue] = useState(5);
	const [value] = useState(100);
	return (
		<div className='App'>
			<Selector setIconValue={setIconValue} value={value} />
			<Rater iconValue={iconValue} value={value} />
		</div>
	);
}

export default App;
