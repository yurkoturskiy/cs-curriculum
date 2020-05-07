interface TrieNode {
  keys: object;
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

  isEnd() {
    return this.end;
  }
}
