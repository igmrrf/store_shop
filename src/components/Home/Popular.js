import React, { Component } from "react";
import products from "./PopularCon";
import { Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";

class Popular extends Component {
	constructor() {
		super();
		this.state = {
			products: products,
			currency: "",
		};
	}
	componentDidMount() {
		const date = new Date();

		const main = String(date);
		const gmt = main.split(" ");
		const GMTZone = gmt[5];
		const mainer = GMTZone.substr(3);
		const addOrMinus = GMTZone.substr(3, 1);
		console.log(addOrMinus);

		const NumberGMT = Number(mainer);
		if (mainer < 500) {
			this.setState({ currency: "N" });
		} else {
			this.setState({ currency: "$" });
		}
	}
	render() {
		const { products, currency } = this.state;

		return (
			<div>
				<div className="">
					<h3 className="text-center">Popular Now</h3>

					<div className="mt-3">
						<Row>
							{products.map((data, i) => {
								return (
									<Col md={3} key={i}>
										<Card className="mb-3" border="light">
											<Card.Img src={data.image} alt="popular" />
											<Card.Text>{data.name}</Card.Text>
											<Card.Text>
												{currency}
												{data.price}
											</Card.Text>
										</Card>
									</Col>
								);
							})}
						</Row>
					</div>
				</div>
			</div>
		);
	}
}

export default Popular;
