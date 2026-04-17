// API Client for Sareevia Backend

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';

// Health Check
export const checkHealth = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/health`);
    return await response.json();
  } catch (error) {
    console.error('Health check failed:', error);
    return { success: false, message: 'Backend not available' };
  }
};

// AI Routes - Saree Analysis
export const analyzeSaree = async (imageData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ai/analyze-saree`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ imageData })
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to analyze saree:', error);
    throw error;
  }
};

export const getAllSarees = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/ai/sarees`);
    return await response.json();
  } catch (error) {
    console.error('Failed to get sarees:', error);
    throw error;
  }
};

export const getSareeById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/ai/sarees/${id}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to get saree:', error);
    throw error;
  }
};

// Scanner Routes - Body Analysis & Recommendations
export const analyzeBody = async (bodyMetrics) => {
  try {
    const response = await fetch(`${API_BASE_URL}/scanner/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(bodyMetrics)
    });
    return await response.json();
  } catch (error) {
    console.error('Failed to analyze body:', error);
    throw error;
  }
};

export const getRecommendations = async (bodyType) => {
  try {
    const response = await fetch(`${API_BASE_URL}/scanner/recommendations/${bodyType}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to get recommendations:', error);
    throw error;
  }
};

export const getDrapingGuide = async (sareeType) => {
  try {
    const response = await fetch(`${API_BASE_URL}/scanner/draping-guide/${sareeType}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to get draping guide:', error);
    throw error;
  }
};

// Saree Routes - Catalog
export const getSareesCatalog = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/sarees`);
    return await response.json();
  } catch (error) {
    console.error('Failed to get saree catalog:', error);
    throw error;
  }
};

export const filterSarees = async (filters) => {
  try {
    const queryParams = new URLSearchParams();
    Object.keys(filters).forEach(key => {
      if (filters[key]) {
        queryParams.append(key, filters[key]);
      }
    });
    const response = await fetch(
      `${API_BASE_URL}/sarees/filter/search?${queryParams.toString()}`
    );
    return await response.json();
  } catch (error) {
    console.error('Failed to filter sarees:', error);
    throw error;
  }
};

// Helper function to convert file to base64
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};
