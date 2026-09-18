import { useState, useEffect } from 'react';
import { RecentConversion } from '../types';

const FAVORITES_KEY = 'ec_favorites';
const RECENTS_KEY = 'ec_recent_conversions';

export function useFavoritesAndRecents() {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(FAVORITES_KEY);
      return saved ? JSON.parse(saved) : ['/kg-to-lbs', '/cm-to-inches', '/celsius-to-fahrenheit', '/calculators/percentage'];
    } catch {
      return ['/kg-to-lbs', '/cm-to-inches', '/celsius-to-fahrenheit'];
    }
  });

  const [recents, setRecents] = useState<RecentConversion[]>(() => {
    try {
      const saved = localStorage.getItem(RECENTS_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
    } catch {
      // localStorage disabled or full
    }
  }, [favorites]);

  useEffect(() => {
    try {
      localStorage.setItem(RECENTS_KEY, JSON.stringify(recents));
    } catch {
      // localStorage disabled or full
    }
  }, [recents]);

  const toggleFavorite = (path: string) => {
    setFavorites((prev) =>
      prev.includes(path) ? prev.filter((p) => p !== path) : [...prev, path]
    );
  };

  const isFavorite = (path: string) => favorites.includes(path);

  const addRecent = (item: Omit<RecentConversion, 'id' | 'timestamp'>) => {
    const newItem: RecentConversion = {
      ...item,
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 5)}`,
      timestamp: Date.now()
    };
    setRecents((prev) => [newItem, ...prev.filter((r) => !(r.fromUnitName === item.fromUnitName && r.toUnitName === item.toUnitName))].slice(0, 10));
  };

  const clearRecents = () => {
    setRecents([]);
    try {
      localStorage.removeItem(RECENTS_KEY);
    } catch {
      // ignore
    }
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
    recents,
    addRecent,
    clearRecents
  };
}
