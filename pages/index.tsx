import Head from "next/head";
import { useRecoilState } from "recoil";
import { articleState } from "../states/entity/article";

export default function Home(props) {
  const [article, setArticle] = useRecoilState(articleState({ id: 1 }));
  setArticle({ id: 1, title: "111111", content: "aaaaaa" });

  return (
    <div>
      <Head></Head>
      <main className="bg-red-100"></main>
    </div>
  );
}
