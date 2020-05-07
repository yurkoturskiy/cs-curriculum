interface TrieNode {
  keys: Map<string, TrieNode>;
  end: boolean;
  setEnd(): void;
  isEnd(): boolean;
}

class TrieNode implements TrieNode {
  constructor() {
    this.keys = new Map();
    this.end = false;
  }

  setEnd() {
    this.end = true;
  }

  isEnd(): boolean {
    return this.end;
  }
}

interface Trie {
  root: TrieNode;
  add(input: string, node: TrieNode): void;
  isWord(word: string): boolean;
  print(): string[];
}

class Trie implements Trie {
  constructor() {
    this.root = new TrieNode();
  }

  add(input: string, node: TrieNode = this.root): void {
    if (input.length === 0) {
      node.setEnd();
      return;
    } else if (!node.keys.has(input[0])) {
      node.keys.set(input[0], new TrieNode());
      return this.add(input.substr(1), node.keys.get(input[0]));
    } else {
      return this.add(input.substr(1), node.keys.get(input[0]));
    }
  }

  isWord(word: string): boolean {
    let node = this.root;
    while (word.length > 1) {
      if (!node.keys.has(word[0])) return false;
      else {
        node = node.keys.get(word[0]) as TrieNode;
        word = word.substr(1);
      }
    }
    const lastNode = node.keys.get(word);
    const result = lastNode && lastNode.isEnd();
    return !!result;
  }
}

const words = new Trie();
words.add("work");
words.add("world");
console.log(words.isWord("world"));
console.log(words.isWord("worst"));
