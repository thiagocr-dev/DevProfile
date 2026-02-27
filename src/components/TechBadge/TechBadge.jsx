import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { TbCircleLetterCFilled } from "react-icons/tb";
import { SiPhp } from "react-icons/si";
import { FaSwift } from "react-icons/fa";

const iconMap = {
    "React": <FaReact />,
    "JavaScript": <IoLogoJavascript />,
    "CSS": <FaCss3Alt />,
    "HTML": <FaHtml5 />,
    "Angular": <FaAngular />,
    "Vue": <FaVuejs />,
    "Node.js": <FaNodeJs />,
    "Python": <FaPython />,
    "TypeScript": <SiTypescript />,
    "Express": <SiExpress />,
    "MongoDB": <SiMongodb />,
    "C++": <TbCircleLetterCFilled />,
    "php": <SiPhp />,
    "Swift": <FaSwift/>
}


function TechBadge({tech}){
    return (
        <span className="badge">
            {iconMap[tech.name]} {tech.name}
        </span>
    )
}

export default TechBadge