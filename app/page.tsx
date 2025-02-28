import { Sidebar } from "@/components/sidebar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  backendSkills,
  designSkills,
  frontendSkills,
  getBadgeClassByCategory,
  professionalSkills,
  projectLayoutPatterns,
  projects,
} from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row bg-background dark:bg-background relative">
      {/* Dashboard Sidebar */}
      <Sidebar />

      {/* Main content - Dashboard style */}
      <main className="flex-1 p-6 md:p-8 bg-background dark:bg-background">
        {/* Dashboard header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-foreground dark:text-foreground">
            Welcome to my Portfolio
          </h1>
          <p className="text-muted-foreground dark:text-muted-foreground mt-1">
            Explore my projects, skills, and experience
          </p>
        </div>

        {/* About section */}
        <section id="about" className="mb-10">
          <Card className="overflow-hidden border-none shadow-md">
            <CardHeader>
              <CardTitle className="text-2xl">About Me</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p>
                Hello! I'm Jacob, a passionate junior developer focused on
                creating elegant solutions to complex problems. As a self-taught
                developer, I've been building my skills through hands-on
                projects and continuous learning. I specialize in full-stack
                development, working across both frontend interfaces and backend
                systems. I'm constantly exploring new technologies to improve my
                craft, with a drive to grow and evolve in this ever-changing
                field.
              </p>
            </CardContent>
          </Card>
        </section>

        {/* Projects section */}
        <section id="projects" className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
            <span className="mr-2">Projects</span>
            <Badge variant="outline" className="ml-2 font-normal">
              {projects.length}
            </Badge>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-5">
            {projects.map((project, index) => {
              // Use the pattern if available, otherwise use a repeating pattern
              const cardClass =
                index < projectLayoutPatterns.length
                  ? projectLayoutPatterns[index]
                  : index % 3 === 0
                  ? "md:col-span-6 lg:col-span-6"
                  : "md:col-span-3 lg:col-span-3";

              return (
                <Card
                  key={project.id}
                  className={`${cardClass} group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1 duration-300`}
                >
                  <CardContent className="p-5 h-full flex flex-col">
                    <div className="flex-1">
                      {/* Project title and description */}
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold group-hover:text-primary dark:group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        {project.active && (
                          <Badge
                            variant="outline"
                            className="flex items-center gap-1 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 border-green-200 dark:border-green-800"
                          >
                            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                            Active
                          </Badge>
                        )}
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 4).map((tech) => {
                          const category =
                            project.technologyCategories?.[tech] || "default";
                          return (
                            <Badge
                              key={tech}
                              className={getBadgeClassByCategory(category)}
                            >
                              {tech}
                            </Badge>
                          );
                        })}
                        {project.technologies.length > 4 && (
                          <Badge className="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
                            +{project.technologies.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 mt-auto">
                      {project.url && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="group-hover:bg-accent dark:group-hover:bg-accent/20"
                        >
                          <Link
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>Visit Site</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                              />
                            </svg>
                          </Link>
                        </Button>
                      )}
                      {project.github && (
                        <Button
                          asChild
                          variant="ghost"
                          size="sm"
                          className="group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50"
                        >
                          <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <span>View Code</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                              />
                            </svg>
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Skills section */}
        <section id="skills" className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
            <span className="mr-2">Skills</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SkillCard
              title="Frontend"
              emoji="🖥️"
              skills={frontendSkills}
              colorClass="blue"
            />
            <SkillCard
              title="Backend & Tools"
              emoji="⚙️"
              skills={backendSkills}
              colorClass="green"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <SkillCard
              title="Design & CMS"
              emoji="🎨"
              skills={designSkills}
              colorClass="purple"
            />
            <SkillCard
              title="Professional Skills"
              emoji="🤝"
              skills={professionalSkills}
              colorClass="amber"
            />
          </div>
        </section>

        {/* Experience section */}
        <section id="experience" className="mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
            <span className="mr-2">Experience</span>
          </h2>

          <div className="space-y-4">
            <Card className="border-none shadow-sm">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">
                    Founder / Fullstack developer
                  </h3>
                  <Badge variant="outline">Dec 2021 - Present</Badge>
                </div>
                <p className="text-base mb-2">Apolloz AB · Full-time</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Linköping, Ostergotland County, Sweden
                </p>
              </CardContent>
            </Card>

            <Card className="border-none shadow-sm">
              <CardContent className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">Web Developer</h3>
                  <Badge variant="outline">Dec 2023 - Apr 2024</Badge>
                </div>
                <p className="text-base mb-2">Sourceful Energy · Part-time</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Kalmar, Kalmar County, Sweden · Hybrid
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact section */}
        <section id="contact" className="mb-16">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100 flex items-center">
            <span className="mr-2">Contact</span>
          </h2>

          <div className="pt-2">
            <p className="mb-6 text-gray-600 dark:text-gray-300">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="flex flex-col md:flex-row gap-4">
              <Button asChild variant="default">
                <Link href="mailto:jacob@apolloz.se">Email Me</Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://www.linkedin.com/in/jacob-kanu-b534582b2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link
                  href="https://github.com/idohtml"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

// Reusable component for skill cards
function SkillCard({
  title,
  emoji,
  skills,
  colorClass,
}: {
  title: string;
  emoji: string;
  skills: string[];
  colorClass: string;
}) {
  // Define color classes based on the colorClass prop
  const getBadgeColorClass = (color: string) => {
    switch (color) {
      case "blue":
        return "bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200";
      case "green":
        return "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-200";
      case "purple":
        return "bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-200";
      case "amber":
        return "bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200";
      default:
        return "bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <span className="mr-2">{emoji}</span> {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <Badge
              key={skill}
              className={`px-3 py-1.5 text-sm ${getBadgeColorClass(
                colorClass
              )}`}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
