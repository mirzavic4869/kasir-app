import React, { Component } from "react";
import Hasil from "./components/Hasil";
import ListCategories from "./components/ListCategories";
import Navbar from "./components/Navbar";
import Menus from "./components/Menus";
import { Row, Col, Container } from "react-bootstrap";
import { API_URL } from "./utils/constants";
import axios from "axios";

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			menus: [],
			categoryYangDipilih: "Makanan",
		};
	}

	componentDidMount() {
		axios
			.get(API_URL + "products?category.nama=" + this.state.categoryYangDipilih)
			.then((res) => {
				const menus = res.data;
				this.setState({ menus });
			})
			.catch((error) => {
				console.log(error);
			});
	}

	changeCategory = (value) => {
		this.setState({
			categoryYangDipilih: value,
			menus: [],
		});

		axios
			.get(API_URL + "products?category.nama=" + value)
			.then((res) => {
				const menus = res.data;
				this.setState({ menus });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	render() {
		const { menus } = this.state;
		return (
			<div>
				<Navbar />
				<div className="mt-3">
					<Container fluid>
						<Row>
							<ListCategories changeCategory={this.changeCategory} categoryYangDipilih={this.categoryYangDipilih} />
							<Col>
								<h4>
									<strong>Daftar Produk</strong>
								</h4>
								<hr />
								<Row>{menus && menus.map((menu) => <Menus key={menu.id} menu={menu} />)}</Row>
							</Col>
							<Hasil />
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}
