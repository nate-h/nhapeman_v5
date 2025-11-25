import { Project, Skill, Experience, Book } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Whirling",
    description: "A music visualizer leveraging audio feature extraction and segmentation to generate representative visuals. Analyzes audio characteristics to create dynamic, synchronized visual effects.",
    imageUrl: "/logos/tiled_whirling.png",
    technologies: ["Python", "Audio Processing", "Computer Vision", "NumPy"],
    githubUrl: "https://github.com/nate-h/Whirling",
    bgColor: "bg-black",
  },
  {
    id: "2",
    title: "Drone Command & Control",
    description: "A simulated drone command and control platform featuring real-time drone management, mission planning, and telemetry visualization. Full stack implementation with modern web technologies.",
    imageUrl: "/logos/drone-c2.jpg",
    technologies: ["React", "TypeScript", "Golang", "WebSockets"],
    githubUrl: "https://github.com/nate-h/drone-c2",
    bgColor: "bg-zinc-600",
  },
  {
    id: "3",
    title: "Image Effects",
    description: "Computer vision examples that recreate Photoshop-like effects and demonstrate innovative image processing techniques. Includes various filters, transformations, and artistic effects.",
    imageUrl: "/logos/image-effects.png",
    technologies: ["Python", "OpenCV", "Jupyter Notebook", "NumPy"],
    githubUrl: "https://github.com/nate-h/image-effects",
    bgColor: "bg-white",
  },
  {
    id: "4",
    title: "Pacman Remake",
    description: "Remake of the basics of Pacman. Funnest part was using Dijkstra's algorithm for some of the ghosts. Other ghosts move randomly.",
    imageUrl: "/logos/pacman.png",
    technologies: ["JavaScript"],
    githubUrl: "https://github.com/nate-h/pacman_js",
    liveUrl: "https://nate-h.github.io/pacman_js/",
    bgColor: "bg-black",
    fullDescription: `<div style="display: flex; justify-content: center; margin-bottom: 20px;">
  <iframe
    src="https://nate-h.github.io/pacman_js/"
    frameborder="0"
    allow="autoplay; encrypted-media"
    scrolling="no"
    allowfullscreen
    style="width: 600px; height: 430px"
  ></iframe>
</div>
<p>
  A lot of the fun I got from creating this game was in trying to optimize it. For instance,
  rather than rendering everything in the level each frame, I only rendered were the changes
  happened in the game. I also made sure I used the best Data Structures and algorithms so no
  unnecessary work was done.
</p>
<br />
<p>
  The hardest thing was creating the AI for the ghost. In order to do this, I had to transform
  the original two dimensional array map into a graph. The ghost can then navigate through the
  map using the nodes as reference points. They can use these nodes to move towards Pacman by
  checking which node Pacman is going towards, or to move around the map randomly. The orange
  ghost in the original Pacman moves this way but most people don't notice since they are
  trying to survive. Now to get each ghost to move towards Pacman I used Dijkstra's algorithm
  to compute the fastest path.
</p>`,
  },
  {
    id: "5",
    title: "Fun with React",
    description: "Fun-with-react is a collection of small react examples I created to play around with React and understand the basics.",
    imageUrl: "/logos/react-logo.png",
    technologies: ["React", "TypeScript", "Sass", "clsx"],
    githubUrl: "https://github.com/nate-h/fun-with-react",
    liveUrl: "https://nate-h.github.io/fun-with-react/",
    bgColor: "bg-gray-900",
    fullDescription: `<p>
  <a href="https://github.com/nate-h/fun-with-react" target="_blank" rel="noopener noreferrer">fun-with-react</a>
  is a collection of small React examples. Live example
  <a href="https://nate-h.github.io/fun-with-react/" target="_blank" rel="noopener noreferrer">here</a>.
</p>
<br />
<h2>Some quick thoughts on React coming from Vue</h2>
<br />
<p>
  React isn't the first web framework I learned or even second so it was interesting trying to
  translate ideas from other frameworks over. It's hard to say what I don't like and what I'm
  frankly not used to. It was nice seeing that there was a dozen ways to do things but was
  surprised to see how much Javascript in general things took. That and how many additional
  installs I needed to try to get some of the behaviors I wanted (clsx, styled-components).
</p>
<br />
<p>
  One of the interesting things was trying to translate Vue's computed over to React and
  learning that the concept is basically inverted. What I mean is in Vue when I define a const
  variable, that variable won't be recreated on re-renders. Meanwhile in React, a const
  variable will get recomputed on re-renders/useState changes. So the analog of a Vue computed
  prop is a regular React component variable.
</p>
<br />
<p>
  The obvious plus side to React is its huge community. Whether you're looking at the numerous
  packages, tutorials, stackoverflow help, etc. For any question I had, it was a breeze
  finding a good answer. And I never considered this until exploring React but it made me
  realize how annoying Vue's vue2->vue3 transition is in terms of actively avoiding vue2
  search results due to how different the options API is compared to the composition API.
</p>
<br />
<p>
  Overall it's been a mostly positive experience learning React with the exception of some
  things relating to custom styling which I think Vue's single file components gets right. I
  might eventually like css-in-js one day but it definitely still feels weird.
</p>`,
  },
  {
    id: "6",
    title: "Super Mario Bros Reloaded",
    description: "Core features of Super Mario Bros with some slight quirks. Built using c++ and SDL before I got my first job in computer programming. Learned a ton about OOP, threading and data structures while creating this.",
    imageUrl: "/logos/mario.jpg",
    technologies: ["C++", "SDL"],
    bgColor: "bg-black",
    fullDescription: `<iframe
  src="https://www.youtube.com/embed/EMslyjWIPGo"
  frameborder="0"
  allow="autoplay; encrypted-media"
  allowfullscreen
  style="width: 100%; height: 500px"
></iframe>
<br />
<p>
  Being a 90's kid, I played my fair share of Mario based games. The next logical step was to
  create my own version of my beloved childhood game! So being fairly brand new to
  programming, I thought it was a great idea to recreate some of the basic functionality of
  Super Mario Bros. The hardest part of this for sure was trying to acquire all of the art for
  the game. So much so that I started borrowing assets from other games. It was an amazing
  learning experience to teach me c++ and polymorphism. It was also a good introduction to
  data structures, memory management, and threading.
</p>`,
  },
  {
    id: "7",
    title: "MyTunes: a music player",
    description: "A simple music player that made it a breeze to create playlists. The first and only program I wrote in Java to this day.",
    imageUrl: "/logos/mytunes.png",
    technologies: ["Java", "JavaZOOM"],
    bgColor: "bg-gray-300",
    fullDescription: `<iframe
  src="https://www.youtube.com/embed/1c4erMvMnVQ"
  frameborder="0"
  allow="autoplay; encrypted-media"
  allowfullscreen
  style="width: 100%; height: 500px"
></iframe>
<br />
<p>
  Before I got into streaming, I had a pretty big music collection. I was really into making
  playlists but was frustrated at how iTunes didn't have the best UI for managing playlists.
  Trying to improve my coding skills, I thought it would be fun to create my own version of
  iTunes with some cool features for managing playlists. So I created MyTunes. In creating it,
  I learned a good amount about multithread synchronization, object serialization, regex
  filters and swing components.
</p>
<br />
<p>
  I created this media player for the soul purpose of having greater management over my music.
  The layout and functionality is similar to iTunes but it has some additional features like
  hotkeys for inserting songs into playlists or check marks to see which playlist a song is
  in. Speed was a big concern while implementing this media player. When a user adds music to
  the library, all the information for each song is calculated only once (not each time
  myTunes start) then stored in a hashmap that way I can access information in constant time.
  Also, I don't copy the songs to a folder, rather I copy the address then load it when the
  user wants to play. Lastly, when I save the information, I serialize it that way it loads
  fast. Two of the most difficult things to implement were the regex filter for the search bar
  and the multi-threading for playing the sound.
</p>`,
  },
  {
    id: "8",
    title: "My thoughts on learning Vue",
    description: "My previous personal website (v3) was the fourth major rewrite and second version written in Vue. Coming from an AngularJS background, I picked up Vue pretty easily. Here are my thoughts on the two frameworks.",
    imageUrl: "/logos/vue-logo.png",
    technologies: ["Vue3", "Sass", "TypeScript"],
    githubUrl: "https://github.com/nate-h/nhapeman.com_v3",
    bgColor: "bg-slate-900",
    fullDescription: `<p>
  I wrote my previous personal website (version 3) using Vue and Sass as a learning experience. The
  biggest thing I wanted to learn was Vue since I came from an AngularJS background. For this
  reason, I wrote most of it from scratch so I could learn the ins and outs of Vue.
  <a href="https://github.com/nate-h/nhapeman.com_v3" target="_blank" rel="noopener noreferrer">Check out the code here!</a>
  In addition to wanting to learn Vue, I also wanted to take the time and learn some of things
  I didn't have time to learn on the job. As a software developer, you constantly have to
  fight deadlines and sadly this means you have to occasionally put aside learning something
  to meet a deadline. The last thing I hoped to learn while developing this website was new
  patterns from using the
  <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself" target="_blank" rel="noopener noreferrer">DRY principle</a>
  wherever possible. So while developing this website, I rewrote many things as I learned
  cooler things Vue had to offer.
</p>
<br />
<p>
  My experience with Vue so far has been completely positive, unlike my experience with
  AngularJS which could have been better. I suspected that the documentation for AngularJS was
  bad but it wasn't until I dove into Vue that I realized what I was missing. The best way to
  read AngularJS documentation is to ignore it completely and use stackoverflow. I found it
  way too complex for describing simple concepts. It also uses other AngularJS terms to define
  something. So You almost need an understanding of everything else to understand one thing.
</p>
<br />
<p>
  Vue on the other hand was much easier to learn. I'll admit that part of the reason why it
  was easier to learn is that so many things were borrowed from AngularJS. So naturally it
  wasn't too hard to translate a lot of my knowledge over from AngularJS. I think if I didn't
  have a background in AngularJS or any web framework for that matter, Vue would have been
  easy to learn because it's well designed and has documentation geared towards newbies. I
  think one of the reasons why Vue became the framework it is today is that it's mostly
  written by one dude,
  <a href="https://twitter.com/youyuxi?lang=en" target="_blank" rel="noopener noreferrer">Evan You</a>
  so perhaps it doesn't suffer from having
  <a href="https://www.youtube.com/watch?v=QrGrOK8oZG8" target="_blank" rel="noopener noreferrer">too many cooks</a>.
</p>
<br />
<p>
  Working with it so far, I find that it has a good balance of giving the developer some
  freedom while still requiring some order in places that create cleaner more manageable code.
  An example of this are the properties you can define when creating a component. These
  properties like watch, props, methods and data provide a formal place to group similar
  items. Vue also provides life cycle hooks that allow you to do stuff at the precise time in
  the component creation. AngularJS has some formal ways to group common functionality and
  even provides some life cycle hooks but it's very minimal. Looking back at most of the
  controllers I wrote, they all would have benefitted by having one place to define the
  watchers or one place to define scope variables. I still developed my own standards to
  attempt to have that behavior but it would have been much easier/ cleaner if the standard
  was built into the framework.
</p>
<br />
<p>
  Another great feature Vue has is the ability to define a component in one file. These
  <a href="https://vuejs.org/v2/guide/single-file-components.html" target="_blank" rel="noopener noreferrer">single file components</a>
  simply have the Javascript, CSS, and HTML stuffed into 1 file as opposed to 3 separate
  files. The beauty of this feature is that developers are more incentivised to break up their
  code into smaller pieces. I find it annoying when you want to create a small component but
  need to create 3 files for your css/js/html that have 30 lines each. Being able to throw all
  3 snippets into one file makes it so: you're not overwhelmed by number of files, you can
  bounce around the code faster since it's all in one file, delete the component easier.
</p>
<br />
<p>
  The last thing I like about Vue is how easy it is to dive into it. The first step of
  learning anything new is getting your foot in the door and with the Vue CLI, it's that much
  easier to get started with Vue. Using the client, it takes 4 lines to get a local website up
  and running. And while configuring a new project, you can choose between many popular
  options for things like linters and testing frameworks.
</p>`,
  },
  {
    id: "9",
    title: "Minesweeper Remake",
    description: "Minesweeper was one of the first games I remade as a programmer. Never played the game too much but thought it would be fun to recreate and more importantly achievable. Brace yourself for the sound effects :D",
    imageUrl: "/logos/minesweeper.png",
    technologies: ["JavaScript"],
    liveUrl: "https://nate-h.github.io/minesweeper_js/",
    bgColor: "bg-stone-300",
    fullDescription: `<div style="display: flex; justify-content: center; margin-bottom: 20px;">
  <iframe
    src="https://nate-h.github.io/minesweeper_js/"
    frameborder="0"
    allow="autoplay; encrypted-media"
    scrolling="no"
    allowfullscreen
    style="width: 400px; height: 370px"
  ></iframe>
</div>
<p>
  Minesweeper was one of the first games I remade as a programmer. Never played the game too
  much but thought it would be fun to recreate and more importantly achievable. Brace yourself
  for the sound effects :D
</p>`,
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "Vue.js", category: "Frontend" },
  { name: "HTML5 Canvas", category: "Frontend" },

  // Backend
  { name: "Golang", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Python", category: "Backend" },
  { name: "WebSockets", category: "Backend" },
  { name: "REST APIs", category: "Backend" },

  // Computer Vision & ML
  { name: "OpenCV", category: "Specialized" },
  { name: "Computer Vision", category: "Specialized" },
  { name: "Audio Processing", category: "Specialized" },
  { name: "NumPy", category: "Specialized" },
  { name: "Jupyter", category: "Specialized" },

  // Tools & Others
  { name: "Git", category: "Tools" },
  { name: "C++", category: "Tools" },
  { name: "OpenGL", category: "Tools" },
  { name: "Game Development", category: "Tools" },
];

