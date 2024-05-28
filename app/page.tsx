import Line from "@/components/VerticalLine";
import { skills } from "@/data/Skills";
import { Badge } from "@/components/ui/badge";
import Slider from "@/components/Slider";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly py-24 text-center">
      <section id="home">
        <div className="text-center">
          <h1 className="text-4xl font-bold">Hi I&apos;m Jacob</h1>
          <p>I&apos;m just a regular guy that codes</p>
        </div>
      </section>
      <Line />
      <section id="about">
        <h2 className="text-3xl mb-4">About me</h2>
        <p>
          I&apos;m a passionate individual driven by creativity and a love for
          bringing ideas to life. While dedicated to continuous learning and
          growth, I also cherish the moments spent with family and friends.
          Exploring new hobbies and experiences, as well as appreciating the
          beauty of nature. I firmly believe in the power of collaboration and
          working together to achieve remarkable things. I&apos;m excited to
          embark on this creative journey with you, combining our strengths and
          visions to create something truly special.
        </p>
      </section>
      <Line />
      <section id="projects">
        <h2 className="text-3xl mb-4">Projects</h2>
        <p className="my-2 text-gray-400">Click the slide to view project</p>
        <div className="max-w-2xl w-full h-full">
          <Slider />
        </div>
      </section>
      <Line />
      <section id="skills">
        <h2 className="text-3xl mb-4">Skills</h2>
        {skills.map((skill, index) => (
          <Badge key={index} className="text-base ml-1 mt-1" variant="outline">
            {skill.text}
          </Badge>
        ))}
      </section>
      <Line />
      <section id="contact">
        <h2 className="text-3xl mb-4">Contact</h2>
        <div>
          <Button variant="link">
            <Link
              href="https://www.linkedin.com/in/jacob-kanu-b534582b2"
              target="_blank"
            >
              LinkedIn
            </Link>
          </Button>
          <Button variant="link">
            <Link
              href="https://www.facebook.com/profile.php?id=61557638164964&locale=sv_SE"
              target="_blank"
            >
              Facebook
            </Link>
          </Button>
          <Button variant="link">
            <Link href="mailto:jacob@apolloz.se" target="_blank">
              Email
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
}
