import { useLocale } from "@/i18n/useLocale";
import { Button, Menu } from "@mantine/core";

export const AppMenu = () => {
  const { t } = useLocale();
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      <Menu.Target>
        <Button variant="gradient" gradient={{ from: "blue", to: "grape" }}>
          {t.Button.AppMenu}
        </Button>
      </Menu.Target>
      <Menu.Dropdown>{/* <NavbarLinks /> */}</Menu.Dropdown>
    </Menu>
  );
};
