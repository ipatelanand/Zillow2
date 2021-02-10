package com.generalassembly.listing;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Listing {
  @Id
  @GeneratedValue(strategy=GenerationType.AUTO)
  private Integer id;

  private String street;
  private String city;
  private String state;
  private Integer zip;
  private Double price;
  private Double beds;
  private Double bath;
  private Double sqft;
  private String description;
  private String image;
  private String lastSoldDate;
  private Double lastSoldAmount;
  private String listingBy;
  private String listingPhone;
  private String listingEmail;
  private Double taxAnnual;
  private Double hoaMonthly;
  private Double rentalValueTraditional;
  private Double rentalValueAirBnb;
  private Double investmentScoreTraditional;
  private Double investmentScoreAirBnb;
  private Double occupancyTraditionalPercentPerYear;
  private Double annualIncomeTraditional;
  private Double adjustedIncomeTraditional;
  private Double indexTraditional;
  private Double scoreTraditional;
  private Double occupancyAirBnbPercentPerYear;
  private Double annualIncomeAirBnb;
  private Double adjustedIncomeAirBnb;
  private Double indexAirBnb;
  private Double scoreAirBnb;



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStreet() {
		return street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Integer getZip() {
		return zip;
	}

	public void setZip(Integer zip) {
		this.zip = zip;
	}

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getBeds() {
		return beds;
	}

	public void setBeds(Double beds) {
		this.beds = beds;
	}

	public Double getBath() {
		return bath;
	}

	public void setBath(Double bath) {
		this.bath = bath;
	}

	public Double getSqft() {
		return sqft;
	}

	public void setSqft(Double sqft) {
		this.sqft = sqft;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getLastSoldDate() {
		return lastSoldDate;
	}

	public void setLastSoldDate(String lastSoldDate) {
		this.lastSoldDate = lastSoldDate;
	}

	public Double getLastSoldAmount() {
		return lastSoldAmount;
	}

	public void setLastSoldAmount(Double lastSoldAmount) {
		this.lastSoldAmount = lastSoldAmount;
	}

	public String getListingBy() {
		return listingBy;
	}

	public void setListingBy(String listingBy) {
		this.listingBy = listingBy;
	}

	public String getListingPhone() {
		return listingPhone;
	}

	public void setListingPhone(String listingPhone) {
		this.listingPhone = listingPhone;
	}

	public String getListingEmail() {
		return listingEmail;
	}

	public void setListingEmail(String listingEmail) {
		this.listingEmail = listingEmail;
	}

	public Double getTaxAnnual() {
		return taxAnnual;
	}

	public void setTaxAnnual(Double taxAnnual) {
		this.taxAnnual = taxAnnual;
	}

	public Double getHoaMonthly() {
		return hoaMonthly;
	}

	public void setHoaMonthly(Double hoaMonthly) {
		this.hoaMonthly = hoaMonthly;
	}

	public Double getRentalValueTraditional() {
		return rentalValueTraditional;
	}

	public void setRentalValueTraditional(Double rentalValueTraditional) {
		this.rentalValueTraditional = rentalValueTraditional;
	}

	public Double getRentalValueAirBnb() {
		return rentalValueAirBnb;
	}

	public void setRentalValueAirBnb(Double rentalValueAirBnb) {
		this.rentalValueAirBnb = rentalValueAirBnb;
	}

	public Double getInvestmentScoreTraditional() {
		return investmentScoreTraditional;
	}

	public void setInvestmentScoreTraditional(Double investmentScoreTraditional) {
		
		this.investmentScoreTraditional = investmentScoreTraditional;
	}

	public Double getInvestmentScoreAirBnb() {
		return investmentScoreAirBnb;
	}

	public void setInvestmentScoreAirBnb(Double investmentScoreAirBnb) {
		this.investmentScoreAirBnb = investmentScoreAirBnb;
	}

	public Double getOccupancyTraditionalPercentPerYear() {
		return occupancyTraditionalPercentPerYear;
	}

	public void setOccupancyTraditionalPercentPerYear(Double occupancyTraditionalPercentPerYear) {
		this.occupancyTraditionalPercentPerYear = occupancyTraditionalPercentPerYear;
	}

	public Double getAnnualIncomeTraditional() {
		return annualIncomeTraditional;
	}

	public void setAnnualIncomeTraditional(Double annualIncomeTraditional) {
		this.annualIncomeTraditional = annualIncomeTraditional;
	}

	public Double getAdjustedIncomeTraditional() {
		return adjustedIncomeTraditional;
	}

	public void setAdjustedIncomeTraditional(Double adjustedIncomeTraditional) {
		this.adjustedIncomeTraditional = adjustedIncomeTraditional;
	}

	public Double getIndexTraditional() {
		return indexTraditional;
	}

	public void setIndexTraditional(Double indexTraditional) {
		this.indexTraditional = indexTraditional;
	}

	public Double getScoreTraditional() {
		return scoreTraditional;
	}

	public void setScoreTraditional(Double scoreTraditional) {
		this.scoreTraditional = scoreTraditional;
	}

	public Double getOccupancyAirBnbPercentPerYear() {
		return occupancyAirBnbPercentPerYear;
	}

	public void setOccupancyAirBnbPercentPerYear(Double occupancyAirBnbPercentPerYear) {
		this.occupancyAirBnbPercentPerYear = occupancyAirBnbPercentPerYear;
	}

	public Double getAnnualIncomeAirBnb() {
		return annualIncomeAirBnb;
	}

	public void setAnnualIncomeAirBnb(Double annualIncomeAirBnb) {
		this.annualIncomeAirBnb = annualIncomeAirBnb;
	}

	public Double getAdjustedIncomeAirBnb() {
		return adjustedIncomeAirBnb;
	}

	public void setAdjustedIncomeAirBnb(Double adjustedIncomeAirBnb) {
		this.adjustedIncomeAirBnb = adjustedIncomeAirBnb;
	}

	public Double getIndexAirBnb() {
		return indexAirBnb;
	}

	public void setIndexAirBnb(Double indexAirBnb) {
		this.indexAirBnb = indexAirBnb;
	}

	public Double getScoreAirBnb() {
		return scoreAirBnb;
	}

	public void setScoreAirBnb(Double scoreAirBnb) {
		this.scoreAirBnb = scoreAirBnb;
	}



















}
