# Episode 01 — VAR Forecasting

## Presenter

<table>
<tr>
<td width="25%" align="center">
  <img src="presenter/jamel.jpg" width="120" style="border-radius:50%">
</td>
<td>
  <strong>Jamel Saadoui, PhD</strong><br>
  University X<br>
  📧 <a href="mailto:email@domain.com">email@domain.com</a><br>
  🔗 <a href="https://linkedin.com">LinkedIn</a>
</td>
</tr>
</table>

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
