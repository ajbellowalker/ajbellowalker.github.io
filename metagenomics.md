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

![Pipeline](figures/pipeline_diagram.png)

---

## 📊 Example Outputs

![Taxa](https://raw.githubusercontent.com/ajbellowalker/scalable-metagenomic-analysis-pipeline/main/figures/figure_1_taxa_barplot.png)

![MAG](https://raw.githubusercontent.com/ajbellowalker/scalable-metagenomic-analysis-pipeline/main/figures/figure_3_MAG_prevalence.png)

---

## ⚙️ Run Pipeline

```bash
nextflow run main.nf -profile conda
```
