import React from 'react';
import Coursedetails from './coursedetails';
import './courses.css';
import Card from '../UI/Card/card';

const CourseSection = () => {
  const mycourses = [
    // {
    //   id: 2,
    //   name: "CSS3",
    //   topics: {
    //     CSSGrid_Layout: [
    //       "reate complex and responsive layouts with ease",
    //       "grid areas",
    //       " rows and columns",
    //       "using grid-based",
    //       "alignment and positioning",
    //     ],
    //     Transitions_Animations: [
    //       "transition",
    //       "transform",
    //       "keyframes, and animation",
    //     ],
    //     Flexbox: [
    //       " build flexible and dynamic layouts,",
    //       "align and distribute content within containers",
    //       "handle responsive design challenges.",
    //     ],

    //     ResponsiveDesignTechniques: [
    //       "media queries",
    //       "fluid layouts",
    //       "flexible images",
    //       "mobile-first",
    //       "desktop-first",
    //     ],
    //     CSS_Preprocessors: [
    //       "Sass to improve productivity",
    //       "organize stylesheets",
    //       " use variables and mixins",
    //       "leverage advanced features",
    //       "nesting and inheritance",
    //     ],
    //     CSS_Transforms: [
    //       "Applying 2D and 3D transformations to create interactive and visually appealing effects",
    //       "scaling",
    //       "rotating",
    //       "skewing",
    //       "translating",
    //     ],
    //   },
    //   exp: "1+ Years",
    //   des: "Hi, i have completed my CSS3 course 2 years ago , when i have in university and also i have coursera certificate regarding this,Also i done many projects regardig this , Thanks ",
    // },
    {
      id: 3,
      topics: {
        Promises_AsyncAwait: [
          'Non Blocking Code with Single Thread',
          'asynchronous code',
          ' handling promises',
          ' using async/await syntax',
        ],
        PerformancOptimiz: [
          'Code profiling',
          'optimizing algorithms',
          'reducing memory usage ',
        ],
        Functional_Programming: [
          'higher-order functions',
          'pure functions',
          'immutability',
          'function composition.',
        ],
        Modules: [
          'organize and modularize',
          'JavaScript code',
          'import and export statements',
        ],
        ES6_Features: [
          'arrow functions',
          ' template literals',
          'destructuring',
          'spread syntax]',
        ],
        DataStructures_Algorithms: [
          ' implementing common data structures ',
          'arrays, linked lists',
          ' stacks, queues,',
          'trees',
          'algorithms like',
          'sorting',
          'searching',
          'graph traversal',
        ],
      },
      name: 'JavaScript ',
      exp: '3+ Years',
      des: 'Hi, I have completely understand the backbone of javacsript includes advanced concpets, also i done multiple projects in javascript , Thanks ',
    },

    {
      id: 5,
      topics: {
        // Performance_Optimization: [
        //   "memoization",
        //   "useMemo, and useCallback",
        //   "to prevent unnecessary renders",
        //   " improve rendering speed",
        // ],
        Usestate: [],
        UseEffect: [],
        UseCallback: [],
        UseMemo: [],
        Redux: [],
        RTK_Query: [],
        Axios: [],

        // React_Hooks: [
        //   "UseState",
        //   "useContext",
        //   "useReducer",
        //   "useCallback",
        //   " manage state and side effects",
        // ],
        ContextAPI: [
          'global state management',
          ' avoid prop drilling',
          'in larger applications',
        ],
        HOCs: [],
        SPAs: [],

        // ServerSide_Rendering: [
        //   "Next.js",
        //   "improve initial page load time and SEO.",
        // ],
        // HigherOrder_Components_HOCs: [
        //   "how to create reusable and composable components that enhance the functionality of other components.",
        // ],
      },
      name: 'React JS',
      exp: '3+ Years',
      des: 'I have completed the advanced concepts of React JS includes, slso i multiple projects in react as you see below, Thanks ',
    },
    {
      id: 6,
      topics: {
        UI_Libraries: [],
        // RN_Cli: [],
        // RN_Expo: [],
        Third_Party_Plugins: [],
        Native_device_Features: [
          'native code of the target platform',
          'device-specific APIs',
          'functionality',
        ],
        Location_Tracker: [],
        Firebase_Auth: [],
        // AdvancedUIComponents: [
        //   "React Native Elements, React Native Paper, or styled-components to create custom, polished, and reusable UI components.",
        // ],
        // Animations: [
        //   "Animated API to create smooth and interactive animations in your React Native apps.",
        // ],
        Push_Notifications: [
          'Firebase Cloud Messaging (FCM) or Apple Push Notification service (APNs).',
        ],
        // Offline_Support: ["AsyncStorage or SQLite to store and retrieve data"],

        // Deep_Linking: [
        //   "app to respond to specific URLs or links, enabling deep integration with the device's operating system.",
        // ],
      },
      name: 'React Native',
      exp: '2+ Years',
      des: 'I have more than 1.5 years of industry experience of React Native Mobile Development with advanced Features, also i done multiple projects in this , Thanks ',
    },
    {
      id: 7,
      name: 'Next JS ',
      t: { a: { b: 20, a: 10, c: 30 } },
      topics: {
        SSR: [],
        SSG: [],
        Client_Side_Routing: [],
        Automatic_Code_Splitting: [],
        Automatic_Code_Splitting: [],
        File_Based_Routing: [],
      },
      exp: '3+ Years',
      des: 'Hi, i have completed my next js course and understand its conpects how it works , and also i done many projects in this , Thanks ',
    },
    {
      id: 1,
      name: 'HTML5 / Tailwind',
      t: { a: { b: 20, a: 10, c: 30 } },
      topics: {
        HTML5APIs: [
          'Geolocation API',
          'Drag and Drop API',
          ' Web Storage API',
          'Web Workers API',
        ],
        Performance_Optimization: [],

        Semantic_HTML: ['Header', 'Footer', 'Nav', 'article', 'section'],
        Responsive_WebDesign: [
          'media queries',
          'flexible grids',
          'fluid images',
        ],
        WebForms: [
          'form elements',
          'form validation',
          'handling form with JavaScript',
        ],

        HTMLTemplating: [
          'resuable components',
          'Handlebars',
          'Mustache',
          'JSX to generate dynamic HTML ',
        ],
      },
      exp: '3+ Years',
      des: 'Hi, i have completed my html course 2 years ago , when i have in university and also i have coursera certificate regarding this,Also i done many projects regardig this , Thanks ',
    },
    {
      id: 4,
      name: 'Git & Github',
      topics: {
        Branching: [],
        Merging: [],
        Push_Pull: [],
        Git_Graph: [],
        Projects_Managment: [],
        Issues_Managment: [],
        CheckOut: [],
      },
      exp: '3+ Years',
      des: 'I am completely understand how git and github works internally and manage my code through github professional for version managment of projects. ',
    },
  ];

  return (
    <Card className="section">
      <h1 style={{ marginTop: 50 }}>My Skills Set</h1>

      <Coursedetails mycourses={mycourses} />
    </Card>
  );
};

export default CourseSection;
