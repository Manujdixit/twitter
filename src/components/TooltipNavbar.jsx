import { useState } from "react";
import {
  IconCalendarStats,
  IconDeviceDesktopAnalytics,
  IconFingerprint,
  IconGauge,
  IconHome2,
  IconLogout,
  IconSettings,
  IconSwitchHorizontal,
  IconUser,
} from "@tabler/icons-react";
import { Center, Stack, Tooltip, UnstyledButton } from "@mantine/core";
import "../styles/tooltipnavbar.css";
import { Link } from "react-router-dom";

function NavbarLink({ icon: Icon, label, active, onClick, to }) {
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={onClick}
        className="link"
        data-active={active || undefined}
        component={Link}
        to={to}
      >
        <Icon size={20} stroke={1.5} />
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { icon: IconHome2, label: "Home", to: "/" },
  { icon: IconGauge, label: "Dashboard", to: "/dashboard" },
  { icon: IconDeviceDesktopAnalytics, label: "Analytics", to: "/analytics" },
  { icon: IconCalendarStats, label: "Releases", to: "/releases" },
  { icon: IconUser, label: "Account", to: "/account" },
  { icon: IconFingerprint, label: "Security", to: "/security" },
  { icon: IconSettings, label: "Settings", to: "/settings" },
];

export default function TooltipNavbar() {
  const [active, setActive] = useState(0);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <nav className="navbar">
      <Center>
        <img src="/x.jpg" alt="X Logo" style={{ width: "50px" }} />
      </Center>

      <div className="navbarMain">
        <Stack justify="center" gap={0}>
          {links}
        </Stack>
      </div>

      <Stack justify="center" gap={0}>
        <NavbarLink
          icon={IconSwitchHorizontal}
          label="Change account"
          to="/change-account"
        />
        <NavbarLink icon={IconLogout} label="Logout" to="/logout" />
      </Stack>
    </nav>
  );
}
