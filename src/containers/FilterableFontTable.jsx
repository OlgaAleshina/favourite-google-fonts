import React, { Component } from "react";
import FilterNavbar from "./FilterNavbar";
import FontTable from "./FontTable";
import Button from "../components/iconButton";

class FilterableFontTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardText: "my sentence",
      fontSizesOptions: [12, 18, 20, 24],
      cardTextFontSize: 18,
      fontsList: [],
      isFontsFiltered: false,
      isLoaded: false,
      error: null,
      userInput: {
        cardText: "",
        fontFamily: "",
        filteredFontsList: []
      }
    };

    this.icons = {
      refreshIcon: "fas fa-redo",
      plusIcon: "fas fa-plus-circle",
      scrollTopIcon: "fas fa-angle-up",
      listIcon: "fas fa-th-list",
      modeIcon: "fas fa-adjust"
    };
    this.handleFamilyFilter = this.handleFamilyFilter.bind(this);
    this.handleCardText = this.handleCardText.bind(this);
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

    this.setState(prevState => ({
      userInput: { ...prevState.userInput, filteredFontsList: filteredItems }
    }));
    this.setState({ isFontsFiltered: true });
  }

  handleCardText(inputText) {
    if (!inputText) {
      this.setState({ cardText: "my sentence" });
    } else {
      this.setState({ cardText: inputText });
    }
  }
  handleFontSizeDropdown(eventKey) {
    this.setState({
      cardTextFontSize: this.state.fontSizesOptions[eventKey]
    });
  }
  handleRefreshButton() {
    this.setState({
      cardText: "my sentence",
      cardTextFontSize: 18,
      isFontsFiltered: false
    });
  }

  handleScrollTopButton() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render() {
    const {
      cardText,
      fontSizesOptions,
      cardTextFontSize,
      fontsList,
      isLoaded,
      isFontsFiltered
    } = this.state;

    const filterValidation = () => {
      if (isFontsFiltered) {
        return this.state.userInput.filteredFontsList;
      } else {
        return fontsList;
      }
    };

    return (
      <div>
        <FilterNavbar
          onFamilyFilter={this.handleFamilyFilter}
          onTextInputField={this.handleCardText}
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
          cardText={cardText}
          fontSize={cardTextFontSize}
          plusIcon={this.icons.plusIcon}
        />
        <Button
          id="scroll-top-button"
          label="scroll-top-button"
          action={this.handleScrollTopButton}
          icon={this.icons.scrollTopIcon}
        />
      </div>
    );
  }
}
export default FilterableFontTable;
