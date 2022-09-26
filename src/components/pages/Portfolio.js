import React from "react";
import Header from "../layout/Header";
import Contents from "../layout/Contents";
import Footer from "../layout/Footer";
import Title from "../layout/Title";
import Contact from "../layout/Contact";
import PortCont from "../includes/PortCont";
import axios from "axios";

// function Portfolio() {
//   return (
//     <>
//       <Header />
//       <Contents>
//         <Title title={["Portfolio", "Api"]} />
//         <PortCont />
//         <Contact />
//       </Contents>
//       <Footer />
//     </>
//   );
// }

//함수의 집합체
class Portfolio extends React.Component {
  state = {
    isLoading: true,
    ports: [],
  };

  mainAnimation = () => {};

  getPorts = async () => {
    const {
      data: {
        data: { ports },
      },
    } = await axios.get(
      "https://webstoryboy.github.io/dothome1/portfolio.json"
    );
    // console.log(ports);
    this.setState({ ports: ports });
  };

  //사이트가 로딩이 끝나면 바로 실행(생명주기 함수)
  componentDidMount() {
    // console.log("시작");
    this.getPorts();
  }

  render() {
    const { ports } = this.state;

    // console.log(ports);

    return (
      <>
        <Header />
        <Contents>
          <Title title={["Portfolio", "Api"]} />
          <PortCont ports={ports} />
          <Contact />
        </Contents>
        <Footer />
      </>
    );
  }
}

export default Portfolio;
