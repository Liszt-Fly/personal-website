import vueLogo from "./assets/vue.png";
import jsLogo from "./assets/javascript.png";
import cssLogo from "./assets/css.png";
import reactLogo from "./assets/React.png";
import htmlLogo from "./assets/Html.png";
import rustLogo from "./assets/Rust.png";
interface skill {
  logo: string;
  name: string;
}
export function Skills() {
  const skills: skill[] = [
    { logo: htmlLogo, name: "HTML" },
    { logo: cssLogo, name: "CSS" },
    { logo: jsLogo, name: "JAVASCRIPT" },
    { logo: vueLogo, name: "VUE" },
    { logo: reactLogo, name: "REACT" },
    { logo: rustLogo, name: "RUST" },
  ];
  let skillItems = skills.map((item) => {
    return (
      <div
        className="item bg-[#424248] p-4 rounded-md transition duration-400 hover:bg-[#5d5d65] flex items-center text-2xl justify-center text-white"
        key={item.name}
      >
        <img src={item.logo} width="40" className="mr-2"></img>
        <span>{item.name.toLocaleUpperCase()}</span>
      </div>
    );
  });
  return (
    <>
      <div className="skills mt-4">
        <span className="Skills sub-title">Skills</span>
        <div className="box grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-10 mt-4">
          {skillItems}
        </div>
      </div>
    </>
  );
}
