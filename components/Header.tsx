"use client";

type SectionId = "home" | "about" | "projects" | "skills" | "contact";

export default function Header() {
  const scrollToSection = (sectionId: SectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="flex items-center justify-center mt-8 mx-auto">
      <ul className="flex gap-x-14 px-6 py-3 capitalize rounded-full shadow-lg bg-white/30 backdrop-filter backdrop-blur-2xl backdrop-saturate-200">
        <li className="cursor-pointer" onClick={() => scrollToSection("home")}>
          Home
        </li>
        <li className="cursor-pointer" onClick={() => scrollToSection("about")}>
          About
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToSection("projects")}
        >
          Projects
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToSection("skills")}
        >
          Skills
        </li>
        <li
          className="cursor-pointer"
          onClick={() => scrollToSection("contact")}
        >
          Contact
        </li>
      </ul>
    </header>
  );
}
