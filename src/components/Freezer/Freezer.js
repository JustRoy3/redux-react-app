import React, { Component } from 'react';

import Panel from '../Panel/Panel';
import FreezerFlavor from '../FreezerFlavor/FreezerFlavor';
import store from "../../store";

class Freezer extends Component {

  state={
    flavors: store.getState().freezer.icecreams,
  }

  componentDidMount(){
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        flavors: store.getState().freezer.icecreams,
      })
    })
  }

  componentWillUnmount(){
    this.unsubscribe()
  }

  render() {
    console.log(this.state)
    const flavors = this.state.flavors;
    const freezerFlavors = Object.keys(flavors).map(flavorName => {
      return <FreezerFlavor key={flavorName} flavorName={flavorName} scoops={flavors[flavorName]} />
    })
    return (
      <Panel title="Freezer (°0C)">
        {freezerFlavors}
      </Panel>
    );
  }
}

export default Freezer;

