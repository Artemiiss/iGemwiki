import {
  Attributions,
  Communication,
  contribution,
  Description,
  design,
  Engineering,
  Home,
  Notebook,
  Results,
  Safety,
  Education,
  Hardware,
  integratedHP,
  Members,
  model,
  materials,
  SoftwareandAI,
  collaboration,
  Ourproduct,
} from "./contents";

interface Base {
  name: string | undefined;
}

class Folder implements Base {
  name: string | undefined;
  folder: Page[] | undefined;
}

class Page implements Base {
  name: string | undefined;
  path: string | undefined;
  component: React.FC | undefined;
  title?: string; // 添加可选的 title 属性
  lead?: string;  // 添加可选的 lead 属性
}

const Pages: (Page | Folder)[] = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "Project",
    folder: [
      {
        name: "Description",
        path: "/description",
        component: Description,
      },
      {
        name: "Design",
        path: "/design",
        component: design,
      },
      {
        name: "Engineering",
        path: "/engineering",
        component: Engineering,
      },
      {
        name: "Contribution",
        path: "/Contribution",
        component: contribution,
      },
      {
        name: "Safety",
        path: "/safety",
        component: Safety,
      },
    ],
  },
  {
    name: "Wet lab",
    folder: [
      {
        name: "Materials",
        path: "/materials",
        component: materials,
      },
      {
        name: "Notebook",
        path: "/notebook",
        component: Notebook,
      },
      {
        name: "Results",
        path: "/results",
        component: Results,
      },
    ],
  },
  {
    name: "Dry lab",
    folder: [
      {
        name: "Software&AI",
        path: "/SoftwareandAI",
        component: SoftwareandAI,
      },
    ],
  },
  {
    name: "Model",
    folder: [
      {
        name: "Hardware",
        path: "/hardware",
        component: Hardware,
      },
      {
        name: "Math model",
        path: "/model",
        component: model,
      },
    ],
  },
  {
    name: "Human Practices",
    folder: [
      {
        name: "Education",
        path: "/education",
        component: Education,
      },
      {
        name: "Communications",
        path: "/Communication",
        component: Communication,
      },
      {
        name: "Integrated Human Practices",
        path: "/human-practices",
        component: integratedHP,
      },
      {
        name: "Our Product",
        path: "/Our product",
        component: Ourproduct,
      },
    ],
  },
  {
    name: "Team",
    folder: [
      {
        name: "Members",
        path: "/members",
        component: Members,
      },
      {
        name: "Attributions",
        path: "/attributions",
        component: Attributions,
      },
      {
        name: "Collaboration",
        path: "/Collaboration",
        component: collaboration,
      },
    ],
  },
];

export default Pages;
