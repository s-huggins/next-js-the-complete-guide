import Link from "next/link";
import { FC } from "react";

interface IClient {
  id: string;
  name: string;
}

const ClientsPage: FC = () => {
  const clients: IClient[] = [
    {
      id: "stu",
      name: "Stuart",
    },
    {
      id: "jay",
      name: "Jamie",
    },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client: IClient) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: "clients/[clientId]",
                query: {
                  clientId: client.id,
                },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClientsPage;
