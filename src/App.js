import React, { Component } from "react";
import "./App.css";

const data = [
  {
    name: "Basketball",
    img:
      "https://images.unsplash.com/photo-1496033604106-04799291ee86?ixlib=rb-0.3.5&s=e7a4737ccd58f282702490b8c4a13f87&auto=format&fit=crop&w=1950&q=80",
    text:
      "2p 3-point field goal percentage (available since the 1979-80 season in the nba); the formula is 3p / 3pa. age; player age on february 1 of the given season. fg fta four factors games started (available since the 1982 season) losses most valuable player margin of victory; the formula is pts - opp pts. opponent orb pace pts rookie of the year sos strength of schedule; a rating of strength of schedule. the rating is denominated in points above/below average, where zero is average. my colleague doug drinen of pro-football-reference.com has written a great explanation of this method. stl stops; dean oliver's measure of individual defensive stops."
  },
  {
    name: "Rebound",
    img:
      "https://images.unsplash.com/photo-1506152038909-555c512ebe80?ixlib=rb-0.3.5&s=b8b240f5aed0144214be77bfc3837799&auto=format&fit=crop&w=1950&q=80",
    text:
      "2-point field goals 2p% 2-point field goal percentage; the formula is 2p / 2pa. 2pa 2-point field goal attempts 3p% fg% free throw attempts lg mp mov offensive rating (available since the 1977-78 season in the nba); for players it is points produced per 100 posessions, while for teams it is points scored per 100 possessions. this rating was developed by dean oliver, author of basketball on paper. i will point you to dean's book for complete details. offensive rebound percentage (available since the 1970-71 season in the nba)2-point field goals 2p% 2-point field goal percentage; the formula is 2p / 2pa. 2pa 2-point field goal attempts 3p% fg% free throw attempts lg mp mov offensive rating (available since the 1977-78 season in the nba); for players it is points produced per 100 posessions, while for teams it is points scored per 100 possessions. this rating was developed by dean oliver, author of basketball on paper. i will point you to dean's book for complete details. offensive rebound percentage (available since the 1970-71 season in the nba2-point field goals 2p% 2-point field goal percentage; the formula is 2p / 2pa. 2pa 2-point field goal attempts 3p% fg% free throw attempts lg mp mov offensive rating (available since the 1977-78 season in the nba); for players it is points produced per 100 posessions, while for teams it is points scored per 100 possessions. this rating was developed by dean oliver, author of basketball on paper. i will point you to dean's book for complete details. offensive rebound percentage (available since the 1970-71 season in the nba"
  },
  {
    name: "Slam Dunk",
    img:
      "https://images.unsplash.com/reserve/sfwmAkieTSyeToJZqfKV_IMG_9840%20BW.jpg?ixlib=rb-0.3.5&s=91f50ca0f3586cc311cdc03b00587d75&auto=format&fit=crop&w=1950&q=80",
    text:
      "3-point field goal attempts (available since the 1979-80 season in the nba) assist percentage (available since the 1964-65 season in the nba); the formula is 100 * ast / (((mp / (tm mp / 5)) * tm fg) - fg). assist percentage is an estimate of the percentage of teammate field goals a player assisted while he was on on the floor. blocks (available since the 1973-74 season in the nba) drb defensive rebound percentage (available since the 1970-71 season in the nba); the formula is 100 * (drb * (tm mp / 5)) / (mp * (tm drb + opp orb)). defensive rebound percentage is an estimate of the percentage of available defensive rebounds a player grabbed while he was on the floor. "
  },
  {
    name: "Airball",
    img:
      "https://images.unsplash.com/photo-1494199505258-5f95387f933c?ixlib=rb-0.3.5&s=f627f1e2a7a3bb8b60ac995a685a283f&auto=format&fit=crop&w=1953&q=80",
    text:
      "2-point field goal attempts 3-point field goal attempts (available since the 1979-80 season in the nba) age assist percentage (available since the 1964-65 season in the nba); the formula is 100 * ast / (((mp / (tm mp / 5)) * tm fg) - fg). assist percentage is an estimate of the percentage of teammate field goals a player assisted while he was on on the floor. free throw percentage; the formula is ft / fta. free throw attempts mvp ortg opponent pace per game personal fouls smoy stops stops; dean oliver's measure of individual defensive stops. please see dean's book for details. turnovers (available since the 1977-78 season in the nba)"
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      style1: { position: "fixed" },
      style2: ""
    };
  }
  componentDidMount() {
    console.log("1");
    console.log(data);
    this.setState({
      data: data
    });
  }

  handleOnClickArticle = (article, e) => {
    console.log(article, e.target);
    // this.setState({
    //   data: data.filter(o => o.name === name)
    // })
  };

  handleOnClickHome = name => {
    this.setState({
      data: data
    });
  };

  render() {
    const data = this.state.data;
    return (
      <div className="App">
        <header className="App-header">
          <a className="goHome" onClick={this.handleOnClickHome}>
            Go to home
          </a>
        </header>
        {data.map((o, i) => (
          <Article
            articleStyle={this.state.style1}
            handleOnClick={this.handleOnClickArticle}
            img={o.img}
            name={o.name}
            text={o.text}
            key={i}
          />
        ))}
      </div>
    );
  }
}

