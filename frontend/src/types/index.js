
const userPreferences = {
    budget: 'medium', // 'low' | 'medium' | 'high'
    safetyImportance: 7,
    walkabilityImportance: 8,
    familyFriendly: true,
    quietEnvironment: false
  };
  
  const neighborhood = {
    id: 'abc123',
    name: 'Greenview',
    avgRent: 1200,
    safetyScore: 8.5,
    walkabilityScore: 7.8,
    familyFriendlyScore: 9.0,
    noiseLevel: 3,
    description: 'A calm, family-friendly area.',
    highlights: ['parks', 'good schools', 'low crime']
  };
  

  const neighborhoodMatch = {
    ...neighborhood,
    matchScore: 87,
    matchReasons: ['High safety', 'Low noise', 'Affordable rent']
  };