import React, { Component } from "react";
import FontScripts from "./FontScripts";
import FilterNavbar from "./FilterNavbar";
import FontTable from "./FontTable";
import Button from "../components/iconButton";
import Spinner from "../components/spinner";

class FilterableFontTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userFontFamily: "",
      userCardText: "",
      cardText: "my sentence",
      fontSizesOptions: [12, 18, 20, 24],
      cardTextFontSize: 18,
      fontsList: [],
      filteredFontsList: [],
      isFontsFiltered: false,
      isUserTextInput: false,
      isLoaded: false,
      error: null
    };
    this.icons = {
      refreshIcon: "fas fa-redo",
      plusIcon: "fas fa-plus-circle",
      scrollTopIcon: "fas fa-angle-up",
      listIcon: "fas fa-th-list",
      modeIcon: "fas fa-adjust"
    };
    this.handleFamilyFilter = this.handleFamilyFilter.bind(this);
    this.handleTextInput = this.handleTextInput.bind(this);
    this.handleFontSizeDropdown = this.handleFontSizeDropdown.bind(this);
    this.handleRefreshButton = this.handleRefreshButton.bind(this);
    this.handleScrollTopButton = this.handleScrollTopButton.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCAO4rW5cB73m4cjN0-jITSe8vwfWXuj-c&sort=popularity"
    )
      .then(response => response.json())
      .then(
        result => {
          this.setState({
            isLoaded: true,
            fontsList: result.items
          });
          console.log(this.state);
        },
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  handleFamilyFilter(family) {
    const filteredItems = this.state.fontsList.filter(item => {
      return item.family.toLowerCase().search(family.toLowerCase()) > -1;
    });
    this.setState({
      userFontFamily: family,
      filteredFontsList: filteredItems,
      isFontsFiltered: true
    });
  }

  handleTextInput(inputText) {
    this.setState({ userCardText: inputText, isUserTextInput: true });
  }
  handleFontSizeDropdown(eventKey) {
    this.setState({
      cardTextFontSize: this.state.fontSizesOptions[eventKey]
    });
  }
  handleRefreshButton() {
    this.setState({
      userFontFamily: "",
      userCardText: "",
      cardText: "my sentence",
      cardTextFontSize: 18,
      isFontsFiltered: false,
      isUserTextInput: false
    });
  }

  handleScrollTopButton() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const {
      cardText,
      userCardText,
      userFontFamily,
      fontSizesOptions,
      cardTextFontSize,
      fontsList,
      filteredFontsList,
      error,
      isLoaded,
      isFontsFiltered,
      isUserTextInput
    } = this.state;

    const filterValidation = () => {
      if (isFontsFiltered) {
        return filteredFontsList;
      } else {
        return fontsList;
      }
    };

    const textInputValidation = () => {
      if (isUserTextInput) {
        return this.state.userCardText;
      } else {
        return cardText;
      }
    };


    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <Spinner />;
    } else {
    return (
      <div>
        <FontScripts items={filterValidation()} />
        <FilterNavbar
          familyFilterValue={userFontFamily}
          onFamilyFilter={this.handleFamilyFilter}
          textInputValue={userCardText}
          onTextInputField={this.handleTextInput}
          cardTextFontSize={cardTextFontSize}
          fontSizesOptions={fontSizesOptions}
          onFontSizesDropdown={this.handleFontSizeDropdown}
          modeIcon={this.icons.modeIcon}
          listIcon={this.icons.listIcon}
          refreshIcon={this.icons.refreshIcon}
          onRefreshButton={this.handleRefreshButton}
        />

        <FontTable
          fonts={filterValidation()}
          cardText={textInputValidation()}
          fontSize={cardTextFontSize}
          plusIcon={this.icons.plusIcon}
        />
        <div className="fixed-top text-right m-4">
          <Button
            id="scroll-top-button"
            label="scroll-top-button"
            action={this.handleScrollTopButton}
            icon={this.icons.scrollTopIcon}
          />
        </div>
      </div>
    );
  }
}}
export default FilterableFontTable;
