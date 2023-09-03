import { titles } from "@/atoms/titleNameStateAtom";
import SmallScreenPhone from "../Phones/SmallScreenPhone";

export default function SmallPhoneSection() {
  return (
    <>
      {titles.map((t, i) => (
        <SmallScreenPhone title={t} key={i} />
      ))}
    </>
  );
}
