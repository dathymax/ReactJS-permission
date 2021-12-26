import logo from "./logo.svg";
import Form from "./components/Form";
import Screen from "./components/Screen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/">
						<Form />
					</Route>
					<Route path="/screen">
						<Screen />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
