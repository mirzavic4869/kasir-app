import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Sukses } from "./pages";

export default class App extends Component {
	render() {
		return (
			<Router>
				<Navbar />
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/sukses" element={<Sukses />} />
					</Routes>
				</main>
			</Router>
		);
	}
}