export const experience: Experience[] = [
  {
    id: "1",
    company: "HRL Laboratories",
    logoUrl: "/logos/hrl.png",
    position: "Full Stack Engineer",
    period: "July 2021 - Present",
    description: "Award recipient of the 2024 HRL Award for 'Work Excellence by an individual or Team on Critical Programs'. Full stack developer on quantum device testing frameworks, building multiple web applications for visualization and acquisition of large-scale quantum data. Developed zoomable, interactive JavaScript canvas applications for data analysis. Led development of a Python-based automated wafer probing framework that doubled testing throughput compared to the previous system. The framework emphasizes exceptional UX without compromising test speed, includes instrument demos for faster onboarding, mocked instruments for production testing and faster development, multi-system support per computer, and composite SMU capabilities.",
    tags: ["Full Stack", "Python", "Vue.js", "React", "TypeScript", "Hardware Integration", "Data Visualization"],
  },
  {
    id: "2",
    company: "Applied Invention",
    logoUrl: "/logos/applied-invention.png",
    position: "Software Engineer",
    period: "June 2014 - June 2021",
    description: "Worked on diverse challenging projects helping leading companies solve complex problems. Developed an in-house geo-spatial game engine built with C++ on Panda3D. Created and maintained an internal annotation website for machine learning projects, managing multi-stage data pipelines and providing data analysis insights. Responsibilities included full stack development, data science, and machine learning.",
    tags: ["Full Stack", "Simulation / Game Development", "Machine Learning", "Data Science"],
  },
  {
    id: "3",
    company: "FrackOptima",
    logoUrl: "/logos/frackoptima.png",
    position: "Software Engineer (Part-time)",
    period: "May 2016 - October 2017",
    description: "Part-time software engineer for a hydraulic fracturing company specializing in software and services for optimal hydraulic fracturing treatments. Primarily worked on the company website and fracking simulator while maintaining full-time position at Applied Invention.",
    tags: ["Full Stack"],
  },
];

