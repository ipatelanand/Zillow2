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

                street text, city text, state text, zip int, price money, beds float, bath float, sqft float, description text, image text, lastSoldDate text, lastSoldAmount money, listingBy text;, listingPhone int, listingEmail text, taxAnnual money, hoaMonthly money, rentalValueTraditional money, rentalValueAirBnb money, investmentScoreTraditional int, investmentScoreAirBnb int, occupancyTraditionalPercentPerYear float, annualIncomeTraditional money, adjustedIncomeTraditional money, indexTraditional int, scoreTraditional int, occupancyAirBnbPercentPerYear float, annualIncomeAirBnb money, adjustedIncomeAirBnb money, indexAirBnb int, scoreAirBnb int,
                street: this.state.newStreet,
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
                taxAnnual: this.state.newTaxAnnual,
                hoaMonthly: this.state.newHoaMonthly,
                rentalValueTraditional: this.state.newRentalValueTraditional,
                rentalValueAirBnb: this.state.newRentalValueAirbnb,
                investmentScoreTraditional: this.state.newInvestmentScoreTraditional,
                investmentScoreAirBnb: this.state.newInvestmentScoreAirBnb,
                occupancyTraditionalPercentPerYear: this.state.newOccupancyTraditionalPercentPerYear,


                age:this.state.newPersonAge,
            }
        ).then(
            (response) => {
                this.setState({
                    people:response.data
                })
            }
        )
    }

    changeNewPersonAge = (event) => {
        this.setState({
            newPersonAge:event.target.value
        });
    }

    changeNewPersonName = (event) => {
        this.setState({
            newPersonName:event.target.value
        });
    }

    deletePerson = (event) => {
        axios.delete('/people/' + event.target.value).then(
            (response) => {
                this.setState({
                    people:response.data
                })
            }
        )

    }

    updatePerson = (event) => {
        event.preventDefault();
        const id = event.target.getAttribute('id');
        axios.put(
            '/people/' + id,
            {
                name:this.state.updatePersonName,
                age:this.state.updatePersonAge,
            }
        ).then(
            (response) => {
                this.setState({
                    people:response.data,
                    name:'',
                    age:null,
                })
            }
        )
    }

    changeUpdatePersonName = (event) => {
        this.setState(
            {
                updatePersonName:event.target.value
            }
        )
    }

    changeUpdatePersonAge = (event) => {
        this.setState(
            {
                updatePersonAge:event.target.value
            }
        )
    }

    render = () => {
        return <div>
            <h2>Create Person</h2>
            <form onSubmit={this.createPerson}>
                <input onKeyUp={this.changeNewPersonName} type="text" placeholder="name" /><br/>
                <input onKeyUp={this.changeNewPersonAge} type="number" placeholder="age" /><br/>
                <input type="submit" value="Create Person" />
            </form>
            <h2>List of People</h2>
            <ul>
                {
                    this.state.people.map(
                        (person, index) => {
                            return <li key={index}>

                                {person.name}: {person.age}

                                <button value={person.id} onClick={this.deletePerson}>DELETE</button>

                                <form id={person.id} onSubmit={this.updatePerson}>
                                    <input onKeyUp={this.changeUpdatePersonName} type="text" placeholder="name"/><br/>
                                    <input onKeyUp={this.changeUpdatePersonAge} type="number" placeholder="age"/><br/>
                                    <input type="submit" value="Update Person"/>
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
