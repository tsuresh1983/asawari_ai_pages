import meta from "../../../src/pages/_meta.js";
export const pageMap = [{
  data: meta
}, {
  name: "get_started",
  route: "/get_started",
  frontMatter: {
    "sidebarTitle": "Get Started"
  }
}, {
  name: "index",
  route: "/",
  frontMatter: {
    "sidebarTitle": "Index"
  }
}, {
  name: "machine_learning",
  route: "/machine_learning",
  children: [{
    name: "deep_learning",
    route: "/machine_learning/deep_learning",
    children: [{
      name: "computer_vision",
      route: "/machine_learning/deep_learning/computer_vision",
      children: [{
        name: "introduction",
        route: "/machine_learning/deep_learning/computer_vision/introduction",
        frontMatter: {
          "sidebarTitle": "Introduction"
        }
      }]
    }, {
      name: "introduction",
      route: "/machine_learning/deep_learning/introduction",
      frontMatter: {
        "sidebarTitle": "Introduction"
      }
    }, {
      name: "nlp",
      route: "/machine_learning/deep_learning/nlp",
      children: [{
        name: "introduction",
        route: "/machine_learning/deep_learning/nlp/introduction",
        frontMatter: {
          "sidebarTitle": "Introduction"
        }
      }, {
        name: "llm",
        route: "/machine_learning/deep_learning/nlp/llm",
        children: [{
          name: "introduction",
          route: "/machine_learning/deep_learning/nlp/llm/introduction",
          frontMatter: {
            "sidebarTitle": "Introduction"
          }
        }]
      }]
    }]
  }, {
    name: "introduction",
    route: "/machine_learning/introduction",
    frontMatter: {
      "sidebarTitle": "Introduction"
    }
  }]
}, {
  name: "maths",
  route: "/maths",
  children: [{
    name: "algebra",
    route: "/maths/algebra",
    children: [{
      name: "introduction",
      route: "/maths/algebra/introduction",
      frontMatter: {
        "sidebarTitle": "Introduction"
      }
    }]
  }, {
    name: "calculus",
    route: "/maths/calculus",
    children: [{
      name: "introduction",
      route: "/maths/calculus/introduction",
      frontMatter: {
        "sidebarTitle": "Introduction"
      }
    }]
  }, {
    name: "introduction",
    route: "/maths/introduction",
    frontMatter: {
      "sidebarTitle": "Introduction"
    }
  }, {
    name: "probability",
    route: "/maths/probability",
    children: [{
      name: "introduction",
      route: "/maths/probability/introduction",
      frontMatter: {
        "sidebarTitle": "Introduction"
      }
    }]
  }, {
    name: "statistics",
    route: "/maths/statistics",
    children: [{
      name: "introduction",
      route: "/maths/statistics/introduction",
      frontMatter: {
        "sidebarTitle": "Introduction"
      }
    }]
  }]
}];