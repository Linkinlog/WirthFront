import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Blog } from "./components/Blog";
import { Body } from "./components/Body";
import { Footy } from "./components/layout/Footy";
import { Navbar } from "./components/layout/Navbar";

function App() {
	return (
		<Router>
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" component={Body} />
					<Route exact path="/about" component={About} />
					<Route exact path="/blog" component={Blog} />
				</Switch>
				<Footy />
			</div>
		</Router>
	);
}

export default App;
