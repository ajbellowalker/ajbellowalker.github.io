# Amplicon Analysis Pipeline (QIIME2 + R)

## Overview
This repository contains a 16S rRNA amplicon sequencing analysis workflow using QIIME2 for sequence processing and R for statistical analysis. The pipeline was applied to rumen epimural microbiome samples and includes diversity analysis, taxonomic profiling, and differential abundance testing.

## Key Features
- Data import and preprocessing
- Denoising using DADA2
- Feature table construction
- Phylogenetic tree building
- Taxonomic classification using SILVA
- Alpha and beta diversity analysis
- PERMANOVA statistical testing
- NMDS ordination
- Differential abundance analysis using DESeq2
- Phyloseq-based microbiome analysis

## Tech Stack
- QIIME2
- DADA2
- SILVA database
- R (phyloseq, DESeq2, vegan, ggplot2)

## Repository Structure
├── scripts/  
├── r/  
├── docs/  
├── metadata/  
├── examples/  
└── assets/  

## Pipeline Workflow

### 1. Environment Setup
```bash
conda env create -n qiime2-amplicon \
--file https://data.qiime2.org/distro/amplicon/qiime2-amplicon-2024.10-py310-osx-conda.yml

conda activate qiime2-amplicon
```

### 2. Data Import
```bash
qiime tools import \
--type 'SampleData[PairedEndSequencesWithQuality]' \
--input-path manifest.tsv \
--output-path demux.qza \
--input-format PairedEndFastqManifestPhred33V2
```

### 3. Denoising (DADA2)
```bash
qiime dada2 denoise-paired \
--i-demultiplexed-seqs demux.qza \
--p-trunc-len-f 240 \
--p-trunc-len-r 220 \
--o-table table.qza \
--o-representative-sequences rep-seqs.qza \
--o-denoising-stats stats.qza
```

### 4. Feature Table Analysis
```bash
qiime feature-table summarize \
--i-table table.qza \
--o-visualization table.qzv
```

### 5. Phylogenetic Tree
```bash
qiime phylogeny align-to-tree-mafft-fasttree \
--i-sequences rep-seqs.qza \
--o-rooted-tree rooted-tree.qza
```

### 6. Taxonomy Assignment
```bash
qiime feature-classifier classify-sklearn \
--i-classifier silva_classifier.qza \
--i-reads rep-seqs.qza \
--o-classification taxonomy.qza
```

### 7. Diversity Analysis
```bash
qiime diversity core-metrics-phylogenetic \
--i-phylogeny rooted-tree.qza \
--i-table table.qza \
--p-sampling-depth 18000 \
--m-metadata-file metadata.tsv
```

### 8. Statistical Analysis (R)
Rscript r/statistical_analysis.R

Includes:
-	PERMANOVA (adonis2) 
-	Beta dispersion analysis 
-	NMDS ordination 
-	Differential abundance (DESeq2) 
-	Alpha diversity modelling 
-	Taxonomic enrichment analysis

## Key Outputs
-	ASV table 
-	Taxonomy assignments 
-	Diversity metrics 
-	Ordination plots (NMDS) 
-	Differential abundance results 
-	Publication-ready figures

## Reproducibility
-	Fully script-based workflow 
-	Standard QIIME2 pipeline 
-	Reproducible statistical analysis in R

## Notes
-	Raw FASTQ files are not included 
-	Metadata format is provided as example 
-	File paths adapted for portability

## Author
Ayemere J. Bellowalker  
PhD Researcher – Microbial Genomics & Bioinformatics
