import { titleNamesStateAtom } from "@/atoms/titleNameStateAtom";
import { useRecoilValue } from "recoil";
import SmallScreenPhone from "../Phones/SmallScreenPhone";

export default function SmallPhoneSection() {
  const titleStateValue = useRecoilValue(titleNamesStateAtom);
  return <SmallScreenPhone title={titleStateValue} key={titleStateValue} />;
}
