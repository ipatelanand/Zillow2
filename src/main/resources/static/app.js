class App extends React.Component {
	state = {
		listing: [],
	}

	createListing = (event) => {
		event.preventDefault()

		let annualTradRental =
			this.state.newRentalValueTraditional *
			12 *
			this.state.newOccupancyTraditionalPercentPerYear
		let tax = this.state.newTaxAnnual
		let hoaAnnual = this.state.newHoaMonthly * 12
		let annualTradIncome = annualTradRental - hoaAnnual - tax
		let indexTrad = annualTradIncome / this.state.newPrice

		let scoreTrad = 0
		if (indexTrad < 0.05) {
			scoreTrad = 1
		} else if (indexTrad > 0.05 && indexTrad < 0.06) {
			scoreTrad = 3
		} else if (indexTrad >= 0.06 && indexTrad < 0.07) {
			scoreTrad = 5
		} else if (indexTrad >= 0.07 && indexTrad < 0.08) {
			scoreTrad = 9
		} else if (indexTrad >= 0.08) {
			scoreTrad = 10
		}

		let annualAirBnbRental =
			this.state.newRentalValueAirBnb *
			365 *
			this.state.newOccupancyAirBnbPercentPerYear
		let annualAirBnbIncome = annualAirBnbRental - hoaAnnual - tax
		let indexAirBnb = annualAirBnbIncome / this.state.newPrice

		let scoreAirBnb = 0
		if (indexAirBnb < 0.05) {
			scoreAirBnb = 1
		} else if (indexAirBnb > 0.05 && indexAirBnb < 0.06) {
			scoreAirBnb = 3
		} else if (indexAirBnb >= 0.06 && indexAirBnb < 0.07) {
			scoreAirBnb = 5
		} else if (indexAirBnb >= 0.07 && indexAirBnb < 0.08) {
			scoreAirBnb = 9
		} else if (indexAirBnb >= 0.08) {
			scoreAirBnb = 10
		}
		console.log("Traditional " + indexTrad + " " + scoreTrad)
		console.log("AirBnb " + indexAirBnb + " " + scoreAirBnb)

		axios
			.post("/listing", {
				street: this.state.street,
				city: this.state.newCity,
				state: this.state.newState,
				zip: this.state.newZip,
				price: this.state.newPrice,
				beds: this.state.newBeds,
				bath: this.state.newBath,
				sqft: this.state.newSqft,
				description: this.state.newDescription,
				image: this.state.newImage,
				lastSoldDate: this.state.newLastSoldDate,
				lastSoldAmount: this.state.newLastSoldAmount,
				listingBy: this.state.newListingBy,
				listingPhone: this.state.newListingPhone,
				listingEmail: this.state.newListingEmail,
				taxAnnual: this.state.newTaxAnnual,
				hoaMonthly: this.state.newHoaMonthly,
				rentalValueTraditional: this.state.newRentalValueTraditional,
				rentalValueAirBnb: this.state.newRentalValueAirBnb,
				occupancyTraditionalPercentPerYear: this.state
					.newOccupancyTraditionalPercentPerYear,
				occupancyAirBnbPercentPerYear: this.state
					.newOccupancyAirBnbPercentPerYear,
				investmentScoreAirBnb: scoreAirBnb,
				investmentScoreTraditional: scoreTrad,
			})
			.then((response) => {
				this.setState({
					listing: response.data,
				})
			})
	}

	changeNewStreet = (event) => {
		this.setState({ street: event.target.value })
	}
	changeNewCity = (event) => {
		this.setState({ newCity: event.target.value })
	}
	changeNewState = (event) => {
		this.setState({ newState: event.target.value })
	}
	changeNewZip = (event) => {
		this.setState({ newZip: event.target.value })
	}
	changeNewPrice = (event) => {
		this.setState({ newPrice: event.target.value })
	}
	changeNewBeds = (event) => {
		this.setState({ newBeds: event.target.value })
	}
	changeNewBath = (event) => {
		this.setState({ newBath: event.target.value })
	}
	changeNewSqft = (event) => {
		this.setState({ newSqft: event.target.value })
	}
	changeNewDescription = (event) => {
		this.setState({ newDescription: event.target.value })
	}
	changeNewImage = (event) => {
		this.setState({ newImage: event.target.value })
	}
	changeNewLastSoldDate = (event) => {
		this.setState({ newLastSoldDate: event.target.value })
	}
	changeNewLastSoldAmount = (event) => {
		this.setState({ newLastSoldAmount: event.target.value })
	}
	changeNewListingBy = (event) => {
		this.setState({ newListingBy: event.target.value })
	}
	changeNewListingPhone = (event) => {
		this.setState({ newListingPhone: event.target.value })
	}
	changeNewListingEmail = (event) => {
		this.setState({ newListingEmail: event.target.value })
	}
	changeNewTaxAnnual = (event) => {
		this.setState({ newTaxAnnual: event.target.value })
	}
	changeNewHoaMonthly = (event) => {
		this.setState({ newHoaMonthly: event.target.value })
	}
	changeNewRentalValueTraditional = (event) => {
		this.setState({ newRentalValueTraditional: event.target.value })
	}
	changeNewRentalValueAirBnb = (event) => {
		this.setState({ newRentalValueAirBnb: event.target.value })
	}
	// changeNewInvestmentScoreTraditional = (event) => {

	// 	this.setState({ newInvestmentScoreTraditional: event.target.value })
	// }
	// changeNewInvestmentScoreAirBnb = (event) => {
	// 	this.setState({ newInvestmentScoreAirBnb: event.target.value })
	// }
	changeNewOccupancyTraditionalPercentPerYear = (event) => {
		this.setState({ newOccupancyTraditionalPercentPerYear: event.target.value })
	}
	// changeNewAnnualIncomeTraditional = (event) => {
	// 	this.setState({ newAnnualIncomeTraditional: event.target.value })
	// }
	// changeNewAdjustedIncomeTraditional = (event) => {
	// 	this.setState({ newAdjustedIncomeTraditional: event.target.value })
	// }
	// changeNewIndexTraditional = (event) => {
	// 	this.setState({ newIndexTraditional: event.target.value })
	// }
	// changeNewScoreTraditional = (event) => {
	// 	this.setState({ newScoreTraditional: event.target.value })
	// }
	changeNewOccupancyAirBnbPercentPerYear = (event) => {
		this.setState({ newOccupancyAirBnbPercentPerYear: event.target.value })
	}
	// changeNewAnnualIncomeAirBnb = (event) => {
	// 	this.setState({ newAnnualIncomeAirBnb: event.target.value })
	// }
	// changeNewAdjustedIncomeAirBnb = (event) => {
	// 	this.setState({ newAdjustedIncomeAirBnb: event.target.value })
	// }
	// changeNewIndexAirBnb = (event) => {
	// 	this.setState({ newIndexAirBnb: event.target.value })
	// }
	// changeNewScoreAirBnb = (event) => {
	// 	this.setState({ newScoreAirBnb: event.target.value })
	// }

	deleteListing = (event) => {
		axios.delete("/listing/" + event.target.value).then((response) => {
			this.setState({
				listing: response.data,
			})
		})
	}

	updateListing = (event) => {
		event.preventDefault()
		const id = event.target.getAttribute("id")
		let annualTradRental =
			this.state.newRentalValueTraditional *
			12 *
			this.state.newOccupancyTraditionalPercentPerYear
		let tax = this.state.newTaxAnnual
		let hoaAnnual = this.state.newHoaMonthly * 12
		let annualTradIncome = annualTradRental - hoaAnnual - tax
		let indexTrad = annualTradIncome / this.state.newPrice

		let scoreTrad = 0
		if (indexTrad < 0.05) {
			scoreTrad = 1
		} else if (indexTrad > 0.05 && indexTrad < 0.06) {
			scoreTrad = 3
		} else if (indexTrad >= 0.06 && indexTrad < 0.07) {
			scoreTrad = 5
		} else if (indexTrad >= 0.07 && indexTrad < 0.08) {
			scoreTrad = 9
		} else if (indexTrad >= 0.08) {
			scoreTrad = 10
		}

		let annualAirBnbRental =
			this.state.newRentalValueAirBnb *
			365 *
			this.state.newOccupancyAirBnbPercentPerYear
		let annualAirBnbIncome = annualAirBnbRental - hoaAnnual - tax
		let indexAirBnb = annualAirBnbIncome / this.state.newPrice

		let scoreAirBnb = 0
		if (indexAirBnb < 0.05) {
			scoreAirBnb = 1
		} else if (indexAirBnb > 0.05 && indexAirBnb < 0.06) {
			scoreAirBnb = 3
		} else if (indexAirBnb >= 0.06 && indexAirBnb < 0.07) {
			scoreAirBnb = 5
		} else if (indexAirBnb >= 0.07 && indexAirBnb < 0.08) {
			scoreAirBnb = 9
		} else if (indexAirBnb >= 0.08) {
			scoreAirBnb = 10
		}
		axios
			.put("/listing/" + id, {
				street: this.state.updateStreet,
				city: this.state.updateCity,
				state: this.state.updateState,
				zip: this.state.updateZip,
				price: this.state.updatePrice,
				beds: this.state.updateBeds,
				bath: this.state.updateBath,
				sqft: this.state.updateSqft,
				description: this.state.updateDescription,
				image: this.state.updateImage,
				lastSoldDate: this.state.updateLastSoldDate,
				lastSoldAmount: this.state.updateLastSoldAmount,
				listingBy: this.state.updateListingBy,
				listingPhone: this.state.updateListingPhone,
				listingEmail: this.state.updateListingEmail,
				taxAnnual: this.state.updateTaxAnnual,
				hoaMonthly: this.state.updateHoaMonthly,
				rentalValueTraditional: this.state.updateRentalValueTraditional,
				rentalValueAirBnb: this.state.updateRentalValueAirBnb,

				occupancyTraditionalPercentPerYear: this.state
					.updateOccupancyTraditionalPercentPerYear,
				annualIncomeTraditional: this.state.updateAnnualIncomeTraditional,

				occupancyAirBnbPercentPerYear: this.state
					.updateOccupancyAirBnbPercentPerYear,

				investmentScoreAirBnb: scoreAirBnb,
				investmentScoreTraditional: scoreTrad,
			})
			.then((response) => {
				this.setState({
					listing: response.data,

					street: "",
					city: "",
					state: "",
					zip: null,
					price: null,
					beds: null,
					bath: null,
					sqft: null,
					description: "",
					image: "",
					lastSoldDate: "",
					lastSoldAmount: null,
					listingBy: "",
					listingPhone: null,
					listingEmail: "",
					taxAnnual: null,
					hoaMonthly: null,
					rentalValueTraditional: null,
					rentalValueAirBnb: null,

					occupancyTraditionalPercentPerYear: null,

					investmentScoreTraditional: null,
					occupancyAirBnbPercentPerYear: null,

					investmentScoreAirBnb: null,
				})
			})
	}

	changeUpdateStreet = (event) => {
		this.setState({ updateStreet: event.target.value })
	}
	changeUpdateCity = (event) => {
		this.setState({ updateCity: event.target.value })
	}
	changeUpdateState = (event) => {
		this.setState({ updateState: event.target.value })
	}
	changeUpdateZip = (event) => {
		this.setState({ updateZip: event.target.value })
	}
	changeUpdatePrice = (event) => {
		this.setState({ updatePrice: event.target.value })
	}
	changeUpdateBeds = (event) => {
		this.setState({ updateBeds: event.target.value })
	}
	changeUpdateBath = (event) => {
		this.setState({ updateBath: event.target.value })
	}
	changeUpdateSqft = (event) => {
		this.setState({ updateSqft: event.target.value })
	}
	changeUpdateDescription = (event) => {
		this.setState({ updateDescription: event.target.value })
	}
	changeUpdateImage = (event) => {
		this.setState({ updateImage: event.target.value })
	}
	changeUpdateLastSoldDate = (event) => {
		this.setState({ updateLastSoldDate: event.target.value })
	}
	changeUpdateLastSoldAmount = (event) => {
		this.setState({ updateLastSoldAmount: event.target.value })
	}
	changeUpdateListingBy = (event) => {
		this.setState({ updateListingBy: event.target.value })
	}
	changeUpdateListingPhone = (event) => {
		this.setState({ updateListingPhone: event.target.value })
	}
	changeUpdateListingEmail = (event) => {
		this.setState({ updateListingEmail: event.target.value })
	}
	changeUpdateTaxAnnual = (event) => {
		this.setState({ updateTaxAnnual: event.target.value })
	}
	changeUpdateHoaMonthly = (event) => {
		this.setState({ updateHoaMonthly: event.target.value })
	}
	changeUpdateRentalValueTraditional = (event) => {
		this.setState({ updateRentalValueTraditional: event.target.value })
	}
	changeUpdateRentalValueAirBnb = (event) => {
		this.setState({ updateRentalValueAirBnb: event.target.value })
	}
	changeUpdateInvestmentScoreTraditional = (event) => {
		this.setState({ updateInvestmentScoreTraditional: event.target.value })
	}
	changeUpdateInvestmentScoreAirBnb = (event) => {
		this.setState({ updateInvestmentScoreAirBnb: event.target.value })
	}
	changeUpdateOccupancyTraditionalPercentPerYear = (event) => {
		this.setState({
			updateOccupancyTraditionalPercentPerYear: event.target.value,
		})
	}
	// changeUpdateAnnualIncomeTraditional = (event) => {
	// 	this.setState({ updateAnnualIncomeTraditional: event.target.value })
	// }
	// changeUpdateAdjustedIncomeTraditional = (event) => {
	// 	this.setState({ updateAdjustedIncomeTraditional: event.target.value })
	// }
	// changeUpdateIndexTraditional = (event) => {
	// 	this.setState({ updateIndexTraditional: event.target.value })
	// }
	// changeUpdateScoreTraditional = (event) => {
	// 	this.setState({ updateScoreTraditional: event.target.value })
	// }
	changeUpdateOccupancyAirBnbPercentPerYear = (event) => {
		this.setState({ updateOccupancyAirBnbPercentPerYear: event.target.value })
	}
	// changeUpdateAnnualIncomeAirBnb = (event) => {
	// 	this.setState({ updateAnnualIncomeAirBnb: event.target.value })
	// }
	// changeUpdateAdjustedIncomeAirBnb = (event) => {
	// 	this.setState({ updateAdjustedIncomeAirBnb: event.target.value })
	// }
	// changeUpdateIndexAirBnb = (event) => {
	// 	this.setState({ updateIndexAirBnb: event.target.value })
	// }
	// changeUpdateScoreAirBnb = (event) => {
	// 	this.setState({ updateScoreAirBnb: event.target.value })
	// }

	componentDidMount = () => {
		axios.get("/listing").then((response) => {
			console.log(response)
			this.setState({
				listing: response.data,
			})
		})
	}

	render = () => {
		return (
			<div>
				<details>
					<summary>Create Listing</summary>
					<form onSubmit={this.createListing}>
						<input
							onKeyUp={this.changeNewStreet}
							type="text"
							placeholder="Street"
						/>
						<br />
						<input
							onKeyUp={this.changeNewCity}
							type="text"
							placeholder="City"
						/>
						<br />
						<input
							onKeyUp={this.changeNewState}
							type="text"
							placeholder="State"
						/>
						<br />
						<input
							onKeyUp={this.changeNewZip}
							type="number"
							placeholder="Zip Code"
						/>
						<br />
						<input
							onKeyUp={this.changeNewPrice}
							type="number"
							step="0.01"
							placeholder="Price $"
						/>
						<br />
						<input
							onKeyUp={this.changeNewBeds}
							type="number"
							step="0.01"
							placeholder="Beds"
						/>
						<br />
						<input
							onKeyUp={this.changeNewBath}
							type="number"
							step="0.01"
							placeholder="Bath"
						/>
						<br />
						<input
							onKeyUp={this.changeNewSqft}
							type="number"
							step="0.01"
							placeholder="Sqft"
						/>
						<br />
						<input
							onKeyUp={this.changeNewDescription}
							type="text"
							placeholder="Description"
						/>
						<br />
						<input
							onKeyUp={this.changeNewImage}
							type="text"
							placeholder="Image (url)"
						/>
						<br />
						<input
							onKeyUp={this.changeNewLastSoldDate}
							type="text"
							placeholder="Last Sold Date"
						/>
						<br />
						<input
							onKeyUp={this.changeNewLastSoldAmount}
							type="number"
							step="0.01"
							placeholder="Last Sold Amount"
						/>
						<br />
						<input
							onKeyUp={this.changeNewListingBy}
							type="text"
							placeholder="Listing By"
						/>
						<br />
						<input
							onKeyUp={this.changeNewListingPhone}
							type="tel"
							placeholder="Listing agent's Phone"
						/>
						<br />
						<input
							onKeyUp={this.changeNewListingEmail}
							type="email"
							placeholder="Listing agent's Email"
						/>
						<br />
						<input
							onKeyUp={this.changeNewTaxAnnual}
							type="number"
							step="0.01"
							placeholder="Annual Tax"
						/>
						<br />
						<input
							onKeyUp={this.changeNewHoaMonthly}
							type="number"
							step="0.01"
							placeholder="HOA monthly"
						/>
						<br />
						<input
							onKeyUp={this.changeNewRentalValueTraditional}
							type="number"
							step="0.01"
							placeholder="Traditional rent (monthly)"
						/>
						<br />
						<input
							onKeyUp={this.changeNewRentalValueAirBnb}
							type="number"
							step="0.01"
							placeholder="AirBnb price (nightly)"
						/>
						<br />
						{/* <input
							onKeyUp={this.changeNewInvestmentScoreTraditional}
							type="number"
							step="0.01"
							placeholder="InvestmentScoreTraditional"
						/>
						<br />
						<input
							onKeyUp={this.changeNewInvestmentScoreAirBnb}
							type="number"
							step="0.01"
							placeholder="InvestmentScoreAirBnb"
						/>
						<br /> */}
						<input
							onKeyUp={this.changeNewOccupancyTraditionalPercentPerYear}
							type="number"
							step="0.01"
							placeholder="Traditional rental occupancy % (yearly)"
						/>
						<br />
						{/* <input
							onKeyUp={this.changeNewAnnualIncomeTraditional}
							type="number"
							step="0.01"
							placeholder="AnnualIncomeTraditional"
						/> */}
						<br />
						{/* <input
							onKeyUp={this.changeNewAdjustedIncomeTraditional}
							type="number"
							step="0.01"
							placeholder="AdjustedIncomeTraditional"
						/>
						<br /> */}
						{/* <input
							onKeyUp={this.changeNewIndexTraditional}
							type="number"
							step="0.01"
							placeholder="IndexTraditional"
						/>
						<br />
						<input
							onKeyUp={this.changeNewScoreTraditional}
							type="number"
							step="0.01"
							placeholder="ScoreTraditional"
						/>
						<br /> */}
						<input
							onKeyUp={this.changeNewOccupancyAirBnbPercentPerYear}
							type="number"
							step="0.01"
							placeholder="AirBnb occupancy % (yearly)"
						/>
						<br />
						{/* <input
							onKeyUp={this.changeNewAnnualIncomeAirBnb}
							type="number"
							step="0.01"
							placeholder="AnnualIncomeAirBnb"
						/>
						<br />
						<input
							onKeyUp={this.changeNewAdjustedIncomeAirBnb}
							type="number"
							step="0.01"
							placeholder="AdjustedIncomeAirBnb"
						/>
						<br />
						<input
							onKeyUp={this.changeNewIndexAirBnb}
							type="number"
							step="0.01"
							placeholder="IndexAirBnb"
						/>
						<br />
						<input
							onKeyUp={this.changeNewScoreAirBnb}
							type="number"
							step="0.01"
							placeholder="ScoreAirBnb"
						/>
						<br /> */}

						<input type="submit" value="Create Listing" />
					</form>
				</details>

				<h2>Listings</h2>
				{this.state.listing.map((listing, index) => {
					return (
						<div className="container">
							<li key={index}>
								<div className="house-display">
									<h2>Price: ${listing.price}</h2>
									<img src={`${listing.image}`} alt="house-img" />
									<details>
										<summary>See More</summary>
										<div className="location">
											location: {listing.street}, {listing.city},{listing.state}
											, {listing.zip} <br></br>
										</div>
										<div className="details">
											Details: <br></br>
											Beds: #{listing.beds}, Bath: #{listing.bath}, Sqft:
											{listing.sqft}
											<br></br>
										</div>
										<div className="description">
											Description: {listing.description}
										</div>
										<br></br>
										<div className="saleinfo">
											Sale Info: last sold date:{listing.lastSoldDate}, last
											sold amount: ${listing.lastSoldAmount}, listingBy:
											{listing.listingBy}
											listing agent's phone: #{listing.listingPhone}, listing
											agent's email:
											{listing.listingEmail}, annual property tax: $
											{listing.taxAnnual}, monthly HOA fee: $
											{listing.hoaMonthly}
										</div>
										<div className="invest">
											Traditional rent (monthly): $
											{listing.rentalValueTraditional} <br></br>
											AirBnb rent (daily average): {listing.rentalValueAirBnb},
											<br></br>
											Traditional investment score:
											{listing.investmentScoreTraditional}
											<br></br>
											AirBnb investment score: {listing.investmentScoreAirBnb}
										</div>
									</details>
								</div>
							</li>
						</div>
					)
				})}
				<ul>
					{this.state.listing.map((listing, index) => {
						return (
							<li key={index}>
								<button value={listing.id} onClick={this.deleteListing}>
									DELETE
								</button>

								<form id={listing.id} onSubmit={this.updateListing}>
									<input
										onKeyUp={this.changeUpdateStreet}
										type="text"
										placeholder={listing.street}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateCity}
										type="text"
										placeholder={listing.city}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateState}
										type="text"
										placeholder={listing.state}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateZip}
										type="number"
										placeholder={listing.zip}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdatePrice}
										type="number"
										step="0.01"
										min="0"
										placeholder={listing.price}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateBeds}
										type="number"
										step="0.01"
										min="0"
										placeholder={listing.beds}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateBath}
										type="number"
										step="0.01"
										min="0"
										placeholder={listing.bath}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateSqft}
										type="number"
										step="0.01"
										min="0"
										placeholder={listing.sqft}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateDescription}
										type="text"
										placeholder={listing.description}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateImage}
										type="text"
										placeholder={listing.image}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateLastSoldDate}
										type="text"
										placeholder={listing.lastSoldDate}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateLastSoldAmount}
										type="number"
										step="0.01"
										min="0"
										placeholder={listing.lastSoldAmount}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateListingBy}
										type="text"
										placeholder={listing.listingBy}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateListingPhone}
										type="tel"
										placeholder={listing.phone}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateListingEmail}
										type="email"
										placeholder={listing.listingEmail}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateTaxAnnual}
										type="number"
										step="0.01"
										min="0"
										placeholder={listing.taxAnnual}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateHoaMonthly}
										type="number"
										step="0.01"
										min="0"
										placeholder={listing.hoaMonthly}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateRentalValueTraditional}
										type="number"
										step="0.01"
										min="0"
										placeholder={listing.rentalValueTraditional}
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateRentalValueAirBnb}
										type="number"
										step="0.01"
										min="0"
										placeholder={listing.rentalValueAirBnb}
									/>
									<br />
									{/* <input
										onKeyUp={this.changeUpdateInvestmentScoreTraditional}
										type="number"
										step="0.01"
										placeholder="InvestmentScoreTraditional"
									/> */}
									{/* <br /> */}
									{/* <input
										onKeyUp={this.changeUpdateInvestmentScoreAirBnb}
										type="number"
										step="0.01"
										placeholder="InvestmentScoreAirBnb"
									/>
									<br /> */}
									<input
										onKeyUp={
											this.changeUpdateOccupancyTraditionalPercentPerYear
										}
										type="number"
										step="0.01"
										min="0"
										max="1"
										placeholder={listing.occupancyTraditionalPercentPerYear}
									/>
									<br />
									{/* <input
										onKeyUp={this.changeUpdateAnnualIncomeTraditional}
										type="number"
										step="0.01"
										placeholder="AnnualIncomeTraditional"
									/>
									<br /> */}
									{/* <input
										onKeyUp={this.changeUpdateAdjustedIncomeTraditional}
										type="number"
										step="0.01"
										placeholder="AdjustedIncomeTraditional"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateIndexTraditional}
										type="number"
										step="0.01"
										placeholder="IndexTraditional"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateScoreTraditional}
										type="number"
										step="0.01"
										placeholder="ScoreTraditional"
									/>
									<br /> */}
									<input
										onKeyUp={this.changeUpdateOccupancyAirBnbPercentPerYear}
										type="number"
										step="0.01"
										min="0"
										max="1"
										placeholder={listing.occupancyAirBnbPercentPerYear}
									/>
									<br />
									{/* <input
										onKeyUp={this.changeUpdateAnnualIncomeAirBnb}
										type="number"
										step="0.01"
										placeholder="AnnualIncomeAirBnb"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateAdjustedIncomeAirBnb}
										type="number"
										step="0.01"
										placeholder="AdjustedIncomeAirBnb"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateIndexAirBnb}
										type="number"
										step="0.01"
										placeholder="IndexAirBnb"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateScoreAirBnb}
										type="number"
										step="0.01"
										placeholder="ScoreAirBnb"
									/>
									<br /> */}

									<input type="submit" value="Update Listing" />
								</form>
							</li>
						)
					})}
				</ul>
			</div>
		)
	}
}

ReactDOM.render(<App></App>, document.querySelector("main"))
