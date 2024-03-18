import { fetchCountries } from "@/api";

export default function Home({ countries }) {
  return (
    <div>
      {countries.map((country) => (
        <div key={country.code}>{country.commonName}</div>
      ))}
    </div>
  );
}
//SSR 방식으로 된다
export const getStaticProps = async () => {
  // API 호출
  const countries = await fetchCountries();
  console.log("컨트리스 데이터 불러옴");
  return {
    //?무조건 객체로 설정하기
    props: {
      countries,
    },
  };
};
