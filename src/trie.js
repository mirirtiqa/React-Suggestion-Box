class TrieNode {
    constructor() {
      this.children = {};
      this.isEndOfWord = false;
    }
  }
  
  class Trie {
    constructor() {
      this.root = new TrieNode();
    }
  
    insert(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          node.children[char] = new TrieNode();
        }
        node = node.children[char];
      }
      node.isEndOfWord = true;
    }
  
    search(word) {
      let node = this.root;
      for (const char of word) {
        if (!node.children[char]) {
          return false; 
        }
        node = node.children[char];
      }
      return node.isEndOfWord; 
    }
    
    getSuggestions(word) {
        
       function getRest(node, currentPrefix) {
      const suggestions = [];
      if (node.isEndOfWord) {
        suggestions.push(currentPrefix);
      }
  
      for (const char in node.children) {
        const childNode = node.children[char];
        const newPrefix = currentPrefix + char;
        suggestions.push(...getRest(childNode, newPrefix));
      }
  
      return suggestions;
    }
        
          let node = this.root;
          for (const char of word) {
            if (!node.children[char]) {
              return []; 
            }
            node = node.children[char];
          }
          console.log(word);
          return getRest(node,word);
  }
  }

 function createTrie(words) {
    const trie = new Trie();
    for (const word of words) {
      trie.insert(word);
    }
    return trie;
  }

  export {createTrie, Trie};