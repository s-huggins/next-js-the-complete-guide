import { useRouter } from "next/router";
import { FC } from "react";

const SelectedClientProjectPage: FC = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div>
      <h1>The Project page for a specific project of a selected Clients</h1>
    </div>
  );
};

export default SelectedClientProjectPage;
