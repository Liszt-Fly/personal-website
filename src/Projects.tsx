import chronicle from "./assets/chronicle_mac.png";
import nifty from "./assets/nifty.png";
import cow from "./assets/Cow.png";
interface project {
  icon: string;
  name: string;
  href: string;
  description: string;
}
export function Projects() {
  const projectsData: project[] = [
    {
      name: "Chronicle Note",
      icon: chronicle,
      href: "https://qiaoyangedu.top/chronicle/",
      description: "This is a notes-taking app",
    },
    {
      name: "nifty",
      icon: nifty,
      href: "",
      description: "It is a code snippet manager",
    },
    {
      name: "Dairy Website",
      icon: cow,
      href: "",
      description: "a dairy introduction website",
    },
  ];
  const projects = projectsData.map((item) => {
    return (
      <a
        href={item.href}
        className="item bg-[#424248] p-2 rounded-md transition duration-400 hover:bg-[#5d5d65] flex items-center text-lg  text-white"
        key={item.name}
      >
        <img src={item.icon} width="40" className="mr-4"></img>
        <div className="text flex flex-col">
          <span className="text-md">{item.name}</span>
          <span className="text-sm text-gray-300">{item.description}</span>
        </div>
      </a>
    );
  });
  return (
    <>
      <div className="project mt-8">
        <span className="Skills sub-title">Projects</span>
        <div className="box grid grid-flow-row grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          {projects}
        </div>
      </div>
    </>
  );
}
