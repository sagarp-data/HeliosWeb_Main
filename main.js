import { Helios, xnet } from "helios-web";

// Zachary Karate Club Network
let nodes = {
  '0': { id: '0', faction: 1, sentence: "I love sunny days." },
  '1': { id: '1', faction: 1, sentence: "The meeting was okay." },
  '2': { id: '2', faction: 1, sentence: "He is always so helpful." },
  '3': { id: '3', faction: 1, sentence: "I had a terrible experience." },
  '4': { id: '4', faction: 1, sentence: "It was an average day." },
  '5': { id: '5', faction: 1, sentence: "I feel great today!" },
  '6': { id: '6', faction: 1, sentence: "She is very rude." },
  '7': { id: '7', faction: 1, sentence: "I'm feeling neutral about this." },
  '8': { id: '8', faction: 2, sentence: "The weather is fine." },
  '9': { id: '9', faction: 2, sentence: "He disappointed me." },
  '10': { id: '10', faction: 1, sentence: "This is the best day ever!" },
  '11': { id: '11', faction: 1, sentence: "I'm neither happy nor sad." },
  '12': { id: '12', faction: 1, sentence: "He is very talented." },
  '13': { id: '13', faction: 1, sentence: "I am not satisfied with the service." },
  '14': { id: '14', faction: 2, sentence: "It's just another Monday." },
  '15': { id: '15', faction: 2, sentence: "I appreciate your help." },
  '16': { id: '16', faction: 1, sentence: "This is a horrible mistake." },
  '17': { id: '17', faction: 1, sentence: "I enjoyed the movie." },
  '18': { id: '18', faction: 2, sentence: "It doesn't matter to me." },
  '19': { id: '19', faction: 1, sentence: "You did a fantastic job!" },
  '20': { id: '20', faction: 2, sentence: "I'm frustrated with the results." },
  '21': { id: '21', faction: 1, sentence: "The food is delicious." },
  '22': { id: '22', faction: 2, sentence: "I'm indifferent to this." },
  '23': { id: '23', faction: 2, sentence: "She always makes me smile." },
  '24': { id: '24', faction: 2, sentence: "The news was shocking." },
  '25': { id: '25', faction: 2, sentence: "I'm content with the outcome." },
  '26': { id: '26', faction: 2, sentence: "This is unacceptable." },
  '27': { id: '27', faction: 2, sentence: "I can't wait for the weekend!" },
  '28': { id: '28', faction: 2, sentence: "The event was poorly organized." },
  '29': { id: '29', faction: 2, sentence: "I'm looking forward to it." },
  '30': { id: '30', faction: 2, sentence: "It was a standard procedure." },
  '31': { id: '31', faction: 2, sentence: "I feel so happy today." },
  '32': { id: '32', faction: 2, sentence: "It wasn't what I expected." },
  '33': { id: '33', faction: 2, sentence: "Everything went as planned." }
};

