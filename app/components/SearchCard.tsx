import Image from "next/image";
import { SearchUser } from "../constants";

type SearchCardProps = {
  username: string;
  photo: string | null;
};

export default function SearchCard({ username, photo }: SearchCardProps) {
  const IMAGE_SIZE = 40;
  return (
    <div className="flex flex-row border-black border-2 w-100 p-5 rounded-3xl items-center justify-between">
      <div className="flex flex-row justify-center">
        <div>
          {photo ? (
            <Image
              src={photo}
              alt={"user"}
              height={IMAGE_SIZE}
              width={IMAGE_SIZE}
              className="rounded-full"
            />
          ) : (
            <div
              className={`w-[${IMAGE_SIZE}px] h-[${IMAGE_SIZE}px] rounded-full bg-gray-300 flex items-center justify-center`}
            >
              {username?.charAt(0)}
            </div>
          )}
        </div>
        <div className="text-2xl pl-3 text-center">{username}</div>
      </div>
      <div className="">Add Friend</div>
    </div>
  );
}
