import Head from 'next/head'
import { useState, Component } from "react";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0,
    };
  }

  incrementCount1 = () => {
    this.setState({
      count1: this.state.count1 + 1,
    });
  };

  decrementCount1 = () => {
    this.setState({
      count1: this.state.count1 - 1,
    });
  };

  incrementCount2 = () => {
    this.setState({
      count2: this.state.count2 + 1,
    });
  };

  decrementCount2 = () => {
    this.setState({
      count2: this.state.count2 - 1,
    });
  };

  incrementCount3 = () => {
    this.setState({
      count3: this.state.count3 + 1,
    });
  };

  decrementCount3 = () => {
    this.setState({
      count3: this.state.count3 - 1,
    });
  };

  incrementCount4 = () => {
    this.setState({
      count4: this.state.count4 + 1,
    });
  };

  decrementCount4 = () => {
    this.setState({
      count4: this.state.count4 - 1,
    });
  };

  incrementCount5 = () => {
    this.setState({
      count5: this.state.count5 + 1,
    });
  };

  decrementCount5 = () => {
    this.setState({
      count5: this.state.count5 - 1,
    });
  };

  resetCount = () => {
    this.setState({
      count1: 0,
      count2: 0,
      count3: 0,
      count4: 0,
      count5: 0,
    });
  };

  render() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <h1 className="text-6xl font-bold">Voting Motion Gan</h1>

        <p className="mt-3 text-2xl mb-9">Aplikasi mengvoting :D</p>
        <main className="flex flex-col items-center justify-center max-w-7xl flex-1 px-60 pb-10 text-center border">
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            Nilai 1: {this.state.count1}
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <button
                onClick={this.decrementCount1}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                -
              </button>{" "}
              <button
                onClick={this.incrementCount1}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            Nilai 2: {this.state.count2}
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <button
                onClick={this.decrementCount2}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                -
              </button>{" "}
              <button
                onClick={this.incrementCount2}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            Nilai 3: {this.state.count3}
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <button
                onClick={this.decrementCount3}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                -
              </button>{" "}
              <button
                onClick={this.incrementCount3}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            Nilai 4: {this.state.count4}
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <button
                onClick={this.decrementCount4}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                -
              </button>{" "}
              <button
                onClick={this.incrementCount4}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            Nilai 5: {this.state.count5}
            <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
              <button
                onClick={this.decrementCount5}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                -
              </button>{" "}
              <button
                onClick={this.incrementCount5}
                className=" bg-gray-100 w-5 hover:bg-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <button
              onClick={this.resetCount}
              className=" bg-gray-100 w-20 hover:bg-gray-300"
            >
              Reset
            </button>
          </div>
        </main>

        <footer className="flex items-center justify-center mt-9 w-full h-24 border-t">
          <a
            className="flex items-center justify-center"
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
          </a>
        </footer>
      </div>
    );
  }
}
