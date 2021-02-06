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
  private Integer investmentScoreTraditional;
  private Integer investmentScoreAirBnb;
  private Double occupancyTraditionalPercentPerYear;
  private Double annualIncomeTraditional;
  private Double adjustedIncomeTraditional;
  private Integer indexTraditional;
  private Integer scoreTraditional;
  private Double occupancyAirBnbPercentPerYear;
  private Double annualIncomeAirBnb;
  private Double adjustedIncomeAirBnb;
  private Integer indexAirBnb;
  private Integer scoreAirBnb;



	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getStreet() {
		return this.street;
	}

	public void setStreet(String street) {
		this.street = street;
	}

	public String getCity() {
		return this.city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return this.state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public Integer getZip() {
		return this.zip;
	}

	public void setZip(Integer zip) {
		this.zip = zip;
	}

	public Double getPrice() {
		return this.price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public Double getBeds() {
		return this.beds;
	}

	public void setBeds(Double beds) {
		this.beds = beds;
	}

	public Double getBath() {
		return this.bath;
	}

	public void setBath(Double bath) {
		this.bath = bath;
	}

	public Double getSqft() {
		return this.sqft;
	}

	public void setSqft(Double sqft) {
		this.sqft = sqft;
	}

	public String getDescription() {
		return this.description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getImage() {
		return this.image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getLastSoldDate() {
		return this.lastSoldDate;
	}

	public void setLastSoldDate(String lastSoldDate) {
		this.lastSoldDate = lastSoldDate;
	}

	public Double getLastSoldAmount() {
		return this.lastSoldAmount;
	}

	public void setLastSoldAmount(Double lastSoldAmount) {
		this.lastSoldAmount = lastSoldAmount;
	}

	public String getListingBy() {
		return this.listingBy;
	}

	public void setListingBy(String listingBy) {
		this.listingBy = listingBy;
	}

	public String getListingPhone() {
		return this.listingPhone;
	}

	public void setListingPhone(String listingPhone) {
		this.listingPhone = listingPhone;
	}

	public String getListingEmail() {
		return this.listingEmail;
	}

	public void setListingEmail(String listingEmail) {
		this.listingEmail = listingEmail;
	}

	public Double getTaxAnnual() {
		return this.taxAnnual;
	}

	public void setTaxAnnual(Double taxAnnual) {
		this.taxAnnual = taxAnnual;
	}

	public Double getHoaMonthly() {
		return this.hoaMonthly;
	}

	public void setHoaMonthly(Double hoaMonthly) {
		this.hoaMonthly = hoaMonthly;
	}

	public Double getRentalValueTraditional() {
		return this.rentalValueTraditional;
	}

	public void setRentalValueTraditional(Double rentalValueTraditional) {
		this.rentalValueTraditional = rentalValueTraditional;
	}

	public Double getRentalValueAirBnb() {
		return this.rentalValueAirBnb;
	}

	public void setRentalValueAirBnb(Double rentalValueAirBnb) {
		this.rentalValueAirBnb = rentalValueAirBnb;
	}

	public Integer getInvestmentScoreTraditional() {
		return this.investmentScoreTraditional;
	}

	public void setInvestmentScoreTraditional(Integer investmentScoreTraditional) {
		this.investmentScoreTraditional = investmentScoreTraditional;
	}

	public Integer getInvestmentScoreAirBnb() {
		return this.investmentScoreAirBnb;
	}

	public void setInvestmentScoreAirBnb(Integer investmentScoreAirBnb) {
		this.investmentScoreAirBnb = investmentScoreAirBnb;
	}

	public Double getOccupancyTraditionalPercentPerYear() {
		return this.occupancyTraditionalPercentPerYear;
	}

	public void setOccupancyTraditionalPercentPerYear(Double occupancyTraditionalPercentPerYear) {
		this.occupancyTraditionalPercentPerYear = occupancyTraditionalPercentPerYear;
	}

	public Double getAnnualIncomeTraditional() {
		return this.annualIncomeTraditional;
	}

	public void setAnnualIncomeTraditional(Double annualIncomeTraditional) {
		this.annualIncomeTraditional = annualIncomeTraditional;
	}

	public Double getAdjustedIncomeTraditional() {
		return this.adjustedIncomeTraditional;
	}

	public void setAdjustedIncomeTraditional(Double adjustedIncomeTraditional) {
		this.adjustedIncomeTraditional = adjustedIncomeTraditional;
	}

	public Integer getIndexTraditional() {
		return this.indexTraditional;
	}

	public void setIndexTraditional(Integer indexTraditional) {
		this.indexTraditional = indexTraditional;
	}

	public Integer getScoreTraditional() {
		return this.scoreTraditional;
	}

	public void setScoreTraditional(Integer scoreTraditional) {
		this.scoreTraditional = scoreTraditional;
	}

	public Double getOccupancyAirBnbPercentPerYear() {
		return this.occupancyAirBnbPercentPerYear;
	}

	public void setOccupancyAirBnbPercentPerYear(Double occupancyAirBnbPercentPerYear) {
		this.occupancyAirBnbPercentPerYear = occupancyAirBnbPercentPerYear;
	}

	public Double getAnnualIncomeAirBnb() {
		return this.annualIncomeAirBnb;
	}

	public void setAnnualIncomeAirBnb(Double annualIncomeAirBnb) {
		this.annualIncomeAirBnb = annualIncomeAirBnb;
	}

	public Double getAdjustedIncomeAirBnb() {
		return this.adjustedIncomeAirBnb;
	}

	public void setAdjustedIncomeAirBnb(Double adjustedIncomeAirBnb) {
		this.adjustedIncomeAirBnb = adjustedIncomeAirBnb;
	}

	public Integer getIndexAirBnb() {
		return this.indexAirBnb;
	}

	public void setIndexAirBnb(Integer indexAirBnb) {
		this.indexAirBnb = indexAirBnb;
	}

	public Integer getScoreAirBnb() {
		return this.scoreAirBnb;
	}

	public void setScoreAirBnb(Integer scoreAirBnb) {
		this.scoreAirBnb = scoreAirBnb;
	}



















}
