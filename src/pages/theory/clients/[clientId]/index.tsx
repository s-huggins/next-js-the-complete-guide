import { useRouter } from "next/router";
import { FC } from "react";

const ClientProjectsPage: FC = () => {
  const router = useRouter();
  console.log(router.query);

  const loadProjectHandler = () => {
    router.push({
      pathname: "/theory/clients/[clientId]/[clientProjectId]",
      query: {
        clientId: "stu",
        clientProjectId: "project-A",
      },
    });
  };

  return (
    <div>
      <h1>The Projects of a given Client</h1>
      <button onClick={loadProjectHandler}>Load Project A</button>
    </div>
  );
};

export default ClientProjectsPage;
