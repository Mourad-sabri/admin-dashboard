import {
  BarChart,
  Braces,
  CodeSlash,
  ColumnsGap,
  ExclamationTriangle,
  Globe,
  Grid,
  LayoutSidebar,
  Lock,
  Palette,
  QuestionOctagon,
  Share,
  Shop,
  Window,
} from "react-bootstrap-icons"

export const items = [
  {
    title: "Dashboard",
    icon: <ColumnsGap />,
    subMenu: [
      { title: "Ecommerce", link: "/dashboards/ecommerce" },
      { title: "Analytics", link: "/dashboards/analytics" },
      { title: "Saas", link: "/dashboards/saas" },
    ],
  },
  {
    isDivider: true,
    title: "Pages",
  },
  {
    title: "Auth",
    icon: <Lock />,
    subMenu: [
      { title: "Login 1", link: "/auth/login-1" },
      { title: "Login 2", link: "/auth/login-2" },
      { title: "Register 1", link: "/auth/register-1" },
      { title: "Register 2", link: "/auth/register-2" },
      { title: "Password Reset 1", link: "/auth/password-reset-1" },
      { title: "Password Reset 2", link: "/auth/password-reset-2" },
      { title: "Two factor Auth 1", link: "/auth/auth-2fa-1" },
      { title: "Two factor Auth 2", link: "/auth/auth-2fa-2" },
    ],
  },
  {
    title: "Error Pages",
    icon: <ExclamationTriangle />,
    subMenu: [
      { title: "404", link: "/404" },
      { title: "500", link: "/500" },
    ],
  },
  {
    title: "Faq page",
    icon: <QuestionOctagon />,
    subMenu: [
      { title: "Faq 1", link: "/faq/faq-1" },
      { title: "Faq 2", link: "/faq/faq-2" },
    ],
  },
  {
    title: "Landing Page",
    icon: <Globe />,
    link: "/",
  },
  {
    isDivider: true,
    title: "Apps",
  },
  {
    title: "E-commerce",
    icon: <Shop />,
    subMenu: [
      { title: "Products List", link: "/apps/ecommerce/products-list" },
      { title: "Add Product", link: "/apps/ecommerce/add-product" },
    ],
  },
  {
    isDivider: true,
    title: " Ui Components",
  },
  {
    title: "Core",
    icon: <CodeSlash />,
    subMenu: [
      { title: "Input", link: "/ui/core/inputs" },
      { title: "Accordion", link: "/ui/core/accordion" },
      { title: "AlertModal", link: "/ui/core/alert-modal" },
      { title: "Alert", link: "/ui/core/alert" },
      { title: "Avatar", link: "/ui/core/avatar" },
      { title: "Buttons", link: "/ui/core/buttons" },
      { title: "Checkbox", link: "/ui/core/check-box" },
      { title: "ProgressBar", link: "/ui/core/progress-bar" },
      { title: "DateInput", link: "/ui/core/date-input" },
      { title: "Divider", link: "/ui/core/divider" },
      { title: "Drawer", link: "/ui/core/drawer" },
      { title: "DropDown", link: "/ui/core/dropdown" },
      { title: "Forms", link: "/ui/core/forms" },
      { title: "LoadingSpinner", link: "/ui/core/loading-spinner" },
      { title: "Modal", link: "/ui/core/modal" },
      { title: "Portal", link: "/ui/core/portal" },
      { title: "Radio", link: "/ui/core/radio" },
      { title: "Select", link: "/ui/core/select" },
      { title: "Table", link: "/ui/core/table" },
      { title: "Tabs", link: "/ui/core/tabs" },
      { title: "TextEllipsis", link: "/ui/core/text-ellipsis" },
      { title: "Toast", link: "/ui/core/toast" },
      { title: "Tooltip", link: "/ui/core/tooltip" },
    ],
  },
  {
    title: "Hooks",
    icon: <Grid />,
    subMenu: [
      { title: "useClickOutsideClose", link: "/ui/hooks/use-click-outside" },
      { title: "useModeTheme", link: "/ui/hooks/use-mode-theme" },
      { title: "useTypedText", link: "/ui/hooks/use-typed-text" },
      { title: "useClipBoard", link: "/ui/hooks/use-clip-board" },
    ],
  },
  {
    title: "Charts",
    icon: <BarChart />,
    subMenu: [
      { title: "Area", link: "/ui/chart/area" },
      { title: "Line", link: "/ui/chart/line" },
      { title: "Bar", link: "/ui/chart/bar" },
    ],
  },
  {
    title: "Components",
    icon: <Braces />,
    subMenu: [
      { title: "StaticsCard", link: "/ui/components/statics-card" },
      { title: "List", link: "/ui/components/list" },
    ],
  },
  {
    isDivider: true,
    title: "Documentation",
  },
  {
    title: "getting Started",
    icon: <Window />,
    link: "/doc/start",
  },
  {
    title: "Customization",
    icon: <Palette />,
    link: "/doc/customization",
  },
  {
    title: "render Pages",
    icon: <LayoutSidebar />,
    link: "/doc/render-pages",
  },
  {
    title: "Changelog",
    icon: <Share />,
    link: "/doc/changelog",
  },
]
