# Episode 01 — VAR Forecasting

## Presenter

<p align="center">
  <img src="presenter/jamel.jpg" width="150">
</p>

| Field        | Information |
|-------------|------------|
| Name        | Jamel Saadoui, PhD |
| Affiliation | University X |
| Email       | [email@domain.com](mailto:email@domain.com) |
| LinkedIn    | [Profile](https://linkedin.com) |

---

## Overview

This tutorial introduces a bivariate VAR model and demonstrates how to implement and interpret it for forecasting applications.

---
## Video Tutorial

[![Watch the tutorial](https://img.youtube.com/vi/dQw4w9WgXcQ/0.jpg)](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

## Mathematical Representation

Consider a bivariate VAR(1) model:

$$
Y_t = A Y_{t-1} + \varepsilon_t
$$

where:

- \( Y_t \) is a vector of endogenous variables  
- \( A \) is the coefficient matrix  
- \( \varepsilon_t \) is a vector of error terms  

This framework captures the dynamic relationships between variables over time.

---

## Results

Below is an example of the model output:

![Impulse Response Function](figures/irf.png)

The figure illustrates the response of one variable to a shock in another, highlighting the dynamic interactions captured by the model.

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
