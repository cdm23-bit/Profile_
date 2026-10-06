import VNGame from "@/app/components/vn-game";
import { getProfileData } from "@/lib/profile-data";

export default function Home() {
  const profile = getProfileData();

  return <VNGame profile={profile} />;
}
