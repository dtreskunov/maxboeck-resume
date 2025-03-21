# Resume

An online résumé template. [Demo Site](https://dtreskunov.github.io/resume-template)

## Features

* Fully Customizable
* Semantic HTML
* Accessible (WCAG AA) 
* [h-resume](http://microformats.org/wiki/h-resume) Microformat
* Self-Contained (no external resources)
* Search Engine Optimized (meta, JSON-LD, etc...)
* Critical CSS Inlined
* Print Styles
* **NEW** PDF version is built automatically
* **NEW** Contact info encoded in QR code included in the print version
* **NEW** Fonts fetched and bundled from [Google Fonts](https://fonts.google.com/)
* **NEW** Email and phone are scrambled to protect against spam

## Getting Started

1. Fork this repository.
1. Edit `src/data/meta.json` to adjust `url` according to your GitHub username and the name of your forked repository.
1. After a minute or two, the site will be built automatically.
1. To enable GitHub Pages, go to the **Settings** tab, then **Pages**, then choose `gh-pages` where it says "Select a source below to enable GitHub Pages for this repository."
1. The site will be live at `<your-github-username>.github.io/<forked-repository-name>`

## Development

* Run `npm install` to install the necessary packages
* Run `npm start` for a development server and live reloading
* Run `npm run build` to generate a production build

## Customize your Résumé

To edit the content and design of your résumé, follow these steps:

### 1. Personal Details

Open `src/data/author.json` and edit the information describing yourself. The following properties are supported (optional properties can be removed from the JSON file):

<table>
    <thead>
        <tr>
            <th>Key</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>name</code></td>
            <td>your full name</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>occupation</code></td>
            <td>your job description</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>location</code></td>
            <td>your town/state</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>avatar</code></td>
            <td>the file name of your profile photo. Must be located in <code>src/assets/images/</code></td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>pronouns</code></td>
            <td>your preferred <a href="https://en.wikipedia.org/wiki/Preferred_gender_pronoun">gender pronouns</a></td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>email</code></td>
            <td>your email address</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>telephone</code></td>
            <td>your phone number</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>website</code></td>
            <td>your personal website</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>skills</code></td>
            <td>an array of strings describing your skillset</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>languages</code></td>
            <td>an array of objects describing your spoken languages; each object should include a <code>name</code> (e.g. "English") and <code>level</code> (e.g. "fluent") property</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>social</code></td>
            <td>an array of objects for each social profile you want to link; each object should include a <code>name</code> (e.g. "Github"), <code>user</code> (e.g. "@maxboeck") and <code>url</code> (e.g. "https://github.com/maxboeck") property</td>
            <td>optional</td>
        </tr>
    </tbody>
</table>

### 2. Introduction

Open `entries/content/introduction.md` and edit the text content of the file with your personal short introduction summary. Limit it to 2-3 sentences and convey your motivation. You can edit the title of the section here as well. 

### 3. Work Experience & Education

The entries for the sections "work experience" and "education" are stored as markdown files in `src/entries/work` and `src/entries/education`.

Delete the demo files in there and create your own. The text should describe your responsibilities, learnings or achievements. Include the following [frontmatter](https://www.11ty.dev/docs/data-frontmatter/) data:

<table>
    <thead>
        <tr>
            <th>Key</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>title</code></td>
            <td>the title of the entry. in "work experience", this sould be your role/position, in "education" this should be the degree/certification earned.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>start</code></td>
            <td>ISO timestamp of when you started this job or education.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>end</code></td>
            <td>ISO timestamp of when you ended this job or education. If not defined, that entry will say "- Present"</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>organization</code></td>
            <td>name of your employer (when "work") or school (when "education")</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>organizationUrl</code></td>
            <td>link to website of your employer (when "work") or school (when "education")</td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>location</code></td>
            <td>location of company or school</td>
            <td>optional</td>
        </tr>
    </tbody>
</table>

### 4. Github Repositories

If you want, you can include the five most starred repositories from your Github account. This will fetch the current data at build time, at most once a day. To do this, edit `src/data/repositories.js` and change the `YOUR_GITHUB_USERNAME` var to your Github username.

### 5. Custom Content

Edit `entries/content/custom.md` if you want to edit freeform content to the end of the CV. This could be a legal disclaimer or an additional section. Delete the file if you don't want this section to show up. 

To add another section, add another entry with `tags: custom` in the [frontmatter](https://www.11ty.dev/docs/data-frontmatter/) data.

### 6. Meta Data & Design

Open `src/data/meta.json` and replace the `url` with the URL of your hosted résumé. You can also customize the language and color scheme here.

Supported properties are:

<table>
    <thead>
        <tr>
            <th>Key</th>
            <th>Description</th>
            <th>Required</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>url</code></td>
            <td>the URL of your hosted résumé, e.g. <code>"https://my-resume.com/resume"</code>.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>lang</code></td>
            <td>the 2-digit language identifier of your résumé, e.g. "en", "de", etc.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>locale</code></td>
            <td>the locale code of your résumé, e.g. "en_US", "de_DE", etc.</td>
            <td>required</td>
        </tr>
        <tr>
            <td><code>colors.primary</code></td>
            <td>The HEX code of the primary brand color. defaults to blue <code>#005b96</code></td>
            <td>optional</td>
        </tr>
        <tr>
            <td><code>colors.secondary</code></td>
            <td>The HEX code of the secondary brand color. defaults to red <code>#fc6767</code></td>
            <td>optional</td>
        </tr>
    </tbody>
</table>

This template will create a PDF file by opening a virtual Chrome browser and using the "Print to PDF" feature.
To adjust printable features, such as orientation, column count, font size, etc. edit `src/assets/styles/utils/_variables.scss`.

### 7. Internationalization

There are a few hardcoded english strings used in the template, such as the section titles and some labels. If you want to change the default language from english to something else, you can translate these strings by changing the values in `data/strings.json`.

## Credits

Thanks to [Max Böck](https://github.com/maxboeck/resume) for creating this template.

Thanks to [Eric Bailey](https://ericwbailey.design/) for his post ["How to not make a résumé in React"](https://ericwbailey.design/writing/how-to-not-make-a-resume-in-react.html), which gave me the idea.

## Colophon

* Avatar image generated by GAN at [thispersondoesnotexist.com](https://www.thispersondoesnotexist.com/).
