import React from "react";
import "./App.css";
import Hasil from "./components/Hasil";
import ListCategories from "./components/ListCategories";
import Navbar from "./components/Navbar";
import { Row, Col, Container } from "react-bootstrap";

function App() {
	return (
		<div>
			<Navbar />
			<div className="mt-3">
				<Container fluid>
					<Row>
						<ListCategories />
						<Col>
							<h4>
								<strong>Daftar Produk</strong>
								<hr />
							</h4>
						</Col>
						<Hasil />
					</Row>
				</Container>
			</div>
		</div>
	);
}

export default App;
