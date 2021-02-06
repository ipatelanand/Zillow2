class App extends React.Component {
    state = {
        listing:[]
    }

    componentDidMount = () => {
        axios.get('/listing').then(
            (response) => {
                this.setState({
                    listing:response.data
                })
            }
        )
    }

    createListing = (event) => {
        event.preventDefault();
        axios.post(
            '/listing',
            {

                street: this.state.newStreet,
                city:this.state.newCity,
                state: this.state.newState,
                zip:this.state.newZip,
                price: this.state.newPrice,
                beds:this.state.newBeds,
                bath:this.state.newBath,
                sqft:this.state.newSqft,
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
                occupancyTraditionalPercentPerYear: this.state.newOccupancyTraditionalPercentPerYear, 
                annualIncomeTraditional: this.state.newAnnualIncomeTraditional,
                adjustedIncomeTraditional: this.state.newAdjustedIncomeTraditional,
                indexTraditional: this.state.newIndexTraditional,
                scoreTraditional: this.state.newScoreTraditional,
                occupancyAirBnbPercentPerYear:this.state.newOccupancyAirBnbPercentPerYear,
                annualIncomeAirBnb: this.state.newAnnualIncomeAirBnb,
                adjustedIncomeAirBnb:this.state.newAdjustedIncomeAirBnb,
                indexAirBnb: this.state.newIndexAirBnb,
                scoreAirBnb: this.state.newScoreAirBnb
                
            }
        ).then(
            (response) => {
                this.setState({
                    listing:response.data
                })
            }
        )
    }



    changeNewStreet = (event) => { this.setState({ newStreet: event.target.value }) }
      changeNewCity = (event) => { this.setState({ newCity: event.target.value }) }
      changeNewState = (event) => { this.setState({ newState: event.target.value }) }
      changeNewZip = (event) => { this.setState({ newZip: event.target.value }) }
      changeNewPrice = (event) => { this.setState({ newPrice: event.target.value }) }
      changeNewBeds = (event) => { this.setState({ newBeds: event.target.value }) }
      changeNewBath = (event) => { this.setState({ newBath: event.target.value }) }
      changeNewSqft = (event) => { this.setState({ newSqft: event.target.value }) }
      changeNewDescription = (event) => { this.setState({ newDescription: event.target.value }) }
      changeNewImage = (event) => { this.setState({ newImage: event.target.value }) }
      changeNewLastSoldDate = (event) => { this.setState({ newLastSoldDate: event.target.value }) }
      changeNewLastSoldAmount = (event) => { this.setState({ newLastSoldAmount: event.target.value }) }
      changeNewListingBy = (event) => { this.setState({ newListingBy: event.target.value }) }
      changeNewListingPhone = (event) => { this.setState({ newListingPhone: event.target.value }) }
      changeNewListingEmail = (event) => { this.setState({ newListingEmail: event.target.value }) }
      changeNewTaxAnnual = (event) => { this.setState({ newTaxAnnual: event.target.value }) }
      changeNewHoaMonthly = (event) => { this.setState({ newHoaMonthly: event.target.value }) }
      changeNewRentalValueTraditional = (event) => { this.setState({ newRentalValueTraditional: event.target.value }) }
      changeNewRentalValueAirBnb = (event) => { this.setState({ newRentalValueAirBnb: event.target.value }) }
      changeNewInvestmentScoreTraditional = (event) => { this.setState({ newInvestmentScoreTraditional: event.target.value }) }
      changeNewInvestmentScoreAirBnb = (event) => { this.setState({ newInvestmentScoreAirBnb: event.target.value }) }
      changeNewOccupancyTraditionalPercentPerYear = (event) => { this.setState({ newOccupancyTraditionalPercentPerYear: event.target.value }) }
      changeNewAnnualIncomeTraditional = (event) => { this.setState({ newAnnualIncomeTraditional: event.target.value }) }
      changeNewAdjustedIncomeTraditional = (event) => { this.setState({ newAdjustedIncomeTraditional: event.target.value }) }
      changeNewIndexTraditional = (event) => { this.setState({ newIndexTraditional: event.target.value }) }
      changeNewScoreTraditional = (event) => { this.setState({ newScoreTraditional: event.target.value }) }
      changeNewOccupancyAirBnbPercentPerYear = (event) => { this.setState({ newOccupancyAirBnbPercentPerYear: event.target.value }) }
      changeNewAnnualIncomeAirBnb = (event) => { this.setState({ newAnnualIncomeAirBnb: event.target.value }) }
      changeNewAdjustedIncomeAirBnb = (event) =>{this.setState({ newAdjustedIncomeAirBnb: event.target.value }) }
      changeNewIndexAirBnb = (event) => { this.setState({ newIndexAirBnb: event.target.value }) }
      changeNewScoreAirBnb = (event) => { this.setState({ newScoreAirBnb: event.target.value }) }



        deleteListing = (event) =>
        {
            axios.delete('/listing/' + event.target.value).then(
                (response) =>
                {
                    this.setState({
                        listing: response.data
                    })
                }
            )

        }

        updateListing = (event) =>
        {
            event.preventDefault();
            const id = event.target.getAttribute('id');
            axios.put(
                '/listing/' + id,
                {
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
                    occupancyTraditionalPercentPerYear: this.state.updateOccupancyTraditionalPercentPerYear,
                    annualIncomeTraditional: this.state.updateAnnualIncomeTraditional,
                    adjustedIncomeTraditional: this.state.updateAdjustedIncomeTraditional,
                    indexTraditional: this.state.updateIndexTraditional,
                    scoreTraditional: this.state.updateScoreTraditional,
                    occupancyAirBnbPercentPerYear: this.state.updateOccupancyAirBnbPercentPerYear,
                    annualIncomeAirBnb: this.state.updateAnnualIncomeAirBnb,
                    adjustedIncomeAirBnb: this.state.updateAdjustedIncomeAirBnb,
                    indexAirBnb: this.state.updateIndexAirBnb,
                    scoreAirBnb: this.state.updateScoreAirBnb

                }
            ).then(
                (response) =>
                {
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
                        scoreAirBnb: null

                    })
                }
            )
        }

      
        changeUpdateStreet = (event) => { this.setState({ updateStreet: event.target.value }) }
        changeUpdateCity = (event) => { this.setState({ updateCity: event.target.value }) }
        changeUpdateState = (event) => { this.setState({ updateState: event.target.value }) }
        changeUpdateZip = (event) =>
        {
            this.setState({ updateZip: event.target.value })
        }
        changeUpdatePrice = (event) => { this.setState({ updatePrice: event.target.value }) }
        changeUpdateBeds = (event) => { this.setState({ updateBeds: event.target.value }) }
        changeUpdateBath = (event) => { this.setState({ updateBath: event.target.value }) }
        changeUpdateSqft = (event) => { this.setState({ updateSqft: event.target.value }) }
        changeUpdateDescription = (event) => { this.setState({ updateDescription: event.target.value }) }
        changeUpdateImage = (event) => { this.setState({ updateImage: event.target.value }) }
        changeUpdateLastSoldDate = (event) => { this.setState({ updateLastSoldDate: event.target.value }) }
        changeUpdateLastSoldAmount = (event) => { this.setState({ updateLastSoldAmount: event.target.value }) }
        changeUpdateListingBy = (event) => { this.setState({ updateListingBy: event.target.value }) }
        changeUpdateListingPhone = (event) => { this.setState({ updateListingPhone: event.target.value }) }
        changeUpdateListingEmail = (event) => { this.setState({ updateListingEmail: event.target.value }) }
        changeUpdateTaxAnnual = (event) => { this.setState({ updateTaxAnnual: event.target.value }) }
        changeUpdateHoaMonthly = (event) => { this.setState({ updateHoaMonthly: event.target.value }) }
        changeUpdateRentalValueTraditional = (event) => { this.setState({ updateRentalValueTraditional: event.target.value }) }
        changeUpdateRentalValueAirBnb = (event) => { this.setState({ updateRentalValueAirBnb: event.target.value }) }
        changeUpdateInvestmentScoreTraditional = (event) => { this.setState({ updateInvestmentScoreTraditional: event.target.value }) }
        changeUpdateInvestmentScoreAirBnb = (event) => { this.setState({ updateInvestmentScoreAirBnb: event.target.value }) }
        changeUpdateOccupancyTraditionalPercentPerYear = (event) => { this.setState({ updateOccupancyTraditionalPercentPerYear: event.target.value }) }
        changeUpdateAnnualIncomeTraditional = (event) => { this.setState({ updateAnnualIncomeTraditional: event.target.value }) }
        changeUpdateAdjustedIncomeTraditional = (event) => { this.setState({ updateAdjustedIncomeTraditional: event.target.value }) }
        changeUpdateIndexTraditional = (event) => { this.setState({ updateIndexTraditional: event.target.value }) }
        changeUpdateScoreTraditional = (event) => { this.setState({ updateScoreTraditional: event.target.value }) }
        changeUpdateOccupancyAirBnbPercentPerYear = (event) => { this.setState({ updateOccupancyAirBnbPercentPerYear: event.target.value }) }
        changeUpdateAnnualIncomeAirBnb = (event) => { this.setState({ updateAnnualIncomeAirBnb: event.target.value }) }
        changeUpdateAdjustedIncomeAirBnb = (event) => { this.setState({ updateAdjustedIncomeAirBnb: event.target.value }) }
        changeUpdateIndexAirBnb = (event) => { this.setState({ updateIndexAirBnb: event.target.value }) }
        changeUpdateScoreAirBnb = (event) => { this.setState({ updateScoreAirBnb: event.target.value }) }
      
      
  
        render = () =>
        {
            return <div>
                <h2>Create Liting</h2>
                <form onSubmit={this.createListing}>


                    <input onKeyUp={this.changeStreet} type="text" placeholder="Street" /><br />
                    <input onKeyUp={this.changeCity} type="text" placeholder="City" /><br />
                    <input onKeyUp={this.changeState} type="text" placeholder="State" /><br />
                    <input onKeyUp={this.changeZip} type="int" placeholder="Zip" /><br />
                    <input onKeyUp={this.changePrice} type="money" placeholder="Price" /><br />
                    <input onKeyUp={this.changeBeds} type="float" placeholder="Beds" /><br />
                    <input onKeyUp={this.changeBath} type="float" placeholder="Bath" /><br />
                    <input onKeyUp={this.changeSqft} type="float" placeholder="Sqft" /><br />
                    <input onKeyUp={this.changeDescription} type="text" placeholder="Description" /><br />
                    <input onKeyUp={this.changeImage} type="image" placeholder="Image" /><br />
                    <input onKeyUp={this.changeLastSoldDate} type="text" placeholder="LastSoldDate" /><br />
                    <input onKeyUp={this.changeLastSoldAmount} type="text" placeholder="LastSoldAmount" /><br />
                    <input onKeyUp={this.changeListingBy} type="money" placeholder="ListingBy" /><br />
                    <input onKeyUp={this.changeListingPhone} type="text" placeholder="ListingPhone" /><br />
                    <input onKeyUp={this.changeListingEmail} type="int" placeholder="ListingEmail" /><br />
                    <input onKeyUp={this.changeTaxAnnual} type="text" placeholder="TaxAnnual" /><br />
                    <input onKeyUp={this.changeHoaMonthly} type="money" placeholder="HoaMonthly" /><br />
                    <input onKeyUp={this.changeRentalValueTraditional} type="money" placeholder="RentalValueTraditional" /><br />
                    <input onKeyUp={this.changeRentalValueAirBnb} type="money" placeholder="RentalValueAirBnb" /><br />
                    <input onKeyUp={this.changeInvestmentScoreTraditional} type="money" placeholder="InvestmentScoreTraditional" /><br />
                    <input onKeyUp={this.changeInvestmentScoreAirBnb} type="int" placeholder="InvestmentScoreAirBnb" /><br />
                    <input onKeyUp={this.changeOccupancyTraditionalPercentPerYear} type="int" placeholder="OccupancyTraditionalPercentPerYear" /><br />
                    <input onKeyUp={this.changeAnnualIncomeTraditional} type="float" placeholder="AnnualIncomeTraditional" /><br />
                    <input onKeyUp={this.changeAdjustedIncomeTraditional} type="money" placeholder="AdjustedIncomeTraditional" /><br />
                    <input onKeyUp={this.changeIndexTraditional} type="money" placeholder="IndexTraditional" /><br />
                    <input onKeyUp={this.changeScoreTraditional} type="int" placeholder="ScoreTraditional" /><br />
                    <input onKeyUp={this.changeOccupancyAirBnbPercentPerYear} type="int" placeholder="OccupancyAirBnbPercentPerYear" /><br />
                    <input onKeyUp={this.changeAnnualIncomeAirBnb} type="float" placeholder="AnnualIncomeAirBnb" /><br />
                    <input onKeyUp={this.changeAdjustedIncomeAirBnb} type="money" placeholder="AdjustedIncomeAirBnb" /><br />
                    <input onKeyUp={this.changeIndexAirBnb} type="money" placeholder="IndexAirBnb" /><br />
                    <input onKeyUp={this.changeScoreAirBnb} type="int" placeholder="ScoreAirBnb" /><br />

                    <input type="submit" value="Create Listing" />
                </form>
                <h2>Listings</h2>
                <ul>
                    {
                        this.state.listing.map(
                            (listing, index) =>
                            {
                                return <li key={index}>

                                

                                    <button value={listing.id} onClick={this.deleteListing}>DELETE</button>

                                    <form id={listing.id} onSubmit={this.updateListing}>


                                        <input onKeyUp={this.changeUpdateStreet} type="text" placeholder="Street" /><br />
                                        <input onKeyUp={this.changeUpdateCity} type="text" placeholder="City" /><br />
                                        <input onKeyUp={this.changeUpdateState} type="text" placeholder="State" /><br />
                                        <input onKeyUp={this.changeUpdateZip} type="int" placeholder="Zip" /><br />
                                        <input onKeyUp={this.changeUpdatePrice} type="money" placeholder="Price" /><br />
                                        <input onKeyUp={this.changeUpdateBeds} type="float" placeholder="Beds" /><br />
                                        <input onKeyUp={this.changeUpdateBath} type="float" placeholder="Bath" /><br />
                                        <input onKeyUp={this.changeUpdateSqft} type="float" placeholder="Sqft" /><br />
                                        <input onKeyUp={this.changeUpdateDescription} type="text" placeholder="Description" /><br />
                                        <input onKeyUp={this.changeUpdateImage} type="image" placeholder="Image" /><br />
                                        <input onKeyUp={this.changeUpdateLastSoldDate} type="text" placeholder="LastSoldDate" /><br />
                                        <input onKeyUp={this.changeUpdateLastSoldAmount} type="text" placeholder="LastSoldAmount" /><br />
                                        <input onKeyUp={this.changeUpdateListingBy} type="money" placeholder="ListingBy" /><br />
                                        <input onKeyUp={this.changeUpdateListingPhone} type="text" placeholder="ListingPhone" /><br />
                                        <input onKeyUp={this.changeUpdateListingEmail} type="int" placeholder="ListingEmail" /><br />
                                        <input onKeyUp={this.changeUpdateTaxAnnual} type="text" placeholder="TaxAnnual" /><br />
                                        <input onKeyUp={this.changeUpdateHoaMonthly} type="money" placeholder="HoaMonthly" /><br />
                                        <input onKeyUp={this.changeUpdateRentalValueTraditional} type="money" placeholder="RentalValueTraditional" /><br />
                                        <input onKeyUp={this.changeUpdateRentalValueAirBnb} type="money" placeholder="RentalValueAirBnb" /><br />
                                        <input onKeyUp={this.changeUpdateInvestmentScoreTraditional} type="money" placeholder="InvestmentScoreTraditional" /><br />
                                        <input onKeyUp={this.changeUpdateInvestmentScoreAirBnb} type="int" placeholder="InvestmentScoreAirBnb" /><br />
                                        <input onKeyUp={this.changeUpdateOccupancyTraditionalPercentPerYear} type="int" placeholder="OccupancyTraditionalPercentPerYear" /><br />
                                        <input onKeyUp={this.changeUpdateAnnualIncomeTraditional} type="float" placeholder="AnnualIncomeTraditional" /><br />
                                        <input onKeyUp={this.changeUpdateAdjustedIncomeTraditional} type="money" placeholder="AdjustedIncomeTraditional" /><br />
                                        <input onKeyUp={this.changeUpdateIndexTraditional} type="money" placeholder="IndexTraditional" /><br />
                                        <input onKeyUp={this.changeUpdateScoreTraditional} type="int" placeholder="ScoreTraditional" /><br />
                                        <input onKeyUp={this.changeUpdateOccupancyAirBnbPercentPerYear} type="int" placeholder="OccupancyAirBnbPercentPerYear" /><br />
                                        <input onKeyUp={this.changeUpdateAnnualIncomeAirBnb} type="float" placeholder="AnnualIncomeAirBnb" /><br />
                                        <input onKeyUp={this.changeUpdateAdjustedIncomeAirBnb} type="money" placeholder="AdjustedIncomeAirBnb" /><br />
                                        <input onKeyUp={this.changeUpdateIndexAirBnb} type="money" placeholder="IndexAirBnb" /><br />
                                        <input onKeyUp={this.changeUpdateScoreAirBnb} type="int" placeholder="ScoreAirBnb" /><br />

                                        <input type="submit" value="Update Listing" />
                                    </form>
                                </li>
                            }
                        )
                    }
                </ul>
            </div>
        }
    }

              ReactDOM.render(
                  <App></App>,
                  document.querySelector('main')
              )
          
