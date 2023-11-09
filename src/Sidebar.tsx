import './App.css'
import {Link} from 'react-router-dom';

export default function Sidebar() {
  const sectionnames = [
    {link: "home",
    name : "home"},
    {link: "projects",
    name : "projects"},
    {link: "experiences",
    name : "experiences"},
    {link: "techstack",
    name : "tech stack"},
    {link: "aboutme",
    name : "about me"},
  ];

  return (
    <div className='flex flex-col h-full w-[80%] justify-center p-4'>
      {sectionnames.map((section, index) => {
        return (
           <Link to={`/${section.link}`}>
          <div className={`m-2 decoration-through-gradient  text-center`}  key={index}>
            <span className='font-bold'>
            {section.name}
              </span>
          </div>
           </Link>
        );
      })}
    </div>
  )
}
