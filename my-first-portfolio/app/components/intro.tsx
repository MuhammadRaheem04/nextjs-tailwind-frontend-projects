import Link from "next/link";
import { headerItems, userInfo } from "../constants/constant";
import Image from "next/image";

const Intro = () => {
  return (
    <div>
      <section
        id={headerItems.home.page}
        className="w-full h-screen flex flex-col md:flex-row text-center justify-center items-center md:text-start pt-[64px] md:pt-0"
      >
        <div>
          <Image
            src={userInfo.picture}
            alt="Profile picture"
            width={300}
            height={300}
            className="rounded-full shadow-2xl mt-10"
            priority
          />
        </div>
        <div className="md:ml-20 sm:ml-12 md:w-1/2">
          <h1 className="text-7xl uppercase hidden md:block">Frontend Developer</h1>
          <h1 className="text-2xl mt-5 md:text-3xl">
            Hi I&#39;m
            <span className="text-blue-600 text-3xl md:text-4xl">
              {" "}
              {userInfo.name}{" "}
            </span>
          </h1>

          {/* Render the `heading` content without hydration issues */}
          <div className="my-4">
            {userInfo.heading && (
              <div dangerouslySetInnerHTML={{ __html: userInfo.heading }} />
            )}
          </div>

          <Link href="/pages/projects">
            <button className="bg-teal-600 w-28 h-10 rounded text-neutral-100 mt-4">
              Projects
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Intro;