class Article extends Component {
  constructor() {
    super();
    this.state = {
      style: {},
      shadowStyle: {},
      fullScreen: false
    };
  }

  openAnimation = (e, b) => {
    const art = e.target.closest("article");
    const width = art.clientWidth;
    const height = art.clientHeight;
    const top = art.getBoundingClientRect().top;
    const left = art.getBoundingClientRect().left;

    if (!this.state.fullScreen) {
      this.setState({
        savedPos: {
          left: left,
          top: top
        },
        style: {
          position: "fixed",
          left: left,
          top: top,
          height: height
        },
        shadowStyle: {
          width: width,
          height: height
        },
        fullScreen: true
      });

      setTimeout(
        () =>
          this.setState({
            style: {
              position: "fixed",
              left: '50%',
              top: 0,
              width: "1000px",
              height: "100%",
              overflow: "hidden",
              backgroundColor: "rgba(255, 255, 255, 1)",
              zIndex: 10,
              transform: 'translateX(-50%)'
            }
          }),
        0
      );

      setTimeout(() => {
        let copy = JSON.parse(JSON.stringify(this.state.style))
        copy.overflow = "auto"
        this.setState({
          style: copy
        });
      }, 550);

      document.querySelector("body").classList.add("no-overflow");
    }

    //this.props.handleOnClick.bind(null, this.props.name)
  };

  closeAnimation = e => {
    console.log("closing");
    const art = e.target.closest("article");
    const width = art.clientWidth;
    const height = art.clientHeight;
    const top = art.getBoundingClientRect().top;
    const left = art.getBoundingClientRect().left;

    if (this.state.fullScreen) {
      this.setState({
        style: {
          position: "fixed",
          left: this.state.savedPos.left,
          top: this.state.savedPos.top,
          zIndex: 10,
          backgroundColor: "rgba(255, 255, 255, 1)",
          height: 300,
          overflow: 'hidden'
        }
      });

      setTimeout(
        () =>
          this.setState({
            style: {
              position: "static",
              backgroundColor: "rgba(255, 255, 255, 1)"
            },
            shadowStyle: {
              width: 0,
              height: 0
            }
          }),
        550
      );

      setTimeout(() => this.setState({ fullScreen: false }), 500);

      document.querySelector("body").classList.remove("no-overflow");
    }
  };

  render() {
    return (
      <div className="article-holder">
        <article
          style={this.state.style}
          onClick={this.openAnimation.bind(this)}
        >
          {this.state.fullScreen && (
            <div
              onClick={this.closeAnimation.bind(this)}
              className="article__close"
            >
              X
            </div>
          )}
          <figure>
            <img src={this.props.img} />
            <h1>{this.props.name}</h1>
          </figure>
          {this.state.fullScreen && (
            <div className="article__inner">{this.props.text}</div>
          )}
        </article>
        <div className="articleShadow" style={this.state.shadowStyle} />
      </div>
    );
  }
}

export default App;
