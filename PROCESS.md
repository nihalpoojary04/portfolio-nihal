# Process Documentation

## Architecture Decisions
I chose a **component-based architecture** using React and Vite for the following reasons:
- **Vite**: Ultra-fast build times and hot module replacement, crucial for the "efficiency" requirement.
- **Component Structure**: Separating `Skill`, `Project`, and `Section` components ensures reusability and clean code, aligning with "professional identity" standards.
- **Vanilla CSS**: Used CSS variables (`:root`) and scoped classes to avoid the overhead of a large CSS framework, ensuring a high Lighthouse performance score.

## AI Usage & Prompt Engineering
I utilized the **Gemini 2.0 Flash** model via the Antigravity agent to accelerate development.

### Prompt Engineering Process
1.  **Role Definition**: I instructed the AI to act as a "Senior Frontend Engineer" to ensure code quality met professional standards.
2.  **Context Loading**: I provided the full "Sprint 01 Challenge" text to ground the AI in the specific constraints (90+ performance, mobile-first).
3.  **Iterative Refinement**:
    - *Initial Prompt*: "Generate a portfolio." -> *Refined*: "Generate a React portfolio specifically for Nihal S Poojary using the attached resume data, focusing on dark mode aesthetics and specific 'Proficient' vs 'Familiar' skill separation."
4.  **Constraint Enforcement**: Explicitly requested "No external UI libraries" to ensure I understood every line of code as per the challenge rules.

## Challenges & Solutions
**Challenge**: Ensuring high accessibility (Contrast ratios) on a dark mode theme.
**Solution**: I used a high-contrast color palette, testing foreground text against the dark background to ensure WCAG AA compliance.

**Challenge**: Challenge: Achieving 90+ Lighthouse accessibility score.
**Solution**: Refactored heading structure (h1 → h2 → h3),
added ARIA labels, and improved color contrast to meet WCAG standards.

