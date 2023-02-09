// import { DistributionSetting } from "@/components/setting/DistributionSetting";
// import { PollDeadlineSetting } from "@/components/setting/PollDeadlineSetting";
// import { PollPerspectiveSetting } from "@/components/setting/PollPerspectiveSetting";
// import { SBTSetting } from "@/components/setting/SBTSetting";
// import { TokenSetting } from "@/components/setting/TokenSetting";
// import { TreasurySetting } from "@/components/setting/TreasurySetting";
// import { useDaoExistCheck } from "@/hooks/dao/useDaoExistCheck";
// import { useDaoLoad } from "@/hooks/dao/useDaoLoad";
import { useLocale } from "@/i18n/useLocale";
import { Center, Container, Title, Text } from "@mantine/core";

const SettingPage = () => {
  const { t } = useLocale();
  //   useDaoExistCheck();
  //   useDaoLoad();
  return (
    <Container>
      <Center>
        <Title size="h1">{t.Settings.Title}</Title>
      </Center>
      <Center mb="md">
        <Text color="dimmed">{t.Settings.SubTitle}</Text>
      </Center>

      {/* <TokenSetting />
      <TreasurySetting />
      <DistributionSetting />
      <PollPerspectiveSetting />
      <PollDeadlineSetting />
      <SBTSetting /> */}
    </Container>
  );
};
export default SettingPage;
