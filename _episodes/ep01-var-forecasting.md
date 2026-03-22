---
layout: episode
title: VAR Forecasting
episode_number: 1
description: A hands-on implementation of the Vector Autoregression (VAR) framework for forecasting applications using R.
topic_tag: Time Series
language: R
language_version: "≥ 4.1.0"
status: replication-ready

# === PRESENTER ===
presenter_name: "Jamel Saadoui, PhD"
presenter_role: "# REPLACE: e.g. Professor of Economics / Researcher at XX"
presenter_affiliation: "# REPLACE: University or Institution name"
presenter_fields: "Applied Macroeconomics · Political Economics · International Economics"
presenter_photo: "/assets/img/presenters/ep01-jamel.jpg"
presenter_email: "# REPLACE: presenter@email.com"
presenter_linkedin: "https://www.linkedin.com/in/pr-jamel-saadaoui-7979461a5/"
presenter_scholar: "https://scholar.google.com/citations?user=DkhUQ-gAAAAJ&hl=en&oi=ao"
presenter_ssrn: "# REPLACE: https://ssrn.com/author=XXXXXXX"

# === VIDEO ===
video_url: "https://www.youtube.com/watch?v=SAfLK8Ji2ZM"
video_id: "SAfLK8Ji2ZM"

# === REPO ===
repo_url: "https://github.com/juan-damico/forecasting-economics/tree/main/EconLab-with-the-Experts/Episode-01-VAR-Forecasting"
repo_slug: "Episode-01-VAR-Forecasting"

# === MATH ===
show_math: true
math_content: |
  <p>A bivariate VAR(1) model is defined as:</p>
  $$Y_t = c + A_1 Y_{t-1} + \varepsilon_t$$
  <table class="math-table">
    <thead><tr><th>Symbol</th><th>Definition</th></tr></thead>
    <tbody>
      <tr><td>$Y_t \in \mathbb{R}^2$</td><td>Vector of endogenous variables at time $t$</td></tr>
      <tr><td>$c \in \mathbb{R}^2$</td><td>Intercept vector</td></tr>
      <tr><td>$A_1 \in \mathbb{R}^{2 \times 2}$</td><td>Coefficient matrix at lag 1</td></tr>
      <tr><td>$\varepsilon_t \sim \mathcal{N}(0, \Sigma)$</td><td>Vector of white noise innovations</td></tr>
    </tbody>
  </table>
  <p>For a general VAR($p$) specification:</p>
  $$Y_t = c + \sum_{k=1}^{p} A_k Y_{t-k} + \varepsilon_t$$
  <p>Stability requires that all eigenvalues of the companion matrix lie <strong>inside the unit circle</strong>.</p>

# === RESULTS ===
results_figure: "/EconLab-with-the-Experts/Episode-01-VAR-Forecasting/figures/actual_vs_fitted_foreign.png"
results_caption: "The figure compares in-sample fitted values against observed data. The model captures the main cyclical dynamics, with residuals consistent with the white noise assumption."

# === QUICK START ===
install_command: "Rscript code/install_packages.R"
run_command: "Rscript code/main.R"

# === REQUIREMENTS ===
install_packages: |
  install.packages(c("vars", "ggplot2", "tseries", "forecast", "dplyr"))
packages:
  - { name: "vars",     version: "≥ 1.5",  purpose: "VAR estimation and IRF" }
  - { name: "ggplot2",  version: "≥ 3.4",  purpose: "Visualization" }
  - { name: "tseries",  version: "≥ 0.10", purpose: "Unit root tests" }
  - { name: "forecast", version: "≥ 8.21", purpose: "Forecasting utilities" }
  - { name: "dplyr",    version: "≥ 1.1",  purpose: "Data manipulation" }

# === REPLICATION ===
replication_code: |
  source("code/install_packages.R")   # Install dependencies
  source("code/main.R")               # Run full analysis
runtime: "< 1 minute"

# === CITATION ===
bibtex: |
  @misc{saadoui2025var,
    author    = {Saadoui, Jamel},
    title     = {VAR Forecasting --- {EconLab} Tutorial Series, Episode 01},
    year      = {2025},
    publisher = {Forecasting Economics --- EconLab with Experts},
    url       = {https://github.com/juan-damico/forecasting-economics/tree/main/EconLab-with-the-Experts/Episode-01-VAR-Forecasting}
  }
---

This tutorial introduces the **Vector Autoregression (VAR)** framework and provides a hands-on implementation for forecasting applications. We estimate a bivariate VAR(1) model, assess model fit, and generate out-of-sample forecasts with impulse response analysis.

**What you will learn:**
- How to specify and estimate a VAR model
- How to interpret coefficient matrices and lag structure
- How to produce and visualize forecasts and impulse response functions
