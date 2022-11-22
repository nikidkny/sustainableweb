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

export default function GettingCo2({ month }) {
  return (
    <>
      <div className="co2">
        <p>That means that the amount of trees to process your {month} hours of using Netflix a monthly is:</p>
        <h2>{month * 0.233} kgCo2</h2>
      </div>
      <div className="trees">
        <ul>
          <li className="tree1">
            <Image src={tree1} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree2">
            <Image src={tree2} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree3">
            <Image src={tree3} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree4">
            <Image src={tree4} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree5">
            <Image src={tree5} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree6">
            <Image src={tree6} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree7">
            <Image src={tree7} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree8">
            <Image src={tree8} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree9">
            <Image src={tree9} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree10">
            <Image src={tree10} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
          <li className="tree11">
            <Image src={tree11} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
          </li>
        </ul>
        <div>
          <Image src={ground} alt={""} width={""} height={""} priority sizes="(max-width: 700px) 100vw, 700px" />
        </div>
      </div>
    </>
  );
}
