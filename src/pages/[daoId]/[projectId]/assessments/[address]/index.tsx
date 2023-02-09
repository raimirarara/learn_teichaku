import type { NextPage } from "next";

import { shortenAddress } from "@/utils/shortenAddress";
import { Center, Loader, Title } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Assessment: NextPage = () => {
  //   useDaoExistCheck();
  //   useDaoLoad();
  //   const router = useRouter();
  //   const { daoId, projectId, address } = router.query;
  //   const { daoHistory, load, assessments } = useDaoHistory({ daoId: daoId as string, projectId: projectId as string });
  //   useEffect(() => {
  //     if (daoId && projectId) {
  //       load();
  //     }
  //   }, [daoId, projectId]);

  return (
    <Center>
      <Loader size="lg" variant="dots" />
    </Center>
  );
  //   if (daoHistory.length === 0) return <NodataMessage />;

  //   return (
  //     <div>
  //       <Center>
  //         <Title size="h1">{shortenAddress(address as string)} Assessments</Title>
  //       </Center>
  //       <AssessmentTab daoHistory={daoHistory} address={address as string} />
  //     </div>
  //   );
};

export default Assessment;
