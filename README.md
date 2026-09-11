# Mine Barnsongkit — personal website

An academic and professional website for an MS Computer Science student at Columbia University, created using the [al-folio template](https://github.com/alshedivat/al-folio).

Website: https://supmine.github.io

## Edit the website

| Content                       | File                       |
| ----------------------------- | -------------------------- |
| Home and short bio            | \_pages/about.md           |
| Research & projects overview  | \_pages/projects.md        |
| Individual projects           | \_projects/\*.md           |
| CV data                       | assets/json/resume.json    |
| Original one-page résumé link | resume_url in \_config.yml |
| Social links                  | \_data/socials.yml         |
| Site settings                 | \_config.yml               |

Commit changes to main to rebuild and publish. The GitHub Actions workflow checks formatting, builds Jekyll, verifies internal links and CV content, and deploys through GitHub Pages. In repository Settings → Pages, the source should be GitHub Actions.

The website content is based on the supplied résumé. The original one-page résumé remains in [Google Docs](https://docs.google.com/document/d/19I9SDOuQlDn5wYvORsMJrvoxBJNgmaHI/edit). Link to that document; do not rewrite or generate a replacement résumé unless explicitly requested.

The About page uses al-folio's native about layout, Projects uses the original project-card includes, and the CV page uses the native al_folio_cv renderer. Follow AGENTS.md before editing. Personalization belongs in content and configuration; keep layouts, styling, and runtime behavior in the template's plugins.

To add a headshot, upload your photo to assets/img/ and configure the profile block in \_pages/about.md. To add publications later, populate \_bibliography/papers.bib and create a publications page. The existing demo publication, blog, and news content has been removed.

## Local development

Use Ruby 3.3 and Node.js 22, then run:

```sh
bundle install
npm ci
bundle exec jekyll serve
```

The site uses an empty baseurl because it is hosted at the root of supmine.github.io. No local overrides of al-folio runtime files are used. See docs/ for upstream customization and deployment guidance.

The al-folio template is distributed under the MIT license; see LICENSE.
