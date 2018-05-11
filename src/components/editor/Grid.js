import React from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css"
import "react-resizable/css/styles.css"

class Workspace extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      layout: [
        { i: "a", x: 0, y: 0, w: 1, h: 1 },
        { i: "b", x: 1, y: 0, w: 1, h: 1}
      ]
    }
  }
  render() {
    // layout is an array of objects, see the demo for more complete usage
    const style = { backgroundColor: "white", borderRadius: "20px" };
    const { layout } = this.state
    return (
      <GridLayout
        className="layout"
        layout={layout}
        cols={2}
        rowHeight={600}
        width={1200}
        style={{ backgroundColor: "red", height: '100%' }}
      >
        <div style={style} key="a">
          a
        </div>
        <div style={style} key="b">
          b
        </div>
        <div style={style} key="c">
          c
        </div>
      </GridLayout>
    );
  }
}

export default Workspace;
