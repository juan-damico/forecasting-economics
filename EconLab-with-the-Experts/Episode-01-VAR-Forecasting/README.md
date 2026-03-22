# Episode 01 — VAR Forecasting

## Presenter

<div align="center" style="background:#0d0f11;padding:32px;font-family:'IBM Plex Sans',sans-serif;max-width:600px;margin:0 auto">

  <div style="font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.2em;color:#4a7c59;text-transform:uppercase;margin-bottom:20px;border-bottom:1px solid #4a7c5930;padding-bottom:10px">
    presenter
  </div>

  <table style="border:none;background:none;border-collapse:collapse">
  <tr style="background:none">
  <td style="border:none;padding:0 24px 0 0;vertical-align:top;width:100px">
    <div style="position:relative;display:inline-block">
      <img src="presenter/jamel.jpg" width="88" height="88" style="display:block;object-fit:cover;filter:grayscale(20%) contrast(1.05)">
      <div style="position:absolute;inset:-3px;border:1px solid #4a7c5960;pointer-events:none"></div>
    </div>
  </td>
  <td style="border:none;padding:0;vertical-align:top">
    <div style="font-family:'IBM Plex Sans',sans-serif;font-size:17px;font-weight:500;color:#e8e6e0;margin:0 0 2px">Jamel Saadoui</div>
    <div style="font-family:'IBM Plex Mono',monospace;font-size:11px;color:#4a7c59;margin:0 0 8px">PhD · Applied Economics</div>
    <div style="font-size:13px;color:#6b7280;font-weight:300;margin:0 0 14px">University X &nbsp;·&nbsp; EconLab</div>
    <div style="display:flex;gap:8px;flex-wrap:wrap">
      <a href="mailto:email@domain.com" style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:#9ca3af;background:#ffffff08;border:1px solid #ffffff14;padding:4px 10px;text-decoration:none;letter-spacing:0.06em">✦ email</a>
      <a href="https://linkedin.com" style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:#9ca3af;background:#ffffff08;border:1px solid #ffffff14;padding:4px 10px;text-decoration:none;letter-spacing:0.06em">✦ linkedin</a>
      <a href="https://scholar.google.com" style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:#9ca3af;background:#ffffff08;border:1px solid #ffffff14;padding:4px 10px;text-decoration:none;letter-spacing:0.06em">✦ scholar</a>
      <a href="https://ssrn.com" style="font-family:'IBM Plex Mono',monospace;font-size:10.5px;color:#9ca3af;background:#ffffff08;border:1px solid #ffffff14;padding:4px 10px;text-decoration:none;letter-spacing:0.06em">✦ ssrn</a>
    </div>
  </td>
  </tr>
  </table>

  <div style="margin-top:18px;padding-top:14px;border-top:1px solid #ffffff0c;display:flex;gap:24px;font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:0.08em;color:#4b5563">
    <div>FIELDS<br><span style="color:#6b7280;font-size:11px">Macro · Finance</span></div>
    <div>STATUS<br><span style="color:#6b7280;font-size:11px">PhD Candidate</span></div>
    <div>YEAR<br><span style="color:#6b7280;font-size:11px">2025</span></div>
  </div>

</div>

## Overview

This tutorial introduces a bivariate VAR model and demonstrates how to implement and interpret it for forecasting applications.

---
## Video Tutorial

[![Watch the tutorial](https://img.youtube.com/vi/SAfLK8Ji2ZM/0.jpg)](https://www.youtube.com/watch?v=SAfLK8Ji2ZM)
---

## Mathematical Representation

Consider a bivariate VAR(1) model:

$$
Y_t = A Y_{t-1} + \varepsilon_t
$$

where:

-  $Y_t$ is a vector of endogenous variables  
- $A$ is the coefficient matrix  
- $\varepsilon_t$ is a vector of error terms  

This framework captures the dynamic relationships between variables over time.

---

## Results

Below is an example of the model output:

![Impulse Response Function](figures/actual_vs_fitted_foreign.png)

The figure illustrates the........

---

## Quick Start

1. Go to the `code/` folder  
2. Run the main script  
3. Check the results in `figures/`

---

## Repository Structure

- `code/` → replication scripts  
- `data/` → dataset  
- `figures/` → results  
- `slides/` → presentation  
- `paper/` → references  

---

## Requirements

- R / Python / Stata  
- Required packages (list here)

---

## Replication

Run the main script:
