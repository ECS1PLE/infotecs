export interface CocktailStep {
  id: string;
  order: number;
  description: string;
  imageUrl: string | null;
}

export interface CocktailSummary {
  id: string;
  name: string;
  description: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Cocktail extends CocktailSummary {
  steps: CocktailStep[];
}

export interface CocktailStepPayload {
  description: string;
  imageUrl: string | null;
}

export interface CocktailPayload {
  name: string;
  description: string;
  imageUrl: string | null;
  steps: CocktailStepPayload[];
}

export interface UploadResponse {
  url: string;
}
