interface Props {
  level: string;
  year: string;
  description: string;
  bgColor?: string;
}

const ProjectCardEducation = (props: Props) => {
  const { level, year, description, bgColor} = props;

  return (
    <div className={`flex flex-col gap-3 ${bgColor} p-2 rounded-sm`}>
      <div className="flex flex-row justify-between">
        <label>{level}</label>
        <div>{year}</div>
      </div>
      <p className="text-justify">{description}</p>
    </div>
  );
};

export default ProjectCardEducation;
