export default function Home({ name }) {
  console.log("Home");
  return <div>{name}</div>;
}
//SSR 방식으로 된다
export const getServerSideProps = async () => {
  // SSR을 위해 서버측에서 페이지 컴포넌트에게 전달할 데이터를 설정하는 함수

  //서버에서만 실행되서 브라우저의 console에 안나옴
  console.log("getServerSideProps Called");
  return {
    //?무조건 객체로 설정하기
    props: {
      name: "KOREA",
    },
  };
};
