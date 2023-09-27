/** @format */

interface SkillCoeverProps {
  children: React.ReactNode;
}
const MySkillCover = ({ children }: SkillCoeverProps) => {
  return (
    <div className="border mr-4 mb-3 text-center flex flex-col items-center min-h-[200px]">
      {children}
    </div>
  );
};

export default MySkillCover;
