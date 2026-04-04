import type { ZudokuConfig } from "zudoku";

const isProd = typeof import.meta !== "undefined" 
  ? import.meta.env?.PROD 
  : process.env.NODE_ENV === "production";

const config: ZudokuConfig = {
  basePath: isProd ? "/ai-dept-docs" : "",

  theme: {
    registryUrl: "https://tweakcn.com/r/themes/cmie97f2b000704l27r9g1p11",
  },
  site: {
    logo: {
      src: { light: "/ravelware-light.svg", dark: "/ravelware-dark.svg" },
      alt: "Zudoku",
      width: "130px",
    },
  },

  ...(isProd && {
    authentication: {
      type: "clerk",
      clerkPubKey: import.meta.env.VITE_CLERK_PUBLISHABLE_KEY,
      jwtTemplateName: "jwt-ai-docs",
    },
    protectedRoutes: ["/*"],
  }),
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
              "type": "doc",
              "file": "home/business_process",
              "label": "Business Process",
              "icon": "briefcase-business"
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
                  "file": "home/tools/loguru",
                  "label": "Loguru",
                  "icon": "bolt"
                },
                {
                  "type": "doc",
                  "file": "home/tools/nssm",
                  "label": "NSSM",
                  "icon": "bolt"
                },
                {
                  "type": "doc",
                  "file": "home/tools/docker",
                  "label": "Docker",
                  "icon": "bolt"
                },
                {
                  "type": "doc",
                  "file": "home/tools/roo_code",
                  "label": "Roo Code",
                  "icon": "bolt"
                },
                {
                  "type": "doc",
                  "file": "home/tools/pydantic",
                  "label": "Pydantic",
                  "icon": "bolt"
                }
              ]
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
          "collapsed": false,
          "items": [
            {
              "type": "link",
              "to": "https://docs.google.com/document/d/1sLtLpA9QeOQZYJacwBMw-u1pnVL8ODSr5XTYZwGxpwc/edit?usp=sharing",
              "label": "Report Template",
              "icon": "file-text"
            },
            {
              "type": "link",
              "to": "https://drive.google.com/drive/folders/1IO8BVnA2antwvnFPgqWHl4H_v7geFif0?usp=sharing",
              "label": "Report Drive",
              "icon": "archive"
            },
            {
              "type":"doc",
              "file":"research/report_example",
              "label": "Report Example",
              "icon": "clipboard"
            },
            {
              "type": "doc",
              "file": "research/computer_vision_research",
              "label": "Computer Vision",
              "icon": "eye"
            },
            {
              "type": "doc",
              "file": "research/machine_learning_research",
              "label": "Machine Learning",
              "icon": "brain",

            },
            {
              "type": "doc",
              "file":"research/llms_research",
              "label": "LLMs",
              "icon": "bot"
            },
            {
              "type": "doc",
              "file": "research/business_automation",
              "label": "Business Automation",
              "icon": "settings"
            },
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
          "label": "Prototyping Guide",
          "collapsible": true,
          "collapsed": false,
          "icon": "blocks",
          "items": [
            {
              "type": "doc",
              "file": "prototyping/defining_the_problem",
              "label": "Defining the Problem",
              "icon": "file-question-mark"
            },
            {
              "type": "doc",
              "file": "prototyping/research_and_validation",
              "label": "Research and Validation",
              "icon": "microscope"
            },
            {
              "type": "doc",
              "file": "prototyping/planning_and_scoping",
              "label": "Planning and Scoping",
              "icon": "notebook-pen"
            },
            {
              "type": "doc",
              "file": "prototyping/designing_the_solution",
              "label": "Designing the Solution",
              "icon": "brush"
            },
            {
              "type": "doc",
              "file": "prototyping/building_the_mvp",
              "label": "Building the MVP",
              "icon": "drill"
            }
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
              "file": "development/project_structure",
              "label": "Project Structure",
              "icon": "brick-wall"
            },
            {
              "type": "doc",
              "file": "development/code_quality",
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
              "file": "development/integration",
              "label": "Integration",
              "icon": "unplug",
            },
            {
              "type": "doc",
              "file": "development/data_management",
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
            {
              "type": "doc",
              "file": "development/focused_standard/llms/openai_sdk",
              "label": "OpenAI SDK",
              "icon": "bolt"
            },
            {
              "type": "doc",
              "file": "development/focused_standard/llms/rag",
              "label": "RAG",
              "icon": "search"
            },
            {
              "type": "doc",
              "file": "development/focused_standard/llms/mcp",
              "label": "MCP",
              "icon": "bot"
            },
            {
              "type": "doc",
              "file": "development/focused_standard/llms/llm_observability",
              "label": "LLM Observability",
              "icon": "eye"
            },
            {
              "type": "doc",
              "file": "development/focused_standard/llms/llm_security",
              "label": "LLM Security",
              "icon": "shield"
            }
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
          "type": "doc",
          "file": "deployment/edge_deployment",
          "label": "Edge Deployment",
          "icon": "cpu",
        },
        {
          "type": "doc",
          "file": "deployment/cloud_deployment",
          "label": "Cloud Deployment",
          "icon": "cloud",
        },
        {
          "type": "doc",
          "file": "deployment/versioning_guide",
          "label": "Versioning Guide",
          "icon": "file-stack",
        }
      ],
    },
    {
    type: "category",
    label: "Monitoring & Iteration",
    items: [
      "/monitoring_iteration",
      {
        "type": "category",
        "label": "Documentation Guide",
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
    {
    type: "category",
    label: "Project Documentation",
    items: [
      "/project_documentation",
      {
        "type": "doc",
        "file": "project_documentation/dws",
        "label": "DWS",
        "icon": "scale"
      },
      {
        "type": "category",
        "label": "Project 2",
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