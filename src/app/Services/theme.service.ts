import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private themes: string[] = [
    'Adventure',
    'Romance',
    'Science Fiction',
    'Fantasy',
    'Mystery',
    'Thriller',
    'Historical',
    'Comedy',
    'Drama',
    'Satire',
    'Mythology',
    'Folklore',
    'Cyberpunk',
    'Steampunk',
    'Urban Fantasy',
    'Space Opera',
    'Western',
    'Epic',
    'Noir',
    'Detective',
    'Crime',
    'Political',
    'Philosophical',
    'Literary',
    'War',
    'Spy',
    'Legal',
    'Medical',
    'Sports',
    'Music',
    'Travel',
    'Memoir',
    'Biography',
    'Autobiography',
    'Self-help',
    'Educational',
    'Children',
    'Gothic',
    'Fairy Tale',
    'Coming of Age',
    'Absurdist',
    'Surrealist',
    'Slice of Life',
    'Fantasy Romance',
    'Time Travel',
    'Alternate History',
    'High Fantasy',
    'Low Fantasy',
    'Heroic Fantasy',
    'Sword and Sorcery',
    'Weird Fiction',
    'Historical Romance',
    'Superhero',
    'Anticipation',
    'Clifi',
    'Science Fantasy',
    'Sword and Planet',
    'Space Western',
    'Frontier',
    'Quest',
    'Lost World',
    'Planetary Romance',
    'Future History',
    'Desert',
    'Tropical',
    'Mountain',
    'Snow',
    'Arctic',
    'Jungle',
    'Island',
    'Urban',
    'Rural',
    'Suburban',
    'Road Trip',
    'Seafaring',
    'Aviation',
    'School Life',
    'Work Life',
    'Domestic',
    'Family',
    'Friendship',
  ];

  constructor() {}

  getRandomTheme(): string {
    const randomIndex = Math.floor(Math.random() * this.themes.length);
    return this.themes[randomIndex];
  }
}