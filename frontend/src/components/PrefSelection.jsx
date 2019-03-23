import React, { Component } from 'react';

import CreatableSelect from 'react-select/lib/Creatable';

export default class PrefSelection extends Component {
  constructor(props) {
    super(props);
    this.props.onChange([" "]);
  }
  handleChange = (newValue, actionMeta) => {
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();

    this.props.onChange(newValue.map(x => x.value));
  };
  render() {
    return (
      <CreatableSelect
        isMulti
        onChange={this.handleChange}
        //options={colourOptions}
      />
    );
  }
}
