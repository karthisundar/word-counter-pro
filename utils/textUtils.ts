export interface TextStats {
  wordCount: number;
  characterCount: number;
  characterCountNoSpaces: number;
  sentenceCount: number;
  paragraphCount: number;
  readingTime: number;
}

export function analyzeText(text: string): TextStats {
  if (!text.trim()) {
    return {
      wordCount: 0,
      characterCount: 0,
      characterCountNoSpaces: 0,
      sentenceCount: 0,
      paragraphCount: 0,
      readingTime: 0,
    };
  }

  // Word count - split by whitespace and filter non-empty strings
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;

  // Character counts
  const characterCount = text.length;
  const characterCountNoSpaces = text.replace(/\s/g, '').length;

  // Sentence count - split by sentence endings and filter non-empty
  const sentences = text.split(/[.!?]+/).filter(sentence => sentence.trim().length > 0);
  const sentenceCount = sentences.length;

  // Paragraph count - split by double line breaks and filter non-empty
  const paragraphs = text.split(/\n\s*\n/).filter(para => para.trim().length > 0);
  const paragraphCount = paragraphs.length;

  // Reading time - average 200 words per minute
  const readingTime = Math.ceil(wordCount / 200);

  return {
    wordCount,
    characterCount,
    characterCountNoSpaces,
    sentenceCount,
    paragraphCount,
    readingTime,
  };
}

export function formatReadingTime(minutes: number): string {
  if (minutes === 0) return '0 min';
  if (minutes === 1) return '1 min';
  return `${minutes} min`;
}