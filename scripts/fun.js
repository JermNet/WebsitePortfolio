const projects = [
  {
    id: "vnds-project",
    title: "vnds Documentation Page",
    link: "https://jermnet.github.io/vndsFanPage/",
    video: "https://youtube.com/embed/RHOT6YUkJ1Y",
    content: `
      <p>
          This is one of three projects I've done in relation to the forgotten homebrew program, vnds. It's used to play visual novels on the DS, and a lot of the information has been scattered and lost to time. Since it's a program I'm passionate about, I made a page with pretty much all the information I could find if someone wanted to make a vnds format visual novel in the current year. 
      </p>
      <p>
          It was a fun thing to do, and as a result of making this, I found some pretty neat archive materials. I also used the Internet Archive to host downloads since there's so many. If I did them through the website, the website would be well over 20GB!
      </p>
    `
  },
  {
    id: "milk-project",
    title: "Port of Milk Inside a Bag of Milk Inside a Bag of Milk",
    link: "https://github.com/JermNet/MilkInsideABagOfMilkVNDS",
    video: "https://youtube.com/embed/trhiSIB1IIM",
    content: `
      <p>
          This one takes a little bit of explaining. In the late 2000s/early 2010s, there was this fan-made application for the Nintendo DS called VNDS. It let you play visual novels (a type of story based game) on the aforementioned Nintendo DS. It's defunct now, but ever since I've found out about it, I've always had a real interest in it. Then, I eventually found the time to port a game to this platform!
      </p>
      <p>
          Milk Inside A Bag Of Milk Inside A Bag Of Milk is the visual novel I ported, and it took a little while but was a fun experience. I had to rewrite the script and code by hand, transferring it into VNDS's language (which is pretty primitive, it doesn't even have loops!). I also had to redo the images and sound as well, but not from scratch for those.
      </p>
      <p>
          Overall, it was a pretty fun experience since it was a personal project, but I also think it was a good experience work wise. I can imagine having to write programs from one language into another, so this was kind of an introductory experience to that.
      </p>
    `
  },
  {
    id: "vscode-extension-project",
    title: "My VSCode Extension",
    link: "https://github.com/JermNet/VSCodeVNDSExtension",
    video: "https://youtube.com/embed/_qX8MmQuRS0",
    content: `
      <p>
          This is the final of the "vnds Trilogy" and it's one of those things that I made for myself, and realized it could help others. Because of the obscurity of vnds, there was no hugely helpful tools to help with making a game for it. Luckily, there was a script checker made already, and I might try adapting that to an extension at some point, but there was no syntax highlighter, which really bugged me.
      </p>
      <p>
          What does one do when something bugs them? Unbug it! So, I made a syntax highlighter for VSCode to use with vnds. Luckily, vnds uses ".scr" (screensaver) files for it's script, so all I had to do was make it work with just that file type, and use some regexes to match certain syntax! It was a fun mini-project, and having something offical through VSCode is something that fills me with pride.
      </p>
    `
  },
  {
    id: "clannad-project",
    title: "Clannad Fan Page",
    link: "https://jermnet.github.io/ClannadFanPage/",
    video: "https://youtube.com/embed/14nBmTifdys",
    content: `
      <p>
          One of my favourite things to do is to make websites on things I'm interested in, and this is a prime example. Clannad is a game and anime series, but that's not really important to explain here. What is important is that, along with being passionate about the topic of this website, I was passionate about making it as well.
      </p>
      <p>
          Originally, this was actually going to be one page on a much larger website. Aside from the main page and this, it had 7 other pages of equal to greater size to this. I was definitely over scoping with that. I think my new plan is to potentially make each their own website, and if I finish them all, make the changes needed to stitch them back together.
      </p>
      <p>
          Even with that, designing and making this page was really fun, and I've kind of adopted the drop down menu design for main articles as a personal design trope. It's here, after all, and I think it's a smart way to let the reader either browse through everything or just focus on one thing.
      </p>
    `
  },
  {
    id: "renpy-project",
    title: "Ren'Py Visual Novel",
    link: "https://github.com/JermNet/MOBIFinal2",
    video: "https://youtube.com/embed/gGKZQct4s8Y",
    content: `
      <p>
          Although this was for a school project, I like to think of it as a personal project with a more strict time limit since I got to pick what I wanted to do. So, I decided to make a visual novel with Ren'Py, a language that uses Python but has specific language elements for making visual novels.
      </p>
      <p>
          Before this project, I had messed around with it, but never really made anything with serious intent to have something to show off or use. This was also my first introduction to using Python, even if it wasn't Python proper. So, it was a lot of learning for about a week of work, but it was pretty darn fun too. I got a nice end product out of it as well.
      </p>
    `
  },
  {
    id: "pre-programming-project",
    title: "Pre College Era Websites",
    link: "https://github.com/JermNet/VisualNovelFanPage1.0",
    video: "https://youtube.com/embed/YSXVmYdIles",
    content: `
      <iframe src="https://youtube.com/embed/eSnAn7506hQ" allowfullscreen></iframe>
      <p>
          Yes! I was making websites before I knew how to make websites! Technically, the second one I did was actually when I started college, but, like, right at the beginning, still before I knew what I was doing. 
      </p>
      <p>
          Because of the time period in my life both were created, they're not very good at all. But the main point of me displaying them here is to show my passion outside of school, and to show how much I've grown.
      </p>
      <p>
          I did do a good bit of work on one of the pages of in the website, but, especially back then, I was really bad at over scoping. I basically wanted to make 8 different websites into one. The second one didn't even really get off the ground, but it was for good reason as I did end up realizing that I was making it too big before I truly got started.
      </p>
      <p>
          Nowadays, I'd say it's only a slight issue with me. I'll start off a project that's too big in scope sometimes, but before I get too deep into it, I understand the size better and recalculate accordingly. I feel that's a way a lot of people do it, but I'm just glad it's not really a personal issue anymore.
      </p>
    `
  },
  {
    id: "p12-project",
    title: "High School Era Programming",
    link: "https://github.com/JermNet/P12Assignments",
    video: "https://www.youtube.com/embed/playlist?list=PLVSJP4k_37BjeLBWsCFJGI9PoVJcBVs6D",
    content: `
      <p>
          This is a playlist of my high school era code! I knew programming was something I wanted to do by high school, and luckily I had the opportunity to take not just one but two Programming classes in high school!
      </p>
      <p>
          Due to this stuff being for high school, it's all relatively simple, but it taught me important basics, I had a lot of fun with it, and it was what my first little bit of college easier than it otherwise would have been.
      </p>
    `
  },
  {
    id: "templates-project",
    title: "Templates",
    link: "https://github.com/JermNet/WebsiteTemplates",
    video: "https://youtube.com/embed/63O4kh6UL7I",
    content: `
      <p>
          Now, I don't know if other people do something similar to this, but I really think they should, I find it really helpful. If there's a design trope you really like, or if there's something that's a bit complex, or something you know you won't remember how to do, this is a great way to do that. 
      </p>
      <p>
          It's not too much extra work and it's really no extra work if you design websites with components, in which you'll have common design tropes separated anyway. It's just something I'd recommend, and maybe it won't help everyone, but I'm sure it'll help some.
      </p>
    `
  },
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