interface Props {
  name: string;
  year: string;
  description: string;
  bgColor?: string;
}

const ProjectCard = (props: Props) => {
  const { name, year, description, bgColor } = props;

  return (
    <div className={`flex flex-col gap-3 ${bgColor} p-5 rounded-sm`}>
      <div className="flex flex-row justify-between">
        <label>{name}</label>
        <div>{year}</div>
      </div>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default ProjectCard;
