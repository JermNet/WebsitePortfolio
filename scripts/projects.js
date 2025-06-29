const projects = [
  {
    id: "c-project",
    title: "C Final Project",
    link: "https://github.com/JermNet/CFinal",
    video: "https://youtube.com/embed/2HE6-TJwt9U",
    content: `
        <p>
            This was our final project for our C course, a book management system. It was a challenge to do at first, but in the end it was simply putting concepts we already had together. There were some OOP aspects as we had to have a header file, as well as the book being a separate class from the main.
        </p>
        <p>
            We also had to dynamically allocate an array to accommodate a fluctuating amount of books, and save and load said books to and from dat files. It was an enjoyable challenge, and learning how to dynamically allocate arrays and to save to external files were important skills that I have since applied in other projects. Still, it was clear to me at this point that C wasn't my favourite language, even if this project had some fun aspects.
        </p>
    `
  },
  {
    id: "c-sharp-project",
    title: "C# Assignment 13",
    link: "https://github.com/JermNet/CSharpAssignment13",
    video: "https://www.youtube.com/embed/-3e1g3ec4Pk?si=rcJtE9T2yWrBJuct",
    content: `
        <p>
            This was our final project (though not in name) for my C# class, and the third in a series of us doing 3D model related assignments. As a result, this one had a focus on code reuse, which was really fun. Naturally, as someone taught object oriented programming, it is something I think about, but this assignment made me think about it in a different way. 
        </p>
        <p>
            We had to make Tic Tac Toe in 2D and in 3D while using as much of the same code as possible. For some things like the 3D models, it was easy, but pretty much everything else required a lot of math, and took a while to figure out. Like I said, it was really fun, though, especially working with 3D models.
        </p>
    `
  },
  {
    id: "c-plus-plus-project",
    title: "C++ Final Project",
    link: "https://github.com/JermNet/CPlusPlusFinal",
    video: "https://youtube.com/embed/Age6xCTiPkE",
    content: `
        <p>
            For this final, we ended up having to make a student information system. I really liked figuring out how to properly manage a pointer to pointer array in C++. Thinking on it now, I probably should have used a Vector, but I suppose that would have been less challenging, so I think it's fine since I understand that. 
        </p>
        <p>
            I don't really mind C++, but it's similar enough to C that they're in the same tier for me. I prefer Java and C# over both by a mile, but I still have the skills to do C++ if I need to. I would just probably won't do any personal projects with C or C++.
        </p>
    `
  },
  {
    id: "html5-project",
    title: "Website Development Final Project",
    link: "https://jermnet.github.io/HTMLFinal/",
    video: "https://youtube.com/embed/vmyZcwriTdg",
    content: `
        <p>
            This was my final project for Website Development, and the first website on this scale we had to do. Due to having other projects during this time period, to give the required amount of time for each project, this one had to be done in about 3 days, and all 13 web pages I made for it were required! Not only did this one teach me how to do more complex things with CSS, such as slideshows and layered navigation bars, but it also really taught me the valuable skill of time management. 
        </p>
        <p>
            Even with the aforementioned time crunch, this specific website really helped me realize that I wanted to do web development. I still wasn't fully set by the time I finished this, but if I didn't have this stepping stone, it probably would have taken me a good bit longer to find out.
        </p>
    `
  },
  {
    id: "javascript-project",
    title: "Client Side Programming Assignment 2",
    link: "https://github.com/JermNet/ClientSideProgrammingAssignment2",
    video: "https://youtube.com/embed/1Y_P_71bEyQ",
    content: `
        <p>
            This was like 8, well, 7 mini assignments in one. Originally there were 7 questions, but I misinterpreted the last one, and ended up making a web app without really knowing what I was doing. I've made better web apps since, so I've decided to leave off that specific question.
        </p>
        <p>
            Everything else uses JavaScript from console to fetching from an API. We fetched specifically fetched from a weather API, and although I struggled with it at first, as the documentation wasn't perfect, it was very satisfying when I got it working. The other questions were pretty neat, and without them, I wouldn't have made it to the level of JavaScript on this page, but that pulling from an API one was my favourite.
        </p>
    `
  },
  {
    id: "css3-project",
    title: "Web Development Assignment 3",
    link: "https://jermnet.github.io/HTMLAssignment3/",
    video: "https://youtube.com/embed/IlsMPR4d0sc",
    content: `
        <p>
            As a lover of web development and web design, this was a really fun assignment to do. We just had to make a website, making sure to use heavy CSS. Another on of the requirements was to make the website responsive. As a result, I decided to go heavy on the icon groups and top bar turning into a hamburger menu.
        </p>
        <p>
            As you can probably tell, I had a lot of fun making the website, and even applying the responsiveness. I have done a lot of the things on this website better since I've originally made it, namely groups of icons, and responsiveness as a whole. But I am proud of the website as a whole, even if I would have done things differently now, either from a design or programming perspective.
        </p>
    `
  },
  {
    id: "sql-project",
    title: "Database Management Final Project",
    link: "https://github.com/JermNet/DatabaseFinal",
    video: "https://youtube.com/embed/oPoPv4Md5qc",
    content: `
        <p>
            This is the schema for our final project for our Database Management class. The main goal of this one was to create a bunch of different commands, all of them you can see within the GitHub repo. Personally though, I prefer working with databases in other places rather than "raw" so to speak.
        </p>
        <p>
            Luckily, that's not something that happens to often in the real world, so I'm happy there. Speaking of, I think I also have worked with databases better when working with other things. My 8th Android assignment is a good example of this, but I just wanted to share a raw example.
        </p>
    `
  },
  {
    id: "java-project",
    title: "Object Oriented Programming Final Project",
    link: "https://github.com/JermNet/OOPFinal",
    video: "https://youtube.com/embed/5IUtnVqcOTQ",
    content: `
        <p>
            This was our final project for Object Oriented Programming. We were tasked with making something graphical, and actually had a few options to pick from, with the "default" option being a quiz game. I decided to challenge myself by picking the calculator option (which is actually something I did back in my high school programming course, but that had a lot of bugs). 
        </p>
        <p>
            It was quite difficult getting everything working properly, and there were a lot of moving pieces compared to doing something text-based, but it was worth it. I felt as though I was able to get a deeper understanding of Java through this project, and it was a huge help in understanding Android development and C# since there are a lot of carry overs.
        </p>
    `
  },
  {
    id: "python-project",
    title: "Python Milestone 1",
    link: "https://github.com/JermNet/PythonMilestone1",
    video: "https://youtube.com/embed/S1g4PHkWM9o",
    content: `
        <p>
            This is the first milestone I did for my self study project. It's a still ongoing course, so this is my first of four, and probably what will be the least impressive of these milestones. I was mostly focusing on learning the language, and I though about just making that the milestone, but I want to prove that I did the language.
        </p>
        <p>
            So, what I decided to do was remake my final from my C++ course. A lot of that video up there is me going over the differences between Python and other languages to show my knowledge. I'm really liking Python so far, though, it's a nice language.
        </p>
    `
  },
  {
    id: "spring-boot-project",
    title: "Web Application Programming Final",
    link: "https://github.com/JermNet/WebAppFinal",
    video: "https://youtube.com/embed/Y7IkTauN9tc",
    content: `
        <p>
            In terms of assignments/projects I've worked on over the course of my, well, course, at NSCC, this might have been the most fun I've had to work on. Web apps are obviously in the world of website development, so this was right up my alley.
        </p>
        <p>
            There were a ton of moving pieces to this too, with ThymeLeaf, the database and just the sheer amount of files there were to deal with. Now, in the workplace, I know I'd be dealing with a lot of different files (a lot more than this, at least). But I also know that I wouldn't be making them all from scratch, either.
        </p>
        <p>
            I'm not the biggest fan of specifically using ThymeLeaf, but other than that, I really had a lot of fun making this web app, even with the stress of my other final projects surrounding me. It's things like these that change the word "job" into "career" for me.
        </p>
    `
  },
  {
    id: "android-project",
    title: "Android Assignment #8",
    link: "https://github.com/JermNet/MOBIAssignment8",
    video: "https://youtube.com/embed/OPx5rnW8cQs",
    content: `
        <p>
            This specific assignment may very well have been some of the most fun I've had doing an assignment. It was an advancement on a previous assignment, but we had to add intents. I ended up adding intents, of course, but I also added the ability to load images from an external website, which was a fun puzzle to figure out. 
        </p>
        <p>
            This was also one of those assignments that felt like it could be something useful in the real world, as inanely useful as a Pokémon tracker app would be. I'm interested in Android development, so I might make this into a proper app at some point. But since I'm more interested in web development, that's something that's on the back burner right now.
        </p>
    `
  }
  
]

const body = document.body;

projects.forEach(project => {
const windowDiv = document.createElement("div");
windowDiv.className = "window";
windowDiv.id = `${project.id}-window-id`;
windowDiv.innerHTML = `
    <div class="title-bar">
    <a href="${project.link}" target="_blank"><span class="title">${project.title}</span></a>
    <div class="buttons">
        <button class="minimize">_</button>
        <button class="maximize">□</button>
        <button class="close">X</button>
    </div>
    </div>
    <div class="content">
    <iframe src="${project.video}" allowfullscreen></iframe>
    ${project.content}
    </div>
`;
body.appendChild(windowDiv);
});