import { CORE_CONCEPTS, EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { useState } from "react";

function App() {

  const[selectedTopic, setSelectedTopic] = useState('');
  
  function handleClick(selectButton) {
    setSelectedTopic(selectButton)
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcepts
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcepts {...CORE_CONCEPTS[1]} />
            <CoreConcepts {...CORE_CONCEPTS[2]} />
            <CoreConcepts {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton isSelected={ selectedTopic === 'components'} onSelect={()=> handleClick('components')}>Components</TabButton>
            <TabButton isSelected={ selectedTopic === 'jsx'} onSelect={()=> handleClick('jsx')}>JSX</TabButton>
            <TabButton isSelected={ selectedTopic === 'props'} onSelect={()=> handleClick('props')}>Props</TabButton>
            <TabButton isSelected={ selectedTopic === 'state'} onSelect={()=> handleClick('state')}>State</TabButton>
          </menu>
          {selectedTopic ? <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>
              {EXAMPLES[selectedTopic].code}
              </code>
            </pre>
          </div> : "SELECT A TOPIC"}
          
        </section>
      </main>
    </div>
  );
}

export default App;
