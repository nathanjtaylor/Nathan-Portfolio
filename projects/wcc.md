---
layout: layout.liquid
title: Projects
---
<a href="/projects/">back</a>
# Woodman Custom Construction
(<a href="https://woodmancustomconstruction.com/" target="_blank">link</a>)
## Background
A freelance web design and development project for Woodman Custom Construction, a local construction company.

## Client Needs
The client wanted a simple portfolio site to showcase their work more efficiently. They emphasized that advertising and SEO were not priorities, which helped shape my approach to design. 

## Research & Planning
Because I was the sole developer, I used AI (ChatGPT) to organize my ideas and explore different tools for the project. I would need some way for the client, who didn't have any technical experience, to add new projects to the website. Through research I found a content management system (CMS) would accomplish this goal. I thought of it like a blog where authors don't **need** to know web design.

I ended up using Decap CMS as the content management system. I chose this because it was already integrated with Netlify, the web-hosting service I would be using. This setup also allowed the client to manage their site at no additional cost, making it an ideal choice for a small-scale portfolio.

In hindsight, I realize I should have evaluated multiple CMS options before settling on Decap. While it worked well for this project, I now recognize the importance of comparing alternatives to ensure the best fit. Moving forward, I plan to be more thorough in this step of the process.

## Design Process
Since the project required both a home page and a project display page, I sketched multiple layout variations and presented them to the client. After reviewing the options together, we selected the most effective design.

Next, I refined the selected designs in Figma, creating higher-fidelity mockups. I met with the client again to review multiple variations and finalize the look. Additionally throughout this process I showed the prototype to others to observe how they interacted with it and gather insights on usability.

<img src=/images/wcc_sketch2.jpg alt="desktop layout sketches">
<figcaption>Desktop Layout Sketches</figcaption>
<br>
<img src=/images/wcc_figma1.jpg alt="mobile layout sketches" width=750px>
<figcaption>Final Figma Design</figcaption>
<!---
<br>
<figure>
    <img src=/images/wcc_sketch4.jpg alt="mobile layout sketches">
    <figcaption>Mobile Layout Sketches</figcaption>
</figure>
<figure>
    <img src=/images/wcc_figma1.jpg alt="mobile layout sketches" width=100px>
    <figcaption>Mobile Layout Sketches</figcaption>
</figure>
-->

## Development
After finalizing the design, I moved into development, building the website with raw HTML and CSS. I focused on accurately implementing my design and keeping my code clean and maintainable.
I then implemented Decap CMS. Learning Decap was a challenge, as I had never worked with a CMS before, but I quickly adapted by thoroughly reviewing the documentation. I configured it to allow the client to add and edit project entries easily. I then wrote JavaScript to generate a static site dynamically based on the content stored in Decap CMS.

In the end, I delivered a fully functional system where the client could independently upload and manage projects, allowing them to show their work off to prospective clients effectively.

## Final Outcome
The final website provided the client with a simple, structured way to showcase their work without needing technical expertise. Instead of relying on a disorganized camera roll, they could now upload projects effortlessly through Decap CMS.

After a walkthrough of the system, the client found it intuitive and easy to use, allowing them to update their portfolio independently. This project not only met their needs but also gave them a more professional way to present their work to potential clients.

While the website successfully met the client’s needs, I recognize areas for improvement. In the future, I’d like to revisit this project with more experience to optimize loading times and improve performance, to create a smoother experience for visitors.
