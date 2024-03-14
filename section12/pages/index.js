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
export const getServerSideProps = async () => {
  // API 호출
  const countries = await fetchCountries();

  return {
    //?무조건 객체로 설정하기
    props: {
      countries,
    },
  };
};
