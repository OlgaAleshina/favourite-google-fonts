import React from "react";
import {
  InputGroup,
  FormControl,
  Dropdown,
  DropdownButton
} from "react-bootstrap";
import Button from "../components/iconButton";

class FilterNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.handleTextInputField = this.handleTextInputField.bind(this);
    this.handleFamilyFilter = this.handleFamilyFilter.bind(this);
    this.handleFontSizeDropdown = this.handleFontSizeDropdown.bind(this);
    this.handleRefreshButton = this.handleRefreshButton.bind(this);
  }

  handleFamilyFilter(e) {
    this.props.onFamilyFilter(e.target.value);
  }

  handleTextInputField(e) {
    this.props.onTextInputField(e.target.value);
  }
  handleFontSizeDropdown(eventKey) {
    this.props.onFontSizesDropdown(eventKey);
  }
  handleRefreshButton() {
    this.props.onRefreshButton();
  }

  render() {
    const {
      cardTextFontSize,
      fontSizesOptions,
      modeIcon,
      listIcon,
      refreshIcon,
      familyFilterValue,
      textInputValue
    } = this.props;
    return (
      <InputGroup size="lg" className="mb-5">
        <FormControl
          value={familyFilterValue}
          name="family-filter"
          placeholder="Search fonts"
          onChange={this.handleFamilyFilter}
        />

        <FormControl
          value={textInputValue}
          name="text-input"
          placeholder="Type something"
          onChange={this.handleTextInputField}
        />
        <DropdownButton
          as={InputGroup.Prepend}
          variant="outline-secondary"
          id="font-size-dropdown"
          title={cardTextFontSize}
          onSelect={this.handleFontSizeDropdown}
        >
          {fontSizesOptions.map((option, i) => {
            return (
              <Dropdown.Item eventKey={i} key={i}>
                {option}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <InputGroup.Append>
          <Button icon={modeIcon} label="mode-button" />
          <Button icon={listIcon} label="list-to-grid-button" />
          <Button
            icon={refreshIcon}
            action={this.handleRefreshButton}
            label="refresh-button"
          />
        </InputGroup.Append>
      </InputGroup>
    );
  }
}

export default FilterNavbar;
