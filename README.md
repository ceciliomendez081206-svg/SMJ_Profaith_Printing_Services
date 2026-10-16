# SMJ Profaith Printing Services – Company Website

A responsive, multi-page website for **SMJ Profaith Printing Services**, a local printing business that offers fast, reliable, and affordable printing solutions.

**Live site (GitHub Pages):** https://yourusername.github.io/SMJ_Profaith_Printing_Services

> Replace `yourusername` with your GitHub username after enabling GitHub Pages.

---

## Pages

| File          | Page                 | Contents                                                              |
| ------------- | -------------------- | --------------------------------------------------------------------- |
| `index.html`  | Home                 | Company introduction, services at a glance, why choose us, highlights |
| `about.html`  | About Us             | Company background, mission and vision, objectives                    |
| `services.html` | Products & Services | Printing products, service highlights, four-step order process        |
| `contact.html` | Contact Us          | Inquiry form, contact details, social media links, location map       |

## Features

- Responsive layout that works on desktop, tablet, and mobile
- Hamburger navigation menu on small screens
- Inquiry form with client-side validation (required fields, email format, Philippine mobile number format)
- Scroll-reveal animations (disabled automatically for users who prefer reduced motion)
- Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Embedded Google Map of the shop's location

## Design

- **Color scheme:** pink, white, and black, taken from the company logo
- **Typography:** Playfair Display and Times New Roman for headings; Roboto and Montserrat for navigation, labels, and buttons
- **Design principles:** contrast, repetition, alignment, and proximity

## Project Structure

```
SMJ_Profaith_Printing_Services/
├── index.html        Home page
├── about.html        About Us page
├── services.html     Products & Services page
├── contact.html      Contact Us page
├── css/
│   ├── base.css      Shared layout, typography, components, and responsive rules
│   ├── pages.css     Blog, FAQ, and shared page-specific components
│   ├── services.css  Products & Services page styling
│   └── home.css      Home page and price-list gallery styling
├── script.js         Main JavaScript (menu, animations, form validation)
├── assets/
│   ├── logo.png      Company logo
│   ├── products/     Product photos shown on the services page
│   └── service-rates/ Cropped price-list images shown on the home page
├── README.md         Project overview and instructions
└── .gitignore        Files Git should ignore
```

## Running Locally

1. Open the folder in **Visual Studio Code**.
2. Install the recommended extension **Live Server**.
3. Right-click `index.html` and choose **Open with Live Server**.

No build tools or installation are needed. The site is plain HTML, CSS, and JavaScript.

## Deployment (GitHub Pages)

1. Push the repository to GitHub (branch `main`).
2. Go to **Settings → Pages**.
3. Under **Source**, choose the `main` branch and the `/ (root)` folder, then click **Save**.
4. The site will be live at `https://yourusername.github.io/SMJ_Profaith_Printing_Services`.

## Tools Used

- HTML5
- CSS3 (custom properties, Flexbox, Grid)
- JavaScript (ES6)
- Git and GitHub
- Visual Studio Code

## Team

| Role               | Name                       |
| ------------------ | -------------------------- |
| Project Manager    | Jehaia Bless D. Seva       |
| Designer           | Jazmine B. Borja           |
| Content Writer     | Mark Neo D. Mendoza        |
| Developer          | Cecilio Emil J. Mendez     |
| Researcher         | John Paul A. Bañez         |

*BSIS – 3C, Dr. Mary Joy Daniel Viñas (Instructor)*

## Notes for Maintenance

- The inquiry form validates input in the browser only. To receive submissions by email, connect the form to a service such as Formspree or to a backend.
- Shared colors are defined as variables at the top of `style.css`, so a brand color can be changed in one place.

## License

Created for academic purposes. Add a `LICENSE` file if the project will be published under an open-source license.
