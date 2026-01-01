
import React from 'react';
import { Project, Experience, SkillCategory } from './types';
import { 
  Globe, 
  Layers, 
  Activity, 
  Map as MapIcon, 
  Cpu, 
  LineChart, 
  Wind, 
  Droplets,
  Satellite,
  Database
} from 'lucide-react';

export const GITHUB_URL = "https://github.com/ArhamOrioner";
export const LINKEDIN_URL = "https://www.linkedin.com/in/arham-ansari-b70771342/";
export const EMAIL = "arhamaziz81@gmail.com";

/**
 * Using the GitHub profile proxy is the most reliable way to fetch a profile image
 * across all hosting environments and avoids raw-content CORS issues.
 */
export const PROFILE_PIC_URL = "https://github.com/ArhamOrioner.png"; 

export const PROJECTS: Project[] = [
  {
    title: "GeoRiskAI",
    period: "Apr 2025 - Present",
    description: "A near real-time global flood prediction system using NASA satellite observations (IMERG, SMAP, GLO-30) and ensemble ML to produce 24-hour risk forecasts in minutes.",
    tags: ["Python", "CatBoost", "LightGBM", "XGBoost", "Google Earth Engine"],
    metrics: ["AUC: 0.86", "17k+ Validated Events", "24hr Lead Time"],
  },
  {
    title: "Heat-stress / WBGT Workflow",
    period: "Oct 2025 - Dec 2025",
    description: "Developed climate data pipelines for World Bank project workstreams, processing CMIP6 NetCDF files to calculate exceedance hours and population exposure.",
    tags: ["xarray", "NetCDF", "Python", "Climate Modeling"],
  },
  {
    title: "Urban Heat & Land Indicators",
    period: "Jan 2025 - Apr 2025",
    description: "Modular framework for detecting and predicting Urban Heat Islands (UHIs) using planetary-scale GEE data and clustering methods.",
    tags: ["Scikit-learn", "GeoPandas", "SHAP", "GEE API"],
  }
];

export const EXPERIENCE: Experience[] = [
  {
    role: "Geo AI Engineer (Freelance)",
    company: "Climate Risk Pathways Ltd",
    period: "Oct 2025 - Present",
    location: "London / Remote",
    description: [
      "Built CMIP6 WBGT exposure workflows using xarray and population grids.",
      "Automated NetCDF ingestion and exceedance calculations for 2015–2100 time-series.",
      "Integrated Google Earth Engine with Python for rapid satellite-based analysis."
    ],
    skills: ["Python", "xarray", "Climate Risk", "GEE"]
  },
  {
    role: "AI-GIS Project Developer",
    company: "Independent / Freelance",
    period: "Apr 2025 - Present",
    location: "New Delhi, India",
    description: [
      "Engineered GeoRiskAI, a near real-time flood forecasting architecture.",
      "Validated performance across 17,000+ events global dataset (2016–2025).",
      "Created automated visualization layers in .html formats with built-in explainability."
    ],
    skills: ["GeoAI", "Satellite ML", "Early Warning Systems"]
  },
  {
    role: "GeoAI Engineer",
    company: "Climate Risk Pathways Ltd",
    period: "Jan 2025 - Apr 2025",
    location: "Delhi, India",
    description: [
      "Detected and visualized urban heat using MODIS LST, NDVI, and NDBI data.",
      "Applied clustering and classification methods for urban climate indicators.",
      "Optimized async processing for large geospatial datasets."
    ],
    skills: ["Satellite Analysis", "Clustering", "Python"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "GeoAI & Machine Learning",
    skills: ["CatBoost", "LightGBM", "XGBoost", "Scikit-learn", "SHAP", "Feature Engineering"]
  },
  {
    category: "Geospatial Stack",
    skills: ["Google Earth Engine", "GeoPandas", "xarray", "Rasterio", "NetCDF Processing", "QGIS"]
  },
  {
    category: "Satellite Data",
    skills: ["MODIS", "IMERG (Rainfall)", "SMAP (Soil Moisture)", "GLO-30 (Terrain)", "NASA EarthData"]
  },
  {
    category: "Programming & Data",
    skills: ["Python (Async/Parallel)", "SQL", "Git/GitHub", "Data Engineering Pipelines", "Research & Innovation"]
  }
];

export const ICON_MAP = {
  GeoAI: <Cpu className="w-5 h-5 text-[#00d9ff]" />,
  Satellite: <Satellite className="w-5 h-5 text-[#0066ff]" />,
  EarlyWarning: <Activity className="w-5 h-5 text-[#00ff88]" />,
  Mapping: <MapIcon className="w-5 h-5 text-[#00ff88]" />,
  Climate: <Wind className="w-5 h-5 text-[#00d9ff]" />,
  Data: <Database className="w-5 h-5 text-[#00d9ff]" />,
  Flood: <Droplets className="w-5 h-5 text-[#0066ff]" />,
  Risk: <LineChart className="w-5 h-5 text-[#ff4b4b]" />
};
