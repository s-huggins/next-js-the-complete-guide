import Link from "next/link";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <div>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href="/theory/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link href="/theory/clients">Clients</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
