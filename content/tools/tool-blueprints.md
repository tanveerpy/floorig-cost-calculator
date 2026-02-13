# Specialized Tool Descriptors & Logic Blueprints

This document defines the functional requirements, input variables, and logic for each "Spoke" calculator in the Hub-and-Spoke architecture.

## 1. Hardwood & Wood Tool
- **Primary Keyword**: `hardwood flooring cost calculator`
- **Logic Type**: Complex (Refinishing vs. New)
- **Inputs**:
    - **Square Footage**
    - **Service Type**: [New Installation, Refinishing, Sand & Stain]
    - **Hardwood Type**: [Solid Oak, Engineered Maple, Exotic Walnut, Bamboo]
    - **Finish**: [Polyurethane, Oil, Unfinished]
- **Calculated Variables**:
    - `Base Material Cost` (per species)
    - `Labor Rate` (Refinishing is ~50% cheaper than installation)
    - `Overhead/Waste` (10% standard)

## 2. Vinyl & LVP Tool
- **Primary Keyword**: `lvp flooring installation cost calculator`
- **Logic Type**: Moderate
- **Inputs**:
    - **Square Footage**
    - **Vinyl Format**: [Plank (LVP), Tile (LVT), Sheet]
    - **Installation Method**: [Click-Lock, Glue-Down, Loose Lay]
    - **Wear Layer**: [12 mil, 20 mil, 28 mil+]
- **Calculated Variables**:
    - `Material Grade Cost`
    - `Labor Premium` (Glue-down costs ~$1.50 extra per sq. ft.)

## 3. Laminate Tool
- **Primary Keyword**: `laminate flooring installation cost calculator`
- **Logic Type**: Standard
- **Inputs**:
    - **Square Footage**
    - **AC Rating**: [AC3 (Residential), AC4 (Commercial), AC5 (Heavy Duty)]
    - **Underlayment Included?**: [Yes, No]
    - **Plank Thickness**: [8mm, 10mm, 12mm]
- **Calculated Variables**:
    - `Material Cost`
    - `Underlayment Add-on`

## 4. Tile & Stone Tool
- **Primary Keyword**: `tile flooring installation cost calculator`
- **Logic Type**: High Complexity
- **Inputs**:
    - **Square Footage**
    - **Material**: [Ceramic, Porcelain, Marble, Slate]
    - **Pattern**: [Straight, Diagonal, Herringbone, Offset]
    - **Tile Size**: [Standard 12x12, Large Format, Mosaic]
- **Calculated Variables**:
    - `Material Cost` (Marble is 5x Ceramic)
    - `Labor Multiplier` (Diagonal/Herringbone adds 20-30% labor cost)

## 5. Epoxy & Garage Tool
- **Primary Keyword**: `epoxy flooring cost calculator`
- **Logic Type**: Process-Based
- **Inputs**:
    - **Square Footage**
    - **System Type**: [Solid Color, Decorative Flake, Metallic, Quartz]
    - **Conditon of Substrate**: [New Concrete, Cracked/Old, Painted]
- **Calculated Variables**:
    - `Prep Labor` (Cracked concrete requires grinding/patching)
    - `Material Volume` (Gallons required based on coat count)

---

## Technical/SEO Standard (per Tool)
Every tool page MUST include:
1.  **JSON-LD**: `SoftwareApplication` schema.
2.  **Breadcrumbs**: Home > Material > Calculator.
3.  **Dynamic H2s**: Using the primary keywords in the cluster.
