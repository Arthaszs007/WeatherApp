import React from "react";
import Link from "next/link";

const Links = () => {
  const links = [
    { title: "Today", path: "/" },
    { title: "Further", path: "/further" },
    { title: "Fitness", path: "/fitness" },
    { title: "About", path: "/about" },
  ];

  return (
    <div>
      {links.map((item) => (
        <Link
          className="mr-3 hover:bg-white focus:bg-slate-50 rounded-lg px-2"
          key={item.title}
          href={item.path}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default Links;