// Edges are arrays of node ids
let edges = [
  { source: '0', target: '1' },
  { source: '0', target: '2' },
  { source: '0', target: '3' },
  { source: '0', target: '4' },
  { source: '0', target: '5' },
  { source: '0', target: '6' },
  { source: '0', target: '7' },
  { source: '0', target: '8' },
  { source: '0', target: '10' },
  { source: '0', target: '11' },
  { source: '0', target: '12' },
  { source: '0', target: '13' },
  { source: '0', target: '17' },
  { source: '0', target: '19' },
  { source: '0', target: '21' },
  { source: '0', target: '31' },
  { source: '1', target: '2' },
  { source: '1', target: '3' },
  { source: '1', target: '7' },
  { source: '1', target: '13' },
  { source: '1', target: '17' },
  { source: '1', target: '19' },
  { source: '1', target: '21' },
  { source: '1', target: '30' },
  { source: '2', target: '3' },
  { source: '2', target: '7' },
  { source: '2', target: '8' },
  { source: '2', target: '9' },
  { source: '2', target: '13' },
  { source: '2', target: '27' },
  { source: '2', target: '28' },
  { source: '2', target: '32' },
  { source: '3', target: '7' },
  { source: '3', target: '12' },
  { source: '3', target: '13' },
  { source: '4', target: '6' },
  { source: '4', target: '10' },
  { source: '5', target: '6' },
  { source: '5', target: '10' },
  { source: '5', target: '16' },
  { source: '6', target: '16' },
  { source: '8', target: '30' },
  { source: '8', target: '32' },
  { source: '8', target: '33' },
  { source: '9', target: '33' },
  { source: '13', target: '33' },
  { source: '14', target: '32' },
  { source: '14', target: '33' },
  { source: '15', target: '32' },
  { source: '15', target: '33' },
  { source: '18', target: '32' },
  { source: '18', target: '33' },
  { source: '19', target: '33' },
  { source: '20', target: '32' },
  { source: '20', target: '33' },
  { source: '22', target: '32' },
  { source: '22', target: '33' },
  { source: '23', target: '25' },
  { source: '23', target: '27' },
  { source: '23', target: '29' },
  { source: '23', target: '32' },
  { source: '23', target: '33' },
  { source: '24', target: '25' },
  { source: '24', target: '27' },
  { source: '24', target: '31' },
  { source: '25', target: '31' },
  { source: '26', target: '29' },
  { source: '26', target: '33' },
  { source: '27', target: '33' },
  { source: '28', target: '31' },
  { source: '28', target: '33' },
  { source: '29', target: '32' },
  { source: '29', target: '33' },
  { source: '30', target: '32' },
  { source: '30', target: '33' },
  { source: '31', target: '32' },
  { source: '31', target: '33' },
  { source: '32', target: '33' }
];

let color1 = [0.23,0.45,0.68];
let color2 = [0.70,0.78,0.90];

async function fetchSentimentScores(sentences) {
  try {
      const response = await fetch('http://localhost:5000/nlp_nltk_sentiment_bulk', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(sentences)
      });
      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const sentimentScores = await response.json();
      return sentimentScores;
  } catch (error) {
      console.error('Error fetching sentiment scores:', error);
      return {};
  }
}

function updateNodeScoreColor(score) {
  const scoreElement = document.getElementById('node-score');
  let color;

  if (score < 0) {
    color = 'red'; // Negative score
  } else if (score > 0) {
    color = 'green'; // Positive score
  } else {
    color = 'grey'; // Score of 0
  }

  // Update the inner HTML with a span that has the appropriate color class
  scoreElement.innerHTML = `<strong>Sentiment Score:</strong> <span style="color: ${color};">${score}</span>`;
  
}

// Create the Helios instance
let helios = new Helios({
		elementID: "netviz", // ID of the element to render the network in
		nodes: nodes, // Dictionary of nodes 
		edges: edges, // Array of edges
		use2D: false, // Choose between 2D or 3D layouts
	});
  
// Set the callback for the node click event
helios.onNodeClick(async (node) => {
  console.log("The node " + node.id + " was clicked");
  const sentence = { [node.id]: node.sentence };
  const scores = await fetchSentimentScores(sentence);
  const score = scores[node.id];
  //console.log("Sentiment score for node " + node.id + ":", score);
  //alert(`Node ID: ${node.id}\nSentence: ${node.sentence}\nSentiment Score: ${score}`);
  // Update the node details display
  document.getElementById('node-id').innerHTML = `<strong>Node ID:</strong> ${node.id}`;
  document.getElementById('node-sentence').innerHTML = `<strong>Sentence:</strong> ${node.sentence}`;
  document.getElementById('node-score').innerHTML = `<strong>Sentiment Score:</strong> ${score}`;

  updateNodeScoreColor(score);
});

// Sets the background to black
helios.backgroundColor([0.0,0.0,0.0,1.0]);
// Sets global scale for the size of nodes
helios.nodesGlobalSizeScale(0.5);
// Sets edge global opacity
helios.edgesGlobalOpacityScale(0.75);
// Sets edge global width scale
helios.edgesGlobalWidthScale(0.1);
// Set the zoom factor to 20 so the generated network will be close enough
helios.zoomFactor(20);
