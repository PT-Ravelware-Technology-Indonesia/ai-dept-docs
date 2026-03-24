import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  site: {
    logo: {
      src: { light: "/logo-light.svg", dark: "/logo-dark.svg" },
      alt: "Zudoku",
      width: "130px",
    },
  },
  navigation: [
    {
      type: "category",
      label: "Home",
      items: [
        {
          type: "category",
          label: "Getting Started",
          "collapsible": true,
          "collapsed": true,
          icon: "sparkles",
          items: [
            {
              "type": "doc",
              "file": "home/introduction",
              "label": "Introduction",
              "icon": "notebook-pen"
            },
            {
              "type": "category",
              "label": "Tools",
              "icon": "hammer",
              "collapsible": true,
              "collapsed": true,
              "items": [
                {
                  "type": "doc",
                  "file": "home/tools/uv",
                  "label": "uv",
                  "icon": "bolt"
                }
              ]
            },
            {
              "type": "doc",
              "file": "home/business-process",
              "label": "Business Process",
              "icon": "briefcase-business"
            },

          ],
        },
      ],
    },
    {
      type: "category",
      label: "Research",
      items: [
        "/research",
        {
          "type": "category",
          "label": "Research Guide",
          "collapsible": true,
          "collapsed": true,
          "items": [
            {
              "type": "doc",
              "file": "research/research-template",
              "label": "Report Template",
              "icon": "file-text"
            }
          ]
        }
      ],
  },
  {
    type: "category",
    label: "Prototyping",
    items: [
      "/prototyping",
    ],
  },
  {
    type: "category",
    label: "Development",
    items: [
      "/development",
    ],
  },
  {
    type: "category",
    label: "Testing",
    items: [
      "/testing",
    ],
  },
  {
    type: "category",
    label: "Deployment",
    items: [
      "/deployment",
    ],
  },
],
};

export default config;
