import Image from "next/image";
import tree1 from "../media/tree1.svg";
import tree2 from "../media/tree2.svg";
import tree3 from "../media/tree3.svg";
import tree4 from "../media/tree4.svg";
import tree5 from "../media/tree5.svg";
import tree6 from "../media/tree6.svg";
import tree7 from "../media/tree7.svg";
import tree8 from "../media/tree8.svg";
import tree9 from "../media/tree9.svg";
import tree10 from "../media/tree10.svg";
import tree11 from "../media/tree11.svg";
import ground from "../media/ground.svg";
import GettingTrees from "./GettingTrees";

export default function GettingCo2({ month }) {
  const kgco2Month = Math.round(month * 0.233 * 100) / 100; /* user production c02 per month by watching netflix*/

  return (
    <>
      <div className="co2">
        <p>That means that the amount of trees to process your</p>
        <h2>
          {kgco2Month}kgCo2 emition for watching {month} hours of Netflix a month is: <GettingTrees month={month} />{" "}
          tree(s)
        </h2>
      </div>
      <div className="trees">
        <ul>
          <li className="tree6">
            <Image src={tree6} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree8">
            <Image src={tree8} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree10">
            <Image src={tree10} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree11">
            <Image src={tree11} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
        </ul>
        <div className="ground">
          <Image src={ground} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
        </div>
      </div>
    </>
  );
}
