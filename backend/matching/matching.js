function getBudgetRange(budget) {
  if (budget === 'low') return [0, 1200];
  if (budget === 'medium') return [1200, 2000];
  if (budget === 'high') return [2000, Infinity];
  return [0, Infinity];
}
function calculateBudgetScore(rent, budget) {
  const [min, max] = getBudgetRange(budget);
  if (rent >= min && rent <= max) return 1.0;
  if (rent < min) return Math.max(0.5, 1 - (min - rent) / min);
  if (max === Infinity) return Math.max(0, 1 - (rent - 2000) / 2000);
  return Math.max(0, 1 - (rent - max) / max);
}
function normalizeScore(score, maxValue = 5) {
  return Math.min(score / maxValue, 1);
}
function calculateSafetyScore(safety, importance) {
  return normalizeScore(safety) * (importance / 5.0);
}
function calculateWalkabilityScore(walk, importance) {
  return normalizeScore(walk) * (importance / 5.0);
}
function calculateFamilyScore(fam, wants) {
  if (wants) return normalizeScore(fam) * 0.8;
  return 0.5;
}
function calculateQuietScore(noise, wants) {
  if (wants) return ((5 - noise) / 5) * 0.7;
  return 0.5;
}
function generateMatchReasons(n, p, s) {
  const reasons = [];
  if (s.budget > 0.8) reasons.push('Great budget fit');
  else if (s.budget > 0.6) reasons.push('Good value for money');
  if (s.safety > 0.7 && p.safetyImportance >= 4) reasons.push('Excellent safety rating');
  else if (s.safety > 0.5 && p.safetyImportance >= 3) reasons.push('Good safety record');
  if (s.walkability > 0.7 && p.walkabilityImportance >= 4) reasons.push('Highly walkable');
  else if (s.walkability > 0.5 && p.walkabilityImportance >= 3) reasons.push('Good walkability');
  if (p.familyFriendly && n.family_friendly > 4.0) reasons.push('Very family-friendly');
  else if (p.familyFriendly && n.family_friendly > 3.5) reasons.push('Family-friendly amenities');
  if (p.quietEnvironment && n.noise_level < 2.5) reasons.push('Very peaceful environment');
  else if (p.quietEnvironment && n.noise_level < 3.5) reasons.push('Quiet neighborhood');
  return reasons;
}
function calculateNeighborhoodMatches(neighborhoods, preferences) {
  const matches = neighborhoods.map((n) => {
    const budget = calculateBudgetScore(n.avg_rent, preferences.budget);
    const safety = calculateSafetyScore(n.safety_score, preferences.safetyImportance);
    const walkability = calculateWalkabilityScore(n.walkability, preferences.walkabilityImportance);
    const family = calculateFamilyScore(n.family_friendly, preferences.familyFriendly);
    const quiet = calculateQuietScore(n.noise_level, preferences.quietEnvironment);
    const componentScores = { budget, safety, walkability, family, quiet };
    const total = budget * 0.3 + safety * 0.25 + walkability * 0.2 + family * 0.15 + quiet * 0.1;
    const matchScore = Math.round(total * 100);
    const matchReasons = generateMatchReasons(n, preferences, componentScores);
    return {
      id: n.id,
      name: n.name,
      description: n.description,
      avgRent: n.avg_rent,
      safetyScore: n.safety_score,
      walkabilityScore: n.walkability,
      familyFriendlyScore: n.family_friendly,
      noiseLevel: n.noise_level,
      highlights: typeof n.highlights === 'string' ? n.highlights.split(';') : n.highlights,
      matchScore,
      matchReasons,
      componentScores: {
        budget: Math.round(budget * 100),
        safety: Math.round(safety * 100),
        walkability: Math.round(walkability * 100),
        family: Math.round(family * 100),
        quiet: Math.round(quiet * 100),
      },
    };
  });
  matches.sort((a, b) => b.matchScore - a.matchScore);
  return matches.slice(0, 5);
}

module.exports = { calculateNeighborhoodMatches }; 