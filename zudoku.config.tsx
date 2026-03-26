import type { ZudokuConfig } from "zudoku";

const config: ZudokuConfig = {
  theme: {
      registryUrl: "https://tweakcn.com/r/themes/cmie97f2b000704l27r9g1p11",
    },
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
                },
                {
                  "type": "doc",
                  "file": "home/tools/ruff",
                  "label": "Ruff",
                  "icon": "bolt"
                },
                {
                  "type": "doc",
                  "file": "home/tools/github",
                  "label": "GitHub",
                  "icon": "bolt"
                },
                {
                  "type": "doc",
                  "file": "home/tools/roo-code",
                  "label": "Roo Code",
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
              "type": "link",
              "to": "https://docs.google.com/document/d/1sLtLpA9QeOQZYJacwBMw-u1pnVL8ODSr5XTYZwGxpwc/edit?usp=sharing",
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
        {
          "type": "category",
          "label": "PoC",
          "collapsible": true,
          "collapsed": true,
          "icon": "blocks",
          "items": [

          ]
        },
        {
          "type": "category",
          "label": "Paid PoC",
          "collapsible": true,
          "collapsed": true,
          "icon": "circle-dollar-sign",
          "items": [

          ]
        }
      ],
    },
    {
      type: "category",
      label: "Development",
      items: [
        "/development",
        {
          "type": "category",
          "label": "Core Standard",
          "collapsible": true,
          "collapsed": false,
          "icon": "code",
          "items": [
            {
              "type": "doc",
              "file": "development/project-structure",
              "label": "Project Structure",
              "icon": "brick-wall"
            },
            {
              "type": "doc",
              "file": "development/code-quality",
              "label": "Code Quality",
              "icon": "square-check-big"
            },
            {
              "type": "doc",
              "file": "development/testing",
              "label": "Testing",
              "icon": "flask-conical",
            },
            {
              "type": "doc",
              "file": "development/observability",
              "label": "Observability",
              "icon": "search-check",
            },
            {
              "type": "doc",
              "label": "Security",
              "file": "development/security",
              "icon": "shield-check",
            },
            {
              "type": "doc",
              "file": "development/integration",
              "label": "Integration",
              "icon": "unplug",
            },
            {
              "type": "doc",
              "file": "development/data-management",
              "label": "Data Management",
              "icon": "database"
            },
          ]
        },
        {
          "type": "category",
          "label": "Focused Standard",
          "collapsible": true,
          "collapsed": true,
          "icon": "code",
          "items": [
            {
          "type": "category",
          "label": "Computer Vision",
          "collapsible": true,
          "collapsed": true,
          "icon": "eye",
          "items": [

          ]
        },
        {
          "type": "category",
          "label": "Machine Learning",
          "collapsible": true,
          "collapsed": true,
          "icon": "brain",
          "items": [

          ]
        },
        {
          "type": "category",
          "label": "LLMs",
          "collapsible": true,
          "collapsed": true,
          "icon": "bot",
          "items": [

          ]
        },
        {
          "type": "category",
          "label": "Business Automation",
          "collapsible": true,
          "collapsed": true,
          "icon": "settings",
          "items": [

          ]
        },
          ]
        },
      ],
    },
    {
      type: "category",
      label: "Deployment",
      items: [
        "/deployment",
        {
          "type": "category",
          "label": "Edge Deployment",
          "collapsible": true,
          "collapsed": true,
          "icon": "cpu",
          "items": [

          ]
        },
        {
          "type": "category",
          "label": "Cloud Deployment",
          "collapsible": true,
          "collapsed": true,
          "icon": "cloud",
          "items": [

          ]
        },
      ],
    },
    {
    type: "category",
    label: "Monitoring & Iteration",
    items: [
      "/monitoring-iteration",
      {
        "type": "category",
        "label": "Documentation",
        "collapsible": true,
        "collapsed": true,
        "icon": "book",
        "items": [

        ]
      },
      {
        "type": "category",
        "label": "Bug Fixing",
        "collapsible": true,
        "collapsed": true,
        "icon": "bug",
        "items": [

        ]
      },
    ],
    },
    ],
  redirects: [
    { from: "/", to: "/home/introduction" }],
};

export default config;