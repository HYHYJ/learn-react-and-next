//라우터의 모든 기능이 다들어있다.
import { fetchCountry } from "@/api";
import SubLayout from "@/components/SubLayout";
import { useRouter } from "next/router";

export default function Country({ country }) {
  //리액트 훅, 수화과정이 끝나고 동작, 클라이언트에서 이용할려면 컴포넌트 내부에서 불러오기
  const router = useRouter();
  //
  const { code } = router.query;
  //url 코드 값 가져오기

  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

//? context: url 정보를 가져오는 context 객체
export const getServerSideProps = async (context) => {
  // 서버측에서 데이터를 패치하고싶으면 context에서 가져오면 된다.
  const { code } = context.params;
  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }
  return {
    props: { country },
  };
};
