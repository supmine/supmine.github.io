# Mine Barnsongkit — personal website

An academic and professional website for an MS Computer Science student at Columbia University, created using the [al-folio template](https://github.com/alshedivat/al-folio).

Website: https://supmine.github.io

## Edit the website

| Content                      | File                                   |
| ---------------------------- | -------------------------------------- |
| Home and short bio           | \_pages/about.md                       |
| Research & projects overview | \_pages/projects.md                    |
| Individual projects          | \_projects/\*.md                       |
| Work experience              | \_pages/experience.md                  |
| CV data                      | assets/json/resume.json                |
| Downloadable one-page résumé | assets/pdf/mine-barnsongkit-resume.pdf |
| Social links                 | \_data/socials.yml                     |
| Site settings                | \_config.yml                           |

Commit changes to main to rebuild and publish. The GitHub Actions workflow checks formatting, builds Jekyll, verifies internal links and CV content, and deploys through GitHub Pages. In repository Settings → Pages, the source should be GitHub Actions.

The content is based on the supplied September 2026 résumé. Reported project metrics are scoped to their original project evaluations. No publications, faculty affiliations, or work-authorization claims have been added. The public résumé uses Columbia email, GitHub, and LinkedIn as contact methods.

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
