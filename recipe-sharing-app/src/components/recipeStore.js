
import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (recipe) => set((state) => ({
    recipes: [...state.recipes, recipe]
  })),
  updateRecipe: (updatedRecipe) => set((state) => ({
    recipes: state.recipes.map((r) =>
      r.id === updatedRecipe.id ? updatedRecipe : r
    )
  })),
  deleteRecipe: (id) => set((state) => ({
    recipes: state.recipes.filter((r) => r.id !== id)
  }))
}));

