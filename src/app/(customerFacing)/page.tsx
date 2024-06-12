import { ProfilePicture } from "./_components/ProfilePicture";
import { JobBento } from "./_components/JobBento";

export default function Home() {
  let jobs = [{ id: "1", name: "name", description: "test" }];

  return (
    <main className="flex flex-row ">
      <ProfilePicture name="test" image="test" />
      <JobBento jobs={jobs} />
    </main>
  );
}
