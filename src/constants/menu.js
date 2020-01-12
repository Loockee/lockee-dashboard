const data = [{
  id: "loockee",
  icon: "iconsminds-brain",
  label: "menu.loockee",
  to: "/app/loockee",
  subs: [
    {
      icon: "simple-icon-paper-plane",
      label: "menu.start",
      to: "/app/loockee/start"
    },
    {
      icon: "simple-icon-paper-plane",
      label: "menu.home",
      to: "/app/loockee/home"
    }
  ]},
  {
    id: "konnekt",
    icon: "iconsminds-chemical",
    label: "menu.konnekt",
    to: "/app/konnekt",
    subs: [
      {
        icon: "simple-icon-paper-plane",
        label: "menu.home",
        to: "/app/konnekt/home"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.profiles",
        to: "/app/konnekt/profile"
      },
      {
        icon: "simple-icon-paper-plane",
        label: "menu.mission-control",
        to: "/app/konnekt/mission-control"
      }
    ]
  },
  /*{
    id: "second-menu",
    icon: "iconsminds-chemical",
    label: "menu.second-menu",
    to: "/app/second-menu",
    subs: [{
      icon: "simple-icon-paper-plane",
      label: "menu.second",
      to: "/app/second-menu/second"
    }]
  },
  {
    id: "pages",
    icon: "iconsminds-digital-drawing",
    label: "menu.pages",
    to: "/user/login",
    subs: [{
      icon: "simple-icon-user-following",
      label: "menu.login",
      to: "/user/login",
      newWindow: true
    }, {
      icon: "simple-icon-user-follow",
      label: "menu.register",
      to: "/user/register",
      newWindow: true
    }, {
      icon: "simple-icon-user-unfollow",
      label: "menu.forgot-password",
      to: "/user/forgot-password",
      newWindow: true
    }]
  },
  {
    id: "single",
    icon: "iconsminds-three-arrow-fork",
    label: "menu.single",
    to: "/app/single"
  },*/
  {
    id: "docs",
    icon: "iconsminds-library",
    label: "menu.docs",
    to: "#",
  }
];
export default data;
