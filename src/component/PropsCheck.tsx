import ProfileCard from "./ProfileCard";

const PropsCheck = ({ setName }: { setName: (name: string) => void }) => {
  return (
    <div>
      <button onClick={() => setName("Shyam")}>Click</button>
      Logged user: Hari
      <ProfileCard name={"hari"} />
    </div>
  );
};

export default PropsCheck;