export const books: Book[] = [
  { id: "1", title: "Zero to One", author: "Peter Thiel", coverUrl: "/books/zero-to-one.jpg" },
  { id: "2", title: "Thinking, Fast and Slow", author: "Daniel Kahneman", coverUrl: "/books/thinking-fast-slow.jpg" },
  { id: "3", title: "Influence: The Psychology of Persuasion", author: "Robert Cialdini", coverUrl: "/books/influence.jpg" },
  { id: "4", title: "Atomic Habits", author: "James Clear", coverUrl: "/books/atomic-habits.jpg" },
  { id: "5", title: "Good to Great", author: "Jim Collins", coverUrl: "/books/good-to-great.jpg" },
  { id: "6", title: "Extreme Ownership", author: "Jocko Willink", coverUrl: "/books/extreme-ownership.jpg" },
  { id: "7", title: "Freedom's Forge", author: "Arthur Herman", coverUrl: "/books/freedoms-forge.jpg" },
  { id: "8", title: "Apple in China", author: "Jack Linchuan Qiu", coverUrl: "/books/apple-in-china.jpg" },
  { id: "9", title: "Skunk Works", author: "Ben Rich", coverUrl: "/books/skunk-works.jpg" },
  { id: "10", title: "Trillion Dollar Coach", author: "Eric Schmidt", coverUrl: "/books/trillion-dollar-coach.jpg" },
  { id: "11", title: "Surely You're Joking, Mr. Feynman!", author: "Richard Feynman", coverUrl: "/books/feynman.jpg" },
  { id: "12", title: "Hooked: How to Build Habit-Forming Products", author: "Nir Eyal", coverUrl: "/books/hooked.jpg" },
  { id: "13", title: "Irresistible", author: "Adam Alter", coverUrl: "/books/irresistible.jpg" },
  { id: "14", title: "Elon Musk", author: "Ashlee Vance", coverUrl: "/books/elon-musk-vance.jpg" },
  { id: "15", title: "Elon Musk", author: "Walter Isaacson", coverUrl: "/books/elon-musk-isaacson.jpg" },
  { id: "16", title: "Steve Jobs", author: "Walter Isaacson", coverUrl: "/books/steve-jobs.jpg" },
  { id: "17", title: "Turn the Ship Around!", author: "L. David Marquet", coverUrl: "/books/turn-ship-around.jpg" },
  { id: "18", title: "The Infinite Game", author: "Simon Sinek", coverUrl: "/books/infinite-game.jpg" },
  { id: "19", title: "The Predictioneer's Game", author: "Bruce Bueno de Mesquita", coverUrl: "/books/predictioneers-game.jpg" },
  { id: "20", title: "Superintelligence", author: "Nick Bostrom", coverUrl: "/books/superintelligence.jpg" },
  { id: "21", title: "Unit X", author: "Raj M. Shah", coverUrl: "/books/unit-x.jpg" },
  { id: "22", title: "A Mind at Play", author: "Jimmy Soni", coverUrl: "/books/mind-at-play.jpg" },
];
