type JobBentoProps = {
  jobs: Jobs[];
};

type Jobs = {
  id: string;
  name: string;
  description: string;
};

export function JobBento({ jobs }: JobBentoProps) {
  if (!jobs?.length) {
    return (
      <div>
        <div className="basis-1/2">No Jobs Found</div>
      </div>
    );
  }
  return (
    <div>
      <div className="basis-1/2">Hello World</div>
    </div>
  );
}
