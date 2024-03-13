//CSR: 서버에 요청 안보내고 자체적으로 컴포넌트를 바꾸는
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const code = "KOR";
  //라우터 기능이 담김
  const router = useRouter();

  const onClickButton = () => {
    //다른 곳으로 이동
    router.push({
      pathname: "/country/[code]",
      query: { code: code },
    });
  };
  return (
    <div>
      Home page
      <div>
        <button onClick={onClickButton}>SearchPage로 이동</button>
      </div>
      <div>
        <Link href={"/search"}>Search Page 이동</Link>
      </div>
      <div>
        <Link href={`/country/${code}`}>{code} 페이지로 이동</Link>
      </div>
      {/* 이동하고자 하는 */}
      <div>
        <Link
          href={{
            pathname: "/country/[code]",
            query: { code: code },
          }}
        >
          {code} 페이지로 이동
        </Link>
      </div>
    </div>
  );
}
