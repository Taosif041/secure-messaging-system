// random-story.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private stories: string[] = [
    "A stray cat found solace in a child's embrace, healing wounds unseen. Together, they forged a bond, a silent pact of companionship amid life's chaos.",
    "Rusty swing creaked, memories of laughter echoed in abandoned playgrounds. Ghosts of children past lingered, their joyful shrieks haunting the desolate space.",
    "Old man's wrinkled hands clutched a letter, carrying secrets buried in time. Memories flooded back, a bittersweet reminder of love's enduring power.",
    "Sunflower bloomed, following the sun's journey across the sky. Each petal turned towards light, a symbol of resilience in the face of adversity.",
    "Raindrops whispered secrets to parched earth, igniting life's cycle anew. In their gentle touch, hope sprouted, bringing forth a lush oasis from barren land.",
    "Forgotten diary revealed tales of love lost, ink stained with tears. Each word penned with longing, a testament to a heart once full, now fractured.",
    "Autumn leaves whispered promises of renewal, painting the world in hues of gold. As they cascaded to the ground, they embraced change, embracing the beauty of impermanence.",
    "Abandoned lighthouse guided lost souls home, a beacon in the storm. Its flickering light offered solace to weary travelers, a symbol of safety amidst raging seas.",
    "Whispers of the wind carried tales of distant lands, stirring wanderlust within. Each gust spoke of adventures untold, beckoning the curious to explore beyond horizons.",
    "Shadows danced on cobblestone streets, weaving tales of mystery and intrigue. In the cloak of darkness, secrets lurked, waiting to be unveiled by those daring enough to seek them.",
    "Wilted petals cradled by gentle hands, a silent farewell to fleeting beauty. In their delicate demise, they whispered gratitude for moments cherished amidst life's transience.",
    "Moonlit path beckoned wanderers into the night, guiding souls towards unseen destinations. Under the stars' watchful gaze, they embarked on journeys of self-discovery and enlightenment.",
    "Forgotten melodies lingered in abandoned halls, echoes of pianos once played with passion. In their haunting refrain, memories of joy and sorrow intertwined, resonating with the souls of listeners.",
    "Fireflies danced in the twilight, illuminating the darkness with their ephemeral glow. In their fleeting brilliance, they symbolized the beauty found in fleeting moments of joy and wonder.",
    "Tattered pages held the stories of generations past, inked with the wisdom of ages. As hands turned each fragile leaf, they embarked on a journey through time, exploring the tapestry of human experience.",
    "Morning dew kissed the petals of awakening flowers, a gentle reminder of life's cyclical nature. In their tender embrace, they celebrated the dawn of a new day and the promise of renewal.",
    "Ancient ruins stood as silent witnesses to the passage of time, their weathered stones steeped in history. Amidst crumbling walls, echoes of civilizations past whispered tales of glory and downfall.",
    "Starlit sky stretched infinitely overhead, a canvas painted with celestial wonders. Each twinkling light held the promise of distant worlds, inspiring dreamers to reach for the cosmos.",
    "Windswept dunes shifted with each passing breeze, sculpted by the hand of nature. In their ever-changing form, they embodied the beauty of adaptation and resilience.",
    "Flickering candle cast shadows on weathered walls, illuminating forgotten relics of the past. In their soft glow, relics of bygone eras found new life, preserving memories for generations to come.",
    "In a distant land, a lone traveler wandered in search of lost memories.",
    "Amidst the ruins, whispers of forgotten civilizations echoed through the ages."
  ];

  constructor() { }

  getRandomStory(): string {
    const randomIndex = Math.floor(Math.random() * this.stories.length);
    return this.stories[randomIndex];
  }
}
