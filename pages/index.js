import Head from "next/head";
import Button from "./components/Button";
import Spacer from "./components/Spacer";

export default function Home() {
  return (
    <div className="bg-dark-100 page-home">
      <Head>
        <title>Anyteam Design</title>
        <link rel="icon" href="/logo-white.svg" />
      </Head>
      <main className="p-10">
        <div className="flex">
          <Button color="primary">Follow</Button>
          <Spacer space={10} />
          <Button color="gray">Follow</Button>
        </div>
      </main>
    </div>
  );
}
