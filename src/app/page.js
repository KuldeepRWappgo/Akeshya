import Image from "next/image";
import Header from "./components/header";
import Section1 from "./components/Section1"
import Section2 from "./components/Section2"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import styles from "./page.module.css";

export default function Home() {
  
  return (
    <>
    <div className="width-margin">
    <Header />
    <Section1 />
    </div>
    <Section2 />
    <div className="width-margin">
    <Section3 />
    <Section4 />
    </div>
    </>
  );
}
