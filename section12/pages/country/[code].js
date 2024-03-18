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

  //Fallback 상태인지 아닌지 알려줌.
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  if (!country) {
    return <div>존재하지 않는 국가입니다.</div>;
  }
  return (
    <div>
      {country.commonName} {country.officialName}
    </div>
  );
}

Country.Layout = SubLayout;

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { code: "ABW" } }, { params: { code: "KOR" } }],
    //없는 경로라면..?
    fallback: true,
  };
};

//? context: url 정보를 가져오는 context 객체
export const getStaticProps = async (context) => {
  // 서버측에서 데이터를 패치하고싶으면 context에서 가져오면 된다.
  const { code } = context.params;
  console.log(`${code} 페이지 생성!`);
  let country = null;
  if (code) {
    country = await fetchCountry(code);
  }
  return {
    props: { country },
    revalidate: 3,
  };
};
