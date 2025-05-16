import { NavItems } from "../models/header";
import { userObj } from "../models/user";

export const userInfo: userObj = {
  name: "Muhammad Raheem",
  picture: "https://i.ibb.co/cvhQFJM/Profile-Picture.jpg",

  heading:
    "I&#39;m a frontend developer based in Karachi Pakistan, with a passion for creating elegant and efficient solutions that seamlessly integrate user-friendly experiences. I&#39;ve built websites, desktop applications, and corporate software, leveraging cutting-edge technologies to drive innovation and enhance business processes.",
  about: `
        <p>I am a passionate Software Engineer with a strong background in Web Development, I have been crafting digital experiences for 01 year.</p>
        <p>My journey in IT began in 2024 since then, I've had the privilege to work on a diverse range of projects, allowing me to refine my skills and approach to problem-solving.</p>
        <p> I thrive on turning complex ideas into elegant solutions that not only meet user needs but also create lasting impacts. </p>
        `,
  skills: [
    "React",
    "Next",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "Tailwind CSS",
  ],
};

export const headerItems: NavItems = {
  home: { label: "Home", page: "home" },
  about: { label: "About", page: "about" },
  projects: { label: "Projects", page: "projects" },
};

export const projects= {
  passwordGenerater: {
    image: "https://i.ibb.co/Qkb4TDR/password-generator.png",
    link: "https://password-generatorbymuhammadraheem.vercel.app/",
  },
  calculator: {
    image: "https://i.ibb.co/yVRV1NX/simple-calculator.png",
    link: "https://simple-calculatorbymuhammadraheem.vercel.app/",
  },
  clock: {
    image: "https://i.ibb.co/kBs20dy/simple-analog-clock.png",
    link: "https://analog-clock-2bymuhammadraheem.vercel.app/",
  },
  stopWatch: {
    image: "https://i.ibb.co/tmqLWR8/stop-watch.png",
    link: "https://stop-watchbymuhammadraheem.vercel.app/",
  },
  passwordGenerater2: {
    image: "https://i.ibb.co/gdYXpFz/password-gen.png",
    link: "https://password-generator-using-reactjsbymuhammadraheem.vercel.app/",
  },
 Todo: {
    image: "https://i.ibb.co/bKwJXdG/todo-image.png",
    link: "https://todo-list-using-reactjsbymuhammadraheem.vercel.app/",
  },
  resumeBuilder: {
    image: "https://i.ibb.co/0J71T6V/Screenshot-184.png",
    link: "https://giaic-hackathon-1-milestone-05-shareable-resume-buil-pjx20lccz.vercel.app/",
  },
};
