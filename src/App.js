import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Table from "./components/Table.jsx";
import StoreDetail from "./components/StoreDetail.jsx";

function App() {
	return (
		<Router>
			<div className='App'>
				<Switch>
					<Route path='/stores/:id' children={<StoreDetail />} />
					<Route path='/' children={<Table />} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
