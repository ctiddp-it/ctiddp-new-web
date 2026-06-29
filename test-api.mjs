// Deep analysis of content nodes
const API_BASE = 'http://localhost:5000/api';

async function test() {
  try {
    const postRes = await fetch(`${API_BASE}/blog/global-ddp-shipping-a-complete-guide-to-delivered-duty-paid-ddp-shipping`);
    const postJson = await postRes.json();
    const post = postJson.data;
    const nodes = post.content.content;

    console.log('Total nodes:', nodes.length);
    console.log('\n--- Node types breakdown ---');
    const typeCount = {};
    for (const node of nodes) {
      typeCount[node.type] = (typeCount[node.type] || 0) + 1;
    }
    console.log(typeCount);

    console.log('\n--- Nodes with content ---');
    let nodesWithContent = 0;
    let nodesWithoutContent = 0;
    for (const node of nodes) {
      if (node.content && node.content.length > 0) {
        nodesWithContent++;
      } else {
        nodesWithoutContent++;
      }
    }
    console.log('With content:', nodesWithContent);
    console.log('Without content:', nodesWithoutContent);

    console.log('\n--- First 10 nodes (summarized) ---');
    for (let i = 0; i < Math.min(10, nodes.length); i++) {
      const n = nodes[i];
      const hasContent = n.content && n.content.length > 0;
      console.log(`[${i}] type=${n.type}, hasContent=${hasContent}, attrs=${JSON.stringify(n.attrs || {})}`);
      if (hasContent) {
        console.log(`    first child: ${JSON.stringify(n.content[0]).substring(0, 200)}`);
      }
    }

    // Check for textAlign attrs specifically
    console.log('\n--- Nodes with textAlign attr ---');
    let textAlignCount = 0;
    for (const node of nodes) {
      if (node.attrs && node.attrs.textAlign !== undefined) {
        textAlignCount++;
      }
    }
    console.log('Nodes with textAlign:', textAlignCount);

    // Print some paragraph nodes with content
    console.log('\n--- Sample paragraph with content ---');
    const samplePara = nodes.find(n => n.type === 'paragraph' && n.content && n.content.length > 0);
    if (samplePara) {
      console.log(JSON.stringify(samplePara).substring(0, 500));
    } else {
      console.log('NO PARAGRAPH WITH CONTENT FOUND!');
    }

    // Print sample heading
    console.log('\n--- Sample heading ---');
    const sampleHead = nodes.find(n => n.type === 'heading');
    if (sampleHead) {
      console.log(JSON.stringify(sampleHead).substring(0, 500));
    }
  } catch (err) {
    console.error('Error:', err.message);
  }
}

test();
