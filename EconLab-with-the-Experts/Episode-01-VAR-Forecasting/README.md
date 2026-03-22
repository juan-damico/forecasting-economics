# EconLab Tutorial Series
## Episode 01 — VAR Forecasting

![Language](https://img.shields.io/badge/R-4.3-276DC3?style=flat-square&logo=r&logoColor=white)
![Status](https://img.shields.io/badge/status-replication--ready-4a7c59?style=flat-square)
![Series](https://img.shields.io/badge/EconLab-Episode%2001-1a1a2e?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-gray?style=flat-square)

---

## Presenter

<img src="presenter/jamel.jpg" width="90" align="left" style="margin-right:16px">

**Jamel Saadoui, PhD** · University X  
*Applied Economics · EconLab*  
Fields: Macroeconomics · International Finance · Forecasting

📧 [email@domain.com](mailto:email@domain.com) &nbsp;·&nbsp;
🔗 [LinkedIn](https://linkedin.com) &nbsp;·&nbsp;
📄 [Google Scholar](https://scholar.google.com) &nbsp;·&nbsp;
📑 [SSRN](https://ssrn.com)

<br clear="left">

---

## Overview

This tutorial introduces the **Vector Autoregression (VAR)** framework and provides a hands-on implementation for forecasting applications. We estimate a bivariate VAR(1) model, assess model fit, and generate out-of-sample forecasts with impulse response analysis.

**What you will learn:**
- How to specify and estimate a VAR model
- How to interpret coefficient matrices and lag structure
- How to produce and visualize forecasts and impulse response functions

---

## Video Tutorial

[![Watch the tutorial](https://img.youtube.com/vi/SAfLK8Ji2ZM/maxresdefault.jpg)](https://www.youtube.com/watch?v=SAfLK8Ji2ZM)

> *Click the thumbnail to watch on YouTube.*

---

## Mathematical Representation

A bivariate VAR(1) model is defined as:

$$
Y_t = c + A_1 Y_{t-1} + \varepsilon_t
$$

where:

| Symbol | Definition |
|--------|-----------|
| $Y_t \in \mathbb{R}^2$ | Vector of endogenous variables at time $t$ |
| $c \in \mathbb{R}^2$ | Intercept vector |
| $A_1 \in \mathbb{R}^{2 \times 2}$ | Coefficient matrix at lag 1 |
| $\varepsilon_t \sim \mathcal{N}(0, \Sigma)$ | Vector of white noise innovations |

For a general VAR($p$) specification:

$$
Y_t = c + \sum_{k=1}^{p} A_k Y_{t-k} + \varepsilon_t
$$

Stability requires that all eigenvalues of the companion matrix lie **inside the unit circle**.

---

## Results

![Actual vs Fitted](figures/actual_vs_fitted_foreign.png)

The figure compares in-sample fitted values against observed data. The model captures the main cyclical dynamics, with residuals consistent with the white noise assumption.

---

## Quick Start

```bash
# 1. Clone the repository
git clone https://github.com/your-org/econlab-ep01-var.git
cd econlab-ep01-var

# 2. Install required packages (R)
Rscript code/install_packages.R

# 3. Run the main script
Rscript code/main.R

# 4. Outputs will appear in figures/
```

---

## Repository Structure

```
econlab-ep01-var/
├── code/
│   ├── main.R              # Main replication script
│   ├── var_estimation.R    # VAR estimation functions
│   └── install_packages.R  # Package setup
├── data/
│   └── dataset.csv         # Raw dataset
├── figures/
│   └── actual_vs_fitted_foreign.png
├── slides/
│   └── ep01_var_forecasting.pdf
├── paper/
│   └── references.bib
└── README.md
```

---

## Requirements

**R (≥ 4.1.0)**

```r
install.packages(c("vars", "ggplot2", "tseries", "forecast", "dplyr"))
```

| Package | Version | Purpose |
|---------|---------|---------|
| `vars` | ≥ 1.5 | VAR estimation and IRF |
| `ggplot2` | ≥ 3.4 | Visualization |
| `tseries` | ≥ 0.10 | Unit root tests |
| `forecast` | ≥ 8.21 | Forecasting utilities |
| `dplyr` | ≥ 1.1 | Data manipulation |

---

## Replication

All results in this tutorial are fully replicable. Run the scripts in the following order:

```r
source("code/install_packages.R")   # Install dependencies
source("code/var_estimation.R")     # Load estimation functions
source("code/main.R")               # Run full analysis
```

Expected runtime: < 1 minute on a standard laptop.

---

## Citation

If you use this material in your research or teaching, please cite:

```bibtex
@misc{saadoui2025var,
  author    = {Saadoui, Jamel},
  title     = {VAR Forecasting — {EconLab} Tutorial Series, Episode 01},
  year      = {2025},
  publisher = {GitHub},
  url       = {https://github.com/your-org/econlab-ep01-var}
}
```

---

## About EconLab

**EconLab** is a tutorial series where economists and practitioners share hands-on applied economics techniques. Each episode covers a specific method, implemented end-to-end with real data and replicable code.

| Episode | Topic | Presenter |
|---------|-------|-----------|
| 01 | VAR Forecasting | Jamel Saadoui |
| 02 | *Coming soon* | — |
| 03 | *Coming soon* | — |

→ Follow the series: [GitHub Organization](https://github.com) &nbsp;·&nbsp; [YouTube Playlist](https://youtube.com)

---

## License

This repository is released under the [MIT License](LICENSE). You are free to use, adapt, and share this material with attribution.

---

<sub>EconLab · Applied Economics Tutorial Series · 2025</sub>
