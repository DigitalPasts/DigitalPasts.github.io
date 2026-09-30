# Digital Pasts Lab website

The website of the Digital Pasts Lab at Ariel University, built with Jekyll and published by GitHub Pages at <https://digitalpasts.github.io>.

## Updating content

Almost everything on the site comes from a few plain text files. Edit them on GitHub (pencil icon) and the site rebuilds within a minute or two. Each file starts with a comment listing its fields.

| What | File |
| --- | --- |
| People and alumni | `_data/people.yml` (photos go in `images/people/`, square, about 400×400) |
| Publications and press | `_data/publications.yml` |
| Talks and conference papers | `_data/talks.yml` |
| News items on the homepage | `_data/news.yml` |
| Workshops and conferences we organise | `_data/events.yml` |
| Tools, datasets, code, teaching resources | `_data/tools.yml` |
| Projects | one Markdown file per project in `_projects/` (the file name is its web address, e.g. `_projects/mapa.md` → `/research/mapa/`) |
| About page | `about/index.md` |
| Lab name, tagline, email, menu | `_config.yml` |

Tips:

- Put dates in quotes: `date: "2025-11"` or `date: "2025-11-14"`. Talks dated after the last site build are shown as *Upcoming*.
- In `citation` and `text` fields you can use Markdown: `_Journal Title_` for italics, `[text](https://…)` for links.
- Link people and publications to projects with the project's file name, e.g. `projects: [ben, mapa]`. The project page then lists its team and publications automatically.
- A project appears on the homepage when it has `featured: true`; `order` sets its position.

## Structure

- `_layouts/` page templates (`default` → `page`, `home`, `project`, `redirect`)
- `_includes/` header, footer and the repeated pieces (project card, person, publication, dated item)
- `assets/css/main.css` the only stylesheet; colours and fonts are variables at the top
- `docs/*.html` redirects from the old page addresses

## Previewing locally

```sh
gem install jekyll
jekyll serve
```

Then open <http://localhost:4000>.
