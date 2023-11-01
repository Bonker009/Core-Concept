import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcpet";
export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Conccepts</h2>
      <ul>
        {CORE_CONCEPTS.map((conceptItem) => (
          <CoreConcept {...conceptItem} />
        ))}
      </ul>
    </section>
  );
}
