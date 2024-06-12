type ProfilePictureProps = {
  name: string;
  image: string;
};

export function ProfilePicture({ name, image }: ProfilePictureProps) {
  return (
    <div>
      <div className="basis-1/2 hover:basis-1/3">hello world</div>
    </div>
  );
}
