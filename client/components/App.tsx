import internal from "node:stream";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

function App() {
  const sayHelloListing = () => {
    return "hello";
  };

  const object = {
    name: "chriist",
    age: 23,
  };

  const name = "heloooooooooo";

  function test() {
    const one = 1;

    if (one === 1) {
      console.log("hello");
    } else {
      console.log("two");
    }
  }

  return (
    <>
      <h1>Hello</h1>
    </>
  );
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(App);
