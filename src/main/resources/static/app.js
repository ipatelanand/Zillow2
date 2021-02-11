class App extends React.Component {
	state = {
		listing: [],
	}

	createListing = (event) => {
		event.preventDefault()

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
				investmentScoreTraditional: this.state.newInvestmentScoreTraditional,
				investmentScoreAirBnb: this.state.newInvestmentScoreAirBnb,
				occupancyTraditionalPercentPerYear: this.state
					.newOccupancyTraditionalPercentPerYear,
				annualIncomeTraditional: this.state.newAnnualIncomeTraditional,
				adjustedIncomeTraditional: this.state.newAdjustedIncomeTraditional,
				indexTraditional: this.state.newIndexTraditional,
				scoreTraditional: this.state.newScoreTraditional,
				occupancyAirBnbPercentPerYear: this.state
					.newOccupancyAirBnbPercentPerYear,
				annualIncomeAirBnb: this.state.newAnnualIncomeAirBnb,
				adjustedIncomeAirBnb: this.state.newAdjustedIncomeAirBnb,
				indexAirBnb: this.state.newIndexAirBnb,
				scoreAirBnb: this.state.newScoreAirBnb,
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
	changeNewInvestmentScoreTraditional = (event) => {
		let score = newPrice
		let index =
			(this.newOccupancyTraditionalPercentPerYear *
				(12 * this.newRentalValueTraditional -
					(this.newTaxAnnual - this.newHoaMonthly * 12))) /
			this.newPrice
		if (index < 0.05) {
			score = 1
		} else if (index > 0.05 && index < 0.06) {
			score = 3
		} else if (index >= 0.06 && index < 0.07) {
			score = 5
		} else if (index >= 0.07 && index < 0.08) {
			score = 9
		} else if (index >= 0.08) {
			score = 10
		}
		this.setState({ newInvestmentScoreTraditional: score })
	}
	changeNewInvestmentScoreAirBnb = (event) => {
		this.setState({ newInvestmentScoreAirBnb: event.target.value })
	}
	changeNewOccupancyTraditionalPercentPerYear = (event) => {
		this.setState({ newOccupancyTraditionalPercentPerYear: event.target.value })
	}
	changeNewAnnualIncomeTraditional = (event) => {
		this.setState({ newAnnualIncomeTraditional: event.target.value })
	}
	changeNewAdjustedIncomeTraditional = (event) => {
		this.setState({ newAdjustedIncomeTraditional: event.target.value })
	}
	changeNewIndexTraditional = (event) => {
		this.setState({ newIndexTraditional: event.target.value })
	}
	changeNewScoreTraditional = (event) => {
		this.setState({ newScoreTraditional: event.target.value })
	}
	changeNewOccupancyAirBnbPercentPerYear = (event) => {
		this.setState({ newOccupancyAirBnbPercentPerYear: event.target.value })
	}
	changeNewAnnualIncomeAirBnb = (event) => {
		this.setState({ newAnnualIncomeAirBnb: event.target.value })
	}
	changeNewAdjustedIncomeAirBnb = (event) => {
		this.setState({ newAdjustedIncomeAirBnb: event.target.value })
	}
	changeNewIndexAirBnb = (event) => {
		this.setState({ newIndexAirBnb: event.target.value })
	}
	changeNewScoreAirBnb = (event) => {
		this.setState({ newScoreAirBnb: event.target.value })
	}

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
				investmentScoreTraditional: this.state.updateInvestmentScoreTraditional,
				investmentScoreAirBnb: this.state.updateInvestmentScoreAirBnb,
				occupancyTraditionalPercentPerYear: this.state
					.updateOccupancyTraditionalPercentPerYear,
				annualIncomeTraditional: this.state.updateAnnualIncomeTraditional,
				adjustedIncomeTraditional: this.state.updateAdjustedIncomeTraditional,
				indexTraditional: this.state.updateIndexTraditional,
				scoreTraditional: this.state.updateScoreTraditional,
				occupancyAirBnbPercentPerYear: this.state
					.updateOccupancyAirBnbPercentPerYear,
				annualIncomeAirBnb: this.state.updateAnnualIncomeAirBnb,
				adjustedIncomeAirBnb: this.state.updateAdjustedIncomeAirBnb,
				indexAirBnb: this.state.updateIndexAirBnb,
				scoreAirBnb: this.state.updateScoreAirBnb,
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
					investmentScoreTraditional: null,
					investmentScoreAirBnb: null,
					occupancyTraditionalPercentPerYear: null,
					annualIncomeTraditional: null,
					adjustedIncomeTraditional: null,
					indexTraditional: null,
					scoreTraditional: null,
					occupancyAirBnbPercentPerYear: null,
					annualIncomeAirBnb: null,
					adjustedIncomeAirBnb: null,
					indexAirBnb: null,
					scoreAirBnb: null,
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
	changeUpdateAnnualIncomeTraditional = (event) => {
		this.setState({ updateAnnualIncomeTraditional: event.target.value })
	}
	changeUpdateAdjustedIncomeTraditional = (event) => {
		this.setState({ updateAdjustedIncomeTraditional: event.target.value })
	}
	changeUpdateIndexTraditional = (event) => {
		this.setState({ updateIndexTraditional: event.target.value })
	}
	changeUpdateScoreTraditional = (event) => {
		this.setState({ updateScoreTraditional: event.target.value })
	}
	changeUpdateOccupancyAirBnbPercentPerYear = (event) => {
		this.setState({ updateOccupancyAirBnbPercentPerYear: event.target.value })
	}
	changeUpdateAnnualIncomeAirBnb = (event) => {
		this.setState({ updateAnnualIncomeAirBnb: event.target.value })
	}
	changeUpdateAdjustedIncomeAirBnb = (event) => {
		this.setState({ updateAdjustedIncomeAirBnb: event.target.value })
	}
	changeUpdateIndexAirBnb = (event) => {
		this.setState({ updateIndexAirBnb: event.target.value })
	}
	changeUpdateScoreAirBnb = (event) => {
		this.setState({ updateScoreAirBnb: event.target.value })
	}

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
							placeholder="street"
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
							placeholder="Zip"
						/>
						<br />
						<input
							onKeyUp={this.changeNewPrice}
							type="number"
							step="0.01"
							placeholder="Price"
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
							placeholder="Image"
						/>
						<br />
						<input
							onKeyUp={this.changeNewLastSoldDate}
							type="text"
							placeholder="LastSoldDate"
						/>
						<br />
						<input
							onKeyUp={this.changeNewLastSoldAmount}
							type="number"
							step="0.01"
							placeholder="LastSoldAmount"
						/>
						<br />
						<input
							onKeyUp={this.changeNewListingBy}
							type="text"
							placeholder="ListingBy"
						/>
						<br />
						<input
							onKeyUp={this.changeNewListingPhone}
							type="tel"
							placeholder="ListingPhone"
						/>
						<br />
						<input
							onKeyUp={this.changeNewListingEmail}
							type="email"
							placeholder="ListingEmail"
						/>
						<br />
						<input
							onKeyUp={this.changeNewTaxAnnual}
							type="number"
							step="0.01"
							placeholder="TaxAnnual"
						/>
						<br />
						<input
							onKeyUp={this.changeNewHoaMonthly}
							type="number"
							step="0.01"
							placeholder="HoaMonthly"
						/>
						<br />
						<input
							onKeyUp={this.changeNewRentalValueTraditional}
							type="number"
							step="0.01"
							placeholder="RentalValueTraditional"
						/>
						<br />
						<input
							onKeyUp={this.changeNewRentalValueAirBnb}
							type="number"
							step="0.01"
							placeholder="RentalValueAirBnb"
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
							placeholder="OccupancyTraditionalPercentPerYear"
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
							placeholder="OccupancyAirBnbPercentPerYear"
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
											Beds: {listing.beds}, Bath:{listing.bath}, Sqft:
											{listing.sqft}
											<br></br>
										</div>
										<div className="description">
											Description: {listing.description}
										</div>
										<br></br>
										<div className="saleinfo">
											Sale Info: lastSoldDate:{listing.lastSoldDate},
											lastSoldAmount:{listing.lastSoldAmount}, listingBy:
											{listing.listingBy}
											listingPhone:{listing.listingPhone}, listingEmail:
											{listing.listingEmail}, taxAnnual: {listing.taxAnnual},
											hoaMonthly: {listing.hoaMonthly}
										</div>
										<div className="invest">
											rentalValueTraditional: {listing.rentalValueTraditional},
											rentalValueAirBnb: {listing.rentalValueAirBnb},
											investmentScoreTraditional:
											{listing.investmentScoreTraditional}
											investmentScoreAirBnb: {listing.investmentScoreAirBnb}
											adjustedIncomeTraditional: occupancyAirBnbPercentPerYear:
											adjustedIncomeAirBnb:
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
										placeholder="Street"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateCity}
										type="text"
										placeholder="City"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateState}
										type="text"
										placeholder="State"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateZip}
										type="number"
										placeholder="Zip"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdatePrice}
										type="number"
										step="0.01"
										placeholder="Price"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateBeds}
										type="number"
										step="0.01"
										placeholder="Beds"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateBath}
										type="number"
										step="0.01"
										placeholder="Bath"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateSqft}
										type="number"
										step="0.01"
										placeholder="Sqft"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateDescription}
										type="text"
										placeholder="Description"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateImage}
										type="text"
										placeholder="Image"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateLastSoldDate}
										type="text"
										placeholder="LastSoldDate"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateLastSoldAmount}
										type="number"
										step="0.01"
										placeholder="LastSoldAmount"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateListingBy}
										type="text"
										placeholder="ListingBy"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateListingPhone}
										type="tel"
										placeholder="ListingPhone"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateListingEmail}
										type="email"
										placeholder="ListingEmail"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateTaxAnnual}
										type="number"
										step="0.01"
										placeholder="TaxAnnual"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateHoaMonthly}
										type="number"
										step="0.01"
										placeholder="HoaMonthly"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateRentalValueTraditional}
										type="number"
										step="0.01"
										placeholder="RentalValueTraditional"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateRentalValueAirBnb}
										type="number"
										step="0.01"
										placeholder="RentalValueAirBnb"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateInvestmentScoreTraditional}
										type="number"
										step="0.01"
										placeholder="InvestmentScoreTraditional"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateInvestmentScoreAirBnb}
										type="number"
										step="0.01"
										placeholder="InvestmentScoreAirBnb"
									/>
									<br />
									<input
										onKeyUp={
											this.changeUpdateOccupancyTraditionalPercentPerYear
										}
										type="number"
										step="0.01"
										placeholder="OccupancyTraditionalPercentPerYear"
									/>
									<br />
									<input
										onKeyUp={this.changeUpdateAnnualIncomeTraditional}
										type="number"
										step="0.01"
										placeholder="AnnualIncomeTraditional"
									/>
									<br />
									<input
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
									<br />
									<input
										onKeyUp={this.changeUpdateOccupancyAirBnbPercentPerYear}
										type="number"
										step="0.01"
										placeholder="OccupancyAirBnbPercentPerYear"
									/>
									<br />
									<input
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
									<br />

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
