```mermaid
flowchart LR
    A[FASTQ Reads] --> B[Kraken2 Taxonomic Profiling]
    A --> C[MEGAHIT Assembly]
    C --> D[MetaBAT2 Binning]
    D --> E[CheckM2 Quality Assessment]
    E --> F[GTDB-Tk Taxonomy]
    F --> G[Functional Annotation]
    G --> H[MultiQC Report]
    H --> I[Figures & Outputs]
