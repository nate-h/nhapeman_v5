import Image from "next/image";
import { Project, Skill, Experience, Book } from "@/types";

export const experience: Experience[] = [
  {
    id: "1",
    company: "HRL Laboratories",
    logoUrl: "/logos/hrl.png",
    position: "Full Stack Engineer",
    period: "July 2021 - Present",
    description: (
      <>
        <p>
          HRL is a world leader in silicon-based spin qubits for quantum computing. I help in many
          ways but primarily by leading development on an automated wafer testing framework using
          probers.
        </p>
        <ul
          style={{
            marginLeft: "1.5rem",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            listStyleType: "disc",
          }}
        >
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Lead developer on Python-based automated wafer probing framework</strong>
            <ul style={{ marginLeft: "1.5rem", marginTop: "0.25rem", listStyleType: "circle" }}>
              <li>
                Delivered multi-fold performance improvements on inherited systems, doubling wafer
                testing capacity
              </li>
              <li>The framework emphasizes exceptional UX without compromising test speed</li>
              <li>Well documented with many demos </li>
              <li>Mocked instruments for production testing and faster development</li>
              <li>Multi-system support per computer, and composite SMU capabilities</li>
            </ul>
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Full stack developer on quantum device testing frameworks</strong>
            <ul style={{ marginLeft: "1.5rem", marginTop: "0.25rem", listStyleType: "circle" }}>
              <li>
                Built multiple web applications for visualization and acquisition of large-scale
                quantum-relevant data
              </li>
              <li>
                Implemented real-time plotting and analysis tools using Plotly, WebSockets, Vue, and
                IPC
              </li>
              <li>
                Created tools to visualize device yield by overlaying database-aggregated test
                results on devices
              </li>
              <li>
                Created a universal, cross-network device visualizer for semiconductors using WKB
                polygons from a database
              </li>
            </ul>
          </li>
          <li>
            <strong>Recognition</strong>
            <ul style={{ marginLeft: "1.5rem", marginTop: "0.25rem", listStyleType: "circle" }}>
              <li>
                Recipient of the 2024 HRL Award for 'Work Excellence by an individual or Team on
                Critical Programs'
              </li>
              <li>Promoted off-cycle twice</li>
            </ul>
          </li>
        </ul>
      </>
    ),
    tags: [
      "Full Stack",
      "Python",
      "FastAPI",
      "Vue.js",
      "React",
      "TypeScript",
      "Hardware Integration",
      "Data Visualization",
      "Quasar",
      "Pandas",
      "SQLAlchemy",
      "NumPy",
      "HDF5",
      "Plotly",
      "Sass",
    ],
  },
  {
    id: "2",
    company: "Applied Invention",
    logoUrl: "/logos/applied-invention.png",
    position: "Software Engineer",
    period: "June 2014 - June 2021",
    description: (
      <>
        <p>
          Applied Invention partners with large enterprises to design and deliver solutions to
          complex technical challenges. Most of my work can be summarized in these three projects:
        </p>
        <ul
          style={{
            marginLeft: "1.5rem",
            marginTop: "0.5rem",
            marginBottom: "0.5rem",
            listStyleType: "disc",
          }}
        >
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Computer Vision Aquaculture Project</strong>
            <ul style={{ marginLeft: "1.5rem", marginTop: "0.25rem", listStyleType: "circle" }}>
              <li>Lead architect and dev on an image annotation website</li>
              <li>
                Worked extensively with annotation team to improve the website user experience
              </li>
              <li>Imported and cleaned training data from third party sources</li>
              <li>Built dashboard to monitor the annotation data pipeline and annotator stats</li>
              <li>
                Developed multiple computer vision solutions like multi-label recognition, quality
                filtering, image scoring.
              </li>
              <li>
                Core contributor to a ML data pipeline built on Pachyderm, AWS, and Kubernetes,
                operating at ~400 pods
              </li>
            </ul>
          </li>
          <li style={{ marginBottom: "0.75rem" }}>
            <strong>Rental Forecasting Project</strong>
            <ul style={{ marginLeft: "1.5rem", marginTop: "0.25rem", listStyleType: "circle" }}>
              <li>
                Added to team to resolve performance bottlenecks and expand forecasting system to
                nationwide scope
              </li>
              <li>
                Delivered a 50x performance improvement through query optimization, parallel
                execution, memoization, profiling, and migrating hot paths to C++
              </li>
              <li>
                Automated model accuracy checks and used slack bots to report discrepancies and
                result summaries
              </li>
            </ul>
          </li>
          <li>
            <strong>Geospatial Simulation Development</strong>
            <ul style={{ marginLeft: "1.5rem", marginTop: "0.25rem", listStyleType: "circle" }}>
              <li>
                Worked on several GIS projects using Cesium.js, UE4 based and in-house engines
              </li>
              <li>Wrote entire file system diagnostics website for a map server</li>
              <li>Added support for dynamic terrain layer switching and wrote custom shaders</li>
              <li>
                Built a hotkey menu system that allows users to customize and define new hotkeys
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
    tags: [
      "Full Stack",
      "Simulation / Game Development",
      "Machine Learning",
      "Data Science",
      "PostgreSQL",
      "Angular",
      "React",
      "Python",
      "Flask",
      "Javascript",
      "OpenCV",
      "Pandas",
      "NumPy",
      "C++",
      "Sass",
      "AWS",
      "Kubernetes",
    ],
  },
  // {
  //   id: "3",
  //   company: "FrackOptima",
  //   logoUrl: "/logos/frackoptima.png",
  //   position: "Software Engineer (Part-time)",
  //   period: "May 2016 - October 2017",
  //   description: (
  //     <p>
  //       Part-time software engineer for a hydraulic fracturing company specializing in software and services for optimal
  //       hydraulic fracturing treatments. Primarily worked on the company website and fracking simulator while maintaining
  //       full-time position at Applied Invention.
  //     </p>
  //   ),
  //   tags: ["Full Stack"],
  // },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Whirling",
    description:
      "A music visualizer leveraging audio feature extraction and segmentation to generate representative visuals. Analyzes audio characteristics to create dynamic, synchronized visual effects.",
    imageUrl: "/logos/tiled_whirling.png",
    technologies: ["Python", "Audio Processing", "Spectrograms", "NumPy"],
    githubUrl: "https://github.com/nate-h/Whirling",
    liveUrl: "https://vimeo.com/454955980",
    bgColor: "bg-black",
    fullDescription: (
      <>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <iframe
            title="vimeo-player"
            src="https://player.vimeo.com/video/454955980?h=6c41d8bc42&transparent=0"
            width="640"
            height="360"
            frameBorder="0"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
            allowFullScreen
          />
        </div>
        <p>
          A music visualizer that uses audio feature extraction and segmentation to create more
          representative visuals. Built from scratch and heavily optimized so it could run near
          60fps while using python ;)
        </p>
        <br />
        <h2>TLDR - I built a music visualizer</h2>
        <p>
          The colors map to separated sources. <br />
          Here&apos;s the key:
        </p>
        <ul>
          <li style={{ color: "green" }}>Green → vocals</li>
          <li style={{ color: "blue" }}>Blue → other (piano, guitar, etc.)</li>
          <li style={{ color: "red" }}>Red → Drums</li>
          <li style={{ color: "purple" }}>Purple → Bass</li>
        </ul>
        <br />
        <h2>What is Whirling?</h2>
        <p>
          Whirling is a music visualizer that tries to intelligently understand as much about the
          song that&apos;s playing so it could create a more representative visual. All songs played
          have to undergo a two step preprocessing algorithm that runs a source separator and a
          feature extractor on each of the generated sources. I use Spleeter and Librosa to do
          source separation. Spleeter is able to separate the drums, vocals, bass and other for each
          track. Librosa can separate the percussion and harmonics. For feature extracting, I use
          Librosa exclusively.
        </p>
        <br />
        <p>
          I haven&apos;t worked extensively with python for GUI/game development so I decided to use
          pygame and opengl for creating the visualizer. I thought it would be a good learning
          experience to gauge the python based gui/game development tools out there. What it turned
          into was a good understanding on how to use numpy for large array manipulation and opengl
          for VAO rendering. I have 6 visualizers that can be cycled through. Visualizers 1, 4 and 6
          make heavy use of moving averages, thresholds and other heuristics to get the colors to
          render just right. Visualizers 1 and 4-6 use the same colors to represent the separated
          source that&apos;s heard. See color key below for color mappings.
        </p>
        <br />
        <h2>Brief description of each visualizer</h2>
        <ol>
          <li>
            <strong>combo_board:</strong> Uses both spectrograms and features to render a grid of
            squares. Each illuminated square represents a certain frequency range heard. Squares
            near the top right of the screen map to higher frequencies. The color of that square
            represents what source it came from.
          </li>
          <li>
            <strong>debug:</strong> Shows all features generated for current source separation plan.
          </li>
          <li>
            <strong>spectrogram:</strong> Shows all spectrograms generated for current source
            separation plan.
          </li>
          <li>
            <strong>concentric_squares:</strong> Uses the source separated spectrograms to render
            concentric square rings that represent what frequency is being played. The bigger the
            ring, the higher the frequency. Ring color matches source heard. This visualizer
            combines colors if 2+ sources are playing the same frequency.
          </li>
          <li>
            <strong>stacked_equalizers:</strong> Show all frequencies heard with no adjustments.
          </li>
          <li>
            <strong>checkerboard:</strong> same as combo_board but with no use of features and much
            less filtering.
          </li>
        </ol>
      </>
    ),
  },
  {
    id: "2",
    title: "Drone Command & Control",
    description:
      "A simulated drone command and control platform featuring real-time drone management, mission planning, and telemetry visualization. Full stack implementation with modern web technologies.",
    imageUrl: "/logos/drone-c2.jpg",
    technologies: ["React", "TypeScript", "Golang", "WebSockets"],
    githubUrl: "https://github.com/nate-h/drone-c2",
    bgColor: "bg-zinc-600",
  },
  {
    id: "3",
    title: "Image Effects",
    description:
      "A Jupyter notebook that contains a couple dozen image transformations, some recreating trivial Photoshop effects and others just having fun with OpenCV.",
    imageUrl: "/logos/image-effects.png",
    technologies: ["Python", "OpenCV", "Jupyter Notebook", "NumPy"],
    githubUrl: "https://github.com/nate-h/image-effects",
    liveUrl: "https://github.com/nate-h/image-effects/blob/main/run.ipynb",
    bgColor: "bg-white",
    fullDescription: (
      <>
        <Image
          alt="image effects example"
          src="/logos/image-effects-2.png"
          width={800}
          height={400}
          style={{ width: "100%", height: "auto", marginBottom: "20px" }}
        />
        <p>
          A{" "}
          <a
            href="https://github.com/nate-h/image-effects/blob/main/run.ipynb"
            target="_blank"
            rel="noopener noreferrer"
          >
            notebook containing
          </a>{" "}
          a couple dozen fun image transformations using mostly OpenCV and NumPy.
        </p>
        <br />
        <p>
          I love working with things I can see whether its: game development, frontend, or computer
          vision problems. One of the first programs I created for fun was a{" "}
          <a
            href="https://www.mathworks.com/matlabcentral/fileexchange/35975-picture-letter-recognition-software"
            target="_blank"
            rel="noopener noreferrer"
          >
            letter recognition software written in Matlab.
          </a>{" "}
          I&apos;ve been lucky enough to work on some computer vision problems in my career but
          wanted to take it slow and explore all the features OpenCV provides. This project was
          that. A deliberate attempt of playing with OpenCV on a ton of small problems so I can
          learn more of the basics OpenCV provides.
        </p>
      </>
    ),
  },
  {
    id: "4",
    title: "Pacman Remake",
    description:
      "Remake of the basics of Pacman. Funnest part was using Dijkstra's algorithm for some of the ghosts. Other ghosts move randomly.",
    imageUrl: "/logos/pacman.png",
    technologies: ["JavaScript"],
    githubUrl: "https://github.com/nate-h/pacman_js",
    liveUrl: "https://nate-h.github.io/pacman_js/",
    bgColor: "bg-black",
    fullDescription: (
      <>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <iframe
            src="https://nate-h.github.io/pacman_js/"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            scrolling="no"
            allowFullScreen
            style={{ width: "600px", height: "430px" }}
          />
        </div>
        <p>
          A lot of the fun I got from creating this game was in trying to optimize it. For instance,
          rather than rendering everything in the level each frame, I only rendered were the changes
          happened in the game. I also made sure I used the best Data Structures and algorithms so
          no unnecessary work was done.
        </p>
        <br />
        <p>
          The hardest thing was creating the AI for the ghost. In order to do this, I had to
          transform the original two dimensional array map into a graph. The ghost can then navigate
          through the map using the nodes as reference points. They can use these nodes to move
          towards Pacman by checking which node Pacman is going towards, or to move around the map
          randomly. The orange ghost in the original Pacman moves this way but most people
          don&apos;t notice since they are trying to survive. Now to get each ghost to move towards
          Pacman I used Dijkstra&apos;s algorithm to compute the fastest path.
        </p>
      </>
    ),
  },
  {
    id: "5",
    title: "Fun with React",
    description:
      "Fun-with-react is a collection of small react examples I created to play around with React and understand the basics.",
    imageUrl: "/logos/react-logo.png",
    technologies: ["React", "TypeScript", "Sass", "clsx"],
    githubUrl: "https://github.com/nate-h/fun-with-react",
    liveUrl: "https://nate-h.github.io/fun-with-react/",
    bgColor: "bg-gray-900",
    fullDescription: (
      <>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <Image
            src="/logos/react-logo.png"
            alt="React Logo"
            width={300}
            height={300}
            style={{ maxWidth: "300px", width: "100%", height: "auto" }}
          />
        </div>
        <p>
          <a
            href="https://github.com/nate-h/fun-with-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            fun-with-react
          </a>{" "}
          is a collection of small React examples. Live example{" "}
          <a
            href="https://nate-h.github.io/fun-with-react/"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </p>
        <br />
        <h2>Some quick thoughts on React coming from Vue</h2>
        <br />
        <p>
          React isn&apos;t the first web framework I learned or even second so it was interesting
          trying to translate ideas from other frameworks over. It&apos;s hard to say what I
          don&apos;t like and what I&apos;m frankly not used to. It was nice seeing that there was a
          dozen ways to do things but was surprised to see how much Javascript in general things
          took. That and how many additional installs I needed to try to get some of the behaviors I
          wanted (clsx, styled-components).
        </p>
        <br />
        <p>
          One of the interesting things was trying to translate Vue&apos;s computed over to React
          and learning that the concept is basically inverted. What I mean is in Vue when I define a
          const variable, that variable won&apos;t be recreated on re-renders. Meanwhile in React, a
          const variable will get recomputed on re-renders/useState changes. So the analog of a Vue
          computed prop is a regular React component variable.
        </p>
        <br />
        <p>
          The obvious plus side to React is its huge community. Whether you&apos;re looking at the
          numerous packages, tutorials, stackoverflow help, etc. For any question I had, it was a
          breeze finding a good answer. And I never considered this until exploring React but it
          made me realize how annoying Vue&apos;s vue2-&gt;vue3 transition is in terms of actively
          avoiding vue2 search results due to how different the options API is compared to the
          composition API.
        </p>
        <br />
        <p>
          Overall it&apos;s been a mostly positive experience learning React with the exception of
          some things relating to custom styling which I think Vue&apos;s single file components
          gets right. I might eventually like css-in-js one day but it definitely still feels weird.
        </p>
      </>
    ),
  },
  {
    id: "6",
    title: "Super Mario Bros Reloaded",
    description:
      "Core features of Super Mario Bros with some slight quirks. Built using c++ and SDL before I got my first job in computer programming. Learned a ton about OOP, threading and data structures while creating this.",
    imageUrl: "/logos/mario.jpg",
    technologies: ["C++", "SDL"],
    liveUrl: "https://www.youtube.com/watch?v=EMslyjWIPGo",
    bgColor: "bg-black",
    fullDescription: (
      <>
        <iframe
          src="https://www.youtube.com/embed/EMslyjWIPGo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: "100%", height: "500px" }}
        />
        <br />
        <p>
          Being a 90&apos;s kid, I played my fair share of Mario based games. The next logical step
          was to create my own version of my beloved childhood game! So being fairly brand new to
          programming, I thought it was a great idea to recreate some of the basic functionality of
          Super Mario Bros. The hardest part of this for sure was trying to acquire all of the art
          for the game. So much so that I started borrowing assets from other games. It was an
          amazing learning experience to teach me c++ and polymorphism. It was also a good
          introduction to data structures, memory management, and threading.
        </p>
      </>
    ),
  },
  {
    id: "7",
    title: "MyTunes: a music player",
    description:
      "A simple music player that made it a breeze to create playlists. The first and only program I wrote in Java to this day.",
    imageUrl: "/logos/mytunes.png",
    technologies: ["Java", "JavaZOOM"],
    liveUrl: "https://www.youtube.com/watch?v=1c4erMvMnVQ",
    bgColor: "bg-gray-300",
    fullDescription: (
      <>
        <iframe
          src="https://www.youtube.com/embed/1c4erMvMnVQ"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
          style={{ width: "100%", height: "500px" }}
        />
        <br />
        <p>
          Before I got into streaming, I had a pretty big music collection. I was really into making
          playlists but was frustrated at how iTunes didn&apos;t have the best UI for managing
          playlists. Trying to improve my coding skills, I thought it would be fun to create my own
          version of iTunes with some cool features for managing playlists. So I created MyTunes. In
          creating it, I learned a good amount about multithread synchronization, object
          serialization, regex filters and swing components.
        </p>
        <br />
        <p>
          I created this media player for the soul purpose of having greater management over my
          music. The layout and functionality is similar to iTunes but it has some additional
          features like hotkeys for inserting songs into playlists or check marks to see which
          playlist a song is in. Speed was a big concern while implementing this media player. When
          a user adds music to the library, all the information for each song is calculated only
          once (not each time myTunes start) then stored in a hashmap that way I can access
          information in constant time. Also, I don&apos;t copy the songs to a folder, rather I copy
          the address then load it when the user wants to play. Lastly, when I save the information,
          I serialize it that way it loads fast. Two of the most difficult things to implement were
          the regex filter for the search bar and the multi-threading for playing the sound.
        </p>
      </>
    ),
  },
  {
    id: "8",
    title: "My thoughts on learning Vue",
    description:
      "My previous personal website (v3) was the fourth major rewrite and second version written in Vue. Coming from an AngularJS background, I picked up Vue pretty easily. Here are my thoughts on the two frameworks.",
    imageUrl: "/logos/vue-logo.png",
    technologies: ["Vue3", "Sass", "TypeScript"],
    githubUrl: "https://github.com/nate-h/nhapeman.com_v3",
    bgColor: "bg-slate-900",
    fullDescription: (
      <>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <Image
            src="/logos/vue-logo.png"
            alt="Vue Logo"
            width={300}
            height={300}
            style={{ maxWidth: "300px", width: "100%", height: "auto" }}
          />
        </div>
        <p>
          I wrote my previous personal website (version 3) using Vue and Sass as a learning
          experience. The biggest thing I wanted to learn was Vue since I came from an AngularJS
          background. For this reason, I wrote most of it from scratch so I could learn the ins and
          outs of Vue.{" "}
          <a
            href="https://github.com/nate-h/nhapeman.com_v3"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check out the code here!
          </a>{" "}
          In addition to wanting to learn Vue, I also wanted to take the time and learn some of
          things I didn&apos;t have time to learn on the job. As a software developer, you
          constantly have to fight deadlines and sadly this means you have to occasionally put aside
          learning something to meet a deadline. The last thing I hoped to learn while developing
          this website was new patterns from using the{" "}
          <a
            href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself"
            target="_blank"
            rel="noopener noreferrer"
          >
            DRY principle
          </a>{" "}
          wherever possible. So while developing this website, I rewrote many things as I learned
          cooler things Vue had to offer.
        </p>
        <br />
        <p>
          My experience with Vue so far has been completely positive, unlike my experience with
          AngularJS which could have been better. I suspected that the documentation for AngularJS
          was bad but it wasn&apos;t until I dove into Vue that I realized what I was missing. The
          best way to read AngularJS documentation is to ignore it completely and use stackoverflow.
          I found it way too complex for describing simple concepts. It also uses other AngularJS
          terms to define something. So You almost need an understanding of everything else to
          understand one thing.
        </p>
        <br />
        <p>
          Vue on the other hand was much easier to learn. I&apos;ll admit that part of the reason
          why it was easier to learn is that so many things were borrowed from AngularJS. So
          naturally it wasn&apos;t too hard to translate a lot of my knowledge over from AngularJS.
          I think if I didn&apos;t have a background in AngularJS or any web framework for that
          matter, Vue would have been easy to learn because it&apos;s well designed and has
          documentation geared towards newbies. I think one of the reasons why Vue became the
          framework it is today is that it&apos;s mostly written by one dude,{" "}
          <a href="https://twitter.com/youyuxi?lang=en" target="_blank" rel="noopener noreferrer">
            Evan You
          </a>{" "}
          so perhaps it doesn&apos;t suffer from having{" "}
          <a
            href="https://www.youtube.com/watch?v=QrGrOK8oZG8"
            target="_blank"
            rel="noopener noreferrer"
          >
            too many cooks
          </a>
          .
        </p>
        <br />
        <p>
          Working with it so far, I find that it has a good balance of giving the developer some
          freedom while still requiring some order in places that create cleaner more manageable
          code. An example of this are the properties you can define when creating a component.
          These properties like watch, props, methods and data provide a formal place to group
          similar items. Vue also provides life cycle hooks that allow you to do stuff at the
          precise time in the component creation. AngularJS has some formal ways to group common
          functionality and even provides some life cycle hooks but it&apos;s very minimal. Looking
          back at most of the controllers I wrote, they all would have benefitted by having one
          place to define the watchers or one place to define scope variables. I still developed my
          own standards to attempt to have that behavior but it would have been much easier/ cleaner
          if the standard was built into the framework.
        </p>
        <br />
        <p>
          Another great feature Vue has is the ability to define a component in one file. These{" "}
          <a
            href="https://vuejs.org/v2/guide/single-file-components.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            single file components
          </a>{" "}
          simply have the Javascript, CSS, and HTML stuffed into 1 file as opposed to 3 separate
          files. The beauty of this feature is that developers are more incentivised to break up
          their code into smaller pieces. I find it annoying when you want to create a small
          component but need to create 3 files for your css/js/html that have 30 lines each. Being
          able to throw all 3 snippets into one file makes it so: you&apos;re not overwhelmed by
          number of files, you can bounce around the code faster since it&apos;s all in one file,
          delete the component easier.
        </p>
        <br />
        <p>
          The last thing I like about Vue is how easy it is to dive into it. The first step of
          learning anything new is getting your foot in the door and with the Vue CLI, it&apos;s
          that much easier to get started with Vue. Using the client, it takes 4 lines to get a
          local website up and running. And while configuring a new project, you can choose between
          many popular options for things like linters and testing frameworks.
        </p>
      </>
    ),
  },
  {
    id: "9",
    title: "Minesweeper Remake",
    description:
      "Minesweeper was one of the first games I remade as a programmer. Never played the game too much but thought it would be fun to recreate and more importantly achievable. Brace yourself for the sound effects :D",
    imageUrl: "/logos/minesweeper.png",
    technologies: ["JavaScript"],
    liveUrl: "https://nate-h.github.io/minesweeper_js/",
    bgColor: "bg-stone-300",
    fullDescription: (
      <>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: "20px" }}>
          <iframe
            src="https://nate-h.github.io/minesweeper_js/"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            scrolling="no"
            allowFullScreen
            style={{ width: "400px", height: "370px" }}
          />
        </div>
        <p>
          Minesweeper was one of the first games I remade as a programmer. Never played the game too
          much but thought it would be fun to recreate and more importantly achievable. Brace
          yourself for the sound effects :D
        </p>
      </>
    ),
  },
];

