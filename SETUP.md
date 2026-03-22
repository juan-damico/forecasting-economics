# Forecasting Economics — GitHub Pages Site

This folder contains the GitHub Pages website for the `forecasting-economics` repository.

## Setup (one time)

1. Copy everything in this folder to the root of your `forecasting-economics` repo (or to a `/docs` folder)
2. Go to **Settings → Pages → Source** → select `main` branch, root (or `/docs`)
3. Your site goes live at `https://juan-damico.github.io/forecasting-economics`

## Folder Structure

```
/
├── _config.yml              # Site settings — edit your links here
├── _layouts/
│   ├── default.html         # Base layout (nav + footer)
│   └── episode.html         # Episode page layout (reusable)
├── _includes/
│   ├── nav.html             # Navigation bar
│   └── footer.html          # Footer
├── _episodes/
│   ├── ep01-var-forecasting.md     # Episode 01 content
│   └── _TEMPLATE-new-episode.md   # Copy this for every new episode
├── assets/
│   ├── css/main.css         # All styles
│   ├── js/main.js           # Mobile nav
│   └── img/presenters/      # Put presenter photos here
├── econlab/
│   └── index.html           # EconLab series page
└── index.html               # Homepage
```

## Adding a New Episode

1. Copy `_episodes/_TEMPLATE-new-episode.md` → rename to `ep02-your-topic.md`
2. Fill in all `# REPLACE:` placeholders in the front matter
3. Add the presenter photo to `assets/img/presenters/`
4. Write the episode overview in the body (below the `---`)
5. Push to GitHub — the episode page auto-generates and appears in the episode index

## Updating `_config.yml`

All your links (YouTube, Udemy, Store, etc.) are in `_config.yml` under `social:`.
Edit them once and they update everywhere on the site.

## Custom Domain (optional)

To use `econlab.forecastingeconomics.com`:
1. Add a `CNAME` file to the root with: `econlab.forecastingeconomics.com`
2. Add a CNAME DNS record at your domain registrar pointing to `juan-damico.github.io`
3. Enable in GitHub Pages settings
