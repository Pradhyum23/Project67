export interface CognitiveDistortion {
  emoji?: string;
  label: string;
  slug: string;
  selected?: boolean;
}

const distortions: CognitiveDistortion[] = [
  { emoji: "๐", label: "All or Nothing Thinking", slug: "all-or-nothing" },
  { emoji: "๐ฏโ", label: "Overgeneralization", slug: "overgeneralization" },
  { emoji: "๐ง ", label: "Mind Reading", slug: "mind-reading" },
  { emoji: "๐ฎ", label: "Fortune Telling", slug: "fortune-telling" },
  {
    emoji: "๐",
    label: "Magnification of the Negative",
    slug: "magnification-of-the-negative",
  },
  {
    emoji: "๐",
    label: "Minimization of the Positive",
    slug: "minimization-of-the-positive",
  },
  { emoji: "๐คฏ", label: "Catastrophizing", slug: "catastrophizing" },
  { emoji: "๐ญ", label: "Emotional Reasoning", slug: "emotional-reasoning" },
  { emoji: "โจ", label: "Should Statements", slug: "should-statements" },
  { emoji: "๐ท", label: "Labeling", slug: "labeling" },
  { emoji: "๐", label: "Self-Blaming", slug: "self-blaming" },
  { emoji: "๐ฆนโ", label: "Other-Blaming", slug: "other-blaming" },
].sort((first, second) => {
  const firstLabel = first.label.toUpperCase();
  const secondLabel = second.label.toUpperCase();

  if (firstLabel < secondLabel) {
    return -1;
  }

  if (firstLabel > secondLabel) {
    return 1;
  }

  return 0;
}); // Alphabetical sorting

export default distortions;
