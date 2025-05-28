import { useState } from "react";
import ProjectDetail from "./ProjectDetail";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);

  return (
    <>
      <div
        onMouseMove={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
        className="flex-wrap items-center justify-between 
      py-10 sm:flex sm:space-y-0"
      >
        <p className="text-2xl">{title}</p>
        <div className="flex gap-5 mt-2 text-sand">
          {tags.map((tag) => (
            <span>{tag.name}</span>
          ))}
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read more
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetail
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
