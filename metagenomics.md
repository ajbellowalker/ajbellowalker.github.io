
---
layout: default
title: Metagenomic Pipeline
---

# 🧪 Scalable Metagenomic Analysis Pipeline

👉 https://github.com/ajbellowalker/scalable-metagenomic-analysis-pipeline

---

## 🔬 Overview

This pipeline performs genome-resolved metagenomic analysis including:

- Taxonomic profiling (Kraken2)
- Assembly (MEGAHIT)
- Binning (MetaBAT2)
- MAG reconstruction
- Functional annotation

---

## 🔄 Workflow

<img src="figures/pipeline_diagram.png" class="pipeline">

---

## 📊 Example Outputs

<img src="figures/figure_1_taxa_barplot.png">

<img src="figures/figure_3_MAG_prevalence.png">

---

## ⚙️ Run Pipeline

```bash
nextflow run main.nf -profile conda

