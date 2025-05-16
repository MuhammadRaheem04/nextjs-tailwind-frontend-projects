import { headerItems, userInfo } from "../constants/constant";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <section
        id={headerItems.about.page}
        className="flex flex-col md:flex-row text-center justify-center items-center md:text-start p-[64px]"
      >
        <div className="m-4 md:ml-20 sm:ml-12 md:w-1/2">
          <h1 className="text-6xl my-6">About</h1>
          <h2 className="text-3xl my-4">Get to Know Me!</h2>

          {/* Render the `about` content without hydration issues */}
          <div className="[&>p]:mt-5">
            {userInfo?.about && (
              <div dangerouslySetInnerHTML={{ __html: userInfo.about }} />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center items-center text-center">
          <Image
            src={userInfo.picture}
            alt="Profile picture"
            width={300}
            height={300}
            className="m-auto"
            priority
          />
          <div className="mt-3 w-3/4 break-words">
            {userInfo.skills?.map((skill, index) => (
              <span
                key={`skill-${index}`}
                className="bg-gray-200 m-1 p-2 text-sm inline-block rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


