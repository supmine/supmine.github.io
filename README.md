# Supanart “Mine” Barnsongkit — personal website

An academic and professional website for an MS Computer Science student at Columbia University, created using the [al-folio template](https://github.com/alshedivat/al-folio).

Website: https://supmine.github.io

Full name: Supanart Barnsongkit. Preferred name: Mine (nickname).

## Edit the website

| Content                       | File                                                |
| ----------------------------- | --------------------------------------------------- |
| Home and short bio            | \_pages/about.md                                    |
| Research & projects overview  | \_pages/projects.md                                 |
| Individual projects           | \_projects/\*.md                                    |
| Experience                    | \_pages/experience.md                               |
| Repositories                  | \_pages/repositories.md and \_data/repositories.yml |
| Profile photo                 | assets/img/mine_headshot_3_4.jpg                    |
| CV PDF asset                  | assets/pdf/supanart_resume_2026_columbia_draft_rev3.pdf |
| Original one-page résumé link | resume_url in \_config.yml                          |
| Social links                  | \_data/socials.yml                                  |
| Site settings                 | \_config.yml                                        |

Commit changes to main to rebuild and publish. The GitHub Actions workflow checks formatting, builds Jekyll, verifies internal links and CV content, and deploys through GitHub Pages. In repository Settings → Pages, the source should be GitHub Actions.

The website content is based on the supplied résumé. The CV page uses the PDF asset at [assets/pdf/supanart_resume_2026_columbia_draft_rev3.pdf](assets/pdf/supanart_resume_2026_columbia_draft_rev3.pdf), and the same file is linked via `resume_url` in `_config.yml`.

The About page uses al-folio's native about layout, Projects uses the original project-card includes, and the CV page uses the native al_folio_cv renderer. Follow AGENTS.md before editing. Personalization belongs in content and configuration; keep layouts, styling, and runtime behavior in the template's plugins.

The navigation order is About, Experience, Research & Projects, CV, Repositories. The About page uses the supplied headshot at assets/img/mine_headshot_3_4.jpg. Edit the profile.more_info block in \_pages/about.md to update the address section. To add publications later, populate \_bibliography/papers.bib and create a publications page. The existing demo publication, blog, and news content has been removed.

## Local development

Use Ruby 3.3 and Node.js 22, then run:

```sh
bundle install
npm ci
bundle exec jekyll serve
```

The site uses an empty baseurl because it is hosted at the root of supmine.github.io. No local overrides of al-folio runtime files are used. See docs/ for upstream customization and deployment guidance.

The al-folio template is distributed under the MIT license; see LICENSE.
