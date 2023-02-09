import { OrganizationCard } from "@/components/overview/OrganizationCard";
import { TokenInfoCard } from "@/components/overview/TokenInfoCard";
// import { useDaoExistCheck } from "@/hooks/dao/useDaoExistCheck";
// import useDaoHistory from "@/hooks/dao/useDaoHistory";
// import { useDaoLoad } from "@/hooks/dao/useDaoLoad";
// import useDaoToken from "@/hooks/dao/useDaoToken";
// import usePoll from "@/hooks/dao/usePoll";
import { useLocale } from "@/i18n/useLocale";
import { Center, Grid, Title, Text, Loader } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect } from "react";

const Overview = () => {
  // useDaoExistCheck();
  // useDaoLoad();

  const { t } = useLocale();
  const router = useRouter();
  const { daoId, projectId } = router.query;
  const dao = { daoId: daoId as string, projectId: projectId as string };
  // const { daoInfo, load, daoHistory, assessments } = useDaoHistory(dao);
  // const contributionCount = daoHistory?.length || 0;
  // const contributorCount = daoHistory ? new Set(daoHistory.map((history) => history.contributor)).size : 0;
  // const voterCount = assessments ? new Set(assessments.map((history) => history.voter)).size : 0;
  const daoInfo = { logo: "a", name: "demo", description: "aa" };
  const contributionCount = 5;
  const contributorCount = 5;
  const voterCount = 5;

  // const { tokenTotalSupply, tokenSymbol, tokenName, contractAddress, treasuryBalance } = useDaoToken(dao);
  // const { contributorReward, voterReward, commissionFee } = usePoll(dao);

  const tokenTotalSupply = 3;
  const tokenSymbol = "aa";
  const tokenName = "demo";
  const contractAddress = "0xafafafafafafa";
  const contributorReward = 5;
  const voterReward = 5;
  const commissionFee = 5;
  const treasuryBalance = 5;

  // useEffect(() => {
  //   if (daoId && projectId) {
  //     load();
  //   }
  // }, [daoId, projectId]);

  if (!daoInfo)
    return (
      <Center>
        <Loader size="lg" variant="dots" />
      </Center>
    );
  return (
    <div>
      <Center>
        <Title size="h1">{t.Overview.Title}</Title>
      </Center>

      <Center mb="md">
        <Text color="dimmed">{t.Overview.SubTitle}</Text>
      </Center>

      <Grid>
        <Grid.Col sm={12} md={6}>
          <OrganizationCard
            daoId={daoId as string}
            avatar={daoInfo.logo || ""}
            name={daoInfo.name || ""}
            description={daoInfo.description || ""}
            contributionCount={contributionCount || 0}
            contributorCount={contributorCount || 0}
            voterCount={voterCount || 0}
          />
        </Grid.Col>
        <Grid.Col sm={12} md={6}>
          <TokenInfoCard
            tokenTotalSupply={tokenTotalSupply}
            treasuryBalance={treasuryBalance}
            tokenSymbol={tokenSymbol}
            tokenName={tokenName}
            contractAddress={contractAddress}
            contributorReward={contributorReward}
            commissionFee={commissionFee}
            voterReward={voterReward}
          />
        </Grid.Col>
      </Grid>
    </div>
  );
};
export default Overview;
