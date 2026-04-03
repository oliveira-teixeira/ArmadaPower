import { createBrowserRouter } from 'react-router';
import Layout from './components/Layout';
import OnboardingLayout from './components/OnboardingLayout';
import Dashboard from './pages/Dashboard';
import DevicesPage from './pages/Devices';
import ThermostatPage from './pages/ThermostatPage';
import WaterHeaterPage from './pages/WaterHeaterPage';
import ActivityPage from './pages/ActivityPage';
import EnergyUsagePage from './pages/EnergyUsagePage';
import ModesPage from './pages/ModesPage';
import SettingsPage from './pages/SettingsPage';
import EditProfilePage from './pages/EditProfilePage';
import ChangePasswordPage from './pages/ChangePasswordPage';
import NotificationPreferencesPage from './pages/NotificationPreferencesPage';
import PrivacyPage from './pages/PrivacyPage';
import ManageHomesPage from './pages/ManageHomesPage';
import AddMemberPage from './pages/AddMemberPage';
import HomeInfoPage from './pages/HomeInfoPage';
import AddHomePage from './pages/AddHomePage';

// Onboarding pages
import WelcomePage from './pages/WelcomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AccountDetailsPage from './pages/AccountDetailsPage';
import TermsPage from './pages/TermsPage';
import HomeSetupPage from './pages/HomeSetupPage';
import QRScanPage from './pages/QRScanPage';
import HomeConnectedPage from './pages/HomeConnectedPage';

export const router = createBrowserRouter([
  // ── Onboarding flow (no bottom nav) ──────────────────────────────────────────
  {
    Component: OnboardingLayout,
    children: [
      { path: 'welcome',              Component: WelcomePage },
      { path: 'login',                Component: LoginPage },
      { path: 'signup',               Component: SignupPage },
      { path: 'signup/details',       Component: AccountDetailsPage },
      { path: 'signup/terms',         Component: TermsPage },
      { path: 'onboarding/setup',     Component: HomeSetupPage },
      { path: 'onboarding/scan',      Component: QRScanPage },
      { path: 'onboarding/connected', Component: HomeConnectedPage },
    ],
  },

  // ── Main app (with bottom nav) ────────────────────────────────────────────────
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true,                              Component: Dashboard },
      { path: 'dashboard',                        Component: Dashboard },
      { path: 'devices',                          Component: DevicesPage },
      { path: 'devices/thermostat',               Component: ThermostatPage },
      { path: 'devices/water-heater',             Component: WaterHeaterPage },
      { path: 'activity',                         Component: ActivityPage },
      { path: 'modes',                            Component: ModesPage },
      { path: 'settings',                         Component: SettingsPage },
      { path: 'settings/edit-profile',            Component: EditProfilePage },
      { path: 'settings/change-password',         Component: ChangePasswordPage },
      { path: 'settings/notifications',           Component: NotificationPreferencesPage },
      { path: 'settings/privacy',                 Component: PrivacyPage },
      { path: 'settings/manage-homes',            Component: ManageHomesPage },
      { path: 'settings/manage-homes/:homeId',    Component: HomeInfoPage },
      { path: 'settings/add-home',                Component: AddHomePage },
      { path: 'settings/add-member',              Component: AddMemberPage },
      { path: 'energy',                           Component: EnergyUsagePage },
    ],
  },
]);