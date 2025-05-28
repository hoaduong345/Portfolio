import { OrbitingCircles } from "./OrbitingCircles";

export function Framework() {
  const skills = [
    "auth0",
    "scss",
    "git",
    "html5",
    "javascript",
    "mongodb",
    "mysql",
    "nodejs",
    "react",
    "angular",
    "sqlite",
    "vitejs",
    "tailwindcss",
    "typescript",
  ];

  return (
    <div className="relative flex h-[15rem] w-full flex-col items-center justify-center">
      <OrbitingCircles iconSize={40}>
        {skills.map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
      <OrbitingCircles iconSize={25} radius={100} reverse speed={2}>
        {skills.reverse().map((skill, index) => (
          <Icon key={index} src={`assets/logos/${skill}.svg`} alt={skill} />
        ))}
      </OrbitingCircles>
    </div>
  );
}

const Icon = ({ src, alt }) => (
  <img
    src={src}
    alt={alt}
    className="duration-200 rounded-sm hover:scale-110"
    loading="lazy"
  />
);