export const books: Book[] = [
  { title: "No Rules Rules", author: "Reed Hastings", coverUrl: "/books/no-rules-rules.jpg" },
  {
    title: "Turn the Ship Around!",
    author: "L. David Marquet",
    coverUrl: "/books/turn-ship-around.jpg",
  },
  { title: "Zero to One", author: "Peter Thiel", coverUrl: "/books/zero-to-one.jpg" },
  { title: "Atomic Habits", author: "James Clear", coverUrl: "/books/atomic-habits.jpg" },
  { title: "Apple in China", author: "Jack Linchuan Qiu", coverUrl: "/books/apple-in-china.jpg" },
  { title: "Skunk Works", author: "Ben Rich", coverUrl: "/books/skunk-works.jpg" },
  {
    title: "Influence: The Psychology of Persuasion",
    author: "Robert Cialdini",
    coverUrl: "/books/influence.jpg",
  },
  { title: "Freedom's Forge", author: "Arthur Herman", coverUrl: "/books/freedoms-forge.jpg" },
  { title: "Extreme Ownership", author: "Jocko Willink", coverUrl: "/books/extreme-ownership.jpg" },
  { title: "Good to Great", author: "Jim Collins", coverUrl: "/books/good-to-great.jpg" },
  {
    title: "Trillion Dollar Coach",
    author: "Eric Schmidt",
    coverUrl: "/books/trillion-dollar-coach.jpg",
  },
  {
    title: "Thinking, Fast and Slow",
    author: "Daniel Kahneman",
    coverUrl: "/books/thinking-fast-slow.jpg",
  },
  {
    title: "Surely You're Joking, Mr. Feynman!",
    author: "Richard Feynman",
    coverUrl: "/books/feynman.jpg",
  },
  {
    title: "Hooked: How to Build Habit-Forming Products",
    author: "Nir Eyal",
    coverUrl: "/books/hooked.jpg",
  },
  { title: "Irresistible", author: "Adam Alter", coverUrl: "/books/irresistible.jpg" },
  { title: "Elon Musk", author: "Ashlee Vance", coverUrl: "/books/elon-musk-vance.jpg" },
  { title: "Elon Musk", author: "Walter Isaacson", coverUrl: "/books/elon-musk-isaacson.jpg" },
  { title: "Steve Jobs", author: "Walter Isaacson", coverUrl: "/books/steve-jobs.jpg" },
  { title: "A Mind at Play", author: "Jimmy Soni", coverUrl: "/books/mind-at-play.jpg" },
  { title: "The Infinite Game", author: "Simon Sinek", coverUrl: "/books/infinite-game.jpg" },
  {
    title: "The Predictioneer's Game",
    author: "Bruce Bueno de Mesquita",
    coverUrl: "/books/predictioneers-game.jpg",
  },
  { title: "Superintelligence", author: "Nick Bostrom", coverUrl: "/books/superintelligence.jpg" },
  { title: "Unit X", author: "Raj M. Shah", coverUrl: "/books/unit-x.jpg" },
];

// TODO: possibly get back to this.
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
