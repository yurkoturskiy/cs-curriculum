interface TrieNode {
  keys: object;
  end: boolean;
  setEnd(): void;
  isEnd(): boolean;
}
