const nudges: string[] = [
  "Mending over ending since 2026.",
  "Small steps count, especially when someone's watching.",
  "Your future self is already bragging.",
  "Perfection's overrated. Consistency wins every time.",
  "Conquer the world, one checkmark at a time.",
  "One small checkmark for man, one giant habit for all mankind.",
  "The only thing we have to fear is missing a streak.",
  "Ask not what your habits can do for you, but what you can do for your habits.",
  "rm -rf bad_habits && git commit -m 'new me'",
  "Unverified habits do not deploy to production.",
  "This footer believes in you more than you think.",
  "If a habit falls in the woods, but no one's around to verify it, did it really happen?",
];

const randomNudge = nudges[Math.floor(Math.random() * nudges.length)];

export default function Footer() {
  return (
    <footer className="bg-gray-100 p-5 text-center text-gray-500">
      <p suppressHydrationWarning>{randomNudge}</p>
      <p>&copy; 2026 Nudge Team</p>
    </footer>
  );
}
