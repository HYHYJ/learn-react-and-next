//라우터의 모든 기능이 다들어있다.
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

export default function Country() {
  const router = useRouter();
  //url 코드 값 가져오기
  const { code } = router.query;
  return <div>Country {code}</div>;
}

Country.Layout = SubLayout;
